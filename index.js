
var saludo = "Hola Bienvenido al Formulario";
    alert(saludo);

//funcion
function mostrarInputs(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let masculino = document.getElementById("masculino").checked;
    let femenino = document.getElementById("femenino").checked;
    let tyc = document.getElementById('tyc').checked;
    let resultado = masculino + femenino;
    
    
    //condicionales de ingreso de datos
    if(nombre == "" ){
        alert("Por favor ingresa el nombre...")
    }
    if(nombre == "" ){
        alert("Por favor ingresa el apellido...")
    }
    

   if(resultado == 0){
        alert("Por favor selecciona el sexo...")
   }

    if(tyc == false){
        alert("Por favor acepta los terminos...")
    }else{
        alert("Gracias por diligenciar el formulario correctamente " + nombre + " " + apellido);
    }

     //visualizador de ingresos
     console.log(nombre);
     console.log(apellido);
     console.log(resultado);
     console.log(tyc);

    return false;
}
