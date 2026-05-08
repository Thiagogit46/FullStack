// inclui o modulo http
var http = require('http');
// inclui o módulo express
var express = require('express') ;
require('colors');

//cria a variável app, pela qual acessaremos
// os métodos / funções existentes no framework
express
var app = express();

// método use() utilizado para definir em qual
// pasta estará o conteúdo estático
app.use(express.static('./public'));

// cria o servidor
var server = http.createServer(app);

// define o número da porta que o servidor ouvirá
server.listen(80);

// mensagem exibida no console para debug
console. log("servidor rodando ... ".rainbow);
// console.log('http://localhost80/home.html')
// console.log('http://localhost80/Atividade1/index.html')
// console.log('http://localhost80/Aula3/index.html')
// console.log('http://localhost80/Aula3/copy.html')
// console.log('http://localhost80/Aula8/arquivo.html')
// console.log('http://localhost80/Aula1/index.html')
// console.log('http://localhost80/canvas/canvas.html')
// console.log('http://localhost80/canvas/canvas2.html')
// console.log('http://localhost80/correio/correio.html')
// console.log('http://localhost80/Tabela/guess.html')
// console.log('http://localhost80/Tabela/tabela.html')
