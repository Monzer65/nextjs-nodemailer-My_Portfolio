/** @format */

import SideNav from "./components/home/sideNav";

export default function Home() {
  return (
    <>
      <div className="md:flex">
        <div className="w-full flex-1">
          <SideNav />
        </div>
        <div className="flex-6 w-full px-4 pt-8 pb-4">
          <p>
            Hi, I’m <strong>Monzer</strong>. I am a web developer and I know how
            to make it look good while I’m at it.
          </p>
        </div>
      </div>
    </>
  );
}
