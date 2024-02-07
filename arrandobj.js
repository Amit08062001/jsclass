let arr = [45 ,87 ,87, "amit" ,"kunal", " siwan"];  // first method
//console.log(arr);
 let myarr = new Array(34,56,"rahul","abhishek");  //  second method
  
 //console.log(myarr);
 //console.log(myarr[2]);

 /// accessing element///
 let firstitem= myarr[2];
 //console.log('first item :',firstitem);
 //methods of array

 //myarr.push(8);
 //console.log(myarr)

 myarr.push(myarr[2]=4);
 //console.log(myarr)

 myarr.pop();
// console.log(myarr);

 myarr.pop(myarr[3]);
 //console.log(myarr);

 myarr.unshift(5);
 //console.log(myarr);

 myarr.shift(myarr[2]);
 //console.log(myarr);
  let myarr1 = [3,5,6,8];
    
 let conarr = arr.concat(myarr,myarr1);
 //console.log(conarr);

 let sarr=conarr.slice(1,5);
 //console.log(sarr);

 let sparr=conarr.splice(1,5);
 //console.log(sparr);

//console.log(conarr.toString());
//console.log(myarr.join())

let sprarr = [...myarr, ...arr,...sarr];
console.log(sprarr);

let nested = [1,2,4,5,[3,4,5],55,[3,6,6,44,99]];
console.log(nested.flat(1));

console.log(Array.isArray("amit"));
console.log(Array.from("kunal"));
let stu = "amit";
let stu1 = "kunal";
console.log(Array.of(stu,stu1));
