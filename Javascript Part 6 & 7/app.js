// let arr=[1,2,3,4,5,6,7,8,9];
// let num=5;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>num){
//         console.log(arr[i]);
//     }
// }

// function uniquestr(str){
//     let strnew="";
//     for(let i=0;i<str.length;i++){
//         let currchar=str[i];
//         if(strnew.indexOf(currchar)==-1){
//             strnew+=currchar;
//         }

//     }
//     console.log(strnew);
    
// }
// let string ="abcdabcdefgggh";                            
// uniquestr(string);


// function country(arr){
//     let count=0;
//     let long="";
//     for(let i=0;i<arr.length;i++){
//         let currword=arr[i];
//         if(currword.length>count){
//             long=arr[i];
//         }
        
//     }
//     console.log(long);
// }
// let countryname=["Australia","Germany","United states of America"];
// country(countryname);

// function vowel(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         let z=str[i];
//         if(z=='a'||z=='e'||z=='i'||z=='o'||z=='u'){  
//             count++;
//         }
//     }
//     console.log(count);
// }
// let string="My name is ankit";
// vowel(string);

// let start=100;
// let end=200;
// function Rand(start,end){
//     let diff=end-start;
//     return Math.floor(Math.random()*diff)+start;
// }
// console.log(Rand(start,end));

// const avera=(arr)=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum/(arr.length);
// }
// let arr=[1,2,3,4,5,6];
// console.log(avera(arr));

// const isEven=(n)=>{
//     if(n%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(5))


// const object={
//     message: 'hello',
//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000)

let length=4;
function callback2(){
    console.log(this.length);
}
const object={
    length:5,
    method(callback2){
        callback2();
    },
};
object.method(callback2,1,2);
