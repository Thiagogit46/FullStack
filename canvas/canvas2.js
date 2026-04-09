let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.moveTo(0,0);
ctx.fillRect(0,0,100,100);
ctx.lineTo(400,400)
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.moveTo(775,0);
ctx.fillRect(675,0,100,100);
ctx.lineTo(400,400)
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(0,650,75,150);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(75,725,75,150);
ctx.fill();
ctx.stroke();
ctx.closePath();




ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(725,650,100,150);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(650,725,75,150);
ctx.fill();
ctx.stroke();
ctx.closePath();
 
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'lightblue';
ctx.strokeStyle = 'lightblue';
ctx.fillRect(0,300,75,200);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'lightblue';
ctx.strokeStyle = 'lightblue';
ctx.fillRect(725,350,75,100);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(320,400,80,80);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'lightblue';
ctx.strokeStyle = 'green';
ctx.arc(400,800,100,1.0*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();



ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(200,600,30,2.0*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(600,600,30,2.0*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();




ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.moveTo(0,400);
ctx.lineTo(800,400)
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.moveTo(400,700);
ctx.lineTo(400,400)
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'lightblue';
ctx.strokeStyle = 'green';
ctx.arc(400,400,150,1.0*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'lightblue';
ctx.strokeStyle = 'green';
ctx.arc(400,800,150,1.5*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'lightblue';
ctx.strokeStyle = 'green';
ctx.arc(400,800,200,1*Math.PI,1.5*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'lightblue';
ctx.strokeStyle = 'green';
ctx.arc(400,400,200,1*Math.PI,1.25*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'lightblue';
ctx.strokeStyle = 'green';
ctx.arc(400,400,200,1.75*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'lightblue';
ctx.strokeStyle = 'green';
ctx.arc(400,300,30,2.0*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.font = "40px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",400,150);
ctx.strokeText("Canvas",400,150)
ctx.closePath();
