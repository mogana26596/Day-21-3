var div=document.createElement("div");
div.style.textAlign="center";
div.style.margin= "50px";


var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.setAttribute("placeholder","Search by Country Name");
input.style.height="35px";
input.style.weight="400px";
input.style.marginBottom="10px";
input.style.marginRight="15px";


var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="Search";
button.style.height="35px";
button.style.padding="5px";
button.style.fontSize="15px";
button.style.marginBottom="20px";
button.addEventListener("click",foo);


let covid=document.createElement("div");
covid.setAttribute("id","covid");

div.append(input,button,covid);
document.body.append(div);

async function foo() {
try {
let res=document.getElementById("country").value;
let url=`https://api.covid19api.com/total/country/${res}`;
let result=await fetch(url);
let result1= await result.json();
var index=result1.length-1;

covid.innerHTML=`<div class="card text-center text-dark bg-info mb-3" style="width: 30rem;">
<div class="card-body">
<p class="card-subtitle mb-3 text-white">Country: ${result1[index].Country}</p>
<p class="card-subtitle mb-3 text-white">Confirmed: ${result1[index].Confirmed}</p>
<p class="card-subtitle mb-3 text-white">Deaths: ${result1[index].Deaths}</p>
<p class="card-subtitle mb-3 text-white">Recovered: ${result1[index].Recovered}</p>
<p class="card-subtitle mb-3 text-white">Active: ${result1[index].Active}</p>
<p class="card-subtitle mb-3 text-white">Date: ${result1[index].Date}</p>
</div>
</div>`;

} catch (error) {
    console.log(error);
}
}
foo();
