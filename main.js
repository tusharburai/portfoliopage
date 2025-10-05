document.addEventListener("DOMContentLoaded", () => {
  // ===== LOGIN FORM =====
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      const message = document.getElementById("loginMessage");

      if (email === "" || password === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
      } else {
        message.textContent = "✅ Login successful!";
        message.style.color = "lightgreen";
        setTimeout(() => {
          window.location.href = "portfolio.html"; // Redirect to portfolio
        }, 1500);
      }
    });
  }


  // ===== CONTACT FORM =====
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const messageBox = document.getElementById("message").value.trim();
      const msg = document.getElementById("formMessage");

      if (name === "" || email === "" || messageBox === "") {
        msg.textContent = "Please fill all fields.";
        msg.style.color = "red";
      } else {
        msg.textContent = "✅ Message sent successfully!";
        msg.style.color = "lightgreen";
        contactForm.reset();
      }
    });
  }
});

// PASSWORD TOGGLE
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("loginPassword");

if (togglePassword && passwordField) {
  togglePassword.addEventListener("click", () => {
    if (passwordField.type === "password") {
      passwordField.type = "text"; // Show password
      togglePassword.classList.remove("fa-eye");
      togglePassword.classList.add("fa-eye-slash"); // Closed eye icon
    } else {
      passwordField.type = "password"; // Hide password
      togglePassword.classList.remove("fa-eye-slash");
      togglePassword.classList.add("fa-eye"); // Open eye icon
    }
  });
}

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const mname = document.getElementById("mname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const countryCode = document.getElementById("countryCode").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("signupMessage");

    // Validate required fields
    if (!fname || !lname || !username || !email || !phone || !password || !gender) {
      message.textContent = "Please fill in all required fields.";
      message.style.color = "red";
      return;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "red";
      return;
    }

    // Phone validation
    if (!/^\d+$/.test(phone)) {
      message.textContent = "Phone number must contain only digits.";
      message.style.color = "red";
      return;
    }

    // Password validation: at least 6 characters, 1 letter, 1 number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      message.textContent = "Password must be at least 6 characters and include both letters and numbers.";
      message.style.color = "red";
      return;
    }

    // Save user data to localStorage
    const user = { fname, mname, lname, username, email, phone, password, countryCode, gender: gender.value };
    localStorage.setItem("user", JSON.stringify(user));

    message.textContent = "✅ Signup successful! Redirecting...";
    message.style.color = "lightgreen";

    // Redirect to portfolio
    setTimeout(() => {
      window.location.href = "portfolio.html";
    }, 1500);
  });
}

// Password toggle
const toggleSignupPassword = document.getElementById("toggleSignupPassword");
const signupPasswordField = document.getElementById("signupPassword");

if (toggleSignupPassword && signupPasswordField) {
  toggleSignupPassword.addEventListener("click", () => {
    if (signupPasswordField.type === "password") {
      signupPasswordField.type = "text"; // show password
      toggleSignupPassword.classList.remove("fa-eye");
      toggleSignupPassword.classList.add("fa-eye-slash");
    } else {
      signupPasswordField.type = "password"; // hide password
      toggleSignupPassword.classList.remove("fa-eye-slash");
      toggleSignupPassword.classList.add("fa-eye");
    }
  });
}
