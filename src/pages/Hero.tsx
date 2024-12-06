import { motion } from "framer-motion";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const textVariants = (duration: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: duration, ease: "linear" },
  },
});

const nameStr = "MARK CARREON";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 text-slate-400">
      <div className="flex flex-col items-center gap-2 ">
        <div className="flex">
          {nameStr
            .toString()
            .split("")
            .map((n, i) => {
              return (
                <motion.h1
                  variants={textVariants(i * 0.5)}
                  initial="hidden"
                  animate="visible"
                  className="lg:text-8xl md:text-6xl text-4xl font-semibold lg:tracking-wider"
                >
                  {n}
                </motion.h1>
              );
            })}
        </div>

        <div className="lg:flex w-full text-xl justify-between bg-gradient-to-b from-cyan-950 via-teal-600 to-green-500 bg-clip-text text-transparent tracking-tight">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: "backIn" }}
          >
            UI/UX
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 2.5, ease: "backIn" }}
          >
            Frontend Developer
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 5.5, ease: "backIn" }}
          >
            System Programmer
          </motion.div>
        </div>
      </div>

      <div className="text-4xl">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 7, ease: "backIn" }}
          className="flex gap-4"
        >
          <a
            href="https://www.linkedin.com/in/makwilsoncarreon/"
            target="_blank"
          >
            <FaLinkedin className=" text-slate-500" />
          </a>
          <a href="https://www.facebook.com/markwilsoncarreon" target="_blank">
            <FaFacebookSquare className=" text-slate-500" />
          </a>
          <a href="https://github.com/markwilsoncarreon" target="_blank">
            <FaGithubSquare className=" text-slate-500" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
