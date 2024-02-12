 function hello() {
   console.log( "hey" + "morning" )
    
}
//hello()
//////////

function addTwo(num1,num2){
  console.log(num1+num2);
}
//addTwo(34,67);

////////////////

function addTwoSub(num1,num2){
  let sub=num1-num2;
  
  return sub;
}
//console.log(addTwoSub(56,45));

//////
function logInUser(Username){
  if(Username==undefined){
    console.log("provide valid username")
    return;
  } 

  return `${Username} has loggedIn`;
}

 //console.log(logInUser());

/////////
let sum =0;
function addValue(...num1){
  for(let i=0;i<num1.length;i++){
  sum = sum+num1[i];
  }
 return sum;
}
//addValue(300,400,5000)
//console.log(sum);

//////////////

function changeName(theObject){
  theObject.name="kunal";
 }

 let myProfile={
  name:"amit",
  pin: 841406,
  state:"Bihar",
 };
 
 console.log(myProfile.name);
 changeName(myProfile);
 console.log(myProfile.name);
 
 function changeArr(arr){
  arr[0]= 40;
 }

 let arr= [300,500,600];
 console.log(arr);
 changeArr(arr);
 console.log(arr);
