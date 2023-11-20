/** @format */

export default function Footer() {
  return (
    <footer className="mb-10 p-4 text-center text-gray-500 border-solid dark:border-gray-800 border-t-[0.5px]">
      <small className="mb-2 block text-xs">
        &copy; 2023 Monzer Danesh | All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), Tailwind CSS, Framer
        Motion, Nodemailer, Vercel hosting.
      </p>
    </footer>
  );
}
