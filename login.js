const form = document.getElementById("loginform");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    window.location.href = "index.html"; // Redirect to index.html after successful login
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "657600259465-oaf1f2re9fet53a93p70ibnrdroal2hh.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.querySelector(".google"),
      { theme: "outline", size: "large" }
    );
  };
  form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
    if (emailValue === "") {
        alert("Email is required");
        return;
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        alert("Please enter a valid email address");
        return;
        }
        if (passwordValue === "") {
        alert("Password is required");
        return;
        }
        if (passwordValue.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
        }
        alert("Login successful");
        window.location.href = "index.html"; // Redirect to index.html after successful login
});