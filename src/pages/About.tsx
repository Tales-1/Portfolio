import Profile from "../assets/pp_hd_two.jpeg";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="relative flex flex-col 2xl:h-[83vh]">
      <h1 className="mt-8 text-center text-2xl font-bold text-react underline underline-offset-8 xl:text-3xl">
        My Story
      </h1>
      <div className="relative m-auto mt-8 flex w-3/4 max-w-[90rem] flex-col-reverse gap-14 pb-12 md:flex-row 2xl:m-auto">
        <motion.div
          className="relative m-auto aspect-square w-3/5 max-w-[22rem] rounded-md border-2 border-react"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
        >
          <div
            className="relative left-4 bottom-4 m-auto h-full w-full overflow-hidden rounded-md
                                        before:absolute before:inset-0 before:bg-react before:opacity-20 hover:before:opacity-0 focus:before:opacity-0"
          >
            <img
              src={Profile}
              alt="me"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          className="relative z-10 flex w-full flex-col justify-around rounded-md p-8 text-slate-300"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
        >
          <p className="dt:text-[1.1rem] font-body text-[0.9rem] leading-6 tracking-[.5px] text-black 2xl:text-lg">
          I am a dedicated Software Developer with over a year of experience at Rubixx in Stafford, England. In my current role, I specialize in .NET Core, Azure DevOps, C#, 
          and Entity Framework Core, leveraging the Model-View-Controller (MVC) architecture to build robust and scalable applications. 
          <br />
          <br />
          I began my journey at Rubixx as a Junior Software Developer, quickly advancing due to my proficiency in Azure DevOps, .NET Framework, and MVC.
          I am passionate about developing innovative solutions and continuously enhancing my technical skills to contribute effectively to my team and projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
