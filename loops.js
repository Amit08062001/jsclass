let arr =[23,56,86,"amit"];
let i;
//for( i=0; i<arr.length; i++){
 //   console.log(arr[i]);
//}
///////////// higher loops////////////////
///for of///
////array///
let arr1= new Array();
arr1=[34,76,95,765];
for(let am of arr1){
   // console.log(am);
}
/////object///

let myobj ={
    name:"amit",
    vill:"malmaliya"
}
myobj.name="kunal";
myobj.add="bihar";

//for(let value of myobj){
   // console.log(value);
//}
/// myobj is not iterable by for loop

///for in
///array////

for(let bus in arr1){
    //console.log(`index of ${bus} is ${arr1[bus]}`);

}
/*
output
index of 0 is 34
index of 1 is 76
index of 2 is 95
index of 3 is 765
*/

//obj//
 
for(element in myobj){
   // console.log(` ${element} : ${myobj[element]}`)
}

/* 
name : kunal
 vill : malmaliya
 add : bihar
*/

/// for each

//Syntax  Array.forEach((item)=> { });



let arr2=[34,76,8,34,"kunal"];
//arr2.forEach(add) ;

//function printme(item){
  //  console.log(item)
  //}
  //arr2.forEach((item) =>
  //{
   // console.log(item)
  //}
  //);


  let arr3=[34,67,98,90,"vill","hill","chill"]
 // arr3.forEach((item) => {
    //console.log(item)
  //})
/*
  34
67
98
90
vill
hill
chill
   */
//arr3.forEach((item,index,arr)=>{
  // console.log(item,index,arr)
//})


///obj///
let myskill=[ {
    "languageName" :  "Javascript",
    "languageFileName": "JS"
},
{
    "languageName" :  "Java",
    "languageFileName": "JAVA"
},
{
    "languageName" :  "Python",
    "languageFileName": "PY"
},
{
    "languageName" :  "C++",
    "languageFileName": "CPP"
}]

/*
myskill.forEach((key,value)=>{
    console.log(key,value)
})

output 
  { languageName: 'Javascript', languageFileName: 'JS' } 0
{ languageName: 'Java', languageFileName: 'JAVA' } 1
{ languageName: 'Python', languageFileName: 'PY' } 2
{ languageName: 'C++', languageFileName: 'CPP' } 3
*/

/*myskill.forEach((key)=>{
    console.log(key)
})

/*
{ languageName: 'Javascript', languageFileName: 'JS' }
{ languageName: 'Java', languageFileName: 'JAVA' }
{ languageName: 'Python', languageFileName: 'PY' }
{ languageName: 'C++', languageFileName: 'CPP' }
 */

/*
myskill.forEach((value)=>{
    console.log(value.languageName)
})

Javascript
Java
Python
C++
*/
//// filter///
/*
let item= [2,3,4,5,5,6,7,8,9,9,10,10]
let item2= item.filter((num)=>{
    console.log(num)
})
*/

//// map///

const map =new Map()
map.set("name", "amit");
map.set('add',"bihar");
map.set('add',"bihar");
map.set('tiwn',"bihar");

for(let [key,value] of map){
    console.log(value)
}

const myNumbers = [1,2,3,4,5,6,7,8,9]
let mynew=myNumbers.map((value)=> value+10).map((value)=> value+1)
console.log(mynew)
 
const price = [200, 300, 500]

let Totalprice =  price.reduce(  function (acc, curr)  {

   return acc + curr
}, 200)

console.log(Totalprice); 
 