const newPostHandler = async (event) => {
  const post = document.getElementById("post-desc");
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const text = document.querySelector("#post-desc").value.trim();

  if (title && text) {
    const response = await fetch("/api/posts/", {
      method: "POST",
      body: JSON.stringify({ title, text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // document.location.replace("/");
      document.location.reload();
    } else {
      alert("Failed to create post");
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAtrribute("data-id")) {
//     const id = event.target.getAtrribute("data-id");

//     const response = await fetch("", {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to delete post");
//     }
//   }
// };

const postBtn = document.querySelector("#postBtn");
document.querySelector("#postBtn").addEventListener("click", newPostHandler);
console.log(postBtn);
