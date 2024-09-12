
const arr = ['Odin', 'Sigurd', 'Bjorn', 'Mads', 'Ragnar'];

console.log('The first element of the array: ', arr[0]);
console.log('The name Ragnar is on this index in the array: ', arr.indexOf('Ragnar'));
console.log('This is what happens when you use indexOf with a non-existant item (returns -1): ', arr.indexOf('Thor'));

arr.push('Thor');
console.log('array after addition of thor: ', arr);

console.log('These are the first 3 items in arr: ', arr.slice(0, 3));

const loki = {
    firstname: 'Loki',
    lastname: 'Odinson',
    email: 'mythical-loki123@hotmail.com'
}
const Fenrir = {
    fistname: 'Fenrir',
    lastname: 'Wolfdog',
    email: 'mythical-Fenrir123@hotmail.com'
}

arr.push(loki);
arr.push(Fenrir);
console.log("arr after adding loki and his wolf: ", arr);
console.log("Loki's email: ", arr[6].email);