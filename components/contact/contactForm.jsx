/** @format */
"use client";
import { sendEmail } from "@/lib/actions";
import { useState, useRef, useEffect } from "react";
import { SubmitButton } from "./button";
import {
  CheckBadgeIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Lusitana } from "next/font/google";

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Form() {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const ref = useRef(null);

  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  } else {
    return (
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0, x: 200 }}
        className="max-w-md md:w-full flex-1 "
      >
        <h1
          className={`${lusitana.className} font-bold text-2xl md:text-4xl text-red-500`}
        >
          Contact Me
        </h1>
        <form
          ref={ref}
          action={async (formData) => {
            const result = await sendEmail(formData);
            if (result?.error) {
              setErrors(result.error);
              setSuccessMessage("");
            } else {
              setErrors("");
              setSuccessMessage("Message sent successfully");
              ref.current?.reset();
            }
          }}
          className=" bg-gray-500 p-4 md:mt-10 rounded-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold ">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded text-black"
              placeholder="How I call you?"
            />
            {errors?.name && (
              <p
                aria-live="polite"
                className="flex items-center gap-2 text-red-500 bg-white rounded-sm mt-[2px] px-4 py-2"
              >
                <ExclamationCircleIcon className="w-[30px]" /> {errors.name}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold ">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="senderEmail"
              className="w-full px-4 py-2 border rounded text-black"
              placeholder="youremail@example.com"
            />
            {errors?.senderEmail && (
              <p
                aria-live="polite"
                className="flex items-center gap-2 text-red-500 bg-white rounded-sm mt-[2px] px-4 py-2"
              >
                <ExclamationCircleIcon className="w-[30px]" />{" "}
                {errors.senderEmail}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold ">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border rounded text-black"
              rows="4"
              placeholder="How can I help you?"
            ></textarea>
            {errors?.message && (
              <p className="flex items-center gap-2 text-red-500 bg-white rounded-sm mt-[2px] px-4 py-2">
                <ExclamationCircleIcon className="w-[30px]" /> {errors.message}
              </p>
            )}
          </div>

          <SubmitButton />
          {errors?.submit && (
            <p
              aria-live="polite"
              className="text-red-500 bg-white mt-[2px] px-4 py-2"
            >
              <ExclamationCircleIcon className="w-[30px]" /> {errors.submit}
            </p>
          )}
          {successMessage && (
            <p
              aria-live="polite"
              className="flex items-center gap-2 text-green-500 bg-gray-900 mt-[2px] px-4 py-2"
            >
              {successMessage} <CheckBadgeIcon className="w-[30px]" />
            </p>
          )}
        </form>
      </motion.div>
    );
  }
}
