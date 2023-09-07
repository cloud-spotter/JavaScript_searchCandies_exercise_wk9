const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
];

const searchCandies = (arrayToSearch, prefix) => {
    const filteredByPrefix = arrayToSearch.filter((candy) => candy.name.startsWith(prefix));
    let result = []
    filteredByPrefix.forEach((element) => {
        //result = result.concat(element.name); 
        //.concat returns a new array (.push more appropriate here)
        result.push(element.name)
    });
    return result;
};

console.log(searchCandies(candies, 'Ma'))

module.exports = searchCandies;