const coffee = {
type: 'Arabica',
roast: 'dark',
hasCaffeine: true,
aroma: {
notes: ['chocolate', 'nutty', 'spicy']
}
};

// Pure function that returns a new object with a modified aroma 
const addAromaNote = (coffeeObj, note) => ({
...coffeeObj,
aroma: {
notes: [...coffeeObj.aroma.notes, note]
}
});

const newCoffee = addAromaNote(coffee, 'fruity');
console.log(newCoffee.aroma.notes); // ['chocolate', 'nutty', 'spicy', 'fruity']
console.log(coffee.aroma.notes); // ['chocolate', 'nutty', 'spicy']