function MascaraCep(tCep){
                if(mascaraInteiro(tCep)==false){
                event.returnValue = false;
        }       
        return formataCampo(tCep, '00.000-000', event);
}
function MascaraData(tData){
        if(mascaraInteiro(tData)==false){
                event.returnValue = false;
        }       
        return formataCampo(tData, '00/00/0000', event);
}
function MascaraCPF(tCpf){
        if(mascaraInteiro(tCpf)==false){
                event.returnValue = false;
        }       
        return formataCampo(tCpf, '000.000.000-00', event);
}
function MascaraRG(tRg){
        if((tRg)==false){
                event.returnValue = false;
        }       
        return formataCampo(tRg, '00.000.000-0', event);
}