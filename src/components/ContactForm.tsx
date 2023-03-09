import { useState } from "react";
type Props = {
  handleSubmit: () => void;
};

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/e93194f0-72f8-11ed-a126-b172cf164538"; // TODO - fill on the later step

const ContactForm: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="w-full pb-4"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="relative w-full rounded border-[1px] border-body bg-white p-[5px] text-sm text-gray-600 placeholder-gray-400 shadow outline-none focus:outline-none focus:ring lg:p-2"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="relative w-full rounded border-[1px] border-body bg-white p-[5px] text-sm text-gray-600 placeholder-gray-400 shadow outline-none focus:outline-none focus:ring lg:p-2"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="relative w-full rounded border-[1px] border-body bg-white p-[5px] text-sm text-gray-600 placeholder-gray-400 shadow outline-none focus:outline-none focus:ring lg:p-2"
          required
        />
      </div>
      <div className="mt-8 pt-0">
        <button
          className="mr-1 mb-1 rounded bg-red-500 px-6 py-3 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-red-600"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
