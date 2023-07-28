const { MongoClient } = require('mongodb');

// URL de conexão do MongoDB
const url = 'mongodb+srv://GiuseppePallazini:pepepepito123@cluster0.ahhdsch.mongodb.net/?retryWrites=true&w=majority';

// Conectar ao banco de dados
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log('Erro ao conectar ao MongoDB:', err);
    return;
  }
  console.log('Conexão estabelecida com o MongoDB');

  // Faça suas operações de leitura e escrita aqui

  // Feche a conexão quando terminar
  client.close();
});