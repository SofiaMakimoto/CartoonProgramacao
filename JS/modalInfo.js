//Get the modal
let modalInfo = document.getElementById("modalInfo");
// Get the <span> element that closes the modal
let closeInfo = document.getElementsByClassName("closeInfo")[0];
// Get the button that opens the modal
let cartoonsDiv = document.querySelectorAll(".cartoon");
for (let index = 0; index < cartoonsDiv.length; index++) {
    // When the user clicks on the button, open the modal
    cartoonsDiv[index].onclick = () => {
        modalInfo.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
        closeInfo.onclick = function() {
            modalInfo.style.display = "none";
          }
          window.onclick = function(event) {
            if (event.target == modalInfo) {
              modalInfo.style.display = "none";
            }
          }
    }











// When the user clicks anywhere outside of the modal, close it
