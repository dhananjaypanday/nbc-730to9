// 1. function Definitions.
function myfn(){

}

// 2. Anonymous function/ function Expression.
//function(){}
var myfn = function(){}
// 3. Named function Expression.
var xyz = function myfn(){}
// 4. Predefind function Function().
var myfn = new Function();
// 5. Arrow function.
var myArrowFn = ()=>{}
// 6. Generator Function.
function* numGenerator(){
    var count = 0;
    while(true){
        count++;
    }
    yield count;
}
function* showNum(){
    yield 1;
    yield 2;
    yield 10;
    yield 100;
}
// 7. IIFE


var itr = showNum();
undefined
showNum()
showNum {<suspended>}
itr.next();
{value: 1, done: false}done: falsevalue: 1[[Prototype]]: Object
itr.next();
{value: 2, done: false}
itr.next();
{value: 10, done: false}
itr.next();
{value: 100, done: false}
itr.next();
{value: undefined, done: true}
VM23:4 Uncaught SyntaxError: Unexpected token '{'
var fn1 = new Function();
undefined
fn1
ƒ anonymous(
) {

}
var fn2 = ()=>console.log('This is Arrow fn');
undefined
fn2();
VM226:1 This is Arrow fn
undefined
var fn2 = (p1,p2)=>console.log('This is Arrow fn',p1,p2);
undefined
fn2(10,20)
VM309:1 This is Arrow fn 10 20
undefined
var fn2 = p1=>p1;
undefined
fn2(10)
10
var fn2 = (p1)=>{
    console.log('Hello');
    console.log('Hi');
    console.log('Bye');
    return p1
}
undefined
fn2(10);
VM637:2 Hello
VM637:3 Hi
VM637:4 Bye
10





var itr = showNum();
undefined
showNum()
showNum {<suspended>}
itr.next();
{value: 1, done: false}done: falsevalue: 1[[Prototype]]: Object
itr.next();
{value: 2, done: false}
itr.next();
{value: 10, done: false}
itr.next();
{value: 100, done: false}
itr.next();
{value: undefined, done: true}
VM23:4 Uncaught SyntaxError: Unexpected token '{'
var fn1 = new Function();
undefined
fn1
ƒ anonymous(
) {

}
var fn2 = ()=>console.log('This is Arrow fn');
undefined
fn2();
VM226:1 This is Arrow fn
undefined
var fn2 = (p1,p2)=>console.log('This is Arrow fn',p1,p2);
undefined
fn2(10,20)
VM309:1 This is Arrow fn 10 20
undefined
var fn2 = p1=>p1;
undefined
fn2(10)
10
var fn2 = (p1)=>{
    console.log('Hello');
    console.log('Hi');
    console.log('Bye');
    return p1
}
undefined
fn2(10);
VM637:2 Hello
VM637:3 Hi
VM637:4 Bye
10
var arr = []
undefined
arr
[]
var arr = [10,56,23,89,41,1,23,7]
undefined
arr
(8) [10, 56, 23, 89, 41, 1, 23, 7]
for(let i=0;i<arr.length;i++){
    console.log('value of arr['+i+']',arr[i]);
}
VM1038:2 value of arr[0] 10
VM1038:2 value of arr[1] 56
VM1038:2 value of arr[2] 23
VM1038:2 value of arr[3] 89
VM1038:2 value of arr[4] 41
VM1038:2 value of arr[5] 1
VM1038:2 value of arr[6] 23
VM1038:2 value of arr[7] 7
undefined
for(let i in arr){
     console.log('value of arr['+i+']',arr[i]);
}
VM1099:2 value of arr[0] 10
VM1099:2 value of arr[1] 56
VM1099:2 value of arr[2] 23
VM1099:2 value of arr[3] 89
VM1099:2 value of arr[4] 41
VM1099:2 value of arr[5] 1
VM1099:2 value of arr[6] 23
VM1099:2 value of arr[7] 7
undefined
for(let i in arr){
     console.log('value of arr['+i+']',i);
}
VM1121:2 value of arr[0] 0
VM1121:2 value of arr[1] 1
VM1121:2 value of arr[2] 2
VM1121:2 value of arr[3] 3
VM1121:2 value of arr[4] 4
VM1121:2 value of arr[5] 5
VM1121:2 value of arr[6] 6
VM1121:2 value of arr[7] 7
undefined
arr.sort();
(8) [1, 10, 23, 23, 41, 56, 7, 89]
arr
(8) [1, 10, 23, 23, 41, 56, 7, 89]
arr.forEach((key,val)=>console.log('value of ',keys,val));
VM1405:1 value of  ƒ keys() { [native code] } 0
VM1405:1 value of  ƒ keys() { [native code] } 1
VM1405:1 value of  ƒ keys() { [native code] } 2
VM1405:1 value of  ƒ keys() { [native code] } 3
VM1405:1 value of  ƒ keys() { [native code] } 4
VM1405:1 value of  ƒ keys() { [native code] } 5
VM1405:1 value of  ƒ keys() { [native code] } 6
VM1405:1 value of  ƒ keys() { [native code] } 7
undefined
arr.forEach((key,val)=>console.log('value of ',key,val));
VM1424:1 value of  1 0
VM1424:1 value of  10 1
VM1424:1 value of  23 2
VM1424:1 value of  23 3
VM1424:1 value of  41 4
VM1424:1 value of  56 5
VM1424:1 value of  7 6
VM1424:1 value of  89 7
undefined
arr.forEach((val,key)=>console.log('value of ',key,val));
VM1444:1 value of  0 1
VM1444:1 value of  1 10
VM1444:1 value of  2 23
VM1444:1 value of  3 23
VM1444:1 value of  4 41
VM1444:1 value of  5 56
VM1444:1 value of  6 7
VM1444:1 value of  7 89
undefined
arr.forEach(val=>val);
undefined
arr.forEach(val=>console.log(val));
VM1525:1 1
VM1525:1 10
2VM1525:1 23
VM1525:1 41
VM1525:1 56
VM1525:1 7
VM1525:1 89
undefined
arr.forEach(val=>);
VM1545:1 Uncaught SyntaxError: Unexpected token ')'
arr
(8) [1, 10, 23, 23, 41, 56, 7, 89]
arr.forEach(val=>val+1);
undefined
arr
(8) [1, 10, 23, 23, 41, 56, 7, 89]
arr.forEach(val=> console.log(val+1));
VM1717:1 2
VM1717:1 11
2VM1717:1 24
VM1717:1 42
VM1717:1 57
VM1717:1 8
VM1717:1 90
undefined
arr.map(val=>val+1)
(8) [2, 11, 24, 24, 42, 57, 8, 90]
var newArr = arr.map(val=>val+1);
undefined
newArr
(8) [2, 11, 24, 24, 42, 57, 8, 90]
newArr.filter(val=>val<20)
(3) [2, 11, 8]