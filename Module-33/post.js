function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json().then((data) => displayPosts(data))
  );
}
loadPosts();
function displayPosts(posts) {
  for (const post of posts) {
    const postContainer = document.getElementById("post-container");
    const p = document.createElement("p");
    p.classList.add("post");
    p.innerText = post.body;
    postContainer.appendChild(p);
  }
}
