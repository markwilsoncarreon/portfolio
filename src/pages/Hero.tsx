import { motion } from "framer-motion";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const textVariants = (duration: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: duration, ease: "anticipate" },
  },
});

const nameArr = ["M", "A", "R", "K", " ", "C", "A", "R", "R", "E", "O", "N"];

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh)] w-[80%] text-white gap-4">
      <div className="flex gap-4">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {nameArr.map((n, i) => {
            return (
              <motion.h1
                variants={textVariants(i * 0.5)}
                initial="hidden"
                animate="visible"
                className="text-7xl"
              >
                {n}
              </motion.h1>
            );
          })}
        </div>
        <div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 2, ease: "backIn" }}
          >
            Frontend Developer
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 4, ease: "backIn" }}
          >
            UI/UX
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 6, ease: "backIn" }}
          >
            System Programmer
          </motion.div>
        </div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 7, ease: "backIn" }}
        className="flex gap-4"
      >
        <a href="https://www.linkedin.com/in/makwilsoncarreon/" target="_blank">
          <FaLinkedin className="text-6xl text-slate-500" />
        </a>
        <a href="https://www.facebook.com/markwilsoncarreon" target="_blank">
          <FaFacebookSquare className="text-6xl text-slate-500" />
        </a>
        <a href="https://github.com/markwilsoncarreon" target="_blank">
          <FaGithubSquare className="text-6xl text-slate-500" />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
