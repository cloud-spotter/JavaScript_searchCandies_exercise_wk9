const searchCandies = require('./searchCandies.js');

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

describe ('searchCandies', () => {
    it('returns an array of objects that start with the given substring',
    () => {
        expect(searchCandies(candies, 'Ma', 10)).toEqual(['Mars', 'Maltesers']);
    });

    it(`returns an array of objects that start with the given substring,
    but whose price is less than the maximum price`,
    () => {
        expect(searchCandies(candies, 'Ma', 2)).toEqual(['Mars']);
    });

    it('filters the candies array by "S" and 10', () => {
        expect(searchCandies(candies, 'S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst'])
    });

    it('filters the candies array by "S" and 4', () => {
        expect(searchCandies(candies, 'S', 4)).toEqual(['Skitties', 'Skittles'])
    });

    it('filters the candies array whether the prefix is upper or lowercase', () => {
        expect(searchCandies(candies, 's', 4)).toEqual(['Skitties', 'Skittles'])
    });
});

/* How strong are these 'it' string descriptions?
Investigate: ask a coach/peer to glance over this code for improvements,
with the 'it' statements particularly in mind. */
