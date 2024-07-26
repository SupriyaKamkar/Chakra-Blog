import { HTMLMotionProps, motion, Variants } from "framer-motion";

interface WavyTextProps extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  duration?: number;
  replay?: boolean;
}

const WavyText = ({
  text,
  delay = 0,
  duration = 0.1,
  replay,
  ...props
}: WavyTextProps) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: i * delay,
      },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };
  return (
    <motion.h1
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};
export default WavyText;
