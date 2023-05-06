$(document).ready(function(){      
    const buscador=document.querySelector('#buscador');
    const boton=document.querySelector('#botonBus');
    const resultado=document.querySelector('#div_conceptos');
    
    const elementos=[
        {concepto:'a1',descripcion:'123'},
        {concepto:'a2',descripcion:'hola'},
        {concepto:'a3',descripcion:'h'}
    ]
    const filtrar=()=>{
        //console.log(buscador.value);
        resultado.innerHTML=''
        const texto=buscador.value.toLowerCase();//convertir a minuscula
        for(let elemento of elementos)
        {
            let concepto=elemento.concepto.toLowerCase();
            let descripcion=elemento.descripcion.toLowerCase();
            if(concepto.indexOf(texto)!== -1 || descripcion.indexOf(texto)!==-1)
            {
                resultado.innerHTML+=`
                <div class="row ">
        <div class=" d-flex align-items-stretch biblio" data-aos="zoom-in" data-aos-delay="100">
          <div class="icon-box col-xl-12 col-md-12">
            <div class="icon"><i class="bi bi-currency-dollar"></i></div>
            <h4><a href="">${elemento.concepto}</a></h4>
            <p><em>“La evaluación financiera describe los métodos actuales de evaluación que toman en cuenta el valor del dinero a través del tiempo (como la tasa interna de rendimiento y el valor presente neto), anota sus limitaciones de aplicación y los compara con métodos contables de evaluación que no toman en cuenta el valor del dinero en el tiempo, y en ambos muestra su aplicación práctica. La decisión de inversión casi siempre recae en la evaluación financiera” </em>(Angulo, 2016, p. 48).</p>
          </div>
        </div>
      </div>
                `
            }
        }

        if(resultado.innerHTML==='')
        {
            resultado.innerHTML+=`
            <li>Sin resultados...</li>
            `
        }
    }

    boton.addEventListener('click',filtrar)
    buscador.addEventListener('keyup',filtrar)

    //filtrar();//opcional(es para que aparezcan todos los conceptos al principio)
});