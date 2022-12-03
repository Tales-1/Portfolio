import { useState } from "react"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/e93194f0-72f8-11ed-a126-b172cf164538"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl text-body">Thank you!</div>
        <div className="text-md text-body">We'll be in touch soon.</div>
      </>
    );
  }
  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="w-full max-w-[30rem] mt-4"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mt-8 pt-0">
        <button
          className="bg-react text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit">
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
