//Get the modal
let modalWeek = document.getElementById("modalWeek");
// Get the <span> element that closes the modal
let closeWeek = document.getElementsByClassName("closeWeek")[0];
// Get the button that opens the modal
let slideImage = document.querySelectorAll(".slideImage");
for (let index = 0; index < slideImage.length; index++) {
    // When the user clicks on the button, open the modal
    slideImage[index].onclick = () => {
        modalWeek.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
        closeWeek.onclick = function() {
            modalWeek.style.display = "none";
          }
          window.onclick = function(event) {
            if (event.target == modalWeek) {
              modalWeek.style.display = "none";
            }
          }
    }
    