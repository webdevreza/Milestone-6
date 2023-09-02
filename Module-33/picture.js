function loadPictures(){
   fetch("https://jsonplaceholder.typicode.com/photos")
   .then(res=>res.json())
   .then(data=>displayPictures(data))
}
function displayPictures(pictures){
   for (let i=0; i<9; i++) {
      const pic = pictures[i]
      const picContainer=document.getElementById("picturs-container");
      const img = document.createElement("img");
      //  img.setAttribute("src");
       img.src=pic.url;
       picContainer.appendChild(img);
   }
}
