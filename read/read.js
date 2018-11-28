// alert(undefined == null)
// alert(undefined === null)
// alert(null == "\n0\n")
// console.log("bee" > "be")


// if (){

// } else if (){

// } else{

// }

// let age = prompt("how old are you");
// console.log((age<10)? "you're young" : "you are old")

// let age = console.log(prompt("how old are you") > 18 ? "good" : "bad");

// let user = prompt("who's there");

/*if (user == "admin"){
    let code = prompt("password :")
    if (code == "TheMaster"){
        console.log("Welcome")
    } else if(code == "" || code == null){
        console.log("canceled")
    } else{
        console.log("wrong password")
    }
} else if (user == "" || user == null){
    console.log("cancelled")
} else {
    console. log("I dont know you")
}*/

// using the ternary operator
/*let user = prompt("who's there");
 (user == "admin" ? code = prompt("password : ") (code == "TheMaster" ? console.log("Welcome"):
 (code == "" || code == null ? console.log("cancelled") : console.log("Wrong password ")
  (user == "" || null) ? console.log("cancelled") : console.log("i dont know");*/

//   let user = prompt("who's there");
//  user == "admin" ? code = prompt("password : ") : "TheMaster" , console.log("Welcome"):code == "" || code == null ? console.log("cancelled") : console.log("Wrong password ")
//   (user == "" || null) ? console.log("cancelled") : console.log("i dont know");


// let user = prompt("who's there");
//  code = user == "Admin" ? prompt("password : "): user == "" || null ? alert("cancelled") : alert("i dont know")
//  codec = code == "TheMaster" ? alert("Welcome"): code == "" || code == null ? alert ("cancelled") : alert("Wrong password ")
   
// i = 0
// while(i<3){
//     console.log(i)
//     i++
// }

// // let i = 0;
// // do{
// //     console.log(i)
// //     i++
// // } while(i<5)

// for (i = 0; i<3;i++){
//     console.log(i)
// }

//  let sum = 1;
//  while (true){
//      let value = +prompt("enter a number", '');
//      if (!value) break;
//      sum += value;
//  }
//  console.log('sum: ' + sum);

// A code that will print only odd number
// for (i = 0; i<10; i++){
//     if (i%2 == 0) continue;
//     console.log(i)
// }

// let a = 2+2;

// // switch (a){
// //     case 3:
// //         console.log('Too small');
// //         break;
// //     case 4:
// //         console.log('exactly');
// //         break;
// //     case 5:
// //         console.log('too large');
// //         break;
// //     default:
// //         console.log("i dont know such values")
// // }

let userName = 'John';
function showMessage() { 
    userName = "Bob"; // (1) changed the outer variable 
    let message = 'Hello, ' + userName; 
    console.log(message); }
    console.log( userName ); // John before the function call 
    showMessage(); 
    console.log( userName ); // Bob, the value was modified by the function