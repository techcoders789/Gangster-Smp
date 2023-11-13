function showImages() {
    var imageContainer = document.getElementById("image-container");
    imageContainer.style.display = "block";

    // You can dynamically add images here
    // For demonstration, let's assume you have image URLs
    var imageUrls = ["diamond.png", "image2.jpg", "image3.jpg"];
    imageContainer.innerHTML = "";

    imageUrls.forEach(function(url) {
        var img = document.createElement("img");
        img.src = url;
        imageContainer.appendChild(img);
    });

    // Set a timeout to hide the images after 1 second
    setTimeout(function() {
        hideImages();
    }, 1000);
}

function hideImages() {
    var imageContainer = document.getElementById("image-container");
    imageContainer.style.display = "none";
}
