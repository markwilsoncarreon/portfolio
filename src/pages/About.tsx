import { motion } from "framer-motion";
import about from "../assets/about.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";

const Skills = () => {
  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center text-center text-xl text-slate-400 p-10">
      <p className="text-6xl">About Mark</p>
      <div className="w-2/3  font-mono">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "backIn" }}
        >
          A BS Computer Science graduate at New Era University where I gather
          knowledge about HTML, CSS, and Javascript. know how to design, code,
          test simple and complex programs. Began working as a Content
          management admin and later land a web developer position.
        </motion.p>
      </div>
      <div className="lg:flex gap-8 justify-center items-center text-start px-4 font-mono">
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={about1}
          alt="About"
          className="lg:h-[21em] size-50"
        />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl"
        >
          <p>
            A System Programmer and Web Developer with 5+ years of experience in
            constructing and automating solutions. Proficient and committed to
            staying updated in the latest web technologies.
          </p>
        </motion.div>
      </div>
      <div className="lg:flex gap-8 justify-center items-center text-center font-mono">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 text-2xl tracking-tighter"
        >
          <p>Lifelong learner and always curious to learn new things.</p>
        </motion.div>
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={about}
          alt="About"
          className="h-[24em]"
        />
      </div>
      <div className="lg:flex gap-8 justify-center items-center text-center font-mono">
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
          className="w-1/2 text-2xl tracking-tighter"
        >
          <p>and also loves coffee!</p>
        </motion.div>
      </div>
      <div className="text-center my-5">
        <a href="offline" className="p-4 bg-white rounded-lg w-1/2 font-mono">
          When Offline
        </a>
      </div>
    </div>
  );
};

export default Skills;
