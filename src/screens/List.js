import React from 'react'
import { Text, TouchableOpacity, View, FlatList, Image, PanResponder } from 'react-native'
import md5 from 'js-md5'

const PUBLIC_KEY = 'af4b4566925ba7ba9e73e60273ee76b5'
const PRIVATE_KEY = '8dfb2ce4452460797b5343b1ceec39a09528f86f'

const List = ({navigation}) => {

    const [data, setData] = React.useState([])

    React.useEffect(async()=>{
       const timestamp = Number(new Date())
       const hash = md5.create()
       hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
       
       try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        const responseJson = await response.json()
        
        setData(responseJson.data.results)
       } catch(e) {
           console.log(e)
       }
    }, [])

    return (
        <FlatList 
            data={data}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Details', {hero: item})}
                        style={{
                            flexDirection: 'row',
                            padding: 10,
                            alignItems: 'center'
                        }}                       
                    >
                         <Image
                            style={{height: 50, width: 50, borderRadius: 25}}
                            source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
                        />
                        <Text style={{marginLeft:10}}>{item.name}</Text>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export default List

