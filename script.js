// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var card = document.getElementsByClassName("card");

for(let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function(e){
    console.log(e.target);
    modal.style.display = "block";
    modalImg.src = img[i].getAttribute('src');
    captionText.innerHTML = img[i].getAttribute('alt');
  })
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}