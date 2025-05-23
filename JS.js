const featureImage = document.querySelector(".feature img");
const smallImages = document.querySelectorAll(".small img");
const smallImagesArray = Array.from(smallImages);
const imgSRC = smallImagesArray.map(image => image.src);
const buttons = document.querySelectorAll(".arrow");

smallImages.forEach(image => image.addEventListener("click", changeFeatureImage));
buttons.forEach(button => button.addEventListener("click", nextImage));



function changeFeatureImage() {
  featureImage.src = this.src;
  featureImage.dataset.key = this.dataset.key;
}

function nextImage() {
  
  // find out data-key of current image
  const currentImage = document.querySelector(".feature img");
  const currentKey = parseInt(currentImage.dataset.key);

  // find out the key for the next image
  
  let newKey=0;
  if (this.className.includes("right")){
    newKey = currentKey+1;
    if(newKey>6){newKey=1;} 
  }else{
    newKey = currentKey-1;
    if(newKey<1){newKey=6;}
  }
 
  // update data-key and src of feature image
  featureImage.dataset.key = newKey;
  featureImage.src = imgSRC[newKey-1];
 }

