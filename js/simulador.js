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
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Variables para la cuota anual del edificio y equipo
    var cuotaAnualEdificio=0;
    var cuotaAnualEquipo=0;
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
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
            var tasaMin=document.querySelector("#tasaMin").value/100;
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
            var gastosFinancieros=document.querySelector('#gastosFinan').value;
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
          
            var valorRecuperacionEqui=[];
            var valorRecuperacionEdificio=[];
            var flujosAcumulados=[];
            var flujosAcumuladosDes=[]
            ////////////////////////////////////////////
            var codigo='';
            //////////////////////////////////////////////
            /*Inversion inicial */
            inversioninicial=parseFloat(valorTerreno)+parseFloat(valorEdificio)+parseFloat(valorEqui)+parseFloat(capTrabajo);
    
            //////////////////////////////////////////////
            /*COSTOS Y GASTOS */
            codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><tr><th class="text-center" colspan="'+aniosProyecto+1+'">Determinacion de las unidades y el precio para cada año y otros calculos</th></tr><tr><th scope="col">Años</th>';
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

            codigo+='<tr><td>Gastos de administración</td>';
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
            codigo+='<table class="table table-bordered"><thead class="table-dark"><tr><th class="text-center" colspan="2">Depreciación</th></tr></thead>';
            codigo+='<tr><td>Depreciación del edificio</td>';
            depreedif=(parseFloat(valorEdificio)-parseFloat(valorRecEdi))/parseFloat(vidaEdi)
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(depreedif).toFixed(2))+"</td>"
            codigo+="</tr>"

            codigo+="<tr>"
            depreequi=(parseFloat(valorEqui)-parseFloat(valorRecEqu))/parseFloat(vidaEqu)
            codigo+="<td>Depreciación de equipo</td>"
            codigo+='<td class="text-end">'+formMoneda.format(parseFloat(depreequi).toFixed(2))+"</td>"
            codigo+="</tr>"

            codigo+="<tr>"
            totalDepreciacion=parseFloat(depreedif)+parseFloat(depreequi);
            codigo+="<th>Total de la depreciación</th>"
            codigo+='<th class="text-end">'+formMoneda.format(parseFloat(totalDepreciacion).toFixed(2))+"</th>"
            codigo+="</tr>"

            codigo+='</tbody></table>';
            document.getElementById("divDepreciacion").innerHTML=codigo;
            //////////////////////////////////////////////
            /*GASTOS DE PRODUCCION */
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Gastos de producción</th></tr><tr><th scope="col">Años</th>';
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
            codigo+="<td>Total de costos de producción</td>"
            for (var i =0; i < aniosProyecto; i++) 
            {
              totalcostoproduccion[i]=parseFloat(totalcostomateriaAanio[i])+parseFloat(totalcostomateriaBanio[i])+parseFloat(totalcostomateriales[i])+parseFloat(totalcostomanoobraanio[i])+parseFloat(costomantenimientoequipoanio[i]);
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalcostoproduccion[i]).toFixed(2))+"</td>"
            };
            codigo+="</tr></tbody></table>"
          
            document.getElementById("divCostosProd").innerHTML=codigo
            //////////////////////////////////////////////
            /*CALCULO DE UNIDADES ADICIONALES */
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Unidades adicionales</th></tr><tr><th scope="col">Años</th>';
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
            codigo+='<td>Costo de producción final</td>'
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
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Estado de resultados</th></tr><tr><th scope="col">Años</th>';
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
              codigo+="<td>"+formMoneda.format(parseFloat(ventasedo[i]).toFixed(2))+"</td>"
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
              codigo+="<td>"+formMoneda.format(parseFloat(ivaedo[i]).toFixed(2))+"</td>"
            };
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Ventas Netas</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+="<td>"+formMoneda.format(parseFloat(ventasnetasedo[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Costos de producción</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              costosproduccionedo[i]=parseFloat(totalcostoproduccion[i])
              codigo+="<td>"+formMoneda.format(parseFloat(costosproduccionedo[i]).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<td>Depreciacion</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+="<td>"+formMoneda.format(parseFloat(totalDepreciacion).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Utilidad bruta</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              utilidadbrutaedo[i]=parseFloat(ventasnetasedo[i])-parseFloat(costosproduccionedo[i])-parseFloat(totalDepreciacion);
              codigo+="<td>"+formMoneda.format(parseFloat(utilidadbrutaedo[i]).toFixed(2))+"</td>"
            };
            
            codigo+="</tr>"
            
            
            codigo+="<tr>"
            codigo+="<td>Gastos de venta</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              gastoventaedo[i]=parseFloat(gastoventaanio[i])*parseFloat(unidadesporanio);
              codigo+="<td>"+formMoneda.format(parseFloat(gastoventaedo[i]).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Gastos de administración</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              gastoadminedo[i]=parseFloat(gastoadminanio[i])*parseFloat(unidadesporanio);
              codigo+="<td>"+formMoneda.format(parseFloat(gastoadminedo[i]).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Utilida de operación</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              utilidadoperedo[i]=parseFloat(utilidadbrutaedo[i])-parseFloat(gastoadminedo[i])-parseFloat(gastoventaedo[i]);
              codigo+="<td>"+formMoneda.format(parseFloat(utilidadoperedo[i]).toFixed(2))+"</td>"
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
              codigo+="<td>"+formMoneda.format(parseFloat(utilidadantesimpuedo[i]).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Impuestos</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
              if (parseFloat(utilidadantesimpuedo[i])>=0  && parseFloat(utilidadantesimpuedo[i])<=999 ) 
              {
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.05)//antes estaba en 0.05
              }
              else if(parseFloat(utilidadantesimpuedo[i])>=1000  && parseFloat(utilidadantesimpuedo[i])<=9999 )
              {
                //impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.10)-50
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.10)
              }
              else if(parseFloat(utilidadantesimpuedo[i])>=10000  && parseFloat(utilidadantesimpuedo[i])<=49999 )
              {
                //impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.15)-950
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.15)
              }
              else if(parseFloat(utilidadantesimpuedo[i])>=50000  && parseFloat(utilidadantesimpuedo[i])<=99999 )
              {
                //impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.20)-6950
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.20)
              }
              else if(parseFloat(utilidadantesimpuedo[i])>=100000  && parseFloat(utilidadantesimpuedo[i])<=499999 )
              {
                //impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.25)-16950
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.25)
              }
              else if(parseFloat(utilidadantesimpuedo[i])>=500000  && parseFloat(utilidadantesimpuedo[i])<=999999 )
              {
                //impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.30)-116949
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.30)
              }
              else if(parseFloat(utilidadantesimpuedo[i])>=1000000)
              {
                //impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.35)-266949
                impuestoedo[i]=(parseFloat(utilidadantesimpuedo[i])*.35)
              }
              codigo+="<td>"+formMoneda.format(parseFloat(impuestoedo[i]).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            
            
            codigo+="<tr>"
            codigo+="<td>Utilidad o pérdida del ejercicio</td>"
            
            for (var i = 0; i < aniosProyecto; i++) 
            {
               utilidadperdidaedo[i]=parseFloat(utilidadantesimpuedo[i])-parseFloat(impuestoedo[i]);
              codigo+="<td>"+formMoneda.format(parseFloat(utilidadperdidaedo[i]).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            codigo+="</tbody></table>"
            document.getElementById("divEstadoRes").innerHTML=codigo
            //////////////////////////////////////////////
            /*INGRESOS*/
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Ingresos</th></tr><tr><th scope="col">Años</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+='<tr>'
            codigo+="<td>Pronóstico de ventas</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+="<td>"+formMoneda.format(parseFloat(ventasedo[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"

            codigo+='<tr>'
            codigo+="<td>Valor de recuperación del equipo</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              if ((i+1)%vidaEqu==0) 
              {
                valorRecuperacionEqui[i]=valorRecEqu
                codigo+='<td class="text-end">'+formMoneda.format(parseFloat(valorRecEqu).toFixed(2))+"</td>"
              }
              else
              {
                valorRecuperacionEqui[i]=0
                codigo+='<td class="text-end">'+formMoneda.format(parseFloat(0).toFixed(2))+"</td>"
              }
            }

            codigo+='<tr>'
            codigo+="<td>Valor de recuperación del edificio</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              if ((i+1)%vidaEdi==0) 
              {
                valorRecuperacionEdificio[i]=valorRecEdi
                codigo+='<td class="text-end">'+formMoneda.format(parseFloat(valorRecEdi).toFixed(2))+"</td>"
              }
              else
              {
                valorRecuperacionEdificio[i]=0
                codigo+='<td class="text-end">'+formMoneda.format(parseFloat(0).toFixed(2))+"</td>"
              }
            }
            

            codigo+="<tr>"
            codigo+="<td>Total de ingresos</td>"

            for (var i = 0; i < aniosProyecto; i++) 
            {
              //totalIngresos[i]=ventasedo[i]
              //totalIngresos[i]=ventasnetasedo[i];este esstaba antes
              //codigo+="<td>"+formMoneda.format(parseFloat(ventasedo[i]).toFixed(2))+"</td>"
              totalIngresos[i]=parseFloat(ventasedo[i]) + parseFloat(valorRecuperacionEqui[i]) + parseFloat(valorRecuperacionEdificio[i])
              codigo+="<td>"+formMoneda.format(parseFloat(totalIngresos[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"
            codigo+="</tbody></table>"
            document.getElementById("divIngresos").innerHTML=codigo
            //////////////////////////////////////////////
            /*EGRESOS*/
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Egresos</th></tr><tr><th scope="col">Años</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+='<tr>'
            codigo+="<td>Costos de producción</td>"
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

            codigo+="<td>Gastos por administración</td>"
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

            codigo+="<td>Compra de equipo</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              if ((i+1)%vidaEqu==0) 
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

      
            ///

            codigo+="<td>Total de egresos</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              //totalEgreso[i]=(parseFloat(costoproducciontotalesanio[i])+parseFloat(gastoventaedo[i])+parseFloat(gastoadminedo[i])+parseFloat(0)+parseFloat(ivaedo[i])+parseFloat(impuestoedo[i])+parseFloat(equipoegreso[i]))
              totalEgreso[i]=(parseFloat(costoproducciontotalesanio[i])+parseFloat(gastoventaedo[i])+parseFloat(gastoadminedo[i])+parseFloat(ivaedo[i])+parseFloat(impuestoedo[i])+parseFloat(equipoegreso[i]))
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(totalEgreso[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr></tbody></table>"          
            document.getElementById("divEgresos").innerHTML=codigo
            //////////////////////////////////////////////
            /*FLUJO DE EFECTIVO DE OPERACION */
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Flujo de efectivo de operación</th></tr><tr><th scope="col">Años</th>';
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
            codigo+="<td>Flujo total de operación</td>"
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
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Flujo de efectivo de financiamiento</th></tr><tr><th scope="col">Años</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+='<tr>'
            codigo+='<td>Flujo de efectivo de operación</td>'
            for (var i = 0; i < aniosProyecto; i++) 
            {
              flujoefecoperfinan[i]=parseFloat(flujototaloper[i]);
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(flujoefecoperfinan[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"
            
            efectivoinicial[0]=parseFloat(gastosFinancieros);
            for (var i = 0; i < aniosProyecto; i++) 
            { 
              saldofinal[i]=parseFloat(flujoefecoperfinan[i])+parseFloat(efectivoinicial[i]);
              efectivoinicial[i+1]=saldofinal[i];   
            }
            
            codigo+='<tr><td>Efectivo inicial</td>'
            //codigo+='<td class="text-end">'+formMoneda.format(parseFloat(0).toFixed(2))+'</td>'
            for (var i = 0; i < aniosProyecto; i++) 
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
            /*Metodo de periodo de recuperacion de la inversión*/
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Método de periodo de recuperacion de la inversión</th></tr><tr><th scope="col">Años</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+='<tr>'
            codigo+='<td>Flujo neto de efectivo</td>'
            for (var i = 0; i < aniosProyecto; i++) 
            {
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(flujoefecoperfinan[i]).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Suma de los flujos</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              sumaflujo=0;
              for (var j = 0; j <= i; j++) 
              {
                sumaflujo+=flujoefecoperfinan[j]
              }
              flujosAcumulados[i]=sumaflujo;
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(flujosAcumulados[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"         
            
            //falta algo XD //esta es nota del otro autor

            //Calcular el tiempo de recuperacion
            var flujo_1=0
            var anioPeriodo=0;
            for(var i=0;i<aniosProyecto;i++)
            {
                if(flujosAcumulados[i]<inversioninicial)//aun no se cubre la inversion inicial
                {
                  flujo_1=flujosAcumulados[i]
                }
                else if(flujosAcumulados[i]>inversioninicial)//cuando ya se pasa de la inversion inicial
                {
                  anioPeriodo=i+(inversioninicial-flujo_1)/flujoefecoperfinan[i];
                  break;
                }
                else if(flujosAcumulados[i]==inversioninicial)
                {
                  anioPeriodo=i;
                  break;
                }
              
            }
            //Calcular anio, meses y dias
            var anioPerSTR=anioPeriodo.toString().split('.');//separar por decimal
            var mesPeriodo=0;
            var mesPerSTR=0;
            var diasPeriodo=0;

            if(anioPerSTR.length>1 && parseFloat(anioPerSTR[1])>0)//si hay decimal calcular los meses
            {
              mesPeriodo=parseFloat('0.'+anioPerSTR[1]).toFixed(2);
              mesPeriodo=parseFloat(mesPeriodo*12)//obtener el num de meses
              mesPerSTR=mesPeriodo.toString().split('.')//separar por decimal los meses
              if(mesPerSTR.length>1 && parseFloat(mesPerSTR[1])>0)//si hay decimal calcular los dias
              {
                diasPeriodo=parseFloat('0.'+mesPerSTR[1]).toFixed(2);
                diasPeriodo=parseFloat(diasPeriodo*30)//obtener el num de dias
              }
            }
            codigo+='<tr><th class="text-center" colspan="'+aniosProyecto+1+'">Tiempo de recuperación de la inversión: '+parseFloat(Math.trunc(anioPeriodo))+' años, '+parseFloat(Math.trunc(mesPeriodo))+' meses y '+parseFloat(Math.trunc(diasPeriodo))+' días.</th></tr>'
            codigo+="</tbody></table>" 
            document.getElementById("divMetRecInv").innerHTML=codigo
            //////////////////////////////////////////////
            /*Metodo de periodo de recuperacion de la inversión descontado:*/
            var codigo='';
            codigo+='<table class="table table-bordered"><thead class="table-dark"><th class="text-center" colspan="'+aniosProyecto+1+'">Método de periodo de recuperacion de la inversión descontado</th></tr><tr><th scope="col">Años</th>';
            for (var i = 1; i <=aniosProyecto; i++) 
            {
              codigo+='<th scope="col" class="text-center">'+i+'</th>'
            }
            codigo+="</tr></thead><tbody>"

            codigo+='<tr>'
            codigo+='<td>Flujo neto de efectivo</td>'
            for (var i = 0; i < aniosProyecto; i++) 
            {
              //codigo+='<td class="text-end">'+formMoneda.format(parseFloat(saldofinal[i]).toFixed(2))+"</td>"
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(flujoefecoperfinan[i]).toFixed(2))+"</td>"
            }
            
            codigo+="</tr>"
            
            codigo+="<tr>"
            codigo+="<td>Flujo de efectivo descontado</td>"
            for (var i = 0; i < aniosProyecto; i++) 
            {
              //flujoefecdesc[i]=parseFloat(saldofinal[i]/Math.pow((1+tasaMin),(i+1)));
              flujoefecdesc[i]=parseFloat(flujoefecoperfinan[i]/Math.pow((1+tasaMin),(i+1)))
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(flujoefecdesc[i]).toFixed(2))+"</td>"
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
              flujosAcumuladosDes[i]=sumaflujo;
              codigo+='<td class="text-end">'+formMoneda.format(parseFloat(flujosAcumuladosDes[i]).toFixed(2))+"</td>"
            }
            codigo+="</tr>"
            //Calcular el tiempo de recuperacion
            var flujo_1=0
            var anioPeriodo=0;
            for(var i=0;i<aniosProyecto;i++)
            {
                if(flujosAcumuladosDes[i]<inversioninicial)//aun no se cubre la inversion inicial
                {
                  flujo_1=flujosAcumuladosDes[i]
                }
                else if(flujosAcumuladosDes[i]>inversioninicial)//cuando ya se pasa de la inversion inicial
                {
                  anioPeriodo=i+(inversioninicial-flujo_1)/flujoefecdesc[i];
                  break;
                }
                else if(flujosAcumuladosDes[i]==inversioninicial)
                {
                  anioPeriodo=i;
                  break;
                }
              
            }
            //Calcular anio, meses y dias
            var anioPerSTR=anioPeriodo.toString().split('.');//separar por decimal
            var mesPeriodo=0;
            var mesPerSTR=0;
            var diasPeriodo=0;

            if(anioPerSTR.length>1 && parseFloat(anioPerSTR[1])>0)//si hay decimal calcular los meses
            {
              mesPeriodo=parseFloat('0.'+anioPerSTR[1]).toFixed(2);
              mesPeriodo=parseFloat(mesPeriodo*12)//obtener el num de meses
              mesPerSTR=mesPeriodo.toString().split('.')//separar por decimal los meses
              if(mesPerSTR.length>1 && parseFloat(mesPerSTR[1])>0)//si hay decimal calcular los dias
              {
                diasPeriodo=parseFloat('0.'+mesPerSTR[1]).toFixed(2);
                diasPeriodo=parseFloat(diasPeriodo*30)//obtener el num de dias
              }
            }
            codigo+='<tr><th class="text-center" colspan="'+aniosProyecto+1+'">Tiempo de recuperación de la inversión: '+parseFloat(Math.trunc(anioPeriodo))+' años, '+parseFloat(Math.trunc(mesPeriodo))+' meses y '+parseFloat(Math.trunc(diasPeriodo))+' días.</th></tr>'
            codigo+="</tbody></table>"          
            document.getElementById("divMetRecInvDes").innerHTML=codigo;
            
            //////////////////////////////////////////////
            /*Metodo de rendimiento anual promedio*/
            
            sumasaldofinal=0
            for (var i = 0; i < aniosProyecto; i++) 
            {
              //sumasaldofinal+=saldofinal[i];
              sumasaldofinal+=flujoefecoperfinan[i]
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
              $("#metodovalorpresente").html("Con un VPN de "+formMoneda.format(parseFloat(vpn).toFixed(2))+" > "+1+" El proyecto se aprueba");
            }
            else if(vpn=1)
            {
              $("#metodovalorpresente").html("Con un VPN de "+formMoneda.format(parseFloat(vpn).toFixed(2))+" = "+1+" El proyecto es indiferente");
            }
            else
            {
              $("#metodovalorpresente").html("Con un VPN de "+formMoneda.format(parseFloat(vpn).toFixed(2))+" < "+1+" El proyecto se rechaza");
            }
            //////////////////////////////////////////////
            /*TIR*/
            var sumaVP=0;
            var bandera=false;
            var bandIni=false;
            var porcentajeIni=0//se empieza con el 10%
            var tasaTIR_1=0;
            var tasaTIR_2=0;
            var vp1=0;
            var vp2=0;
            var valorTIR=0;
            var listaVP=[]
            while(bandera==0)
            {
              if(bandIni==false)//primer calculo(año 1)
              {
                for(var i=0;i<aniosProyecto;i++)
                {
                  sumaVP=sumaVP+parseFloat(flujoefecoperfinan[i])/parseFloat(Math.pow((1+porcentajeIni),(i+1)))
                  
                }
              
                sumaVP=parseFloat(sumaVP)-parseFloat(inversioninicial) 
                if(sumaVP==0)//checar si no hay diferencia, la tir es el porcentajeIni
                {
                  valorTIR=porcentajeIni;
                  bandera=1;//salir del while
                }
                else if(sumaVP>0)//aun se puede aumentar el porcentajeIni
                {
                  vp1=sumaVP
                  tasaTIR_1=porcentajeIni
                  bandIni=true//para que ya no entre a este if
                }
                else//sumaVP<O  se inicia con un porcentaje menor y se empieza desde 0
                {
                  porcentajeIni-=0.11
                }
              }
              else//para los demas casos (ya se cuenta con un valor en vp1 y se hara la comparacion)
              {
                sumaVP=0;
                //calcular vp2
                porcentajeIni+=0.10//aumentar porcentaje
                for(var i=0;i<aniosProyecto;i++)
                {
                  sumaVP=sumaVP+parseFloat(flujoefecoperfinan[i])/parseFloat(Math.pow((1+porcentajeIni),(i+1)))
                }
                sumaVP=parseFloat(sumaVP)-parseFloat(inversioninicial)
                if(sumaVP==0)//checar si no hay diferencia, la tir es el porcentajeIni
                {
                  valorTIR=porcentajeIni;
                  bandera=1;//salir del while
                }
                else if(sumaVP>0)//aun se puede aumentar el porcentajeIni
                {
                  vp1=sumaVP
                  tasaTIR_1=porcentajeIni
                }
                else if(sumaVP<0)//sumaVP<O se hace el calculo de la tir
                {
                  vp2=sumaVP
                  tasaTIR_2=porcentajeIni
                  //Calcular la TIR
                  valorTIR=((vp1*tasaTIR_2)-(vp2*tasaTIR_1))/(vp1-vp2)
                  bandera=1;
                }
              }

            }
            $("#metodoTIR").html("La TIR es de: "+parseFloat(valorTIR*100).toFixed(2)+'%');
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
    //////////////////////////////////////////////////////////////////////////////////
    //Detectar cualquier cambio en el input del valor del edificio
    $('#valorEdificio').on('input',function()
    {
        var valEdificio=parseFloat($('#valorEdificio').val());
        var valRecEdificio=parseFloat($('#valorRecEdi').val());
        var vidaUtilEdi=parseFloat($('#vidaEdi').val());
        if(valEdificio>0 && valRecEdificio>0 && vidaUtilEdi>0)//checar si hay datos en los 3 parametros
        {
          cuotaAnualEdificio=(valEdificio-valRecEdificio)/vidaUtilEdi
          document.getElementById('cuotaAnualEdi').innerHTML=formMoneda.format(parseFloat(cuotaAnualEdificio).toFixed(2));
        }
        else
        {
            document.getElementById('cuotaAnualEdi').innerHTML=formMoneda.format(parseFloat(0).toFixed(2));;
        }
    });
    //Detectar cualquier cambio en el input del valor de recuperacion del edificio
    $('#valorRecEdi').on('input',function()
    {
        var valEdificio=parseFloat($('#valorEdificio').val());
        var valRecEdificio=parseFloat($('#valorRecEdi').val());
        var vidaUtilEdi=parseFloat($('#vidaEdi').val());
        if(valEdificio>0 && valRecEdificio>0 && vidaUtilEdi>0)//checar si hay datos en los 3 parametros
        {
          cuotaAnualEdificio=(valEdificio-valRecEdificio)/vidaUtilEdi
          document.getElementById('cuotaAnualEdi').innerHTML=formMoneda.format(parseFloat(cuotaAnualEdificio).toFixed(2));
        }
        else
        {
            document.getElementById('cuotaAnualEdi').innerHTML=formMoneda.format(parseFloat(0).toFixed(2));;
        }
    });
    //Detectar cualquier cambio en el input de vida util del edificio
    $('#vidaEdi').on('input',function()
    {
        var valEdificio=parseFloat($('#valorEdificio').val());
        var valRecEdificio=parseFloat($('#valorRecEdi').val());
        var vidaUtilEdi=parseFloat($('#vidaEdi').val());
        if(valEdificio>0 && valRecEdificio>0 && vidaUtilEdi>0)//checar si hay datos en los 3 parametros
        {
          cuotaAnualEdificio=(valEdificio-valRecEdificio)/vidaUtilEdi
          document.getElementById('cuotaAnualEdi').innerHTML=formMoneda.format(parseFloat(cuotaAnualEdificio).toFixed(2));
        }
        else
        {
            document.getElementById('cuotaAnualEdi').innerHTML=formMoneda.format(parseFloat(0).toFixed(2));;
        }
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Detectar cualquier cambio en el input del valor del equipo
    $('#valorEqui').on('input',function()
    {
        var valEquipo=parseFloat($('#valorEqui').val());
        var valRecEquipo=parseFloat($('#valorRecEqu').val());
        var vidaUtilEquipo=parseFloat($('#vidaEqu').val());
        if(valEquipo>0 && valRecEquipo>0 && vidaUtilEquipo>0)//checar si hay datos en los 3 parametros
        {
          cuotaAnualEquipo=(valEquipo-valRecEquipo)/vidaUtilEquipo
          document.getElementById('cuotaAnualEquipo').innerHTML=formMoneda.format(parseFloat(cuotaAnualEquipo).toFixed(2));
        }
        else
        {
            document.getElementById('cuotaAnualEquipo').innerHTML=formMoneda.format(parseFloat(0).toFixed(2));;
        }
    });
    //Detectar cualquier cambio en el input del valor de recuperación del equipo
    $('#valorRecEqu').on('input',function()
    {
        var valEquipo=parseFloat($('#valorEqui').val());
        var valRecEquipo=parseFloat($('#valorRecEqu').val());
        var vidaUtilEquipo=parseFloat($('#vidaEqu').val());
        if(valEquipo>0 && valRecEquipo>0 && vidaUtilEquipo>0)//checar si hay datos en los 3 parametros
        {
          cuotaAnualEquipo=(valEquipo-valRecEquipo)/vidaUtilEquipo
          document.getElementById('cuotaAnualEquipo').innerHTML=formMoneda.format(parseFloat(cuotaAnualEquipo).toFixed(2));
        }
        else
        {
            document.getElementById('cuotaAnualEquipo').innerHTML=formMoneda.format(parseFloat(0).toFixed(2));;
        }
    });
    //Detectar cualquier cambio en el input de vida del equipo
    $('#vidaEqu').on('input',function()
    {
        var valEquipo=parseFloat($('#valorEqui').val());
        var valRecEquipo=parseFloat($('#valorRecEqu').val());
        var vidaUtilEquipo=parseFloat($('#vidaEqu').val());
        if(valEquipo>0 && valRecEquipo>0 && vidaUtilEquipo>0)//checar si hay datos en los 3 parametros
        {
          cuotaAnualEquipo=(valEquipo-valRecEquipo)/vidaUtilEquipo
          document.getElementById('cuotaAnualEquipo').innerHTML=formMoneda.format(parseFloat(cuotaAnualEquipo).toFixed(2));
        }
        else
        {
            document.getElementById('cuotaAnualEquipo').innerHTML=formMoneda.format(parseFloat(0).toFixed(2));;
        }
    });
});