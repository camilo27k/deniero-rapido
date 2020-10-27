let lineaCredito = {
    valor:0,
    valor_formato: function(){
        return new Intl.NumberFormat(
            'es-PE',{
                style:'currency', currency:'PEN'
            }
        ).format(this.valor);
    }
}

let simulacion = {
    lineaCredito: 1000.00,
    porcentajeComision:7.5,
    lineaCredito_formato: function(){
        return new Intl.NumberFormat(
            'es-PE',{
                style:'currency', currency:'PEN'
            }
        ).format(this.lineaCredito);
    },
    comision: function(){
        return this.lineaCredito >0 ? (this.lineaCredito * this.porcentajeComision) /100 :0;
    },
    deposito: function(){
        return this.lineaCredito >0 ? this.lineaCredito -this.comision() :0;
    },
    deposito_formato: function(){
        return new Intl.NumberFormat(
            'es-PE',{
                style:'currency', currency:'PEN'
            }
        ).format(this.deposito());
    },
    comision_formato: function(){
        return new Intl.NumberFormat(
            'es-PE',{
                style:'currency', currency:'PEN'
            }
        ).format(this.comision());
    }
    
}


document.getElementById('linea-credito').onkeyup = function(){
    
    simulacion.lineaCredito = this.value;
    //alert(this.value);
    document.getElementById('deposito').innerHTML = simulacion.deposito_formato(); 
    document.getElementById('comision').innerHTML = simulacion.comision_formato(); 
}



btn_empezar.onclick = function(){
    // alert("jeee")
    if(simulacion.lineaCredito < 50){

        document.getElementById("monto_error").innerHTML="El monto mínimo es de S/ 50.00";
        document.getElementById("linea-credito").focus()
        // alert(`monto minimo 50`)
    }else{

        url =`https://api.whatsapp.com/send?phone=51947221595&text=Hola!%20quiero%20retirar%20${simulacion.lineaCredito_formato()}%20de%20mi%20tarjeta%20de%20crédito,%20mi%20nombre%20es`;
        window.open(url);
    }
    

}