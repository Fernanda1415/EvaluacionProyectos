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
            var ventasedo=[];
            var ivaedo=[];
            var ventasnetasedo=[];
            var costosproduccionedo=[];
            var utilidadbrutaedo=[];
            var gastoventaedo=[];
            var gastoadminedo=[];
            var utilidadoperedo=[];
            var utilidadantesimpuedo=[];
            var impuestoedo=[];
            var utilidadperdidaedo=[];
            var unidadesadicionalesanio=[];
            var cargoextraanio=[];
            var costoproducciontotalesanio=[];
            var totalIngresos=[];
            var totalEgreso=[];
            var equipoegreso=[];
            var flujototaloper=[];//sin datos
            var prestamoreq=[];//sin datos
            var flujototalfinan=[];
            var flujoefecoperfinan=[];
            var efectivoinicial=[];
            var saldofinal=[];
            var flujoefecdesc=[];

            var inversioninicial;
            var sumasaldofinal;
            var sumaflujoefecdesc;
            ////////////////////////////////////////////
            var codigo='';
            //////////////////////////////////////////////
            /*Inversion inicial */
            inversioninicial=parseFloat(valorTerreno)+parseFloat(valorEdificio)+parseFloat(valorEqui);
            //////////////////////////////////////////////
            /*COSTOS Y GASTOS */
            codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><tr><th class="text-center" colspan="'+aniosProyecto+1+'">Determinacion de las unidades y el precio para cada a??o y otros calculos</th></tr><tr><th scope="col">A??os</th>';
            for(var i=1;i<=aniosProyecto;i++)
            {
                codigo+='<th scope="col" class="text-center">'+i+'</th>';
            };
            codigo+='</tr></thead><tbody>';
            
            codigo+='<tr><td>Unidades</td>';
            unidadesporanio[0]=unidadesVend;
            codigo+='<td class="text-end">'+parseFloat(unidadesporanio[0]).toFixed(2)+'</td>';
            for (let i = 1; i < aniosProyecto; i++) 
            {
                unidadesporanio[i]=unidadesporanio[i-1]*(1+parseFloat(tasaAnualUni/100));
                codigo+='<td class="text-end">'+parseFloat(unidadesporanio[i]).toFixed(2)+'</td>';
            }
            codigo+='</tr>';

            codigo+='<tr><td>Precio</td>';
            precioporanio[0]=precioUnidad;
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(precioporanio[0]).toFixed(2))+'</td>';
            for (let i = 1; i < aniosProyecto; i++) 
            {
                precioporanio[i]=precioporanio[i-1]*(1+parseFloat(tasaAnualPrecio/100));
                codigo+='<td class="text-end">'+formMoneda.format(parseFloat(precioporanio[i]).toFixed(2))+'</td>';
            }

            codigo+='</tr>';

            codigo+='<tr><td>Gastos de venta</td>';
            
            gastoventaanio[0]=gastosVentUnidad;
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(gastoventaanio[0]).toFixed(2))+'</td>';
            for (let i = 1; i < aniosProyecto; i++) {
            gastoventaanio[i]=gastoventaanio[i-1]*(1+parseFloat(incrementoAnualGastVenta/100));
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(gastoventaanio[i]).toFixed(2))+'</td>';
            }
            codigo+='</tr>';

            codigo+='<tr><td>Gastos de administraci??n</td>';
            gastoadminanio[0]=gastosAdmUni;
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(gastoadminanio[0]).toFixed(2))+'</td>';
            for (let i = 1; i < aniosProyecto; i++) 
            {
                gastoadminanio[i]=gastoadminanio[i-1]*(1+parseFloat(incrementoAnualGastAdm/100));
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(gastoadminanio[i]).toFixed(2))+'</td>';
            }

            codigo+='</tr>';
            codigo+='</tbody></table>';
            document.getElementById("divGastos").innerHTML=codigo;
            //////////////////////////////////////////////
            /*DEPRECIACION */
            codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><tr><th class="text-center" colspan="2">Depreciaci??n</th></tr></thead>';
            codigo+='<tr><td>Depreciaci??n del edificio</td>';
            depreedif=(parseFloat(valorEdificio)-parseFloat(valorRecEdi))/parseFloat(vidaEdi)
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(depreedif).toFixed(2))+"</td>"
            codigo+="</tr>"

            codigo+="<tr>"
            depreequi=(parseFloat(valorEqui)-parseFloat(valorRecEqu))/parseFloat(vidaEqu)
            codigo+="<td>Depreciaci??n de equipo</td>"
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(depreequi).toFixed(2))+"</td>"
            codigo+="</tr>"

            codigo+="<tr>"
            totalDepreciacion=parseFloat(depreedif)+parseFloat(depreequi);
            codigo+="<th>Total de la depreciaci??n</th>"
            codigo+='<th class="text-end">'+formMoneda.format(parseFloat(totalDepreciacion).toFixed(2))+"</th>"
            codigo+="</tr>"

            codigo+='</tbody></table>';
            document.getElementById("divDepreciacion").innerHTML=codigo;
            //////////////////////////////////////////////
            /*GASTOS DE PRODUCCION */
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Gastos de producci??n</th></tr><tr><th scope="col">A??os</th>';
            for (var i = 1; i <=aniosProyecto; i++) {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            };
            codigo+="</tr></thead><tbody>"
            codigo+="<tr>"
          
            codigo+="<td>Costos de materia prima A</td>"
            costomateriaAanio[0]=costoA;
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(costomateriaAanio[0]).toFixed(2))+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              costomateriaAanio[i]=costomateriaAanio[i-1]*(1+parseFloat(incrementoCostoAnualA/100));
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(costomateriaAanio[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"
          
            codigo+="<tr>"
            codigo+="<td>Total de costos de materia prima A</td>"
            totalcostomateriaAanio[0]=parseFloat(unidadesporanio[0])*parseFloat(costomateriaAanio[0]);
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalcostomateriaAanio[0]).toFixed(2))+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              totalcostomateriaAanio[i]=parseFloat(totalcostomateriaAanio[i-1])+parseFloat(totalcostomateriaAanio[i-1]*(incrementoCostoAnualA/100));//Nvos cambios
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalcostomateriaAanio[i]).toFixed(2))+"</td>"
            } 
            codigo+="</tr>"

            codigo+="<tr>"
            codigo+="<td>Costos de materia prima B</td>"
          
            costomateriaBanio[0]=costoB;
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(costomateriaBanio[0]).toFixed(2))+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              costomateriaBanio[i]=costomateriaBanio[i-1]*(1+parseFloat(incrementoCostoAnualB/100));
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(costomateriaBanio[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"

            codigo+="<tr>"
            codigo+="<td>Total de costos de materia prima B</td>"
            totalcostomateriaBanio[0]=parseFloat(unidadesporanio[0])*parseFloat(costomateriaBanio[0]);
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalcostomateriaBanio[0]).toFixed(2))+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              totalcostomateriaBanio[i]=parseFloat(totalcostomateriaBanio[i-1])+parseFloat(totalcostomateriaBanio[i-1]*(incrementoCostoAnualB/100));//Nvos cambio
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalcostomateriaBanio[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"
             
            codigo+="<tr>"
            codigo+="<td>Costos de materiales</td>"
            costomaterialesanio[0]=costoMateriales;
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(costomaterialesanio[0]).toFixed(2))+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              costomaterialesanio[i]=costomaterialesanio[i-1]*(1+parseFloat(incrementoCostoMateriales/100));
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(costomaterialesanio[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"

            codigo+="<tr>"
            codigo+="<td>Total de costos de materiales</td>"
            totalcostomateriales[0]=parseFloat(unidadesporanio[0])*parseFloat(costomaterialesanio[0]);
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalcostomateriales[0]).toFixed(2))+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              totalcostomateriales[i]=parseFloat(totalcostomateriales[i-1])*parseFloat(1+incrementoCostoMateriales/100);//nvos cambios 
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalcostomateriales[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"

            codigo+="<tr>"
            codigo+="<td>Costos de mano de obra</td>"
            costomanoobraanio[0]=costoManoObra;
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(costomanoobraanio[0]).toFixed(2))+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              costomanoobraanio[i]=costomanoobraanio[i-1]*(1+parseFloat(incrementoCostoManoObra/100));
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(costomanoobraanio[i]).toFixed(2))+"</td>"
            };
            codigo+="</tr>"
          
            codigo+="<tr>"
            codigo+="<td>Total de costos de mano de obra</td>"
            totalcostomanoobraanio[0]=parseFloat(unidadesporanio[0])*parseFloat(costomanoobraanio[0]);
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalcostomanoobraanio[0]).toFixed(2))+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              totalcostomanoobraanio[i]=parseFloat(totalcostomanoobraanio[i-1])*parseFloat(1+incrementoCostoManoObra/100);
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalcostomanoobraanio[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"
          
            codigo+="<tr>"
            codigo+="<td>Costos de mantenimiento de equipo</td>"
            costomantenimientoequipoanio[0]=costoAnualMantEqu;
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(costomantenimientoequipoanio[0]).toFixed(2))+"</td>"
            for (var i = 1; i < aniosProyecto; i++) 
            {
              costomantenimientoequipoanio[i]=costomantenimientoequipoanio[i-1]*(1+parseFloat(incrementoCostoAnualMantEqu/100));
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(costomantenimientoequipoanio[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"
        
            codigo+="<tr>"
            codigo+="<td>Total de costos de producci??n</td>"
            for (var i =0; i < aniosProyecto; i++) 
            {
              totalcostoproduccion[i]=parseFloat(totalcostomateriaAanio[i])+parseFloat(totalcostomateriaBanio[i])+parseFloat(totalcostomateriales[i])+parseFloat(totalcostomanoobraanio)+parseFloat(costomantenimientoequipoanio[i]);
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalcostoproduccion[i]).toFixed(2))+"</td>"
            };
            codigo+="</tr></tbody></table>"
          
            document.getElementById("divCostosProd").innerHTML=codigo
            //////////////////////////////////////////////
            /*CALCULO DE UNIDADES ADICIONALES */
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Unidades adicionales</th></tr><tr><th scope="col">A??os</th>';
            for (var i = 1; i <=aniosProyecto; i++) {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            };
            codigo+="</tr></thead><tbody>"
            codigo+="<tr>"
            codigo+='<td>Unidades adicionales</td>'
            for (var i = 0; i < 5; i++) 
            {
              unidadesadicionalesanio[i]=0;
              codigo+='<td class="text-end">'+parseFloat(0).toFixed(2)+'</td>'
            }
            for (var i = 5; i < aniosProyecto; i++) 
            {  
              unidadesadicionalesanio[i]=parseFloat(unidadesporanio[i])-parseFloat(limiteProd);
              codigo+='<td class="text-end">'+parseFloat(unidadesadicionalesanio[i]).toFixed(2)+"</td>"
            }
            codigo+="</tr>"
            codigo+='<tr>'
            codigo+='<td>Cargo extra</td>'
            for(var i = 0; i < 5; i++)
            {
              cargoextraanio[i]=0;
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(0).toFixed(2))+"</td>"
            }
            for (var i = 5; i < aniosProyecto; i++) 
            {
              cargoextraanio[i]=parseFloat(unidadesadicionalesanio[i])*parseFloat(precioUnidadTerceros);
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(cargoextraanio[i]).toFixed(2))+"</td>"
            }
            codigo+='</tr>'

            codigo+='<tr>'
            codigo+='<td>Costo de producci??n final</td>'
            for (var i = 0; i < aniosProyecto; i++) 
            {
              costoproducciontotalesanio[i]=parseFloat(totalcostoproduccion[i])+parseFloat(cargoextraanio[i]);
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(costoproducciontotalesanio[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr></tbody></table>"
          
            document.getElementById("divUnidadesAdi").innerHTML=codigo
            //////////////////////////////////////////////
            /*ESTADO DE RESULTADOS */
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Estado de resultados</th></tr><tr><th scope="col">A??os</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+='<tr>'
            codigo+='<td>Ventas</td>'
            for(var i = 0; i < aniosProyecto; i++) 
            {
              ventasedo[i]=parseFloat(unidadesporanio[i])*parseFloat(precioporanio[i]);
              codigo+="<td>"+parseFloat(ventasedo[i]).toFixed(2)+"</td>"
            }
            codigo+='</tr>'

            for (var i = 0; i < aniosProyecto; i++) 
            {
              ventasnetasedo[i]=ventasedo[i]/1.16 //Porque 1.16?
            }

            for (var i = 0; i < aniosProyecto; i++) 
            {
              ivaedo[i]=parseFloat(ventasedo[i])-parseFloat(ventasnetasedo[i]);
            }
            codigo+="<tr>"
            codigo+="<td>IVA</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+="<td>"+parseFloat(ivaedo[i]).toFixed(2)+"</td>"
            };
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Ventas Netas</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+="<td>"+parseFloat(ventasnetasedo[i]).toFixed(2)+"</td>"
            }
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Costos de produccion</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              costosproduccionedo[i]=parseFloat(totalcostoproduccion[i])
              codigo+="<td>"+parseFloat(costosproduccionedo[i]).toFixed(2)+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<td>Depreciacion</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+="<td>"+parseFloat(totalDepreciacion).toFixed(2)+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Utilidad bruta</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              utilidadbrutaedo[i]=parseFloat(ventasnetasedo[i])-parseFloat(costosproduccionedo[i])-parseFloat(totalDepreciacion);
              codigo+="<td>"+parseFloat(utilidadbrutaedo[i]).toFixed(2)+"</td>"
            };
            
            codigo+="</tr>"
            
            
            codigo+="<tr>"
            codigo+="<td>Gastos de venta</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              gastoventaedo[i]=parseFloat(gastoventaanio[i])*parseFloat(unidadesporanio);
              codigo+="<td>"+parseFloat(gastoventaedo[i]).toFixed(2)+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Gastos de administraci??n</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              gastoadminedo[i]=parseFloat(gastoadminanio[i])*parseFloat(unidadesporanio);
              codigo+="<td>"+parseFloat(gastoadminedo[i]).toFixed(2)+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Utilida de operaci??n</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              utilidadoperedo[i]=parseFloat(utilidadbrutaedo[i])-parseFloat(gastoadminedo[i])-parseFloat(gastoventaedo[i]);
              codigo+="<td>"+parseFloat(utilidadoperedo[i]).toFixed(2)+"</td>"
            }
            
            codigo+="</tr>"
            
            /*
            tr+="<tr>"
            tr+="<td>Gastos financieros</td>"
            
            for (var i = 0; i < anios; i++) {
              tr+="<td>"+parseFloat(0).toFixed(2)+"</td>"
            };
            
            tr+="</tr>"*/
            
            codigo+="<tr>"
            codigo+="<td>Utilidad antes de impuestos</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              utilidadantesimpuedo[i]=parseFloat(utilidadoperedo[i])-parseFloat(0);
              codigo+="<td>"+parseFloat(utilidadantesimpuedo[i]).toFixed(2)+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Impuestos</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              if (parseFloat(utilidadantesimpuedo[i])>=0  && parseFloat(utilidadantesimpuedo[i])<=999 ) 
              {
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.05)
              }
              else if(parseFloat(utilidadantesimpuedo[i])>=1000  && parseFloat(utilidadantesimpuedo[i])<=9999 )
              {
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.10)-50
              }
              else if(parseFloat(utilidadantesimpuedo[i])>=10000  && parseFloat(utilidadantesimpuedo[i])<=49999 )
              {
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.15)-950
              }
              else if(parseFloat(utilidadantesimpuedo[i])>=50000  && parseFloat(utilidadantesimpuedo[i])<=99999 )
              {
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.20)-6950
              }
              else if(parseFloat(utilidadantesimpuedo[i])>=100000  && parseFloat(utilidadantesimpuedo[i])<=499999 )
              {
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.25)-16950
              }
              else if(parseFloat(utilidadantesimpuedo[i])>=500000  && parseFloat(utilidadantesimpuedo[i])<=999999 )
              {
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.30)-116949
              }
              else if(parseFloat(utilidadantesimpuedo[i])>=1000000)
              {
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.35)-266949
              }
              codigo+="<td>"+parseFloat(impuestoedo[i]).toFixed(2)+"</td>"
            }
            
            codigo+="</tr>"
            
            
            codigo+="<tr>"
            codigo+="<td>Utilidad o perdida del ejercicio</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
               utilidadperdidaedo[i]=parseFloat(utilidadantesimpuedo[i])-parseFloat(impuestoedo[i]);
              codigo+="<td>"+parseFloat(utilidadperdidaedo[i]).toFixed(2)+"</td>"
            }
            
            codigo+="</tr>"
            codigo+="</tbody></table>"
            document.getElementById("divEstadoRes").innerHTML=codigo
            //////////////////////////////////////////////
            /*INGRESOS*/
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Ingresos</th></tr><tr><th scope="col">A??os</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+='<tr>'
            codigo+="<td>Pronostico de ventas</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+="<td>"+parseFloat(ventasedo[i]).toFixed(2)+"</td>"
            }
            codigo+="</tr>"

            codigo+="<tr>"
            codigo+="<td>Total de ingresos</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              totalIngresos[i]=ventasedo[i]
              codigo+="<td>"+parseFloat(ventasedo[i]).toFixed(2)+"</td>"
            }
            codigo+="</tr>"
            codigo+="</tbody></table>"
            document.getElementById("divIngresos").innerHTML=codigo
            //////////////////////////////////////////////
            /*EGRESOS*/
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Egresos</th></tr><tr><th scope="col">A??os</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+='<tr>'
            codigo+="<td>Costos de producci??n</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(costoproducciontotalesanio[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"

            codigo+='<tr>'
            codigo+="<td>Gastos por ventas</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(gastoventaedo[i]).toFixed(2))+"</td>"
            }

            codigo+="</tr>"

            codigo+="<td>Gastos por administraci??n</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(gastoadminedo[i]).toFixed(2))+"</td>"
            }

            codigo+="</tr>"
            /*
            tr+="<td>Gastos financieros</td>"
            for (var i = 0; i < anios; i++) {
              tr+="<td>"+parseFloat(0).toFixed(2)+"</td>"
            };

            tr+="</tr>"*/

            codigo+="<td>IVA</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(ivaedo[i]).toFixed(2))+"</td>"
            }

            codigo+="</tr>"

            codigo+="<td>Impuestos</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(impuestoedo[i]).toFixed(2))+"</td>"
            }

            codigo+="</tr>"

            codigo+="<td>Equipo</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              if ((i+1)%5==0) 
              {
                equipoegreso[i]=valorEqui
                codigo+='<td class="text-end">'+formMoneda.format(parseFloat(valorEqui).toFixed(2))+"</td>"
              }
              else
              {
                equipoegreso[i]=0
                codigo+='<td class="text-end">'+formMoneda.format(parseFloat(0).toFixed(2))+"</td>"
              }
            }

            codigo+="</tr>"

            codigo+="<td>Total de egresos</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              totalEgreso[i]=(parseFloat(costoproducciontotalesanio[i])+parseFloat(gastoventaedo[i])+parseFloat(gastoadminedo[i])+parseFloat(0)+parseFloat(ivaedo[i])+parseFloat(impuestoedo[i])+parseFloat(equipoegreso[i]))
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalEgreso[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr></tbody></table>"          
            document.getElementById("divEgresos").innerHTML=codigo
            //////////////////////////////////////////////
            /*FLUJO DE EFECTIVO DE OPERACION */
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Flujo de efectivo de operaci??n</th></tr><tr><th scope="col">A??os</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+='<tr>'
            codigo+='<td>Total de ingresos</td>'
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalIngresos[i]).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Total de egresos</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalEgreso[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Flujo total de operaci??n</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              if (flujototaloper[i]<0) 
              {
                prestamoreq[i]=flujototaloper[i]*-1
              }
              else
              {
                prestamoreq[i]=0;
              }
              flujototaloper[i]=parseFloat(totalIngresos[i])-parseFloat(totalEgreso[i]);
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(flujototaloper[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr></tbody></table>"          
            document.getElementById("divFlujoEfectivo").innerHTML=codigo
            //////////////////////////////////////////////
            /*FLUJO DE EFECTIVO DE FINANCIAMIENTO*/
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Flujo de efectivo de financiamiento</th></tr><tr><th scope="col">A??os</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+='<tr>'
            codigo+='<td>Flujo de efectivo de operaci??n</td>'
            for (var i = 0; i < aniosProyecto; i++) 
            {
              flujoefecoperfinan[i]=parseFloat(flujototaloper[i]);
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(flujoefecoperfinan[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"
            
            efectivoinicial[0]=0;
            for (var i = 0; i < aniosProyecto; i++) 
            { 
              saldofinal[i]=parseFloat(flujoefecoperfinan[i])+parseFloat(efectivoinicial[i]);
              efectivoinicial[i+1]=saldofinal[i];   
            }
            
            codigo+='<tr><td>Efectivo inicial</td>'
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(0).toFixed(2))+'</td>'
            for (var i = 1; i < aniosProyecto; i++) 
            { 
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(efectivoinicial[i]).toFixed(2))+'</td>'    
            }
            codigo+='</tr>'
            
            codigo+='<tr><td>Saldo final</td>'
              
            for (var i = 0; i < aniosProyecto; i++) 
            { 
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(saldofinal[i]).toFixed(2))+'</td>'   
            }
            codigo+="</tr></tbody></table>"          
            document.getElementById("divFlujoEfecFinan").innerHTML=codigo
            //////////////////////////////////////////////




            //METODOS
            /*Metodo de periodo de recuperacion de la inversi??n*/
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">M??todo de periodo de recuperacion de la inversi??n</th></tr><tr><th scope="col">A??os</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+='<tr>'
            codigo+='<td>Flujo neto de efectivo</td>'
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(saldofinal[i]).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Suma de los flujos</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              sumaflujo=0;
              for (var j = 0; j <= i; j++) 
              {
                sumaflujo+=saldofinal[j]
              }
            
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(sumaflujo).toFixed(2))+"</td>"
            }
            codigo+="</tr></tbody></table>"          
            document.getElementById("divMetRecInv").innerHTML=codigo
            //falta algo XD //esta es nota del otro autor


            //////////////////////////////////////////////
            /*Metodo de periodo de recuperacion de la inversi??n descontado:*/
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">M??todo de periodo de recuperacion de la inversi??n descontado</th></tr><tr><th scope="col">A??os</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+='<tr>'
            codigo+='<td>Flujo neto de efectivo</td>'
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(saldofinal[i]).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Flujo de efectivo descontado</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              flujoefecdesc[i]=parseFloat(saldofinal[i]/Math.pow((1+tasaMin),(i+1)));
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(saldofinal[i]/Math.pow((1+tasaMin),(i+1))).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Suma de los flujos descontados</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
             sumaflujo=0;
              for (var j = 0; j <= i; j++) 
              {
                sumaflujo+=flujoefecdesc[j];
              }
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(sumaflujo).toFixed(2))+"</td>"
            }
            codigo+="</tr></tbody></table>"          
            document.getElementById("divMetRecInvDes").innerHTML=codigo
            //////////////////////////////////////////////
            /*Metodo de rendimiento anual promedio*/
            
            sumasaldofinal=0
            for (var i = 0; i < aniosProyecto; i++) 
            {
              sumasaldofinal+=saldofinal[i];
            }          
            rap=(sumasaldofinal/aniosProyecto)/inversioninicial
            if (rap>tasaMin) 
            {
              $("#rap").html("Con un RAP de "+parseFloat(rap).toFixed(2)+" > "+tasaMin+" El proyecto se aprueba");
            }
            else if(rap=tasaMin)
            {
              $("#rap").html("Con un RAP de "+parseFloat(rap).toFixed(2)+" = "+tasaMin+" El proyecto es indiferente");
            }
            else
            {
              $("#rap").html("Con un RAP de "+parseFloat(rap).toFixed(2)+" < "+tasaMin+" El proyecto se rechaza");
            }
            //////////////////////////////////////////////
            /*Metodo de indice de rentabilidad*/
            sumaflujoefecdesc=0
            for (var i = 0; i < aniosProyecto; i++) 
            {
              sumaflujoefecdesc+=flujoefecdesc[i];
            }
          
            ir=sumaflujoefecdesc/inversioninicial
            if (ir>1) 
            {
              $("#indicerenta").html("Con un IR de "+parseFloat(ir).toFixed(2)+" > "+1+" El proyecto se aprueba");
            }
            else if(ir=1)
            {
              $("#indicerenta").html("Con un IR de "+parseFloat(ir).toFixed(2)+" = "+1+" El proyecto es indiferente");
            }
            else
            {
              $("#indicerenta").html("Con un IR de "+parseFloat(ir).toFixed(2)+" < "+1+" El proyecto se rechaza");
            }
            //////////////////////////////////////////////
            /*Metodo del valor presente neto*/
            vpn=sumaflujoefecdesc-inversioninicial

            if (vpn>1) 
            {
              $("#metodovalorpresente").html("Con un VPN de "+parseFloat(vpn).toFixed(2)+" > "+1+" El proyecto se aprueba");
            }
            else if(vpn=1)
            {
              $("#metodovalorpresente").html("Con un VPN de "+parseFloat(vpn).toFixed(2)+" = "+1+" El proyecto es indiferente");
            }
            else
            {
              $("#metodovalorpresente").html("Con un VPN de "+parseFloat(vpn).toFixed(2)+" < "+1+" El proyecto se rechaza");
            }
            //////////////////////////////////////////////
        }
        else
        {
            console.log('datos incompletos');
        } 
      
    })

    //////////////////////////////////////////////////////////////////////////////////
    //Formato de modena
    var formMoneda=new Intl.NumberFormat('eng-US',{
      style:'currency',
      currency:'USD'
    });

    
});