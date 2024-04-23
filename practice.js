// Sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.


// let arr = [5,3,6,7,3,7,8];
// let sum = 0;
// function fun() {
//     for(let i=0; i<arr.length; i++)
//     {
//         sum = sum + arr[i]
//     }
//     console.log(sum);
// }
// fun()


//  Average of Array Elements: Write a function to calculate the average of all elements in an array of integers.

// let arr = [5,3,6,7,3,4];
// let sum = 0;
// let a = arr.length
// function myFunction() {
//     for(let i=0; i<arr.length; i++)
//     {
//         sum = sum + arr[i]
//     }
//     console.log(sum/a);   
// }
// myFunction();



//  Find Maximum Element: Write a function to find them maximum element in an array of integers.

// let arr = [6,5,4,3,2];
// let max = arr[0];
// function myFun(){
//     for(let i=0; i<arr.length; i++)
//     {
//         if(arr[i]>max)
//         {
//             max = arr[i];
//         }
//     }
//     console.log(`max ${max}`);
// }
// myFun()



// function myFunction() {
//     let arr = [7,4,8,3,6,31,1];
//     console.log(Math.max(...arr));
// }
// myFunction()



// Array Sorting: Write a function to sort an array of integers in non-decreasing order (ascending).

// let arr = [56,23,75,21,53,87,100]
// arr.sort(function (x,y){
//     return x-y
// })
// console.log(arr);


//  Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.

// let arr = [5,3,6,74,65,87,23];
// let arr2 = []
// for(let i=0; i<arr.length; i++)
// {
//     if(arr[i]%2==0) {
//         arr2.push(arr[i])
//     }
        
// }
// console.log(arr2);





//  Array Search: Write a function to search for a given element in an array and return its index if found, otherwise return -1.

// let arr = [5,3,6,8,9,12];
// let found = 3;
// function myfuncion() {
//     for(let i=0; i<arr.length; i++)
//     {
//         if(arr[i]===found) {
//             console.log(i);
//             found = 0;
//         }
//     } 
//     if (found != 0){
//         console.log(-1);
//     }
// }
// myfuncion();


// Find Minimum Element: Write a function to find the minimum element in an array of integers.

// 1 .

// let arr = [6,3,7,45,9,5,4];
// let min = arr[0];
// function myFun() {
//     for(let i=0; i<arr.length; i++)
//     {
//         if(arr[i]<min){
//             min = arr[i];
//         }  
//     }
//     return min
// }
// console.log(myFun());



// 2. 

// arr = [6,4,8,3,9,12];
// function myfuncion() {
//     console.log(Math.min(...arr));
// }
// myfuncion()