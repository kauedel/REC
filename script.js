
class Personagem {
    constructor(nome) {
      this.nome = nome;  
      this.vida = 100;   
      this.forca = 10;   
      this.poder = 20;   
    }
  
    
    atacar() {
      return `${this.nome} ataca com força ${this.forca}!`;
    }
  }
  
  
  class MacacoMago extends Personagem {
    constructor(nome) {
      super(nome); 
      this.poder = 40;   
      this.vida = 80;    
    }
  
    
    lancarMagia() {
      return `${this.nome} lança magia com poder ${this.poder}`;
    }
  }
  
  
  class RussoBruxo extends Personagem {
    constructor(nome) {
      super(nome);
      this.vida = 150;  
      this.forca = 25;  
    }
  
    
    beberVodka() {
      this.vida += 10;  
      return `${this.nome} bebe vodka e recupera vida Vida agora: ${this.vida}`;
    }
  }
  
  
  class Cartoleiro extends Personagem {
    constructor(nome) {
      super(nome);
      }
  
    
    preverFuturo() {
      return `${this.nome} diz: Você terá sorte hoje`;
    }
  }
  
  
  const macaco = new MacacoMago("King Kong");
  const russo = new RussoBruxo("Boris");
  const cartoleiro = new Cartoleiro("Zé");
  
  
  console.log(macaco.atacar());
  console.log(macaco.lancarMagia());
  
  console.log(russo.atacar());
  console.log(russo.beberVodka());
  
  console.log(cartoleiro.atacar());
  console.log(cartoleiro.preverFuturo());