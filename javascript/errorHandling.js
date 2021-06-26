let a="Ali Raza";
a=undefined;
if(a!=undefined){
   throw new Error("There is an error occured");
}
else{
    console.log("This is undefined");
}
try {
    null.console;
    console.log("Control in Try Block");
    //  functionali();
} catch (error) {
    console.log("Are you Okay!");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("Finally we will run this:");
}