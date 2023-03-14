alert("Solo los administradores pueden registrarse e iniciar sesión, si eres usuario dale click al boton 🏠︎");

function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^\S+@\S+\.\S+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!emailRegex.test(email)) {
        alert("Ingrese una dirección de e-mail válida.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Ingresa una contraseña que contenga: al menos 8 caractares, 1 Mayúscula, 1 Minúscula, 1 Número y No puede haber espacios en blanco.");
        return false;
    }

    login();
    limpiarFormulario();
    return false;
}

function login() {

    if(localStorage.getItem(email)){
        var objetoUsuario = JSON.parse(localStorage.getItem(email))
        if(objetoUsuario.password==password){
            alert("existe usuario y coincide password")
            window.location.href='../../html/inicio/inicio-a.html';
        } else {
            alert("existe correo pero password no coincide");
        }

    }
    else{
        alert("email no coincide")
    }

    console.log("Cuenta iniciada!");

}
function limpiarFormulario() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}