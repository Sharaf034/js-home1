
"use strict";

// var , let ,const


// let surname ="Qehremanov"

// const adress = "Sumqayit"

// let phoneNumber = "6584464"


// var name = "Samir";


// let isMarried = true;

// let age = 30;

// let adress;

// let phone = null;

// console.log(typeof name);

// console.log(typeof isMarried); 

// console.log(typeof age);

// console.log(typeof adress);

// console.log(typeof phone);


// let num1 = 10;
// let num2 = 4;
// let result = num1 + num2
// console.log(result);


// let count = 5;
// count++;
// console.log(count);


// let age = 100;
// let surname = null;
// console.log(age / surname);
// alert (null === undefined)


// let num1 = 100;
// let num2 = "100"

// if (num1 == num2) {
//    console.log(true); 
// }else{
//     console.log(folse);
// }

// let age = 20;
// let result = age > 30 ? "Boyukdur" : "Kicikdir";
// console.log(result);

// let surname = "test";
// let result = surname ?? "XXX";
// console.log(result);


// let dayOfweek = "Sunday"

// switch (dayOfweek) {
//     case "Sunday":
//         console.log("This is Sunday");
//         break;

//         case "Tuesday":
//         console.log("This is Tuesday");
//         break;

//         case "Friday":
//         console.log("This is Friday");
//         break;

//         case "Wednesday":
//         console.log("This is Wednesday");
//         break;

//     default:
//         break;
// }


// let user = {
//     name :"Surac",
//     surname : "Ismayilov",
//     age : 23
// }

// // console.log(user.name + " " + user.surname);
//  let result = `${user.name} - ${user.surname}`

//  console.log(result);

// let datas = ["Surac", "Samir", 55 ,51,true];

// for (let i = 0; i < array.length; i++) {
//     if (datas[i] == 51){
//         console.log(i);
//     }
    
// }

// datas.forEach((element,i) => {
//     console.log(element + "/" + i);
// });

// for (let i = 0; i < array.length; i++) {

//     if (!isNaN(datas[i]) && typeof(datas[i]) != "boolean" && typeof(datas[i]) !="string "){
//         let result = datas[i] + 30;
//         console.log(result)
        
//     }
    
// }


// let name = "Surac"
// name+=" Ismayilov"
// console.log(name);


// let stu1 = {
//     name: "Surac",
//     surname: "Ismayilov"
// }

// let stu2 = {
//     name: "Fidan",
//     surname: "Beshirova"
// }

// let stu3 = {
//     name: "Kubra",
//     surname: "Memmedova"
// }

// let stu4 = {
//     name: "Pervin",
//     surname: "Mirzeyev"
// }

// let students = [stu1, stu2, stu3, stu4];



// document.querySelector(".btn").addEventListener("click",function(){
//     students.forEach(student => {
//         let fullName = `${student.name} ${student.surname}`;
//         // console.log(fullName);
    
//         let h1 = document.createElement("h1")
//         h1.innerText = fullName;
//         document.querySelector(".test").append(h1)
//     });

//     this.style.display = "none"
// })