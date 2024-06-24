const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

let uppass = [];
let inpass = [];

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});


signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// adding and removing border
function upimg(element) {
    var Image = element.querySelector('img');
    if (Image) {
        if (Image.classList.contains('clicked')) {
            Image.classList.remove('clicked');
            uppass.splice(uppass.indexOf(element.id), 1);
            // console.log(element.id);
            // console.log(uppass);
        }
        else {
            Image.classList.add('clicked');
            uppass.push(element.id);
            // console.log(element.id);
            // console.log(uppass);
        }
    }
}

function inimg(element) {
    var Image = element.querySelector('img');
    if (Image) {
        if (Image.classList.contains('clicked')) {
            Image.classList.remove('clicked');
            inpass.splice(inpass.indexOf(element.id), 1);
            // console.log(element.id);
            // console.log(inpass);
        }
        else {
            Image.classList.add('clicked');
            inpass.push(element.id);
            // console.log(element.id);
            // console.log(inpass);
        }
    }
}

// element image recognition
function signup() {
    sessionStorage.setItem("upname", document.getElementById('upmail').value);
    sessionStorage.setItem("uppass", uppass);
    var myText = "Account Created Succesfully";
    alert(myText);
}

// image pattern authentication
var v2 = new Boolean(false);
function signin() {
    let str = document.getElementById('inmail').value;
    let array = sessionStorage.getItem("uppass");
    let check1 = array.localeCompare(inpass.toString());
    if ((!str.localeCompare(sessionStorage.getItem("upname"))) && !check1) {
        var myText = "Login is successful";
        alert(myText);
        var hash = md5(inpass.toString());
        alert(hash);
        NewTab(hash);
    }
    else{
        var myText = "Login Failed";
        alert(myText);
        sendMail3();
    }
}

function sendMail3(){
    emailjs.send('service_fupe737', 'template_v7f98gs')
    .then(function(res){
        // console.log("Success", res.status);
        alert("mail sent successfully");
    })
}
function sendmail2(){
const emailjs = require('emailjs');

const sendMail2 = async () => {
  // Get the API key from the EmailJS website
  const apiKey = 'Yxpld6IbZ9BhaFSzPp';

  // Create a new EmailJS client
  const client = emailjs.createClient(apiKey);

  // Get the email address of the user who clicked the link
  const emailAddress = document.getElementById('inmail').value;

  // Create a new email object
  const email = {
    from: '206228bharathkumar0780@gmail.com',
    to: emailAddress,
    subject: 'Password reset request',
    template_id: 'template_x050jid'
  };

  // Send the email
  await client.send('service_fupe737', 'template_x050jid', email);
};

// Call the sendMail2 function
document.getElementById('forgotPassword').addEventListener('click', sendMail2);
}
function NewTab(hash) {
    window.open(
      "https://www.cmrcet.ac.in", "_blank");
}
function md5(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  var hexHash = hash.toString(16);
  // Replace leading zeros with random characters
  while (hexHash.length < 16) {
    hexHash = String.fromCharCode(Math.floor(Math.random() * 94) + 33) + hexHash;
  }
  return hexHash;
}

var str = "example";
var hexHash = md5(str);
console.log(hexHash);
function md5(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  var hexHash = hash.toString(16);
  // Replace leading zeros with random characters
  while (hexHash.length < 16) {
    hexHash = String.fromCharCode(Math.floor(Math.random() * 94) + 33) + hexHash;
  }
  return hexHash;
}

var str = "example";
var hexHash = md5(str);
console.log(hexHash);

