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

const searchCandies = (arrayToSearch, prefix, maxPrice) => {
    // Convert prefix to lowercase for comparison
    const lowerCasePrefix = prefix.toLowerCase();

    const filtered = arrayToSearch.filter((candy) => {
        // Convert candy names to lowercase for comparison
        const lowerCaseCandy = candy.name.toLowerCase(); 
        return lowerCaseCandy.startsWith(lowerCasePrefix) && candy.price < maxPrice;
    });
    
    // Return new array containing only candy names meeting the criteria
    const result = filtered.map(candy => candy.name);
    return result;
};

module.exports = searchCandies;