import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  return (
    <section className="relative flex h-fit w-full flex-col gap-12 pb-8 xl:h-[83vh]">
      <h1 className="mt-8 w-full text-center text-2xl font-bold text-react underline underline-offset-8 xl:text-3xl">
        Contact
      </h1>
      <motion.div
        className={`flex w-4/5 flex-col items-center gap-6 text-center text-white lg:gap-12 ${
          submitted ? "" : ""
        } m-auto`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      >
        {submitted ? (
          <div className="relative bottom-8 grid gap-12">
            <h2 className="font-poppins text-[2.8rem] font-bold text-title lg:text-7xl">
              Thank <span className="text-react">you!</span>
            </h2>
            <p className="font-body text-sm tracking-wider text-body lg:text-xl">
              I'll be in touch soon.
            </p>
          </div>
        ) : (
          <div className="relative flex flex-col gap-8 2xl:bottom-4 2xl:gap-10">
            <h2 className="font-poppins text-[2.4em] font-bold text-title md:text-[2.5rem] 2xl:text-[4rem]">
              Get in <span className="text-react">Touch.</span>
            </h2>
            <p className="font-body text-sm tracking-wider text-body 2xl:text-lg">
              Want a clean and friendly interface for your app?
              <span className="mt-2 block">
                Well, what are you waiting for!
              </span>{" "}
            </p>
            <ContactForm handleSubmit={handleSubmit} />
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
