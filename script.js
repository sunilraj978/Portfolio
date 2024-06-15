const scriptURL = 'https://script.google.com/macros/s/AKfycbyqxH8P7vp2vyw8yu1gUMB_MxotzI3tTYvoy52bbOQRiCuot2Z6EbT8MEnj8r7t7hFaqg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  //-------------------contact form submit message--------------------------//


let sections = document.querySelectorAll('secton');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
      links.classList.remove('active');
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    });
  };
});


/*=========================*/

let header = document.querySelector('header');
header.classList.toggle('sticky', window.screenY > 100);


};


// toggle icon navbar

let menuBar = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuBar.onclick = () => {
  menubar.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};