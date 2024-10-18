///////////////////////////Foreach//////////////////

// 1
// let arr = [1, 2, 3, 4, 5]

// arr.forEach(function(v){
//     console.log(v);

// })

// 2
// let arr = [1, 2, 3, 4, 5]

// arr.forEach(function(v){
//     console.log(v + 5);

// })

// 3
// let arr = [1, 2, 3, 4, 5]

// arr.forEach(function(v){
//    if (v % 2 == 1) {
//     console.log(v);

//    }
// })

// 4
// let arr = [1, 2, 3, 4, 5]
// let sum = 0;
// arr.forEach(function(v){
//     return sum += v
// })
// console.log(sum);

///////////////////////////map//////////////////////

// 1
// let arr = [1, 2, 3, 4, 5]
// let res = arr.map(function(v){
//     return v * 2
// })
// console.log(res);

// 2
// let arr = [1, 2, 3, 4, 5]
// let res = arr.map(function(v){
//     return v ** 2
// })
// console.log(res);

// 3
// let arr = ['salom', 'xayr', 'olma']
// let res = arr.map(function(v){
//     return v.toUpperCase()
// })
// console.log(res);

// 4
// let arr = [1, 2, 3, 4, 5]
// let res = arr.map(function(v){
//     return -v
// })
// console.log(res);

// 5
// let arr = [1, 2, 3, 4, 5]
// let res = arr.map(function(v){
//     return v + 3
// })
// console.log(res);

///////////////////////////filter///////////////////

// 1
// let arr = [1, 2, 3, 4, 5]
// let res = arr.filter(function(v){
//     return v % 2 == 0
// })
// console.log(res);

// 2
// let arr = [-1, 2, -3, 4, -5];
// let res = arr.filter(function (v) {
//    return v > 0

// });
// console.log(res);


// 3
// let arr = [6, 2, 3, 10, 7];
// let res = arr.filter(function (v) {
//    return v > 5

// });
// console.log(res);


// 4
// let arr = [11, 12, 23, 14, 55];
// let res = arr.filter(function (v) {
//    return v > 18

// });
// console.log(res);


// 5
// let arr = [6, 2, 13, 10, 7];
// let res = arr.filter(function (v) {
//    return v < 10

// });
// console.log(res);


///////////////////////////find/////////////////////


// 1
// let arr = [9, 20, 13, 10, 7];
// let res = arr.find(function (v) {
//    return v > 10

// });
// console.log(res);

// 2
// let arr = [5, -20, -13, 10, 7];
// let res = arr.find(function (v) {
//    return v > 0

// });
// console.log(res);


// 3
// let arr = [2, 2, 1, 10, 3];
// let res = arr.find(function (v) {
//    return v > 4

// });
// console.log(res);


// 4
// let arr = [4, 2, 1, 10, 3];
// let res = arr.find(function (v) {
//    return v % 2 == 0

// });
// console.log(res);


// 5
// let arr = [0, -2, -1, 0, 3];
// let res = arr.find(function (v) {
//    return v >= 0

// });
// console.log(res);


///////////////////////////some/every///////////////

// some
// 1
// let arr = [6, -2, 1, 5, 3];
// let res = arr.some(function (v) {
//    return v < 0

// });
// console.log(res);


// 2
// let arr = [6, -2, 1, 5, 3];
// let res = arr.some(function (v) {
//    return v % 2 == 0

// });
// console.log(res);


// 3
// let arr = ['apple', 'true', 'false'];
// let res = arr.some(function (v) {
//    return v == 'apple'

// });
// console.log(res);


// every

// 4
// let arr = [6, 2, 1, 5, 3];
// let res = arr.some(function (v) {
//    return v > 0

// });
// console.log(res);

// 5
// let arr = ['salom', 'meva', 'xayr'];
// let res = arr.some(function (v) {
//    return typeof v == 'string'

// });
// console.log(res);


// 6
// let arr = [6, 2, 1, 5, 3];
// let res = arr.some(function (v) {
//    return v < 100

// });
// console.log(res);
