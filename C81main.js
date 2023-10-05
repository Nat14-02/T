var x,y;
canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
var color = "purple";
width=4;
var anchop= canvas.width;
var nuevoanchop= canvas.width-100;
var nuevaltura= canvas.height-300;
if(anchop < 992)
 { 
   document.getElementById("canvas").width = nuevoanchop; 
   document.getElementById("canvas").height = nuevaltura; 
   document.body.style.overflow = "hidden"; }
canvas.addEventListener("touchstart", my_touchstart);
canvas.addEventListener("touchmove", my_touchmove);

 function my_touchstart(e) { //obtener color del cuadro de entrada //inicio de la actividad adicional 
    color = document.getElementById("color").value; 
    width = document.getElementById("Ancho").value; 
    console.log(color); //final de la actividad adicional
    x = e.touches[0].clientX - canvas.offsetLeft; 
   y = e.touches[0].clientY - canvas.offsetTop;
    
   }
   function my_touchmove(e){
      mouse_x = e.touches[0].clientX - canvas.offsetLeft; 
      mouse_y = e.touches[0].clientY - canvas.offsetTop; console.log("X = " + mouse_x + " ,Y = " + mouse_y); 
     ctx.beginPath(); 
         ctx.strokeStyle = color;
          ctx.lineWidth = width; 
          console.log ("Última posición de las coordenadas xey = "); 
          console.log("x = " + x + "y = " + y); 
          ctx.moveTo(x, y); 
          console.log(" Posición actual de x e y coordenadas = "); 
          console.log("x = " + mouse_x + "y = " + mouse_y);
           ctx.lineTo(mouse_x, mouse_y);
            ctx.stroke(); 
       x= mouse_x;
        y=mouse_y;
   }
      function borrar() {
         ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     }
  