function getMotorbike (){
    $.ajax({
        url:"http://localhost:8080/api/Motorbike/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            
            pintarMotorbike(respuesta);
        }
    });

}

function postMotorbike(){
    let cajas = {
        name:$("#name").val(),
        brand:$("#brand").val(),
        year:$("#year").val(),
        description:$("#description").val(),
        category:{id: +$("#select-categoria").val()}
    };
    console.log(cajas);
    $.ajax({
        url:"http://localhost:8080/api/Motorbike/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente la moto");
            window.location.reload();
    
        }
    });

}

function putMachine(){

}

function deleteMachine(){
    
}

////////////////////////////////////////////////////////

function pintarMotorbike(json_motorbike){
    let myTable="<table>";
    for(i=0;i<json_motorbike.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+json_motorbike[i].name+"</td>";
        myTable+="<td>"+json_motorbike[i].brand+"</td>";
        myTable+="<td>"+json_motorbike[i].year+"</td>";
        myTable+="<td>"+json_motorbike[i].description+"</td>";
        myTable+="<td>"+json_motorbike[i].category.name+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMoto").html(myTable);

}

function getCategoria_Motorbike(){
    $.ajax({
        url:"http://144.22.53.133:8081/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-categoria");
            $.each(respuesta, function(id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>' )
            })
        }
    });
}