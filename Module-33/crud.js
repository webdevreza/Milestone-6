//======================
// HTTP status codes
//======================
/*
200 - OK,
301 - Moved permanently
302 - Moved temporarily
404 - Not found
500 - Internal Server Error
503 - Service unavailable
*/

//=========================
// CRUD / REST API Methods
//=========================
/*
C = Create / Post
R = Read / Get
U = Update / Put / Patch
D = Delete / Delete

** Put replaces the entire item or create a new item. But Patch partially updates only existing resource.
*/

//========== GET ================
function getData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
getData();

//========== POST ================
function createData() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
createData();

//========== PUT ================
function putData() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "football",
      body: "Bangladesh",
      userId: 1,
    }),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
putData();

//========== PATCH ================
function modifyData() {
  fetch("https://jsonplaceholder.typicode.com/posts/2", {
    method: "PATCH",
    body: JSON.stringify({
      title: "changed Name",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
modifyData();

//========== DELETE ================






















