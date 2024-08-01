import { Facebook } from "lucide-react";
import { InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";

const Footer = () => {
  let lastItem = (
    <ul className="flex lg:gap-[1.7vw] md:gap-[4vw] gap-[8vw]   py-2 mt-auto ">
      <a
        href="https://www.facebook.com/Zadaproduction1?mibextid=ZbWKwL"
        target="_blank"
      >
        <Facebook size={21} className=" hover:text-amber-600  rounded-full" />
      </a>

      <a
        href="https://www.youtube.com/@ZaDaproduction/featured"
        target="_blank"
      >
        <YoutubeLogo size={23} className=" hover:text-amber-600 rounded-full" />
      </a>
      <a href="" target="_blank">
        <InstagramLogo
          size={23}
          className="hover:text-amber-600  rounded-full"
        />
      </a>
      <a href="" target="_blank">
        <TwitterLogo size={23} className="hover:text-amber-600  rounded-full" />
      </a>
    </ul>
  );
  let data = [
    {
      title: "My Office",
      info: ["Ekuria,keraniganj", "dhaka"],
    },
    {
      title: "My Contact",
      info: ["zadaproductionofficial@gmail.com", "+880 1999679464"],
    },
    {
      title: "The Branch",
      info: ["4784 Muller du, Cayenne", "Bourgogne 62215"],
    },
    {
      title: "Follow Me",
      info: [],
    },
  ];

  return (
    <div className="mt-auto min-h-96 flex flex-col ">
      <div className="lg:container md:mx-8 mx-4 lg:mx-auto  min-h-96   ">
        <h2 className="syne text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight mb-4">
          Zada <br />
          <span className=" relative left-10 text-outline">Production</span>
        </h2>
        <p className="dm md:relative uppercase   md:pr-5 text-sm md:text-base text-amber-600 leading-relaxed tracking-widest mb-4">
          Grow your business With Zada
        </p>
        <div className=" min-h-40 mt-16 grid grid-cols-4 gap-2  justify-between  flex-wrap  items-center">
          {data.map((item, index) => (
            <div className=" h-full  " key={index + item.title}>
              <h5 className="syne text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight mb-4">
                {" "}
                {item.title}
              </h5>
              {index === data.length - 1 && lastItem}

              {item.info.map((info, index) => (
                <div key={index + "info"}>
                  <p
                    key={info + index}
                    className="dm text-sm md:text-sm leading-relaxed tracking-normal mb-1"
                  >
                    {info}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t flex justify-center items-center min-h-16 border-zinc-700 w-full">
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
                    
      </div>
    </div>
  );
};

export default Footer;
