async function fun() {
    console.log('Inside fun function:');
    let url = "ali.txt";
    const response = await fetch(url);
    console.log("Before response");
    const users = await response.text();
    console.log('After resolved');
    return users;
}
console.log("Before calling fun function:");
let a = fun();
console.log("After calling fun function:");
console.log(a);
a.then(data => console.log(data));
console.log('The last Line of j$ file');
