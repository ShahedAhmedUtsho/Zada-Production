import { Settings } from "lucide-react";

const Developing = () => {
  return (
    <div className=" flex flex-col justify-center  items-center gap-3">
      <Settings className="rotating-element" size={150} />
      <p className="dm text-sm md:text-base opacity-70 leading-relaxed tracking-normal ">
        Copyright © 2024{" "}
        <a
          className=" border-zinc-700 border-b hover:text-blue-500"
          href="https://www.shahedahmed.tech/"
          target="_blank"
        >
          Shahed Ahemd
        </a>
      </p>
    </div>
  );
};

export default Developing;
