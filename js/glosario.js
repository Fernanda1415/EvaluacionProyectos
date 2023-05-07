$(document).ready(function(){      
    const buscador=document.querySelector('#buscador');
    const boton=document.querySelector('#botonBus');
    const resultado=document.querySelector('#div_conceptos');
    
    const elementos=[
        {
            concepto:'Evaluación financiera',
            descripcion:'“La evaluación financiera describe los métodos actuales de evaluación que toman en cuenta el valor del dinero a través del tiempo (como la tasa interna de rendimiento y el valor presente neto), anota sus limitaciones de aplicación y los compara con métodos contables de evaluación que no toman en cuenta el valor del dinero en el tiempo, y en ambos muestra su aplicación práctica. La decisión de inversión casi siempre recae en la evaluación financiera” (Angulo, 2016, p. 48).',
            codigo:`
            <div class="row ">
                <div class=" d-flex align-items-stretch biblio" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon-box col-xl-12 col-md-12">
                        <div class="icon"><i class="bi bi-currency-dollar"></i></div>
                        <h4><a href="">Evaluación financiera</a></h4>   
                        <p><em>“La evaluación financiera describe los métodos actuales de evaluación que toman en cuenta el valor del dinero a través del tiempo (como la tasa interna de rendimiento y el valor presente neto), anota sus limitaciones de aplicación y los compara con métodos contables de evaluación que no toman en cuenta el valor del dinero en el tiempo, y en ambos muestra su aplicación práctica. La decisión de inversión casi siempre recae en la evaluación financiera” </em>(Angulo, 2016, p. 48).</p>    
                    </div>
                </div>
            </div>`
        },
        {
            concepto:'Flujo neto de efectivo (FNE) o flujo de caja',
            descripcion:'Informe que resume las entradas y salidas de dinero a lo largo de la vida útil del proyecto, y que permite determinar la rentabilidad de la inversión (Angulo, 2016, p. 295).',
            codigo:`
            <div class="row">
              <div class=" d-flex align-items-stretch biblio" data-aos="zoom-in" data-aos-delay="200">
                  <div class="icon-box col-xl-12 col-md-12">
                      <div class="icon"><i class="bx bx-file"></i></div>
                      <h4><a href="">Flujo neto de efectivo (FNE) o flujo de caja</a></h4>
                      <p>Informe que resume las entradas y salidas de dinero a lo largo de la vida útil del proyecto, y que permite determinar la rentabilidad de la inversión (Angulo, 2016, p. 295).</p>
                  </div>
              </div>
            </div>`
        },
        {
            concepto:'Horizonte de evaluación de un proyecto ',
            descripcion:'“Es el período durante el cual se pronosticarán los flujos de caja para medir la rentabilidad de un proyecto”. La vida útil de un proyecto no debe confundirse con el horizonte de evaluación, aunque pueden coincidir (Angulo, 2016, p. 295).',
            codigo:`
            <div class="row">
              <div class=" d-flex align-items-stretch biblio" data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-box col-xl-12 col-md-12">
                  <div class="icon"><i class="bx bx-file"></i></div>
                  <h4><a href="">Horizonte de evaluación de un proyecto</a></h4>
                  <p><em>“Es el período durante el cual se pronosticarán los flujos de caja para medir la rentabilidad de un proyecto”</em>. La vida útil de un proyecto no debe confundirse con el horizonte de evaluación, aunque pueden coincidir (Angulo, 2016, p. 295).</p>
                </div>
              </div>
            </div>`
        },
        {
            concepto:'Índice de rentabilidad (IR) o razón de beneficio/costo',
            descripcion:'El método del índice de rentabilidad o también conocido como razón de beneficio/costo permitirá calcular la ganancia o pérdida neta que tiene una inversión durante el tiempo de vida del proyecto, el resultado se expresa como un porcentaje del costo inicial de la inversión. Las ganancias o beneficios de la inversión se pueden definir como la razón que hay entre la suma de los valores presentes de los flujos netos de efectivo (FNE) de un proyecto, descontados con la tasa de costo de capital (K), y la inversión inicial requerida (Alemán, 2003). El IR se puede interpretar como el valor presente o la rentabilidad que se obtiene por cada unidad monetaria invertida en el proyecto. Criterios de decisión: IR>1	El proyecto se acepta, ya que los beneficios o ganancias que genera son superiores a su costo. IR<1	El proyecto se rechaza, porque los beneficios que genera son inferiores a su costo; es decir, habría pérdidas. IR=1	Es indiferente aceptar o rechazar el proyecto, porque sus beneficios son exactamente iguales a su costo; es decir, no hay pérdidas ni ganancias',
            codigo:`jpljk`
        },
        {
            concepto:'Inversión',
            descripcion:'“Es el empleo de un conjunto de recursos para producir un bien o servicio y generar una utilidad” (Sabino, 2015, citado en Angulo, 2016, p. 18). La inversión implica “emplear recursos hoy: se renuncia al uso inmediato de un recurso disponible con la esperanza de recuperarlo en un tiempo determinado con una utilidad adicional. En pocas palabras se renuncia a un beneficio inmediato por uno futuro” (Angulo, 2016, p. 18).',
            codigo:``
        },
        {
            concepto:'Métodos de evaluación financiera para proyectos de inversión',
            descripcion:'Los métodos para evaluar proyectos de inversión son una herramienta financiera que permiten determinar la rentabilidad económica que generaría el proyecto durante su tiempo de vida. Existen los métodos que toman en cuenta el valor del dinero en el tiempo y los que no lo toman en cuenta.',
            codigo:``
        },
        {
            concepto:'Período de recuperación de la inversión (PRI)',
            descripcion:'Método de evaluación de proyectos que permite estimar el tiempo (en años, meses y días) que se requieren para recuperar la inversión inicial de un proyecto. Únicamente se tiene que sumar los flujos netos de efectivo del proyecto hasta recuperar la inversión inicial (Alemán, 2003).',
            codigo:``
        },
        {
            concepto:'Presupuesto de inversión',
            descripcion:'El presupuesto de inversión es una estimación en términos monetarios de lo que se necesita para arrancar un proyecto. Dicho presupuesto se compone de tres partes (Nacional Financiera, 1998; Angulo, 2016): a.	Inversión diferida. Se refiere a los desembolsos que se harán por trámites, permisos, gastos notariales y licencias para la constitución legal de la empresa; desembolsos por pago de renta, compra de artículos de oficina y en sí de los gastos preoperatorios. Entendiéndose por estos todos aquellos gastos que se realizan antes de que se lleve a cabo la operación del negocio. b.	Inversión fija. Corresponde a los desembolsos que se hacen para equipar la empresa (propiedades, planta y equipo). La cantidad y el tipo de activos fijos que se adquirirán estarán en función del tipo de proyecto y de un plan de producción. c.	Capital de trabajo. Constituido por los activos circulantes de la empresa.',
            codigo:``
        },
        {
            concepto:'Proceso de preparación y evaluación de proyectos',
            descripcion:'El proceso de preparación y evaluación de proyectos incluye los siguientes estudios: de mercado, técnico, administrativo o de organización y financiero (Baca, 2016; Sapag, 2007; Angulo, 2016).',
            codigo:``
        },
        {
            concepto:'Proyecto',
            descripcion:'“Proyecto es un esfuerzo temporal que se lleva a cabo para obtener un producto, servicio o resultado único” (Guía del PMBOK, 2017, p. 4). Esta definición es bastante inclusiva podría abarcar, por ejemplo, un proyecto escolar, un proyecto de vida, la construcción de una vivienda, el lanzamiento de un satélite, así como la creación de una empresa, por mencionar algunos. “Un proyecto es la búsqueda de una solución inteligente al planteamiento de un problema, la cual tiende a resolver una necesidad humana” (Baca, 2016, p. 2).',
            codigo:``
        },
        {
            concepto:'Proyecto de inversión',
            descripcion:'“Es un plan que, si se le asigna determinado monto de capital y se le proporcionan insumos de varios tipos, producirá un bien o servicio, útil para la sociedad” (Baca, 2016, p. 2). “Una propuesta (un documento con varios planes o estudios) de inversión para instalaciones destinadas a proporcionar bienes o servicios (Angulo, 2016, p. 19). ',
            codigo:``
        },
        {
            concepto:'Rendimiento anual promedio (RAP) o tasa contable del rendimiento (TCR)',
            descripcion:'Método de evaluación de proyectos que permite calcular la razón que existe entre los flujos netos de efectivo promedio del proyecto y la inversión inicial requerida; es decir: Criterios de decisión: Si el cálculo del rendimiento anual promedio es igual o mayor a la tasa de rendimiento anual mínima establecida por el inversionista el proyecto podría aceptarse, de lo contrario se rechazaría (Alemán, 2003).',
            codigo:``
        },
        {
            concepto:'Tasa interna de rendimiento (TIR)',
            descripcion:'El método de la TIR está estrechamente relacionado con el método del VPN, ya que es la tasa de descuento que hace que la suma del valor presente de los flujos netos de efectivo generados por un proyecto sea igual a la inversión inicial. Es decir, es la tasa que induce a que el VPN de un proyecto sea igual a cero. Se dice que la TIR es una tasa de rendimiento interna ya que depende solamente de los flujos de efectivo que genera el proyecto (Baca, 2017; Angulo, 2016; Alemán, 2003). Su fórmula es: Donde: TIR = Tasa interna de rendimiento VPN = Valor presente neto FNE = Flujo neto de efectivo Io = Inversión inicial requerida n = Número de periodos de vida del proyecto (tiempo de vida) Criterios de decisión: TIR > K	El proyecto se acepta porque genera flujos de efectivo superiores a los que se requieren para financiarlo, por tanto incrementa el patrimonio de los accionistas. TIR < K	El proyecto se rechaza porque los flujos de efectivo que genera son inferiores a los que se requieren para financiarlo; por lo tanto, disminuye el patrimonio de los inversionistas. TIR = K	Es indiferente aceptar o rechazar el proyecto. El rendimiento genera compensa exactamente al costo de capital.',
            codigo:``
        },
        {
            concepto:'Valor presente neto (VPN) o valor actual neto (VAN)',
            descripcion:'Método que toma en cuenta el valor del dinero en el tiempo. Se define como el valor de los flujos netos de efectivo proyectados descontados al presente menos la inversión inicial. Es un método financiero utilizado para evaluar la rentabilidad de la inversión inicial de un proyecto. El cálculo depende de la tasa mínima aceptable de rendimiento (TMAR) o también conocida como costo de capital (K) que se establezca para el proyecto en cuestión. La fórmula para calcular el VPN o VAN es a través de un quebrado o razón aritmética en donde el numerador de dicha razón es dinero (flujos netos de efectivo descontados al presente) y el denominador es la tasa de interés a la cual se ajusta el proyecto (TMAR), a este resultado se le restara el valor de la inversión inicial (Io). (Baca, 2017; Angulo, 2016; Alemán, 2003). Criterios de decisión: VPN > 0	El proyecto se acepta porque crea valor para la empresa (genera ganancia). VPN <0	El proyecto se rechaza porque no crea valor para la empresa (genera pérdidas). VPN=0	Es indiferente aceptar o rechazar el proyecto porque no crea ni destruye valor para la empresa.',
            codigo:``
        },
        {
            concepto:'Vida útil del proyecto',
            descripcion:'“La vida útil de un proyecto se asocia con el tiempo durante el cual se espera recibir beneficios o con el plazo en el que se estima subsistirán los problemas que se busca resolver. La vida útil no debe confundirse con el horizonte de evaluación, aunque pueden coincidir” (Angulo, 2016, p. 295).',
            codigo:``
        },
        {
            concepto:'',
            descripcion:'',
            codigo:``
        },
    ]
    const filtrar=()=>{
        //console.log(buscador.value);
        resultado.innerHTML='';
        const texto=buscador.value.toLowerCase();//convertir a minuscula
        for(let elemento of elementos)
        {
            let concepto=elemento.concepto.toLowerCase();
            let descripcion=elemento.descripcion.toLowerCase();
            if(concepto.indexOf(texto)!== -1 || descripcion.indexOf(texto)!==-1)
            {
                resultado.innerHTML+=elemento.codigo
    
            }
            
        }


        if(resultado.innerHTML==='')
        {
            resultado.innerHTML+=`
            <div class="row">
                <div class=" d-flex align-items-stretch biblio" data-aos="zoom-in" data-aos-delay="100">
                  <div class="icon-box col-xl-12 col-md-12">

                    <h3 style="text-align: center;" ><a href="">Sin resultados...</a></h3>
                  </div>
                </div>
              </div>
            </div>
            `
        }
    }

    boton.addEventListener('click',filtrar)
    buscador.addEventListener('keyup',filtrar)

    //filtrar();//opcional(es para que aparezcan todos los conceptos al principio)
});