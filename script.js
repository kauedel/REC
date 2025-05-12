class Personagem {
    #vida = 100;
    #forca = 10;
    #poder = 20;
    #defesa = 5;
  
    constructor(nome) {
      this.nome = nome;
    }
  
    get vida() {
      return this.#vida;
    }
  
    set vida(valor) {
      this.#vida = valor;
    }
  
    get forca() {
      return this.#forca;
    }
  
    set forca(valor) {
      this.#forca = valor;
    }
  
    get poder() {
      return this.#poder;
    }
  
    set poder(valor) {
      this.#poder = valor;
    }
  
    get defesa() {
      return this.#defesa;
    }
  
    set defesa(valor) {
      this.#defesa = valor;
    }
  
    atacar() {
      return `${this.nome} ataca com força ${this.#forca}!`;
    }
  
    defender() {
      return `${this.nome} defendeu o ataque com defesa ${this.#defesa}!`;
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
    #sorte = 30;
  
    constructor(nome) {
      super(nome);
    }
  
    get sorte() {
      return this.#sorte;
    }
  
    set sorte(valor) {
      this.#sorte = valor;
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