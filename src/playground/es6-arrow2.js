const user = {
    name: 'Tejas',
    cities : ['Jalgaon', 'Aurangabad', 'Pune'],
    printLivedPlaces() {
        return this.cities.map((city)=> this.name + ' has lived in ' + city);
    }
};

console.log(user.printLivedPlaces());

const multiplier = {
    numbers: [1, 5, 10],
    tomul: 3,
    multiply() {
        const newNumbers = this.numbers.map((number) => number*this.tomul);
        return newNumbers;
    }
};
console.log(multiplier.multiply());