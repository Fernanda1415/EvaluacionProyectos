$(document).ready(function(){      
    
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    
      $('#formDatos').on('submit',function(event){
        if (!event.isDefaultPrevented()) {//si el submit es valido
            // everything looks good!
            
            event.preventDefault();
            console.log('correcto');
            //console.log(document.querySelector("#aniosProyecto").value);
            /////////////////////////////////////////////
            var aniosProyecto=document.querySelector('#aniosProyecto').value;
            var limiteProd=document.querySelector("#limiteProd").value;
            var precioUnidadTerceros=document.querySelector("#precioUnidadTerceros").value;
            var tasaMin=document.querySelector("#tasaMin").value;
            var unidadesVend=document.querySelector("#unidadesVend").value;
            var tasaAnualUni=document.querySelector("#tasaAnualUni").value;
            var precioUnidad=document.querySelector("#precioUnidad").value;
            var tasaAnualPrecio=document.querySelector("#tasaAnualPrecio").value;
            var gastosAdmUni=document.querySelector("#gastosAdmUni").value;
            var incrementoAnualGastAdm =document.querySelector("#incrementoAnualGastAdm").value;
            var gastosVentUnidad=document.querySelector("#gastosVentUnidad").value;
            var incrementoAnualGastVenta=document.querySelector("#incrementoAnualGastVenta").value;
            var costoA=document.querySelector("#costoA").value;
            var incrementoCostoAnualA=document.querySelector("#incrementoCostoAnualA").value;
            var costoB=document.querySelector("#costoB").value;
            var incrementoCostoAnualB=document.querySelector("#incrementoCostoAnualB").value;
            var costoMateriales=document.querySelector("#costoMateriales").value;
            var incrementoCostoMateriales=document.querySelector("#incrementoCostoMateriales").value;
            var costoManoObra=document.querySelector("#costoManoObra").value;
            var incrementoCostoManoObra=document.querySelector("#incrementoCostoManoObra").value;
            var costoAnualMantEqu=document.querySelector("#costoAnualMantEqu").value;
            var incrementoCostoAnualMantEqu=document.querySelector("#incrementoCostoAnualMantEqu").value;
            var valorTerreno=document.querySelector("#valorTerreno").value;
            var valorEdificio=document.querySelector("#valorEdificio").value;
            var valorRecEdi=document.querySelector("#valorRecEdi").value;
            var vidaEdi=document.querySelector("#vidaEdi").value;
            var valorEqui=document.querySelector("#valorEqui").value;
            var valorRecEqu=document.querySelector("#valorRecEqu").value;
            var vidaEqu=document.querySelector("#vidaEqu").value;
            var capTrabajo=document.querySelector("#capTrabajo").value;
            /////////////////////////////////////////////
            var unidadesporanio=[];
            var precioporanio=[];
            var gastoventaanio=[];
            var gastoadminanio=[];
            var costomateriaAanio=[];
            var totalcostomateriaAanio=[];
            var costomateriaBanio=[];
            var totalcostomateriaBanio=[];
            var costomaterialesanio=[];
            var totalcostomateriales=[];
            var costomanoobraanio=[];
            var totalcostomanoobraanio=[];
            var costomantenimientoequipoanio=[];
            var totalcostoproduccion=[];
            ////////////////////////////////////////////
            var codigo='';
            //////////////////////////////////////////////
            /*COSTOS Y GASTOS */
            codigo+='<table class="table table-bordered"><thead class="table-dark"><tr><th scope="col">Años</th>';
            for(var i=1;i<=aniosProyecto;i++)
            {
                codigo+='<th scope="col" class="text-center">'+i+'</th>';
            };
            codigo+='</tr></thead><tbody>';
            
            codigo+='<tr><td>Unidades</td>';
            unidadesporanio[0]=unidadesVend;
            codigo+='<td>'+parseFloat(unidadesporanio[0]).toFixed(2)+'</td>';
            for (let i = 1; i < aniosProyecto; i++) 
            {
                unidadesporanio[i]=unidadesporanio[i-1]*(1+parseFloat(tasaAnualUni/100));
                codigo+='<td>'+parseFloat(unidadesporanio[i]).toFixed(2)+'</td>';
            }
            codigo+='</tr>';

            codigo+='<tr><td>Precio</td>';
            precioporanio[0]=precioUnidad;
            codigo+='<td class="text-end">$'+parseFloat(precioporanio[0]).toFixed(2)+'</td>';
            for (let i = 1; i < aniosProyecto; i++) 
            {
                precioporanio[i]=precioporanio[i-1]*(1+parseFloat(tasaAnualPrecio/100));
                codigo+='<td class="text-end">$'+parseFloat(precioporanio[i]).toFixed(2)+'</td>';
            }

            codigo+='</tr>';

            codigo+='<tr><td>Gastos de venta</td>';
            
            gastoventaanio[0]=gastosVentUnidad;
            codigo+='<td class="text-end">$'+parseFloat(gastoventaanio[0]).toFixed(2)+'</td>';
            for (let i = 1; i < aniosProyecto; i++) {
            gastoventaanio[i]=gastoventaanio[i-1]*(1+parseFloat(incrementoAnualGastVenta/100));
            codigo+='<td class="text-end">$'+parseFloat(gastoventaanio[i]).toFixed(2)+'</td>';
            }
            codigo+='</tr>';

            codigo+='<tr><td>Gastos de administración</td>';
            gastoadminanio[0]=gastosAdmUni;
            codigo+='<td class="text-end">$'+parseFloat(gastoadminanio[0]).toFixed(2)+'</td>';
            for (let i = 1; i < aniosProyecto; i++) 
            {
                gastoadminanio[i]=gastoadminanio[i-1]*(1+parseFloat(incrementoAnualGastAdm/100));
              codigo+='<td class="text-end">$'+parseFloat(gastoadminanio[i]).toFixed(2)+'</td>';
            }

            codigo+='</tr>';
            codigo+='</tbody></table>';
            document.getElementById("divGastos").innerHTML=codigo;
            //////////////////////////////////////////////
            /*DEPRECIACION */
            codigo='';
            codigo+='<table class="table table-bordered">';
            codigo+='<tr><td>Depreciación del edificio</td>';
            depreedif=(parseFloat(valorEdificio)-parseFloat(valorRecEdi))/parseFloat(vidaEdi)
            codigo+='<td class="text-end">$'+parseFloat(depreedif).toFixed(2)+"</td>"
            codigo+="</tr>"

            codigo+="<tr>"
            depreequi=(parseFloat(valorEqui)-parseFloat(valorRecEqu))/parseFloat(vidaEqu)
            codigo+="<td>Depreciación de equipo</td>"
            codigo+='<td class="text-end">$'+parseFloat(depreequi).toFixed(2)+"</td>"
            codigo+="</tr>"

            codigo+="<tr>"
            totalDepreciacion=parseFloat(depreedif)+parseFloat(depreequi);
            codigo+="<th>Total de la depreciación</th>"
            codigo+='<th class="text-end">$'+parseFloat(totalDepreciacion).toFixed(2)+"</th>"
            codigo+="</tr>"

            codigo+='</tbody></table>';
            document.getElementById("divDepreciacion").innerHTML=codigo;
            //////////////////////////////////////////////
            /*GASTOS DE PRODUCCION */
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><tr><th scope="col">Años</th>';
            for (var i = 1; i <=aniosProyecto; i++) {
              codigo+='<th scope="col">'+i+'</th>'
            };
            codigo+="</tr></thead><tbody>"
            codigo+="<tr>"
          
            codigo+="<td>Costos de materia prima A</td>"
            costomateriaAanio[0]=costoA;
            codigo+='<td class="text-end">$'+parseFloat(costomateriaAanio[0]).toFixed(2)+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              costomateriaAanio[i]=costomateriaAanio[i-1]*(1+parseFloat(incrementoCostoAnualA/100));
              codigo+='<td class="text-end">$'+parseFloat(costomateriaAanio[i]).toFixed(2)+"</td>"
            }
            codigo+="</tr>"
          
            codigo+="<tr>"
            codigo+="<td>Total de costos de materia prima A</td>"
            totalcostomateriaAanio[0]=parseFloat(unidadesporanio[0])*parseFloat(costomateriaAanio[0]);
            codigo+='<td class="text-end">$'+parseFloat(totalcostomateriaAanio[0]).toFixed(2)+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              totalcostomateriaAanio[i]=parseFloat(unidadesporanio[i])*parseFloat(costomateriaAanio[i]);
              codigo+='<td class="text-end">$'+parseFloat(totalcostomateriaAanio[i]).toFixed(2)+"</td>"
            } 
            codigo+="</tr>"

            codigo+="<tr>"
            codigo+="<td>Costos de materia prima B</td>"
          
            costomateriaBanio[0]=costoB;
            codigo+='<td class="text-end">$'+parseFloat(costomateriaBanio[0]).toFixed(2)+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              costomateriaBanio[i]=costomateriaBanio[i-1]*(1+parseFloat(incrementoCostoAnualB/100));
              codigo+='<td class="text-end">$'+parseFloat(costomateriaBanio[i]).toFixed(2)+"</td>"
            }
            codigo+="</tr>"

            codigo+="<tr>"
            codigo+="<td>Total de costos de materia prima B</td>"
            totalcostomateriaBanio[0]=parseFloat(unidadesporanio[0])*parseFloat(costomateriaBanio[0]);
            codigo+='<td class="text-end">$'+parseFloat(totalcostomateriaBanio[0]).toFixed(2)+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              totalcostomateriaBanio[i]=parseFloat(unidadesporanio[i])*parseFloat(costomateriaBanio[i]);
              codigo+='<td class="text-end">$'+parseFloat(totalcostomateriaBanio[i]).toFixed(2)+"</td>"
            }
            codigo+="</tr>"
             
            codigo+="<tr>"
            codigo+="<td>Costos de materiales</td>"
            costomaterialesanio[0]=costoMateriales;
            codigo+='<td class="text-end">$'+parseFloat(costomaterialesanio[0]).toFixed(2)+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              costomaterialesanio[i]=costomaterialesanio[i-1]*(1+parseFloat(incrementoCostoMateriales/100));
              codigo+='<td class="text-end">$'+parseFloat(costomaterialesanio[i]).toFixed(2)+"</td>"
            }
            codigo+="</tr>"

            codigo+="<tr>"
            codigo+="<td>Total de costos de materiales</td>"
            totalcostomateriales[0]=parseFloat(unidadesporanio[0])*parseFloat(costomaterialesanio[0]);
            codigo+='<td class="text-end">$'+parseFloat(totalcostomateriales[0]).toFixed(2)+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              totalcostomateriales[i]=parseFloat(unidadesporanio[i])*parseFloat(costomaterialesanio[i]);
              codigo+='<td class="text-end">$'+parseFloat(totalcostomateriales[i]).toFixed(2)+"</td>"
            }
            codigo+="</tr>"

            codigo+="<tr>"
            codigo+="<td>Costos de mano de obra</td>"
            costomanoobraanio[0]=costoManoObra;
            codigo+='<td class="text-end">$'+parseFloat(costomanoobraanio[0]).toFixed(2)+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              costomanoobraanio[i]=costomanoobraanio[i-1]*(1+parseFloat(incrementoCostoManoObra/100));
              codigo+='<td class="text-end">$'+parseFloat(costomanoobraanio[i]).toFixed(2)+"</td>"
            };
            codigo+="</tr>"
          
            codigo+="<tr>"
            codigo+="<td>Total de costos de mano de obra</td>"
            totalcostomanoobraanio[0]=parseFloat(unidadesporanio[0])*parseFloat(costomanoobraanio[0]);
            codigo+='<td class="text-end">$'+parseFloat(totalcostomanoobraanio[0]).toFixed(2)+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              totalcostomanoobraanio[i]=parseFloat(unidadesporanio[i])*parseFloat(costomanoobraanio[i]);
              codigo+='<td class="text-end">$'+parseFloat(totalcostomanoobraanio[i]).toFixed(2)+"</td>"
            }
            codigo+="</tr>"
          
            codigo+="<tr>"
            codigo+="<td>Costos de mantenimiento de equipo</td>"
            costomantenimientoequipoanio[0]=costoAnualMantEqu;
            codigo+='<td class="text-end">$'+parseFloat(costomantenimientoequipoanio[0]).toFixed(2)+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              costomantenimientoequipoanio[i]=costomantenimientoequipoanio[i-1]*(1+parseFloat(incrementoCostoAnualMantEqu/100));
              codigo+='<td class="text-end">$'+parseFloat(costomantenimientoequipoanio[i]).toFixed(2)+"</td>"
            }
            codigo+="</tr>"
        
            codigo+="<tr>"
            codigo+="<td>Total de costos de produccion</td>"
            for (var i =0; i < aniosProyecto; i++) 
            {
              totalcostoproduccion[i]=parseFloat(totalcostomateriaAanio[i])+parseFloat(totalcostomateriaBanio[i])+parseFloat(totalcostomateriales[i])+parseFloat(totalcostomanoobraanio)+parseFloat(costomantenimientoequipoanio[i]);
              codigo+='<td class="text-end">$'+parseFloat(totalcostoproduccion[i]).toFixed(2)+"</td>"
            };
            codigo+="</tr></tbody></table>"
          
            document.getElementById("divCostosProd").innerHTML=codigo
            //////////////////////////////////////////////
            /*ESTADO DE RESULTADOS */
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><tr><th scope="col">Años</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+="</tbody></table>"
            //////////////////////////////////////////////
            //////////////////////////////////////////////
            //////////////////////////////////////////////
            //////////////////////////////////////////////
            //////////////////////////////////////////////
        }
        else
        {
            console.log('datos incompletos');
        } 
      
    })

    //////////////////////////////////////////////////////////////////////////////////

    
});