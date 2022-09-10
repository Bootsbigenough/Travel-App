const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#post-title").value.trim();
  const description = document.querySelector("#post-desc").value.trim();

  if (name && description) {
    const response = await fetch("", {
      method: "POST",
      body: JSON.stringify({ name, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAtrribute("data-id")) {
    const id = event.target.getAtrribute("data-id");

    const response = await fetch("", {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("");
    } else {
      alert("Failed to delete post");
    }
  }
};

document.querySelector(".new-post").addEventListener("submit", newPostHandler);

document
  .querySelector(".post-list")
  .addEventListener("click", delButtonHandler);
