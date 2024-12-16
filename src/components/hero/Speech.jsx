import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="bubbleContainer"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Passionate in building responsive websites",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Passionate in building user-friendly websites",
            1000,
            "Passionate in building scaleable websites",
            1000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
          deletionSpeed={60}
        />
      </div>
      <img
        src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
        alt=""
      />
    </motion.div>
  );
};
export default Speech;
