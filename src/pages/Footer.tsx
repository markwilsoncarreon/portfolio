import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex w-full justify-center items-center gap-4 p-8 mb-10 text-white text-xl">
      <span className="flex items-center gap-2">
        <MdEmail className="text-white" />
        markwilsoncarreon@gmail.com
      </span>
    </div>
  );
};

export default Footer;
