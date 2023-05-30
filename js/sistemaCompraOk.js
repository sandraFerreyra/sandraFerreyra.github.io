var valorRealTicket = 200;
var btn_borrar = document.querySelector("#btn_borrar");
var btn_resumen = document.querySelector("#btn_resumen");
var insertarDescuento = document.querySelector("#insertarMontoPagar");
btn_resumen.addEventListener("click",function(){
    var ticketElegido = document.querySelector("#elegirTicket").value;
    var cantidad = parseInt(document.querySelector("#cantidad").value);
    if(ticketElegido === "Estudiante"){ 
        console.log("Categoría estudiante capturada");
        if(cantidad >0){
            insertarDescuento.innerHTML = cantidad * ((valorRealTicket) - (valorRealTicket * 80 / 100));
        }else{
            insertarDescuento.innerHTML = " -Debe agregar la cantidad de tickets correcta que desea comprar-";
        } 
    }else if(ticketElegido === "Trainee"){  
        console.log("Categoría Trainee capturada");
        if(cantidad > 0){
            insertarDescuento.innerHTML = cantidad * ((valorRealTicket) - (valorRealTicket * 50 / 100));
        }else{
            insertarDescuento.innerHTML = " -Debe agregar la cantidad de tickets correcta que desea comprar-";
        }
    }else{
        console.log("Categoría Junior capturada");
        if(cantidad > 0){
            insertarDescuento.innerHTML =  cantidad * ((valorRealTicket) - (valorRealTicket * 15 / 100));
        }else{
            insertarDescuento.innerHTML = " -Debe agregar la cantidad de tickets correcta que desea comprar-";
        }
    }
});
btn_borrar.addEventListener("click",function(){
    cantidad.value = "";
    insertarDescuento.innerHTML = "";
})