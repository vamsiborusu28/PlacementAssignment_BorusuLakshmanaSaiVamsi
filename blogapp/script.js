const app = document.getElementById("app");
const posts = document.getElementById("posts");
const addPostButton = document.getElementById("add-post");

// Fetch all the posts from the API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    // Loop through the posts and add them to the UI
    posts.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      posts.appendChild(li);
    });
  });

// Handle the click event for the add post button
addPostButton.addEventListener("click", () => {
  // Create a new post object
  const post = {
    title: "",
    body: ""
  };

  // Open a modal to allow the user to enter the post details
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <h2>Add Post</h2>
    <input type="text" name="title" placeholder="Title">
    <textarea name="body" placeholder="Body"></textarea>
    <button type="submit">Add</button>
  `;

  app.appendChild(modal);

  // Handle the submit event for the add button in the modal
  const submitButton = document.querySelector("button[type=submit]");
  submitButton.addEventListener("click", () => {
    // Get the post details from the modal
    const title = document.querySelector("input[name=title]").value;
    const body = document.querySelector("textarea[name=body]").value;

    // Create a new request to the API to add the post
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body
      })
    })
      .then(response => response.json())
      .then(post => {
        // Add the new post to the UI
        const li = document.createElement("li");
        li.textContent = post.title;
        posts.appendChild(li);

        // Close the modal
        modal.remove();
      });
  });
});
