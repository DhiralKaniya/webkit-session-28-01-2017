//Please include function.js before this file will include
//Call when sign up button will click
click("sign-up-btn",logInUser);
//call when logout button will click
click("log-in-btn",logOutUser);
//objects are in js
var user1 = {
  id:1,
  name: "Dhiral",
  username: "dhiralkaniya",
  sayHello: function(){
    console.log("Say Hello Call" + this.name);
  }
};
var user2 = {
  id:2,
  name: "Harmeet",
  username: "paji",
  sayHello: function(){
    console.log("Say Hello " + this.name);
  }
};
var users = [
  user1,user2
];
for(var i=0;i<users.length;i++){
  var user = users[i];
  console.log(user.sayHello());
}

var message = new Object();
message.text= "Hello";
console.log(message.text);
