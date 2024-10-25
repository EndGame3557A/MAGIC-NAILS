function loguear()
{

let user=document.getElementById("nombres").value;
let userr=document.getElementById("apellidos").value;
let clave=document.getElementById("contraseña").value;

if(user=="Jose"&& userr=="Askar" &&clave=="1234")
{
    window.location="usuario.html"
}

else if(user=="samuel"&& userr=="lopez" &&clave=="5678")
    {
        window.location="admin.html"
    }

else
{
    alert("datos incorrectos");
}
}