import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCards from "./ProjectCards";

const Projects: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const desktop = width > 1275;
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <section className="relative flex h-fit w-full flex-col justify-center gap-16 pb-12">
      <motion.div
        className="absolute left-[50%] top-32 z-0 h-4/5 w-[3px] bg-dark"
        initial={{ scaleY: 0 }}
        style={{ scaleY: scrollYProgress, originY: "top" }}
      ></motion.div>

      <h1 className="mt-8 text-center text-2xl font-bold text-react underline underline-offset-8 xl:text-3xl">
        Projects
      </h1>
      <ul className="z-10 grid w-full justify-center gap-12">
        <ProjectCards />
      </ul>
    </section>
  );
};

export default Projects;

{
  /*  */
}

// relative
