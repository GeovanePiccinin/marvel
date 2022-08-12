# marvel
App consumindo api da marvel

Lista de comandos usados para a criação do projeto e instalação das dependências:

//cria o projeto com o Expo:
expo init rn-marvel 

//instalando as dependências para navegação:
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack

//dependência para fazer o hash necessário para consumir a API:
npm install js-md5 --save

//URL para consumo da API (alterar com os dados particulares de chave pública obtida na API Marvel)
const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
