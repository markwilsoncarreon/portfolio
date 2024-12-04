import { motion } from "framer-motion";
import about from "../assets/about.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";

const Skills = () => {
  return (
    <div className="h-full w-[80%] p-10 text-white ">
      <div className="flex justify-center mb-10">
        <p className="text-6xl">About Mark</p>
      </div>
      <div className="flex flex-col gap-8 mb-10 font-mono">
        <div className="flex">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "backIn" }}
            className="text-3xl font-thin text-center tracking-tight"
          >
            A BS Computer Science graduate at New Era University where I gather
            knowledge about HTML, CSS, and Javascript. know how to design, code,
            test simple and complex programs. Began working as a Content
            management admin and later land a web developer position.
          </motion.p>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={about1}
            alt="About"
            className="h-[21em]"
          />
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 text-3xl tracking-tighter text-justify"
          >
            <p>
              A System Programmer and Web Developer with 5+ years of experience
              in constructing and automating solutions. Proficient and committed
              to staying updated in the latest web technologies.
            </p>
          </motion.div>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={about}
            alt="About"
            className="h-[24em]"
          />
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 text-3xl tracking-tighter"
          >
            <p>Lifelong learner and always curious to learn new things.</p>
          </motion.div>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={about2}
            alt="About"
            className="w-[32em]"
          />
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 text-3xl tracking-tighter"
          >
            <p>and also loves coffee!</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
