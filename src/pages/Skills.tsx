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
    <div className="flex flex-col my-8 text-center w-full gap-8 px-8 text-white">
      <p className="text-6xl">Tech Stacks</p>
      <div className="flex justify-center gap-4 text-7xl">
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
          className="p-2 border-2 border-gray-500 rounded-xl"
          title="HTML5"
        >
          <FaHtml5 className="text-orange-500" />
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
          className="p-2 border-2 border-gray-500 rounded-xl"
          title="CSS3"
        >
          <FaCss3Alt className="text-blue-500" />
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
          className="p-2 border-2 border-gray-500 rounded-xl"
          title="JavaScript"
        >
          <IoLogoJavascript className="text-yellow-400" />
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
          className="p-2 border-2 border-gray-500 rounded-xl"
          title="ReactJS"
        >
          <RiReactjsLine className="text-cyan-400" />
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
          className="p-2 border-2 border-gray-500 rounded-xl"
          title="Angular"
        >
          <FaAngular className="text-red-500" />
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
          className="p-2 border-2 border-gray-500 rounded-xl"
          title="TailwindCSS"
        >
          <RiTailwindCssFill className="text-cyan-400" />
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
          className="p-2 border-2 border-gray-500 rounded-xl"
          title="TypeScript"
        >
          <TbBrandTypescript className="text-blue-400" />
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
          className="p-2 border-2 border-gray-500 rounded-xl"
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
          className="p-2 border-2 border-gray-500 rounded-xl"
          title="React hook forms"
        >
          <SiReacthookform className="text-pink-400" />
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
          className="p-2 border-2 border-gray-500 rounded-xl"
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
          className="p-2 border-2 border-gray-500 rounded-xl"
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
