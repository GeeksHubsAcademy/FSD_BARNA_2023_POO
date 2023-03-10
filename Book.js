// Definir Clase

// class Book {
//     // PROPIEDADES DE LA CLASE
//     title
//     author
//     editorial
//     price

//     constructor(title, author, editorial, price) {
//         // console.log("soy el constructor");
//         this.title = title
//         this.author = author
//         this.editorial = editorial
//         this.price = price
//     }

//     //METODOS DE LA CLASE
//     getFullBook() {
//         return `El libro ${this.title} lo escribio ${this.author}`
//         // return "El libro " + this.title + " lo escribio " + this.author
//     }
// }



// // Clase con propiedades privadas
// class Book {
//     // PROPIEDADES DE LA CLASE
//     #title
//     #author
//     #editorial
//     #price

//     constructor(title, author, editorial, price) {
//         // console.log("soy el constructor");
//         this.#title = title
//         this.#author = author
//         this.#editorial = editorial
//         this.#price = price
//     }

//     //METODOS DE LA CLASE
//     getFullBook() {
//         return `El libro ${this.#title} lo escribio ${this.#author}`
//         // return "El libro " + this.title + " lo escribio " + this.author
//     }

//     // Métodos getters y setters
//     getTitle() {
//         return this.#title;
//     }

//     setTitle(newTitle) {
//         this.#title = newTitle;
//     }

//     getAuthor() {
//         return this.#author;
//     }    

//     getAllBookObject() {
//         return {
//             title: this.#title,
//             author: this.#author
//         }
//     }

//     toArray() {
//         return [
//             this.#title,
//             this.#author,
//             this.#editorial,
//             this.#price
//         ]
//     }
// }




// const book = new Book("El Hobbit", "Tolkien", "Anaya", 19.99);
// // const book2 = new Book("El alquimista", "Paolo Coelho", "Anaya", 19.94)
// // const book2 = new Book();

// // book.title = "MAtrix";
// // book.setTitle("El Señor de los Anillos")
// // console.log(book.getTitle());
// // console.log(book.getAuthor());
// // console.log(book2);

// console.log(book.toArray());
// // console.log(book2.getFullBook2());



class Book {
    // PROPIEDADES DE LA CLASE
    title
    author
    editorial
    price

    constructor(title, author, editorial, price) {
        // console.log("soy el constructor");
        this.title = title
        this.author = author
        this.editorial = editorial
        this.price = price
    }

    //METODOS DE LA CLASE
    getFullBook() {
        return `El libro ${this.title} lo escribio ${this.author}`
        // return "El libro " + this.title + " lo escribio " + this.author
    }

    // Métodos getters y setters
    getTitle() {
        return this.title;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    getAuthor() {
        return this.author;
    }    

    getAllBookObject() {
        return {
            title: this.title,
            author: this.author
        }
    }

    toArray() {
        return [
            this.title,
            this.author,
            this.editorial,
            this.price
        ]
    }
}


class Comic extends Book{
    genre
    volume

    constructor(title, author, editorial, price, genre, volume) {
        super(title, author, editorial, price)
        this.genre = this.validateGenre(genre),
        this.volume = volume
    }

    toArray() {
        return [
            this.title,
            this.author,
            this.editorial,
            this.price,
            this.genre,
            this.volume
        ]
    }

    acelerar() {
        this.velocidad += 10
    }

    frenar() {
        this.velocidad = 0
    }

    aparcar() {
        console.log('APARCAO');
        // if (velocidad > 0) {
        //     console.log('No puedes APARCAR, COCHE EN MOVIMIENTO!!!');
        // } else {
        //     console.log('APARCAO');
        // }
    }
}

const comic = new Comic('One Piece', "Ouchida Oda", "planeta", 12.90, "667582417", 52 );

console.log(comic.toArray());