let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// //ctx.beginPath();
// ctx.lineWidth = 2; // grossura da linha 
// ctx.fillStyle = 'blue'; // cor do conteudo preenchimento
// ctx.strokeStyle = 'red'; // cor da borda 
// ctx.fillRect(10,10,50,50); // (conteudo) primeiros numeros coordenadas x,y do ponto esquerdo - dois segundos tamanho dele 
// ctx.strokeRect(10,10,50,50);
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'red';
// ctx.moveTo(200,150);
// ctx.lineTo(60,10); // linha 
// ctx.lineTo(60,250); // linha 
// ctx.lineTo(200,250); // linha
// ctx.lineTo(200,150); // linha
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'red';
// ctx.moveTo(200,200)
// ctx.arc(200,200,50,0*Math.PI,0.25*Math.PI);// primeiro - x , segundo - y, terceiro - raio , quarto, angulo I , quinto - angulo F
// // diferenca do angulo inicial e final = pi radiano  que será pintado
// ctx.lineTo(200,200)
// ctx.fill();
// ctx.stroke();

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'red';
// ctx.font = "90px Arial"
// ctx.textAlign = "center";
// ctx.fillText("Olá",200,350);
// ctx.strokeText("Olá",200,350)
// ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(300,300,200,200);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'gray';
ctx.strokeStyle = 'gray';
ctx.fillRect(0,500,800,300);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#e76f51';
ctx.strokeStyle = '#e76f51';
ctx.moveTo(300,300);
ctx.lineTo(400,200);
ctx.lineTo(500,300);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#5dbbff';
ctx.strokeStyle = '#5dbbff';
ctx.fillRect(325,350,50,50)
ctx.fill();
ctx.stroke();
ctx.closePath();
