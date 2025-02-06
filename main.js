const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links=document.querySelector('.links')
// const logo=document.querySelector('.logo')
burger.addEventListener('click', () => {
    console.log("i am here ")
    if(navLinks.style.display!=="none"){
  navLinks.style.display="none"
}
else{
    navLinks.style.display="flex"
}
});


function showSkill(front) {
  var skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(function(skillBar) {
    skillBar.style.display = 'none';
  });
  document.getElementById(front + '-front').style.display = 'block';
}


function showDetails(button) {
  // Get the card details container
  const cardDetails = button.parentNode.querySelector('.card-details');
  

  // Toggle the display of the card details container
  cardDetails.style.display = cardDetails.style.display === 'block' ? 'none' : 'block';
  // body.style.display==="none"
}





function sendemail(){
  let parms={
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  }
 
emailjs.send("service_e8vjpai","template_fizc4ei",parms).then(alert('email sent!!'))
}