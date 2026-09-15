let student ={
    name: "Ankit Anand",
    age: 22,
    city: "Mumbai"
};

console.log(student)
console.log(student.age)

console.log(student['name'])



// # print specific info and Nasted objects

let product = {
    company: 'Flipkart',
    itemName: 'T-shirt',
    price: 3992,

    rating: {
        stars: 4.5,
        noOfItems: 87
    },
    displayPrice: function() {
        // return `${this.price.toFixed(2)}`;

        console.log(`Price of product ${product.price}`)
    }
};

product.displayPrice()

//===Autoboxing
console.log(`KG coding`.toUpperCase())
console.log(`KG coding`.replace('KG', 'Learning'))

