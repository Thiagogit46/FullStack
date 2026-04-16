///var meuObj= {
   // /idade:5,
    ///altura:1.75,
    ///imprimeIdade: function(){
      ///  alert("minha idade é " + this.idade)
    ///}
///}'''


let canvas=document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let direcao=1
let retangulo = {


    x: 20,
    y: 30,
    altura: 50,
    largura: 50,
    cor: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }

}
let retangulo2 = {


    x: 20,
    y: 30,
    altura: 50,
    largura: 50,
    cor: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }

}

var elemento = {
    x: 50,
    y: 200,
    raio: 50,
    cor: "brown",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill()
        ctx.closePath();
    }
}

let bola = {
    x: 50,
    y: 100,
    raio: 20,
    img: new Image(),
    desenha: function(){
        this.img.src = 'bola.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}
//retangulo.desenha();

function animar(){
    ctx.clearRect(0,0,800,800);
    if (retangulo.x==800){
        direcao=-1
    }
    if (retangulo.x==0){
        direcao=1
    }
    if (retangulo2.altura==800){
        direcao=-1
    }
    if (retangulo2.altura==0){
        direcao=1
    }
    retangulo.x=retangulo.x+direcao;
    retangulo2.altura=retangulo2.altura+direcao
    retangulo.desenha();
    retangulo2.desenha();
    elemento.desenha();
    bola.desenha();
    requestAnimationFrame(animar);
    
}

animar();



document.addEventListener('keydown',function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp')   {elemento.y = elemento.y-1}  
    if(tecla == 'ArrowDown') {elemento.y = elemento.y+1}  
    if(tecla == 'ArrowLeft') {elemento.x = elemento.x-1}  
    if(tecla == 'ArrowRight'){elemento.x = elemento.x+1}  
})




document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    if(x_mouse>0+bola.raio && x_mouse<850-bola.raio && y_mouse>0+bola.raio && y_mouse<850-bola.raio){
        bola.x = x_mouse;
        bola.y = y_mouse;
    }
    else{
        bola.x =  bola.x;
        bola.y =  bola.y;
    }
})

