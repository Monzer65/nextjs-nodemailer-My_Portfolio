/** @format */

"use client";

import { useFormStatus } from "react-dom";
import clsx from "clsx";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className={clsx("w-full font-semibold py-2 rounded text-white", {
        "bg-blue-500 hover:bg-blue-600": !pending,
        "bg-gray-700": pending,
      })}
    >
      {pending ? "sending..." : "send message"}
    </button>
  );
}
