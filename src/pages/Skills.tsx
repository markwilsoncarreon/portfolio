import { RiReactjsLine } from "react-icons/ri";
import { FaAngular, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReacthookform } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaGitSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="px-8 gap-8 flex flex-col justify-center items-center text-slate-400">
      <p className="text-6xl">Tech Stacks</p>
      <div className="gap-4 text-7xl lg:flex">
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          title="HTML5"
        >
          <FaHtml5 className="text-orange-500 p-2 border-2 border-gray-500 rounded-xl" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 1.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          title="CSS3"
        >
          <FaCss3Alt className="text-blue-500 p-2 border-2 border-gray-500 rounded-xl" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          title="JavaScript"
        >
          <IoLogoJavascript className="text-yellow-400 p-2 border-2 border-gray-500 rounded-xl" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          title="ReactJS"
        >
          <RiReactjsLine className="text-cyan-400 p-2 border-2 border-gray-500 rounded-xl" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 1,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          title="Angular"
        >
          <FaAngular className="text-red-500 p-2 border-2 border-gray-500 rounded-xl" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          title="TailwindCSS"
        >
          <RiTailwindCssFill className="text-cyan-400 p-2 border-2 border-gray-500 rounded-xl" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          title="TypeScript"
        >
          <TbBrandTypescript className="text-blue-400 p-2 border-2 border-gray-500 rounded-xl" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          title="Shadcn UI"
        >
          <SiShadcnui />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 1.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          title="React hook forms"
        >
          <SiReacthookform className="text-pink-400 p-2 border-2 border-gray-500 rounded-xl" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 1,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          title="Zod"
        >
          <SiZod />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          title="Git"
        >
          <FaGitSquare />
        </motion.div>
      </div>
      <p className="font-mono">and others...</p>
    </div>
  );
};

export default Skills;
