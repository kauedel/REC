class Personagem {
    constructor(nome) {
      this.nome = nome;
      this.vida = 100;
      this.forca = 10;
      this.poder = 20;
      this.defesa = 5;
    }
  
    atacar() {
      return `${this.nome} ataca com força ${this.forca}!`;
    }
  
    defender() {
      return `${this.nome} defendeu o ataque com defesa ${this.defesa}!`;
    }
  }
  
  class MacacoMago extends Personagem {
    constructor(nome) {
      super(nome);
      this.poder = 40;
      this.vida = 80;
      this.defesa = 8;
    }
  
    atacar() {
      return `${this.nome} arremessa bananas mágicas causando ${this.poder} de dano!`;
    }
  
    lancarMagia() {
      return `${this.nome} lança magia com poder ${this.poder}!`;
    }
  
    usarMagia() {
      return `${this.nome} invoca magia ancestral liberando ${this.poder * 1.5} de poder`;
    }
  }
  
  class RussoBruxo extends Personagem {
    constructor(nome) {
      super(nome);
      this.vida = 150;
      this.forca = 25;
      this.defesa = 15;
    }
  
    atacar() {
      return `${this.nome} golpeia com machado causando ${this.forca * 1.8} de dano!`;
    }
  
    beberVodka() {
      this.vida += 10;
      return `${this.nome} bebe vodka e recupera vida! Vida agora: ${this.vida}`;
    }
  
    ataquePesado() {
      return `${this.nome} desfere um ataque pesado com força ${this.forca * 2}!`;
    }
  }
  
  class Cartoleiro extends Personagem {
    constructor(nome) {
      super(nome);
      this.sorte = 30;
    }
  
    atacar() {
      const dano = this.forca + Math.floor(Math.random() * this.sorte);
      return `${this.nome} ataca com sorte, causando ${dano} de dano!`;
    }
  
    preverFuturo() {
      return `${this.nome} diz: Você terá sorte hoje`;
    }
  
    jogarMoeda() {
      const resultado = Math.random() > 0.5 ? "Cara" : "Coroa";
      return `${this.nome} jogou a moeda e caiu: ${resultado}`;
    }
  }
  
  const macaco = new MacacoMago("King Kong");
  const russo = new RussoBruxo("Boris");
  const cartoleiro = new Cartoleiro("Zé");
  
  console.log(macaco.atacar());
  console.log(russo.atacar());
  console.log(cartoleiro.atacar());