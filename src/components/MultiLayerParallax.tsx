"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const MultiLayerParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const textY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "100%", "200%"]
  );

  const colourText = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 1],
    ["#4d7773", "#4d7773", "#4d7773", "#4d7773"]
  );

  const scaleText = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1, 1.25, 1, 0.75, 0.5]
  );

  const foregroundY = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["100%", "0%", "0%"]
  );

  const foregroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7],
    ["100%", "30%", "0%"]
  );

  const leaveScale = useTransform(scrollYProgress, [0, 0.25, 1], [1, 2, 2]);
  const leaveOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["100%", "0%", "0%"]
  );

  // const { scrollY } = useScroll();
  //   const yCity = useTransform(scrollY, [0, 200], [0, -100]);
  //   const opacityCity = useTransform(
  //     scrollY,
  //     [0, 200, 300, 500],
  //     [1, 0.5, 0.5, 0]
  //   );
  //   const yHero = useTransform(scrollY, [0, 200], [0, -150]);
  //   const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);
  //   const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);
  //   const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);
  //   const backgroundY = useTransform(scrollY, [0, 1], ["0%", "100%"]);
  //   const textY = useTransform(scrollY, [0, 1], ["0%", "50%"]);

  //   return (
  //     <div
  //       ref={ref}
  //       className="w-full h-screen overflow-hidden relative grid place-items-center "
  //     >
  //       <motion.h1
  //         style={{ y: textY, scale: scaleText, color: colourText }}
  //         className="font-bold text-7xl md:text-9xl relative z-10"
  //       >
  //         CHAKRA
  //       </motion.h1>

  //       <motion.div
  //         className="absolute inset-0 z-20"
  //         style={{
  //           backgroundImage: `url(parallax5/fore.png)`,
  //           backgroundPosition: "bottom",
  //           backgroundSize: "cover",
  //           y: foregroundY,
  //           opacity:foregroundOpacity
  //         }}
  //       >
  //         {" "}
  //       </motion.div>

  //       {/* <motion.div
  //         className="absolute inset-0 z-50"
  //         style={{
  //           backgroundImage: `url(/parallax4/leaves.png)`,
  //           backgroundPosition: "top",
  //           backgroundSize: "cover",
  //           scale: leaveScale,
  //           opacity: leaveOpacity,
  //         }}
  //       ></motion.div> */}
  //     </div>
  //   );

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center p-6"
    >
     
        <motion.h1
          style={{ y: textY, scale: scaleText, color: colourText }}
          className="font-bold text-7xl md:text-9xl relative z-10"
        >
          CHAKRA
        </motion.h1>

        <motion.div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(parallax5/fore.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: foregroundY,
            opacity: foregroundOpacity,
          }}
        >
          {" "}
        </motion.div>

      {/* <motion.div
        className="absolute inset-0 z-50"
        style={{
          backgroundImage: `url(/parallax4/leaves.png)`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          scale: leaveScale,
          opacity: leaveOpacity,
        }}
      ></motion.div> */}
    </div>
  );
};

export default MultiLayerParallax;
