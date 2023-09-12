// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const icons = document.querySelectorAll(".fa.fa-pause");
const button = document.querySelector(".switch-btn");
const title = document.querySelector(".switch-title");
const video = document.querySelector(".video-container");
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
  preloader.classList.add('hide-preloader');
});

button.addEventListener('click', function(btn) {
  for (let i = 0; i < icons.length; i++) {
    // let icon = icons[i].classList;

    if(icons[i].classList.contains('fa-pause')) {
      console.log(icons[i].classList);
      icons[i].classList.remove('fa-pause');
      icons[i].classList.add('fa-play');
      title.textContent = 'play me';
      video.pause();
    } else {
      icons[i].classList.remove('fa-play');
      icons[i].classList.add('fa-pause');
      title.textContent = 'stop me';
      video.play();
    }
  }
});