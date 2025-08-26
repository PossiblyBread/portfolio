import { useEffect } from "react";

export default function useScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");

    function checkScroll() {
      elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight * 0.80) {
          el.classList.add("show");
        }
      });
    }

    window.addEventListener("scroll", checkScroll); 
    checkScroll(); // run once at mount

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
}
