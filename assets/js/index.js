let popularLinks = document.querySelectorAll(".popular-tors a");

setInterval(() => {
  let random = Math.ceil(Math.random() * popularLinks.length);
  console.log(popularLinks[random]);
  popularLinks[random].classList.toggle("link-hover");
}, 600);
