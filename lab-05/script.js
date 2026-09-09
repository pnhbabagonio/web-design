// ============================================================
// PART B - Using Variables, Conditions, and Loops
// ============================================================

// Declare variables using let or const[cite: 2]
const studentName = "Juan Dela Cruz";
let studentAge = 20;
const studentCourse = "Web Design and Development";

// Display the stored information using console.log()[cite: 2]
console.log("=== Student Information ===");
console.log("Name: " + studentName);
console.log("Age: " + studentAge);
console.log("Course: " + studentCourse);

// Display the stored information using alert()[cite: 2]
alert(`Welcome!\nStudent Name: ${studentName}\nAge: ${studentAge}\nCourse: ${studentCourse}`);

// Display the stored information using HTML elements[cite: 2]
const infoDisplay = document.createElement("div");
infoDisplay.className = "alert alert-warning text-dark border-0 shadow-sm mb-4";
infoDisplay.innerHTML = `<strong>Student Profile Loaded:</strong> ${studentName} | Age: ${studentAge} | Course: ${studentCourse}`;
document.querySelector("main").prepend(infoDisplay);

// if...else statement checking age[cite: 2]
if (studentAge >= 18) {
    console.log("Status: The student is of legal age.");
} else {
    console.log("Status: The student is a minor.");
}

// for loop displaying numbers 1 to 10 in the browser console[cite: 2]
console.log("--- For Loop (1 to 10) ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// while loop counting from 5 down to 1[cite: 2]
console.log("--- While Loop (5 down to 1) ---");
let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}


// ============================================================
// PART C - Implementing Client-Side Form Validation
// ============================================================

function validateForm(event) {
    // Prevent form submission if validation fails[cite: 2]
    event.preventDefault(); 

    let isValid = true;

    // Retrieve input elements
    const fullNameEl = document.getElementById("fullName");
    const emailEl = document.getElementById("email");
    const passwordEl = document.getElementById("password");
    const confirmPasswordEl = document.getElementById("confirmPassword");
    const ageEl = document.getElementById("age");

    // Retrieve values
    const fullName = fullNameEl.value.trim();
    const email = emailEl.value.trim();
    const password = passwordEl.value;
    const confirmPassword = confirmPasswordEl.value;
    const age = ageEl.value.trim();

    // Retrieve error display elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");
    const ageError = document.getElementById("ageError");
    const successMessage = document.getElementById("successMessage");
    const globalErrorAlert = document.getElementById("globalErrorAlert");
    const successText = document.getElementById("successText");

    // Reset previous visual errors and hide alerts
    [fullNameEl, emailEl, passwordEl, confirmPasswordEl, ageEl].forEach(el => el.classList.remove("is-invalid"));
    [nameError, emailError, passwordError, confirmError, ageError].forEach(el => el.textContent = "");
    successMessage.classList.add("d-none");
    globalErrorAlert.classList.add("d-none");

    // Validate Required fields are not empty[cite: 2]
    if (fullName === "") {
        nameError.textContent = "Please enter your full name.";
        fullNameEl.classList.add("is-invalid");
        isValid = false;
    }

    // Validate Email follows a valid format[cite: 2]
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "" || !email.match(emailPattern)) {
        emailError.textContent = "Please enter a valid email address.";
        emailEl.classList.add("is-invalid");
        isValid = false;
    }

    // Validate Password contains at least eight characters[cite: 2]
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        passwordEl.classList.add("is-invalid");
        isValid = false;
    }

    // Validate Password and Confirm Password match[cite: 2]
    if (password !== confirmPassword || confirmPassword === "") {
        confirmError.textContent = "Passwords do not match.";
        confirmPasswordEl.classList.add("is-invalid");
        isValid = false;
    }

    // Validate Age is valid and not empty[cite: 2]
    if (age === "" || isNaN(age) || age <= 0) {
        ageError.textContent = "Please enter a valid age.";
        ageEl.classList.add("is-invalid");
        isValid = false;
    }

    // Display appropriate messages based on final validation state[cite: 2]
    if (isValid) {
        successMessage.classList.remove("d-none");
        successText.textContent = `Thank you, ${fullName}. Your account has been created.`;
        document.getElementById("registrationForm").reset(); 
    } else {
        // Show global alert box at the top if any field failed
        globalErrorAlert.classList.remove("d-none");
    }
}

// Attach event listener
document.getElementById("registrationForm").addEventListener("submit", validateForm);

// Optional: Clear errors dynamically when user clicks reset button
document.querySelector('button[type="reset"]').addEventListener("click", () => {
    const inputs = document.querySelectorAll('.form-control');
    const errors = document.querySelectorAll('.error-text');
    inputs.forEach(el => el.classList.remove("is-invalid"));
    errors.forEach(el => el.textContent = "");
    document.getElementById("globalErrorAlert").classList.add("d-none");
    document.getElementById("successMessage").classList.add("d-none");
});