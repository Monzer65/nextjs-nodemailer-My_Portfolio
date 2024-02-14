import NavLinks from "./navLinks";

export default function SideNav() {
  return (
    <div className='flex justify-between shadow-lg [&>*:not(:last-child)]:border-r dark:[&>*:not(:last-child)]:border-r-gray-600 sm:[&>*:not(:last-child)]:border-r-0 sm:flex-col'>
      <NavLinks />
    </div>
  );
}
