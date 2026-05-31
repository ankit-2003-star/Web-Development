let btn =document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact=await getFacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.textContent=fact;
    let imgUrl=await getDogImage();
    console.log(imgUrl);
    let img=document.querySelector("#imag");
    img.src=imgUrl;
    //img.setAttribute("src",imgUrl);
});
let btn2=document.querySelector("#get-country-info");
btn2.addEventListener("click", async () => {
    let country=document.querySelector("#country-input").value;
    console.log(country);

    let colleges=await getColleges(country);
    // console.log(colleges);

    showColleges(colleges);
});

let url4="http://universities.hipolabs.com/search?country=india";

function showColleges(colleges){
    let list=document.querySelector("#country-results");
    list.innerText="";
    for(let college of colleges){
        console.log(college.name);
        let li=document.createElement("li");
        li.textContent=college.name;
        list.appendChild(li);
    }
}

let btn3=document.querySelector("#get-college-info-by-state");
btn3.addEventListener("click", async () => {
    let state=document.querySelector("#state-input").value;
    console.log(state);
    let colleges=await getCollegesByState();
    showCollegesbyState(colleges);
});    
function showCollegesbyState(colleges){
    let list=document.querySelector("#college-results-state");
    list.innerText="";
    for(let college of colleges){
        console.log(college);
        let li=document.createElement("li");
        li.textContent=college.name;
        list.appendChild(li);
    }
}

let state="delhi";

async function getCollegesByState(){
    try{
        let res=await axios.get(url4);
        return res.data;
        // console.log(res.data);
    }catch(error){
        console.log(error);
        return [];
    }
}

let url3="http://universities.hipolabs.com/search?country=";

let url2="https://dog.ceo/api/breeds/image/random";

let url ="https://catfact.ninja/fact";

// let country="nepal";

async function getColleges(country){
    try{
        let res=await axios.get(url3+country);
        return res.data;
    }catch(error){
        console.log(error);
        return [];
    }
}

async function getFacts(){
    try{
        let response = await axios.get(url);
        // let data = await response.json();
        // console.log(data);
        return response.data.fact;
    }catch(error){
        console.log(error);
        return "An error occurred while fetching the cat fact.";
    }
}
async function getDogImage(){
    try{
        let response = await axios.get(url2);
        // let data = await response.json();
        // console.log(data);
        return response.data.message;
    }catch(error){
        console.log(error);
        return "An error occurred while fetching the dog image.";
    }
}