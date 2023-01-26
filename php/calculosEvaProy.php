<?php
include("http://localhost/Financieras/php/getPosts.php");
$data=[];
$data["anios"]=array();
$data["anios"]=$aniosProyecto;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
$data["unidadesPorAnio"]=[];
$data["precioPorAnio"]=[];
$data["gastosVentas"]=[];
$data["gastoAdmi"]=[];

$unidadesPorAnio=[];
$preciosPorAnio=[];
$gastosVentas=[];
$gastosAdmi=[];
//Determinacion de las unidades y el precio para cada año y otros calculos(gasto de venta y adm)
$unidadesPorAnio[0]=number_format($unidadesVend,2);
for($i=1;$i<$aniosProyecto;$i++) 
    {
        $unidadesPorAnio[$i]=number_format($unidadesPorAnio[$i-1]*(1+$tasaAnualUni),2);
    }

$preciosPorAnio[0]=number_format($precioUnidad,2);
for($i = 1;$i<$aniosProyecto;$i++) 
{      
    $preciosPorAnio[$i]=number_format($preciosPorAnio[$i-1]*(1+$tasaAnualUni),2);
}

$gastosVentas[0]=number_format($gastosVentUnidad,2);
for ($i=1;$i <$aniosProyecto;$i++) {  
   $gastosVentas[$i]=number_format($gastosVentas[$i-1]*(1+$incrementoAnualGastVenta),2);  
}

$gastosAdmi[0]=number_format($gastosAdmUni,2);
for ($i = 1; $i <$aniosProyecto;$i++) 
{
    $gastosAdmi[$i]=number_format($gastosAdmi[$i-1]*(1+$incrementoAnualGastAdm),2);  
}
$data["unidadesPorAnio"]=$unidadesPorAnio;
$data["precioPorAnio"]=$preciosPorAnio;
$data["gastosVentas"]=$gastosVentas;
$data["gastoAdmi"]=$gastosAdmi;
$datos["anios"]=3;
echo json_encode($datos);
?>