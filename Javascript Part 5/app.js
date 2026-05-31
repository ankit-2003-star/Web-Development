// let student={
//     name:"ankit",
//     age:22
// };
const max=prompt("Enter max amount");

const random=Math.floor(Math.random()*max)+1;
let guess =prompt("guess the number");
while(true){
    if(guess==random){
        console.log("You guessed correct random number was", random);
        break;
    }else if(guess<random){
        alert("smaller")
        guess=prompt("wrong. Try again");
    }else if(guess>random){
        alert("Larger")
        guess=prompt("wrong. Try again");
    }
    // else{
    //     guess=prompt("wrong. Try again");
    // }
    if(guess=="quit"){
        console.log("User quit");
        break;
    }    
}
// console.log(random);