$('#boton').click(()=>{
    $('.contenedorDivAdd').empty()
    $.get(`http://localhost:5000/amigos/`,function(data){
        data.forEach(obj => $(`<div id =${obj.id} class ='divAdd'>
                                <div class='names'><h3>Nombre:${obj.name}</h3></div>
                                <br>
                                <p>${obj.email}</p>
                                <br>
                                <p>Age:${obj.age}</p>
                            </div>`).appendTo('.contenedorDivAdd'))
        
})
})
$('#search').click(()=>{
    let input = $('#input')[0] // como esto es ajax, no se puede usar un querySelector
    $.get(`http://localhost:5000/amigos/${input.value}`,(data)=>{
        $(`<div id =${data.id} class ='divAdd'>
            <h3>Nombre:${data.name}</h3>
            <p>Correo:${data.email}</p>
            <p>Edad:${data.age}</p>
         </div>)`).appendTo('.contenedorDivAdd');
        input.value = ''
        })
})

$(`#delete`).click(()=>{
    let valor = $('input')[1];
    console.log(valor.value);
    $(`#${valor.value}`).remove();
    valor.value =  '';
    
})
