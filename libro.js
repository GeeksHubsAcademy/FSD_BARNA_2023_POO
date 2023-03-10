// OBJETOS LITERALES

const book = {
    title: "El aqlquimista",
    autor: "Paolo Coelho",
    editorial: "Anagrama",
    precio: 19.90,
    getFullBook() {
       return "El libro " + this.title + " lo escribio " + this.autor
    }
}

const book2 = {
    title: "El Hobbit",
    autor: "Tolkien",
    editorial: "Anaya",
    precio: 15.90,
    getFullBook() {
       return "El libro " + this.title + " lo escribio " + this.autor
    }
}


book.title = "El Hobbit";
book.hola = "hola"

console.log(book.getFullBook());


