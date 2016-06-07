

function validaForm(){
           d = document.cadastro;
           //validar nome
           if (d.tNome.value == ""){
                     alert("O campo Nome  deve ser preenchido!");
                     d.tNome.style.backgroundColor="#0000CD";
                     d.tNome.style.color="#ffffff";
                    d.tNome.focus();
                     return false;
           }
		   if (d.tRg.value == ""){
                     alert("O campo RG  deve ser preenchido!");
                     d.tRg.style.backgroundColor="#0000CD";
                     d.tRg.style.color="#ffffff";
                     d.tRg.focus();
                     return false;
           }
		   if (d.tCpf.value == ""){
                     alert("O campo CPF  deve ser preenchido!");
                     d.tCpf.style.backgroundColor="#0000CD";
                     d.tCpf.style.color="#ffffff";
                    d.tCpf.focus();
                     return false;
           }if (d.tRua.value == ""){
                     alert("O campo RUA deve ser preenchido!");
                     d.tRua.style.backgroundColor="#0000CD";
                     d.tRua.style.color="#ffffff";
                     return false;
                     d.tRua.focus();
           }
		   if (d.tCidade.value == ""){
                     alert("O campo CIDADE deve ser preenchido!");
                     d.tCidade.style.backgroundColor="#0000CD";
                     d.tCidade.style.color="#ffffff";
                     return false;
                     d.conheceu.focus();
           }
		   if (d.tBairro.value == ""){
                     alert("O campo BAIRRO deve ser preenchido!");
                     d.tBairro.style.backgroundColor="#0000CD";
                     d.tBairro.style.color="#ffffff";
                     return false;
                     d.tBairro.focus();
           }
		   if (d.tCep.value == ""){
                     alert("O campo CEP deve ser preenchido!");
                     d.tCep.style.backgroundColor="#0000CD";
                     d.tCep.style.color="#ffffff";
                     return false;
                    d.tCep.focus();
           }
		   if (d.tSemestre.value == ""){
                     alert("O campo CEP deve ser preenchido!");
                     d.tSemestre.style.backgroundColor="#0000CD";
                     d.tSemestre.style.color="#ffffff";
                     return false;
                    d.tSemestre.focus();
           }
            if (d.tEmail.value == ""){
                   alert("O campo EMAIL  deve ser preenchido!");
                   d.tEmail.style.backgroundColor="#0000CD";
                   dt.tEmail.style.color="#ffffff";
				   d.tEmail.focus();
				   return false;
         }
         //validar email(verificao de endereco eletrônico)
         parte1 = d.tEmail.value.indexOf("@");
         parte3 = d.tEmail.value.length;
         if (!(parte1 >= 3 && parte3 >= 9)) {
                   alert ("O campo EMAIL  deve ser conter um endereco eletronico!");
                   d.tEmail.style.backgroundColor="#0000CD";
                   d.tEmail.style.color="#ffffff";
                   d.tEmail.focus();
                   return false;
         }
document.cadastro.submit();
}













/*essa função é para validar o semestre*/
function validaForm2(){
           e = document.cadastro2;
           //validar nome
           if (e.cSemestre.value == ""){
                     alert("O campo Semestre  deve ser preenchido!");
                     e.cSemestre.style.backgroundColor="#0000CD";
                     e.cSemestre.style.color="#ffffff";
                   e.cSemestre.focus();
                     return false;
           }
		   document.cadastro2.submit();
}
/*essa função é para validar a nota*/
function validaForm3(){
           f = document.cadastro3;
           //validar nome
           if (f.cNota.value == ""){
                     alert("O campo NOTA  deve ser preenchido!");
                     f.cNota.style.backgroundColor="#0000CD";
                     f.cNota.style.color="#ffffff";
                   f.cNota.focus();
                     return false;
           }
		   document.cadastro3.submit();
}






/*essa função é para validar a DATA*/
function validaForm4(){
           g = document.cadastro4;
           //validar nome
           if (g.cData.value == ""){
                     alert("O campo DATA deve ser preenchido!");
                     g.cData.style.backgroundColor="#0000CD";
                     g.cData.style.color="#ffffff";
                   g.cData.focus();
                     return false;
           }
           if (g.cFalta.value == ""){/*essa função é para validar o numero de faltas*/
                     alert("O campo NUMERO DE FALTAS deve ser preenchido!");
                     g.cFalta.style.backgroundColor="#0000CD";
                     g.cFalta.style.color="#ffffff";
                   g.cFalta.focus();
                     return false;
           }
		   document.cadastro4.submit();
}








/*essa função é para validar o Titulo do Projeto*/
function validaForm5(){
           h = document.cadastro5;
           //validar nome
           if (h.cProjeto.value == ""){
                     alert("O campo Titulo do Projeto deve ser preenchido!");
                     h.cProjeto.style.backgroundColor="#0000CD";
                     h.cProjeto.style.color="#ffffff";
                   h.cProjeto.focus();
                     return false;
           }
           if (h.cDescricao.value == ""){/*essa função é para validar s descrição do projeto*/
                     alert("O campo descrição do projeto deve ser preenchido!");
                     h.cDescricao.style.backgroundColor="#0000CD";
                     h.cDescricao.style.color="#ffffff";
                   h.cDescricao.focus();
                     return false;
           }
		   document.cadastro5.submit();
}