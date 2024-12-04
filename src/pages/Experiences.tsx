import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="h-full w-[80%] p-10 text-white flex flex-col items-center">
      <div className="flex justify-center mb-10">
        <p className="text-6xl">Experiences</p>
      </div>
      <div className="grid grid-cols-2 w-full font-mono">
        <div className="flex flex-col w-full gap-8 items-center ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl tracking-tighter"
          >
            <p>2019 - Present (5yrs 5mos)</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl tracking-tighter"
          >
            <p>2014 - 2019 (4yrs 9mos)</p>
          </motion.div>
        </div>

        <div className="flex flex-col  gap-8 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl tracking-tighter"
          >
            <p>System Programmer II</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl tracking-tighter"
          >
            <p>Web Developer / Programmer</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
