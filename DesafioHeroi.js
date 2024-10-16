class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque;
        switch(this.tipo){
            case 'Mago':
                ataque = "usou Magia";
                break;
            case 'Guerreiro':
                ataque = "usou Espada";
            case 'Monge':
                ataque = "usou Artes Marciais";
            case "Ninja":
                ataque = "usou Shuriken";
        }
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}

