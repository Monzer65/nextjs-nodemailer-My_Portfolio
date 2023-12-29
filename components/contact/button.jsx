/** @format */

"use client";

import { useFormStatus } from "react-dom";
import clsx from "clsx";
import {
  PaperAirplaneIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      aria-disabled={pending}
      className={clsx(
        "flex items-center justify-center gap-2 w-full font-semibold py-2 rounded text-white",
        {
          "bg-blue-800 hover:bg-blue-900": !pending,
          "bg-gray-700 cursor-wait": pending,
        }
      )}
    >
      {pending ? (
        <>
          <RocketLaunchIcon className='w-[20px]' />
          sending...
        </>
      ) : (
        <>
          <PaperAirplaneIcon className='w-[20px]' />
          send message
        </>
      )}
    </button>
  );
}
