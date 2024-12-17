import "./hero.css";
import Speech from "./Speech";
import Shape from "./Shape";
import { motion, useInView } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <div className="hero" ref={ref}>
      <div className="hSection left">
        {/* Title */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I'm Vyshakh!</span>
        </motion.h1>
        {/* Awards */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate={isInView ? "animate" : ""}
          className="awards"
        >
          <motion.h2 variants={awardVariants}>Software Engineer</motion.h2>
          <motion.p variants={awardVariants}>
            2+ years of proffesional experience specializing in frontend
            technologies
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <motion.img
              variants={awardVariants}
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt=""
            />
            <motion.img
              variants={awardVariants}
              src="https://static.vecteezy.com/system/resources/previews/048/332/149/non_2x/js-icon-transparent-background-free-png.png"
              alt=""
            />
            <motion.img
              variants={awardVariants}
              src="https://cdn.iconscout.com/icon/free/png-256/free-firebase-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-3030134.png"
              alt=""
            />
            <motion.img
              variants={awardVariants}
              src="https://docubear.com/wp-content/uploads/2023/06/rtk-query.png"
              alt=""
            />
          </motion.div>
        </motion.div>
        {/* Scroll SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        {/* Follow */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate={isInView ? "animate" : ""}
          className="follow"
        >
          <motion.a
            variants={followVariants}
            href="https://www.linkedin.com/in/vyshakhremesh/"
            target="_blank"
          >
            <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="" />
          </motion.a>

          <motion.a
            variants={followVariants}
            href="https://github.com/vyshakhRemesh?tab=repositories"
            target="_blank"
          >
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt="" />
          </motion.a>
          {/* <motion.a variants={followVariants} href="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/152/152810.png"
              alt=""
            />
          </motion.a> */}
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* Bubble */}
        <Speech />
        {/* Certificate */}
        <motion.div
          animate={isInView ? { opacity: [0, 1] } : {}}
          transition={{ duration: 1.5 }}
          className="certificate"
        >
          <img
            src="https://repository-images.githubusercontent.com/515849217/60016668-4437-498a-9bff-f5b6b9faf607"
            alt=""
          />
          CODING NINJAS CERTIFIED
          <br />
          PROFESSIONAL
          <br />
          FRONTEND DEVELOPER
        </motion.div>
        {/* Contact Button */}
        <motion.a
          animate={isInView ? { x: [200, 0], opacity: [0, 1] } : {}}
          transition={{ duration: 2 }}
          href="/#contact"
          className="contactLink"
        >
          <motion.div
            animate={isInView ? { rotate: [0, 360] } : {}}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            className="contactButton"
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src={`${process.env.PUBLIC_URL}/hero.png`} alt="heroImage" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
