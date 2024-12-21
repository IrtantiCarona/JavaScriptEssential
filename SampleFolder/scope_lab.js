var globalVar = "I'm a global variabel";
let globalLet = "I'm also global, but scoped with let";
let globalConst = "I'm a global constant";

function show(){
    var blockVar = "I'm a block-scoped var";
    var blockLet = "I'm a block-scoped let";
    var blockConst = "I'm a block-scoped const";

    console.log(blockLet);
    console.log(blockVar);
    console.log(blockConst);
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

show() //Output: tidak eror

// namun, ketika dilakukan output data diluar function akan terjadi eror
// console.log(blockLet);
// console.log(blockVar);
// console.log(blockConst);