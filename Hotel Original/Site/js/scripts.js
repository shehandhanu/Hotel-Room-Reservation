const openlogincardButtons = document.querySelectorAll('[data-logincard-target]')
const closelogincardButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openlogincardButtons.forEach(button => {
  button.addEventListener('click', () => {
    const logincard = document.querySelector(button.dataset.logincardTarget)
    openlogincard(logincard)
  })
})

overlay.addEventListener('click', () => {
  const logincards = document.querySelectorAll('.logincard.active')
  logincards.forEach(logincard => {
    closelogincard(logincard)
  })
})

closelogincardButtons.forEach(button => {
  button.addEventListener('click', () => {
    const logincard = button.closest('.logincard')
    closelogincard(logincard)
  })
})

function openlogincard(logincard) {
  if (logincard == null) return
  logincard.classList.add('active')
  overlay.classList.add('active')
}

function closelogincard(logincard) {
  if (logincard == null) return
  logincard.classList.remove('active')
  overlay.classList.remove('active')
}


/////////////////////sign up////////////////////

function myFunction() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

var check = function() {
  if (document.getElementById('pass').value ==
    document.getElementById('repass').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Passwords Matched';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Passwords are not Matching';
  }
}


function ckadmin(x)
{
  if(x==0)
  {
    document.getElementById('adminbutten').style.display = 'block';
  }
  else
  {
    document.getElementById('adminbutten').style.display = 'none';
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
 	var test = document.getElementsByClassName("test");
 	test[0].style.display = "none";
	
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

function makereservationcanceled(){
  alert('Do You Want To Cancel Reservation');

}