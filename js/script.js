// file script//

// console test
console.log ("working")

// button nama
function myFunction() {
  let person = prompt("Please enter your name", "");
  if (person == '') {alert('Name must be filled out');
  } else {
    document.getElementById("demo").innerHTML =
    "Selamat datang,  " + person + "!! Bagaimana kabarmu?";
  }
}

// buat banner auto slide
let bannerIndex = 0;
// Function to change banner
function nextBanner() {
  bannerIndex += 1;
  showBanner();
}
// Function banner
function showBanner() {
  const banners = document.getElementsByClassName('banner-img');

  if (banners.length === 0) {
    console.warn("No banners found with class 'banner-img'.");
    return; // Exit the function early
  }
  if (bannerIndex >= banners.length) {
    bannerIndex = 0;
  }

  for (let i = 0; i < banners.length; i++) {
      banners[i].style.display = 'none';
  }
  banners[bannerIndex].style.display = 'block';
}
// waktu ganti banner
setInterval(nextBanner, 3000);



// DOM
document.addEventListener('DOMContentLoaded', function() {

  // Form validation index.html
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();

          let isValid = true;

          // Name validation
          const name = document.getElementById('name').value;
          const nameError = document.getElementById('nameError');
          if (!name.trim()) {
              nameError.style.display = 'block';
              isValid = false;
          } else {
              nameError.style.display = 'none';
          }

          // Date validation
          const date = document.getElementById('date').value;
          const dateError = document.getElementById('dateError');
          if (!date) {
              dateError.style.display = 'block';
              isValid = false;
          } else {
              dateError.style.display = 'none';
          }
          
          // Gender validation
          const genderMale = document.getElementById('male');
          const genderFemale = document.getElementById('female');
          const genderError = document.getElementById('genderError');
          if ((!genderMale || !genderMale.checked) && (!genderFemale || !genderFemale.checked)) {
              genderError.style.display = 'block';
              isValid = false;
          } else {
              genderError.style.display = 'none';
          }
          
          // Message validation
          const message = document.getElementById('message').value;
          const messageError = document.getElementById('messageError');
          if (!message.trim()) {
              messageError.style.display = 'block';
              isValid = false;
          } else {
              messageError.style.display = 'none';
          }
          
          // kalau form valid, update the info panel
          if (isValid) {
              const infoName = document.getElementById('info-name');
              const infoDate = document.getElementById('info-date');
              const infoGender = document.getElementById('info-gender');
              const infoMessage = document.getElementById('info-message');
              
              if (infoName) infoName.textContent = name;
              
              if (infoDate) {
                  const dateObj = new Date(date);
                  const formattedDate = (dateObj.getMonth() + 1).toString().padStart(2, '0') + '/' +
                                        dateObj.getDate().toString().padStart(2, '0') + '/' +
                                        dateObj.getFullYear();
                  infoDate.textContent = formattedDate;
              }
              
              if (infoGender) {
                  const gender = genderMale && genderMale.checked ? 'Laki - Laki' : 'Perempuan';
                  infoGender.textContent = gender;
              }
              
              if (infoMessage) infoMessage.textContent = message;
              
              contactForm.reset();
              const infoPanel = document.getElementById('submitted-info');
              if (infoPanel) {
                  infoPanel.scrollIntoView({ behavior: 'smooth' });
              }
          }
      });
  }})

