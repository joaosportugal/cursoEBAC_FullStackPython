function Carro(marca, modelo, preco, dono, cor) {
    this.marca = marca;
    this.modelo = modelo;
    let _preco = preco;
    this.dono = dono;
    this.cor = cor;

    this.getPreco = function() {
        return _preco
    }

    this.setPreco = function(novoPreco) {
        _preco = novoPreco;
    }

    this.setarImposto = function() {
        const valorComImposto = _preco * 1.05
        _preco = valorComImposto;
    }

    this.acelerar = function(velocidade) {
        if (typeof velocidade === 'number'){
            console.log(`O carro acelerou a ${velocidade}km/h`)
        }
    }

    this.ligar = function() {
        console.log (`O ${this.modelo} ligou agora`);
    }
}

function Polo(dono, cor) {
    Carro.call(this, 'Volkswagen', 'Polo', 85000, dono, cor);
    
    this.setarImposto = function() {
        const valorComImposto = this.getPreco() * 1.2
        this.setPreco(valorComImposto);
    }
}

function Golf(dono, cor) {
    Carro.call(this, 'Volkswagen', 'Golf', 80000, dono, cor);

    this.setarImposto = function() {
        const valorComImposto = this.getPreco() * 1.1
        this.setPreco(valorComImposto);
    }
} 

const carro1 = new Golf('joao', 'preto');
const carro2 = new Polo('laura', 'prata');
const carro3 = new Polo('wiviani', 'dourado');

