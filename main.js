//event handling in buttons
let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  let heading = document.getElementById("heading");
  heading.textContent = "Hello, JavaScript!";
  
});

//event handling in inputs
let inputField = document.getElementById("inputField");
inputField.addEventListener("focus", function() {
  inputField.style.backgroundColor = "lightblue";
});


//interactice elements -FAQs
function toggleFAQ(button) {
  let answer = button.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}
//interactice elements -counter game
let number = document.getElementById("number");
let count = 0;
function increase() {
  count+=1;
  number.textContent = count;
}
function decrease() {
  if(count === 0) {
    count = 0;
  } else{
  count-=1;
  number.textContent = count;
  }
}


//form validation
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();  

    //clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if(name === "") {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    } else if(name.length < 3) {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email === "") {  
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if(!email.match(emailPattern)) {
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(password === "") {  
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    } else if(!password.match(passwordPattern)) {   
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
        isValid = false;
    }  
    
    //check if all validations passed
    if(isValid) {
        //submit form or perform desired actions
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset(); //reset form fields
    }

}