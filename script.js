
document.getElementById("btn").addEventListener("click", (event) => {
  event.preventDefault();
  
  let url =
    "https://api.giphy.com/v1/gifs/search?api_key=Di8S6v4v7dKSM0IpSsKGSVFT3E6vGUFd&limit=1&q=";
  let str = document.getElementById("search").value.trim();
  url = url + str;
  console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((value) => {
      let img = document.createElement("img");
      img.src = value.data[0].images.downsized.url;
      img.alt = value.data[0].title;
      let display = document.querySelector(".display");
      display.insertAdjacentElement("afterbegin", img);
    document.querySelector("#search").value = "";
     
    })
    .catch((err) => {
      console.error(err);
    });
});
document.querySelector("#btn1").addEventListener("click",()=>
display.innerHTML="");