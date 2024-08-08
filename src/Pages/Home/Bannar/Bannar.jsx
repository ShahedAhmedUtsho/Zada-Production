import { Fade, Flip, Roll } from "react-awesome-reveal";
import { css, keyframes } from '@emotion/react';

const rollFromRight = keyframes`
  0% {
    transform: translateX(100%) rotate(360deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(0);
    opacity: 1;
  }
`;
const rollStyle = css`
  animation: ${rollFromRight} 1s ease-out;
`;

const Bannar = () => {
  return (
    <Fade className="globalBG">
      <div className="lg:container lg:mx-auto md:mx-8 mx-4 md:min-h-screen lg:pb-20 pb-5  md:pb-10">
        <div className="w-full md:flex globalBG h-full">
          <div className="md:max-h-screen flex  z-50  flex-col !bg-transparent mt-24 lg:max-h-none md:w-5/12 globalBG">
           <h1>
           <strong className="syne  block text-5xl text-center md:text-7xl lg:text-[8.9vw] font-bold leading-tight tracking-tight mb-4">
              Zada
            </strong>
            <strong className="syne  block text-amber-600 text-center text-5xl md:text-7xl lg:text-[8.9vw] md:relative lg:left-20 md:left-16 left-10 text-outline font-bold leading-tight tracking-tight mb-4">
              Production
            </strong>
            <p className="dm md:relative uppercase md:text-start text-center  lg:pl-32 md:pr-5 md:pl-20  text-sm md:text-base text-amber-600 leading-relaxed tracking-widest mb-4">
              Grow your business With Zada
            </p>
           </h1>
            <div className="lg:min-h-52 min-h-64  flex  flex-col  lg:gap-0 gap-0 lg:flex-row mt-auto">
              <div className="relative  h-full   w-full md:w-8/12 lg:w-5/12 md:pr-3 md:pb-3">
                <div className="w-full pb-8 md:pb-2 h-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/bujeu0wbupaf9tgbf8b7"
                    alt=""
                  />
                </div>
                <button className="absolute bottom-4 md:bottom-0  right-0 left-0 md:left-auto mx-auto max-w-40  md:right-0  px-[1em] py-[0.5em] text-sm lg:text-xl hover:bg-amber-700 transition-all duration-100 bg-amber-600">
                  Let's work
                </button>
              </div>
              <div className="flex flex-col lg:w-7/12 h-full">
                <h2 className="dm text-sm lg:mt-auto mt-5 lg:pr-10 lg:pl-8 md:text-base leading-relaxed tracking-normal mb-4">
                Business growth through videography, photography, studio, digital marketing, and web development.
                </h2>
              </div>
            </div>
          </div>
          <div css={rollStyle} direction="top" className="md:w-7/12 overflow-hidden md:max-h-screen lg:max-h-[1200px] md:h-[80vh] lg:h-full">
            <img
              src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/snpo67xklz3xfyshvfy4"
              alt=""
              className="object-cover h-full lg:h-[820px] w-full "
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Bannar;
