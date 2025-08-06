export interface Animal {
    nome: string;
    idade: number;
    emitirSom(): void;
}

export interface Mamifero extends Animal {
    tipoDePelo: string;
}

export interface Ave extends Animal {
    tipoDeBico: string;
}