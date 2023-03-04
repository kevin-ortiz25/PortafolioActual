function validar(){
    let input1 = document.querySelector(".input1").value;
    let input2 = document.querySelector(".input2").value;
    let input3 = document.querySelector(".input3").value;
    let input4 = document.querySelector(".input4").value;
    let input5 = document.querySelector(".input5").value;

    if(input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 != ""){
        alert("Mensaje enviado, muchas gracias");
        window.close();
        window.open("index.html");
    }
    else{
        alert("No se pudo enviar el mensaje")
    }
}