import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 1 + "px";
});

const Hero = () => {
  const ref = useRef(null);
  // const { scrollY, scrollX } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end end"],
  // });

  // const scrollup = useTransform(scrollY, [0, 1], ["0%", "300%"]);
  // const scrollright = useTransform(scrollY, [0, 1], ["0%", "100%"]);

  return (
    <div className="hero" ref={ref}>
      <img src="/images/hero/hill1.png" id="hill1" />
      <img src="/images/hero/hill2.png" id="hill2" />
      <img src="/images/hero/hill3.png" id="hill3" />
      <img src="/images/hero/hill4.png" id="hill4" />
      <img src="/images/hero/hill5.png" id="hill5" />
      <img src="/images/hero/tree.png" id="tree" />
      {/* <motion.h2 style={{ y: scrollup }} id="text">
        Prathamesh Kokane
      </motion.h2> */}
      <h2 id="text">Prathamesh Kokane</h2>
      <img src="/images/hero/leaf.png" id="leaf" />
      <img src="/images/hero/plant.png" id="plant" />
    </div>
  );
};

export default Hero;
