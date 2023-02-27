//Get all the countries from the Asia continent /region using the Filter function


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload =function(){
var result=JSON.parse(request.response);
console.log(result);

var res=result.filter((ele)=>ele.region==="Asia");

console.log(res);


}

//Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload =function(){
var result=JSON.parse(request.response);
console.log(result);

var res=result.filter((ele)=>ele.population<=200000);

console.log(res);


}

//Print the following details name, capital, flag using forEach function
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var data=request.response;
    var result=JSON.parse(data);
    var res=result.forEach((ele)=>{
        console.log((ele.name),(ele.capital),(ele.flag));
    })
}


//Print the total population of countries using reduce function.
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload =function(){
var result=JSON.parse(request.response);
console.log(result);

var res=result.filter((ele)=>ele.population).reduce((a,b)=>a+b.population,0);

console.log(res);

}

//Print the country which uses US Dollars as currency.
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload =function(){
var result=JSON.parse(request.response);
console.log(result);
var res=result.filter((ele)=>ele.currencies !=="United States dollar")

var res1=res.filter((ele)=>{
    for(var i in ele.currencies){
        if(ele.currencies[i].name === "United States dollar"){
            console.log(ele.name)
        }
        }
  })

}
