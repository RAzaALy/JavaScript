console.log("Maps in java$cript");

//Maps In Java$cript:We can use any type of key and value:
const map = new Map();
const key1 = 'mystr', key2 = {}, key3 = function () {};
//setting map values:
map.set(key1, "This a string:");
map.set(key2, "This a blank object:");
map.set(key3, "This a empty function:");
console.log(map);
//getting map values:
let value = map.get(key3);
console.log(value);
//getting map size:
console.log(map.size);
//You can use for of loops to iterate key an value of Map:
for (let [key, value] of map) { 
    console.log(key, value);
}
for (let key of map.keys()) {
    console.log('Key is', key);
}
for (let value of map.values()) {
    console.log('value is', value);
}
//You can use for each loop:
map.forEach((value, key) => {
    console.log('key is', key);
    console.log('value is', value);
});
//Converting map to array:
let arr = Array.from(map);
console.log('Map to array is:', arr);
//Converting map keys to array:
let arrKey = Array.from(map.keys());
console.log('Map to Key is:', arrKey);
//Converting map value to array:
let arrValue = Array.from(map.values());
console.log('Map to Value is:', arrValue);


