const names = ["Derek", "Joe", "Anna", "Coen", "Chris", "Macey", "Ella"];
names.unshift("uzair");  //add a name to the beginning
names.push("Ansari");   //add a name to the end
names.shift("uzair");  //remove the name added in beginning
names.pop(); //removes the element added in end
names.splice(1); //Alter the original array to only contain the names before "Chris"
var checkchris= names.includes("chris");    //check if chris is in array
console.log(checkchris);

const lowercasedNames = ["derek","joe","anna","coen","chris","macey","ella"];
lowercasedNames.sort(); //sort the array alphabetically
lowercasedNames.indexOf("chris"); //find the index number of chris  
// console.log(lowercasedNames); 



const afterChris=['coen', 'derek', 'ella', 'joe', 'macey'];






// function onSuccess(googleUser) {
//   console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
//   document.write('Hello: ' + googleUser.getBasicProfile().getName());
// }
// function onFailure(error) {
//   console.log(error);

// }
// function renderButton() {
//   gapi.signin2.render('my-signin2', {
//     'scope': 'profile email',
//     'width': 240,
//     'height': 50,
//     'longtitle': true,
//     'theme': 'dark',
//     'onsuccess': onSuccess,
//     'onfailure': onFailure
//   });
// }




// show hide pass

// jQuery(document).ready(function(){
// jQuery('.show-password').click(function(){
//     jQuery('#passwordtype').prop('type','text');
//     jQuery('.hide-password').css('display', 'inline-block');    
// jQuery('.show-password').addClass('showremove');

// });

// jQuery('.hide-password').click(function(){
//     jQuery('#passwordtype').prop('type','password');
//     jQuery('.show-password').removeClass('showremove');    
// jQuery('.hide-password'). css('display', 'none');

// });

// });





// / Task 1: create a function that will return a list of even numbers. it should take a length parameter for the length of the list. Length should be numbered and should not exceed 100



function evenNumbers(length){
    try{
    validateEvenNumber(length);
        const evenArray= [];
        for(i = 0; i<=length; i+=2){
            evenArray.push(i);
     }
     return evenArray;
    }
    catch(e){
    console.log(e.message);
    return[];
    }
    }
    
    
    function validateEvenNumber(data){
    if(typeof data != "number" ){
        throw new Error("It should be number only");
    }
    if(data > 100){
    throw new Error ("length shouldn't be exceed 100");
    }
    }
    
    console.log(evenNumbers(100));



    
    // Task 2: create a function that recognizes that a given number is even number, odd number or prime number
    
    
    function recognize(number){
    recognize_validation(number);
    }
    
    function recognize_validation(data){
    if(typeof data !="number"){
        throw new Error("Invalid data type");
    }
    if(data %2==0){
       console.log (data + " This is even Number");
    }
    if(data %2 !==0){
        console.log (data + " This is odd number");
    }
    
    for(i=2; i<data; i++){
        if(data%i===0){
            console.log(data + " is not a prime number");
        }
        else{
            console.log(data + " is a prime number");
        }
    }
    
    }
    recognize(23);
    
    
//  Create a function which will show the list of products. Create a function ("add to cart") which will save products in the cart.

// Note: use only script.js. no UI needed
// Hint: use local storage to save dat


function getproducts() {
    var pro_items = document.getElementsByClassName("productName");
    var arrayNew = [];
    for (let i = 0; i < pro_items.length; i++) {
        var listProducts = pro_items[i].innerText;
        arrayNew = [...arrayNew, listProducts];
    }
    console.log(arrayNew);
    localStorage.setItem('productnameuzair ', JSON.stringify(arrayNew));

}
getproducts();








// function recognizeNumber(){
// document.write("This is task 2 <br> <br>" );

// var number = prompt("Enter your number: ");
// if(number%2 ==0){
//     console.log(`${number} is an even number`);
// }
// else{
//     console.log(`${number} is an odd number `);
// }




// for prime number

// for (var i = 2; i<number; i++){
//     if (number%1 ==0){
//         var res= `${number} is not a prime number`;
//         break;
//     }
//     else{
//         var res= `${number} is a prime number`;
//     }
// }
// document.write(res);

// for(var i = 2; i<number; i++){
// if(number%i ==0){
// var res =`${number} is not a prime number.`;
// break;
// }
// else{
//     var res=`${number} is a prime number.`;
// }
// }
// document.write(res);
// }
// recognizeNumber();


// function table(){
// for (i =1; i <= 12;  i++){
//     document.write("2 x" + i + "=" + i * 2 + "<br>")
// }

// }
// table();



