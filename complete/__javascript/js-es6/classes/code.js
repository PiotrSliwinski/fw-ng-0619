
// ES6 class syntax provides a cleaner way to work with the underlying 
// prototypal inheritance.

class People {

    constructor(path) {
        this.getData(path)
    }

    static describe() {
        console.log("Class reads the randomuser.me API.")
    }

    getData(path) {
        fetch(path)
            .then(response => response.json())
            .then(data => this.draw(data))
            .catch(error => console.log(error))
    }

    draw(data) {
        this.flex = document.querySelector(".flex");
        this.createPeople(data.results)
    }

    createPeople(people) {
        people.forEach(this.createPerson.bind(this))
        // people.forEach( (p) => this.createPerson(p))
    }

    createPerson(p) {

        let { first, last } = p.name;
        let { city } = p.location;
        let { medium } = p.picture;
        let { email } = p;

        this.drawPerson(first, last, city, medium, email);
    }

    drawPerson(first, last, city, medium, email) {

        let person =
            `<section class="person">
                <p>${first} ${last}</p>
                <img src=${medium} alt=${last}/>
                <p>${city}</p>
                <p>${email}</p>
            </section>`

        this.flex.innerHTML += person

    }
}

let people = new People("https://randomuser.me/api/?results=4");

// Static methods are called on the class, not instantiated objects.
People.describe();