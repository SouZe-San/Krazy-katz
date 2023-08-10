import "./style.css";

import image1 from "./Assets/Img/Blog/image-1.jpg";
import image2 from "./Assets/Img/Blog/image-2.jpg";
import image3 from "./Assets/Img/Blog/image-3.jpg";
import image4 from "./Assets/Img/Blog/image-4.jpeg";
import image5 from "./Assets/Img/Blog/image-5.jpg";
import image6 from "./Assets/Img/Blog/image-6.jpg";
import image7 from "./Assets/Img/Blog/image-7.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7];

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap
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
    console.log(currentImage_num);
    image.src = images[currentImage_num - 1];
    image.alt = `Image ${currentImage_num + 1}`;
  }, 150);
}, 2000);
