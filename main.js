import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".img1",
      //   markers: true,
      start: "top 80%",
      end: "top 20%",
      scrub: 4,
    },
  })
  .fromTo(".img2", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })
  .fromTo(".img1", { x: 500 }, { x: 0 })
  .fromTo(".img3", { x: -800, opacity: 0.2 }, { x: 0, opacity: 1 });

//   [[[[[[[[[[[[[[ Image Change - Blog ]]]]]]]]]]]]]]

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".middle",
      //   markers: true,
      start: "top 70%",
      end: "top 10%",
      scrub: 4,
    },
  })
  .fromTo(".front", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
  .fromTo(".blog_image", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 });

const image = document.querySelector(".blog_image");
let currentImage_num = 1;

setInterval(() => {
  currentImage_num++;
  //   @Blink Logic
  setTimeout(() => {
    image.style.opacity = 1;
  }, 200);
  image.style.opacity = 0;

  if (currentImage_num > 7) {
    currentImage_num = 1;
  }
  // @ Change the Image one by one
  setTimeout(() => {
    if (currentImage_num == 4) {
      image.src = `./Assets/Img/Blog/image-${currentImage_num}.jpeg`;
    } else {
      image.src = `./Assets/Img/Blog/image-${currentImage_num}.jpg`;
    }
  }, 150);
}, 2000);










