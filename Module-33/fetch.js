// example-1
function loadData() {
  const url = "https://jsonplaceholder.typicode.com/posts/10";
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//example-2
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}
function displayUsers(data){
  for (const item of data) {
    const ol= document.getElementById("displayHere");
    const li= document.createElement("li");
    li.innerText=item.name;
    ol.appendChild(li);
    console.log(item.name);
  }
  console.log(data);
}