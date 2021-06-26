// What is JSON ? 

// json ---> javascript object notation 

// 1. json.stringify converts the object into string .

const my_obj = {key_1 : 'Some text',key_2 : true , key_3 : 5}
const Json_object_format = JSON.stringify(my_obj)
console.log(typeof(my_obj))
console.log(typeof(Json_object_format))
console.log(Json_object_format)


// 2. json.parse converts the string into json format . 

const my_object = JSON.parse(Json_object_format);
console.log(my_object)
console.log(typeof(my_object))




