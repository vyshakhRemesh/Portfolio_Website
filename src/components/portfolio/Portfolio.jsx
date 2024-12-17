import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "https://sourcebae.com/blog/wp-content/uploads/2023/09/project-planning-header@2x-678x381-1.png",
    title: "Full Stack Blog Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 2,
    img: "https://sourcebae.com/blog/wp-content/uploads/2023/09/project-planning-header@2x-678x381-1.png",
    title: "School Management System",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  // {
  //   id: 3,
  //   img: "https://sourcebae.com/blog/wp-content/uploads/2023/09/project-planning-header@2x-678x381-1.png",
  //   title: "Real-time Chat Application",
  //   desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
  //   link: "/",
  // },
  // {
  //   id: 4,
  //   img: "https://sourcebae.com/blog/wp-content/uploads/2023/09/project-planning-header@2x-678x381-1.png",
  //   title: "Social Media Project",
  //   desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
  //   link: "/",
  // },
  // {
  //   id: 5,
  //   img: "https://sourcebae.com/blog/wp-content/uploads/2023/09/project-planning-header@2x-678x381-1.png",
  //   title: "Animated Portfolio Website",
  //   desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
  //   link: "/",
  // },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" loading="loading" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  // const [containerDistance, setContainerDistance] = useState(0);
  // const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  // useEffect(() => {
  //   const calculateDistance = () => {
  //     if (ref.current) {
  //       const rect = ref.current.getBoundingClientRect();
  //       setContainerDistance(rect.left);
  //     }
  //   };

  //   calculateDistance();

  //   window.addEventListener("resize", calculateDistance);

  //   return () => {
  //     window.removeEventListener("resize", calculateDistance);
  //   };
  // }, []);

  // const { scrollYProgress } = useScroll({ target: ref });

  // const xTranslate = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [0, -window.innerWidth * items.length]
  // );

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerDistance, setContainerDistance] = useState(0);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        const totalWidth = containerRef.current.scrollWidth - window.innerWidth;
        setContainerWidth(totalWidth);

        const rect = containerRef.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    updateContainerWidth(); // Calculate on mount
    window.addEventListener("resize", updateContainerWidth);
    return () => window.removeEventListener("resize", updateContainerWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -containerWidth]
  );

  return (
    <div className="portfolio" ref={containerRef}>
      <motion.div
        className="pList"
        style={{ x: xTranslate }}
        transition={{ ease: "easeOut", duration: 0.6 }}
      >
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      {/* <section /> */}
      {/* <section />
      <section /> */}
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
