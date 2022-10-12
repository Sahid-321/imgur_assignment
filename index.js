console.log("hello webpage");


var imageData = document.querySelector(".column")

var api = "https://dummyjson.com/products";


fetch(api)
.then((res)=> res.json())
.then((data)=> displayData(data.products))
.catch((err)=> console.log(err))


function displayData(img){
    console.log(img);

  img.forEach(element => {
    console.log(element.images);
    var image = document.createElement("img");
    image.src = element.images[0]

    imageData.append(image)
  });
}


