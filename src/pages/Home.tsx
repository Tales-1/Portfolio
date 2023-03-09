import { motion } from "framer-motion";
import { iconsArray } from "../assets/iconsArray";

const Home: React.FC = () => {
  let y = -30;
  let delay = 0.1;
  let duration = 0.2;

  const displayIcons = iconsArray.map((icon, i) => {
    return (
      <motion.li
        className="hover:text-react"
        whileHover={{ scale: 1.5 }}
        key={i}
      >
        <a href={icon.link} target="#">
          <img src={icon.src} alt={icon.alt} className="w-5 xl:w-[1.5rem]" />
        </a>
      </motion.li>
    );
  });

  return (
    <motion.section className="relative h-[75vh] w-full lg:h-[80vh]">
      <div className="flex h-full flex-col items-center">
        <h1 className="absolute top-8 text-center text-2xl font-bold text-react underline underline-offset-8 xl:text-3xl ">
          Home
        </h1>
        <motion.div className="my-auto flex w-4/5 max-w-[45rem] flex-col items-center lg:justify-center ">
          <motion.h2
            className="font-poppins text-[2.4rem] font-bold text-title xl:text-[4.2rem]"
            initial={{ opacity: 0, y: y }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: delay + 0.1, duration: duration },
            }}
          >
            <motion.span
              className="block text-xs text-react xl:mb-3 xl:text-[0.81rem]"
              initial={{ opacity: 0, y: y }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: delay + 0.2, duration: duration },
              }}
            >
              HI, I'M
            </motion.span>
            JAWAD NAZIR
          </motion.h2>
          <motion.span
            className="mt-4 font-poppins text-sm text-react underline decoration-dashed underline-offset-8 md:text-[1.1rem] xl:mt-8 xl:text-[1.7rem]"
            initial={{ opacity: 0, y: y }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: delay + 0.3, duration: duration },
            }}
          >
            Front-End Developer
          </motion.span>
          <motion.p
            className="mt-12 block text-center text-xs text-[#282d35] md:w-[50ch] xl:text-base 2xl:text-lg lg-2:w-[65ch]"
            initial={{ opacity: 0, y: y }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: delay + 0.5, duration: duration },
            }}
          >
            A Developer with a passion for creating simple and intuitive web
            experiences. <br />
            <span className="mt-2 block">
              I'm currently seeking a role as a Front-End Developer.
            </span>
          </motion.p>

          <motion.a
            href={require("../assets/jawad-resume.pdf")}
            download="Resume.pdf"
            className="relative top-12 w-fit cursor-pointer rounded-lg bg-body p-[.8rem] text-xs text-white shadow-card before:absolute 
                                        before:left-[4px] before:bottom-[4px] before:h-full before:w-full before:rounded-lg before:border-2 before:border-react
                                        lg:top-[3.5rem] xl:p-4 xl:text-base 2xl:px-4 2xl:text-lg
                                        "
            initial={{ opacity: 0, y: y }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: "-5deg",
              transition: { delay: delay + 0.6, duration: duration },
            }}
            whileHover={{ scale: 1.2, opacity: 1, zIndex: 20 }}
          >
            Resume
          </motion.a>
        </motion.div>

        <motion.ul
          className="relative mx-auto flex w-full items-center justify-evenly gap-2 bg-body p-2 shadow-card  
                                md:mb-4 md:max-w-[20rem] md:rounded-xl xl:max-w-[25rem] xl:p-3"
          initial={{ opacity: 0, y: -y }}
          animate={{ opacity: 1, y: 0, transition: { delay: delay + 0.8 } }}
        >
          {displayIcons}
        </motion.ul>
      </div>

      <h4 className="fixed right-0 bottom-0 z-10 font-poppins text-[0.75rem] text-white lg:m-3">
        Designed & built with <span className="text-red-500">&#10084;</span> by
        <span className="text-white"> Jawad Nazir.</span>
      </h4>
    </motion.section>
  );
};

export default Home;
