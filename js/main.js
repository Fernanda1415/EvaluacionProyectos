$(document).ready(function(){
    var ancho1=screen.width
    if(ancho1>991)
    {    
    } 
    window.addEventListener("resize", function()
    {
        //obtener ancho de la ventana
        var ancho=window.innerWidth;
        if(ancho>991)
        {
            var nav=document.getElementById('imgIPN')
            nav.innerHTML='<img src="https://evaluacionproyectos-69fc0805d101.herokuapp.com/assets/img/logo-ipn-blanco.png" width="50" height="70" class="rounded float-start">'
             
            nav=document.getElementById('imgESCOM')
            nav.innerHTML='<img src="https://evaluacionproyectos-69fc0805d101.herokuapp.com/assets/img/logoESCOMBlanco.png" width="70" height="65" class="rounded float-end"></a>'
            
            nav=document.getElementById('logoCasa')
            nav.style.color='rgb(255, 255, 255)'
        }
    });
  })