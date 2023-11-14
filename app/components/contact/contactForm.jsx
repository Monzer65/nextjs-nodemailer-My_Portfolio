/** @format */
"use client";
import { sendEmail } from "@/app/lib/actions";
import { useState, useRef } from "react";
import { SubmitButton } from "./button";
export default function Form() {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const ref = useRef(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        const result = await sendEmail(formData);
        if (result?.error) {
          setErrors(result.error);
          setSuccessMessage("");
        } else {
          setErrors("");
          setSuccessMessage("Message sent successfully!");
          ref.current?.reset();
        }
      }}
      className="max-w-md md:w-full flex-1 mt-10 bg-gray-500 p-4 rounded-lg"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
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
            className="text-red-500 bg-white rounded-sm mt-[2px] px-4 py-2"
          >
            {errors.name}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
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
            className="text-red-500 bg-white rounded-sm mt-[2px] px-4 py-2"
          >
            {errors.senderEmail}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
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
          <p className="text-red-500 bg-white rounded-sm mt-[2px] px-4 py-2">
            {errors.message}
          </p>
        )}
      </div>

      <SubmitButton />
      {errors?.submit && (
        <p
          aria-live="polite"
          className="text-red-500 bg-white mt-[2px] px-4 py-2"
        >
          {errors.submit}
        </p>
      )}
      {successMessage && (
        <p
          aria-live="polite"
          className="text-green-500 bg-gray-900 mt-[2px] px-4 py-2"
        >
          {successMessage}
        </p>
      )}
    </form>
  );
}
