let display = document.querySelector(".display");
document.querySelector(".btn").addEventListener("click", () => {
  display.innerHTML = "";
  let url =
    "https://api.giphy.com/v1/gifs/search?api_key=Di8S6v4v7dKSM0IpSsKGSVFT3E6vGUFd&limit=1&q=";
  let str = document.getElementById("search").value.trim();
  url = url + str;
  fetch(url)
    .then((response) => response.json())
    .then((value) => {
      let img = document.createElement("img");
      img.src = value.data[0].images.downsized.url;
      img.alt = value.data[0].title;
      display.append(img);
      document.querySelector("#search").value = "";
    })
    .catch((err) => {
      console.error(err);
    });
});
