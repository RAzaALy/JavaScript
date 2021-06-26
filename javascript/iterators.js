//Iterators in j$:
function fruitIterator(values) {
    let nextIndex = 0;
    //we will return an object:
    return {
        next: function () {
            if (nextIndex < values.length) {
                //we will return below object:
                return {
                    values: values[nextIndex++],
                    done: false
                }
                //we will return below object with done only:
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
const arr = ["Apple", "Grapes", "Banana", "Orange", "Mango"];
console.log(arr);
//Using the iterator:
let fruit = fruitIterator(arr);
console.log(fruit.next().values);
console.log(fruit.next().values);
console.log(fruit.next().values);
console.log(fruit.next().values);
console.log(fruit.next().values);
console.log(fruit.next().values);