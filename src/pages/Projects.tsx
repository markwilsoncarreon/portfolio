import { motion } from "framer-motion";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full  text-slate-400 ">
      <div className="flex justify-center mb-10">
        <p className="text-6xl">Projects</p>
      </div>
      <div className="lg:flex flex-col flex-wrap gap-8 font-mono">
        <a href="https://web.xlog.net/" target="_blank">
          <div className="flex gap-8 justify-center items-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={project1}
              alt="XLOG CORE"
              className="h-[21em]"
            />
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-1/2 text-3xl tracking-tighter text-justify"
            >
              <p>End-to-end logistics solutions</p>
              <div className="flex text-sm font-mono tracking-wide text-blue-500">
                <p className="p-2 border border-gray-500">Angular</p>
                <p className="p-2 border border-gray-500">Typescript</p>
                <p className="p-2 border border-gray-500">Angular Material</p>
                <p className="p-2 border border-gray-500">Redux</p>
              </div>
            </motion.div>
          </div>
        </a>
        <a href="https://depot.xlog.net/" target="_blank">
          <div className="flex gap-8 justify-center items-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={project2}
              alt="Depot Management System"
              className="h-[21em]"
            />
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-1/2 text-3xl tracking-tighter text-justify"
            >
              <p>Depot Management and Monitoring System</p>
              <div className="flex text-sm font-mono tracking-wide text-blue-500">
                <p className="p-2 border border-gray-500">React</p>
                <p className="p-2 border border-gray-500">TailwindCSS</p>
                <p className="p-2 border border-gray-500">Typescript</p>
                <p className="p-2 border border-gray-500">React Hook Form</p>
                <p className="p-2 border border-gray-500">Zustand</p>
              </div>
            </motion.div>
          </div>
        </a>
        <a href="https://develop-web.lesoleil.xlog.asia/" target="_blank">
          <div className="flex gap-8 justify-center items-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={project3}
              alt="Freight Forwarder Automated System"
              className="h-[21em]"
            />
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-1/2 text-3xl tracking-tighter text-justify"
            >
              <p>Freight Forwarder Automated System</p>
              <div className="flex text-sm font-mono tracking-wide text-blue-500">
                <p className="p-2 border border-gray-500">React</p>
                <p className="p-2 border border-gray-500">TailwindCSS</p>
                <p className="p-2 border border-gray-500">Typescript</p>
                <p className="p-2 border border-gray-500">React Hook Form</p>
                <p className="p-2 border border-gray-500">Zustand</p>
              </div>
            </motion.div>
          </div>
        </a>
        <a href="https://web.cms.xlog.net/auth/login" target="_blank">
          <div className="flex gap-8 justify-center items-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={project4}
              alt="CMS"
              className="h-[21em]"
            />
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-1/2 text-3xl tracking-tighter text-justify"
            >
              <p>Content Management System | Admin Portal</p>
              <div className="flex text-sm font-mono tracking-wide text-blue-500">
                <p className="p-2 border border-gray-500">Angular</p>
                <p className="p-2 border border-gray-500">Typescript</p>
                <p className="p-2 border border-gray-500">Angular Material</p>
                <p className="p-2 border border-gray-500">Redux</p>
              </div>
            </motion.div>
          </div>
        </a>
        <a href="https://portal.evaultpay.com/login" target="_blank">
          <div className="flex gap-8 justify-center items-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={project5}
              alt="Payment Portal"
              className="h-[21em]"
            />
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-1/2 text-3xl tracking-tighter text-justify"
            >
              <p>Payment Portal</p>
              <div className="flex text-sm font-mono tracking-wide text-blue-500">
                <p className="p-2 border border-gray-500">NextJS</p>
                <p className="p-2 border border-gray-500">TailwindCSS</p>
                <p className="p-2 border border-gray-500">Typescript</p>
                <p className="p-2 border border-gray-500">React Hook Form</p>
                <p className="p-2 border border-gray-500">Redux</p>
              </div>
            </motion.div>
          </div>
        </a>
        <div className="flex flex-col justify-center gap-4 text-4xl">
          <h1>Ad Hoc Projects</h1>
          <p className="text-2xl">Crowd-Funding</p>
          <p className="text-2xl">Real Estate</p>
          <p className="text-2xl">Delivery Service</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
