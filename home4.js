// 1) створити функцію яка приймає масив та виводить його

// let arr = ['hello', 2 ,3, 'like']
// function printArr(arr) {
//     console.log(arr)
//
// }
//
// printArr(arr)


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function createArr(length,min,max) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() *(max-min)+min));
//     }
//     return arr;
// }
// const arr1 = createArr(10, 10, 100);
// printArr(arr1)


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function returnMin(a, b, c) {
//     let min;
//
//     if (a <= b && a <= c) min = a;
//     if (b <= a && b <= c) min = b;
//     if (c <= b && c <= a) min = c;
//
//     console.log("min", min);
//     return min;
// }
//
// const min = returnMin(330,313,678);
// console.log(min)


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function returnMax (a, b, c) {
//     let max;
//
//     if (a >= b && a >= c) max = a;
//     if (b >= a && b >= c) max = b;
//     if (c >= a && c >= b) max = c;
//
//     console.log('max', max);
//     return max;
// }
// const max = returnMax(23,33,66);
// console.log(max)


// 5) створити функцію яка повертає найбільше число з масиву

// const myFunction = (array) => {
//     let max = array[0];
//     for (const item of array) {
//         if (max < item) max = item
//     }
//     return max;
// }
// const myFunction1 = myFunction([5,10,36,99,4,1])
// console.log(myFunction1)


// 6) створити функцію яка повертає найменьше число з масиву

// function minArray(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] <= min) {
//             min = array[i];
//         }
//     }
//     console.log(min);
//     return min
// }
// minArray([45, 66, 83, 21, 87, 19, 128])

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function sumOfArray(array) {
//     let sum = 0;
//     for (const item of array){
//         sum += item;
//     }
//     return sum/array.length
// }
// const sumOfArray1 = sumOfArray([3, 3, 3])
//  console.log('sumOfArray1', sumOfArray1)


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.


// function returnArray (array1, array2) {
//     let result = []
//
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i] + array2[i]);
//     }
//     return result;
// }
// const returnArray1 = returnArray([1,2,3,4], [2,3,4,5])
// console.log(returnArray1)



