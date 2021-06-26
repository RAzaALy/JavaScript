// Es2020 

// 1. Bigint 

let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum)
console.log(9007199254740991n + 12n)
let newNum = 9007199254740991n + 12n;
console.log(newNum)
console.log(typeof(newNum))


// 2. Dynamic Import 



// 3. Nullish Coalescing

// The nullish coalsscing operator (??) logical operator that returns its might name side opeator when its left hand side operand is null or undefined, and other wise returns its left hand side operand .


const foo = null ?? "defautl string"
console.log(foo)
const foo1 = undefined ?? 'default string'
console.log(foo1)
const foo2 = NaN ?? 'default string'
console.log(foo2)
