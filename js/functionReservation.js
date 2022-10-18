function getReservaciones (){
    $.ajax({
        url:"http://144.22.53.133:8081/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            
            pintarReservaciones(respuesta);
        }
    });

}

function postReservaciones(){
    if($("#startDate").val().length==0 || $("#devolutionDate").val().length==0 ){
        alert("Todos los campos son obligatorios");
    }else{
    
    let cajas = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        client:{idClient: +$("#select-client").val()},
        motorbike:{id: +$("#select-motorbike").val()}
    };
    $.ajax({
        url:"http://144.22.53.133:8081/api/Reservation/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente la reserva");
            window.location.reload();
    
        }
    });
    }

}

function putReservaciones(idDesdeBoton){
    console.log(idDesdeBoton);
    if($("#startDate").val().length==0 || $("#devolutionDate").val().length==0 ){
        alert("Todos los campos son obligatorios");
    }else{
    
    let cajas = {
        idReservation:idDesdeBoton,
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        client:{idClient: +$("#select-client").val()},
        motorbike:{id: +$("#select-motorbike").val()}
    };
    $.ajax({
        url:"http://144.22.53.133:8081/api/Reservation/update",
        type:"PUT",
        datatype:"JSON",
        contentType:"application/json",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se actualizo correctamente la informacion de la reservation");
            window.location.reload();
    
            }
        });
    }
}

function deleteReservaciones(data){
    console.log(data);
    let myData={
        id:data
    };
    $.ajax({
        url:"http://144.22.53.133:8081/api/Reservation/"+data,
        type:"DELETE",
        datatype:"JSON",
        data: JSON.stringify(myData),
        contentType:"application/json",
        success:function(respuesta){
            alert("se borro correctamente la reservacion");
            window.location.reload();
        }
    });

}
//////////////////////////////////////////////
function  pintarReservaciones(json_motorbike){
    let myTable="<table>";
    for(i=0;i<json_motorbike.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+json_motorbike[i].startDate+"</td>";
        myTable+="<td>"+json_motorbike[i].devolutionDate+"</td>";
        myTable+="<td>"+json_motorbike[i].status+"</td>";
        myTable+="<td>"+json_motorbike[i].motorbike.name+"</td>";
        myTable+="<td>"+json_motorbike[i].client.name+"</td>";
        myTable+="<td> <button onclick='putReservaciones("+json_motorbike[i].idReservation+")'> Actualizar</button>"
        myTable+="<td> <button onclick='deleteReservaciones("+json_motorbike[i].idReservation+")'> Borrar</button>"
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

///////////////////////////////////////////////

function getClient_Reservation(){
    $.ajax({
        url:"http://144.22.53.133:8081/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-client");
            $.each(respuesta, function(id, name){
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>' )
            })
        }
    });
}

function getMotorbike_Reservation(){
    $.ajax({
        url:"http://144.22.53.133:8081/api/Motorbike/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-motorbike");
            $.each(respuesta, function(id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>' )
            })
        }
    });
    
}