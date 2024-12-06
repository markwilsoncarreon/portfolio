import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="my-10 px-10 justify-center text-slate-400 flex flex-col items-center">
      <div className="flex justify-center mb-10">
        <p className="text-6xl">Experiences</p>
      </div>
      <div className="font-mono text-3xl tracking-tighter">
        <div className="flex w-full items-center ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl tracking-tighter"
          >
            <p>2019 - Present (5yrs 5mos) - System Programmer II</p>
          </motion.div>
        </div>

        <div className="flex  items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl tracking-tighter"
          >
            <p>2014 - 2019 (4yrs 9mos) - Web Developer / Programmer</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
