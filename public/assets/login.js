const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("LOGIN");

  const email = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    const body = JSON.stringify({ email, password });

    console.log(body);
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: body,
      headers: { "Content-type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else if (response.statusCode === 401) {
      alert("Incorrect username or password");
      console.log(response.body);
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("register");

  const firstName = document.querySelector("#firstname").value.trim();
  const lastName = document.querySelector("#lastname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#pass").value.trim();

  if (firstName && lastName && email && password) {
    const body = JSON.stringify({ firstName, lastName, email, password });

    const response = await fetch("/api/users/register", {
      method: "POST",
      body: body,
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".login").addEventListener("submit", loginFormHandler);

document
  .querySelector("#signupBtn")
  .addEventListener("click", signupFormHandler);
