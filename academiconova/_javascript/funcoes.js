/* essa função serve para a mudança de icones */
function mudaFoto (foto)
{
document.getElementById("icone").src=foto;
}
/* essa função serve para a mudança de fotos automatica */
var a= 0;
carousel();


function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    a++;
    if (a > x.length) {a= 1}    
    x[a-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

/* essa função serve para a validação do formulario  */

function validaForm()
{
d = document.cadastro;
//validar nome
if (d.nome.value == ""){
alert("O campo NOME  deve ser preenchido!");
d.nome.style.backgroundColor="red";
d.nome.style.color="#ffffff";
d.nome.focus();
return false;
}

//validar user


if (d.email.value == ""){
alert("O campo EMAIL  deve ser preenchido!");

d.email.style.backgroundColor="red";
d.email.style.color="#ffffff";
d.email.focus();
return false;
}

//validar email(verificao de endereco eletrônico)
parte1 = d.email.value.indexOf("@");
parte3 = d.email.value.length;
if (!(parte1 >= 3 && parte3 >= 9)) {
alert ("O campo EMAIL  deve ser conter um endereco eletronico!");
d.email.style.backgroundColor="red";
d.email.style.color="#ffffff";
d.email.focus();
return false;
}
if (d.mensagem.value == ""){
alert("Digite nos a mensagem!");
d.mensagem.style.backgroundColor="red";
d.mensagem.style.color="#ffffff";
return false;
d.conheceu.focus();
}
document.cadastro.submit();

}