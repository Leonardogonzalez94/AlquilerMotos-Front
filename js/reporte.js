function traerReporteStatus(){
    $.ajax({
        url:"http://144.22.53.133:8081/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            pintarStatus(respuesta);
        }
    });
}

function  pintarStatus(json_motorbike){

    let myTable="<table>";

        myTable+="<tr>";
        myTable+="<td>"+json_motorbike.completed+"</td>";
        myTable+="<td>"+json_motorbike.cancelled+"</td>";
        myTable+="</tr>";
  
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function traerReportesFechas(){
    $.ajax({
        url:"http://144.22.53.133:8081/api/Reservation/report-dates/{dateOne}/{dateTwo}",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            //pintarCategoria(respuesta);
        }
    });
}

function traerReportesClientes(){
    
    $.ajax({
        url:"http://144.22.53.133:8081/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            //pintarCategoria(respuesta);
        }
    });
}