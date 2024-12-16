import { motion } from "motion/react";

const listVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 1,
    },
  },
};

function Test() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        // initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: [0, 200], y: [0, -200], opacity: [0, 1] }}
        transition={{
          duration: 2,
          // delay: 4, //delay to start
          ease: "easeInOut",
          // repeat: Infinity,
        }}
        style={{ width: 300, height: 300, backgroundColor: "#b3223a" }}
      ></motion.div>
      <motion.ul variants={listVariants} initial="initial" animate="animate">
        <motion.li variants={listVariants}>Javascript</motion.li>
        <motion.li variants={listVariants}>React</motion.li>
        <motion.li variants={listVariants}>Nextjs</motion.li>
        <motion.li variants={listVariants}>Css</motion.li>
      </motion.ul>
    </section>
  );
}

export default Test;
