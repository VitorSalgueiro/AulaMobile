var Conta = require('./Conta.js');
var Corrente = require('./Conta.js');

var Corrente = function(){
    this.vencimento = new Date('2020-03-11');
    this.dataAtual = new Date()
    this.limite = 500;
    this.taxa = 2;
}

Corrente.prototype.Limite = function(saque){
    if(this.saque(saque) <= this.limite + this.saldo){
        this.saldo -= saque;
    }else{
        console.log("Hoje ");não
    }
}

Corrente.prototype.Juros = function(){
    if(this.saldo < 0 && this.vencimento.getDay() ==  this.dataAtual.getDay()){
        return this.saldo = this.saldo - this.saldo * (this.taxa/100);
    }
}

function Corrente(){
    Conta.call(this);
}

Corrente.prototype = new Conta();

Corrente.prototype.constructor = Corrente;