/** @format */

import SideNav from "../components/home/sideNav";
import Form from "../components/contact/contactForm";
import ContactInfo from "../components/contact/contactInfo";
import SocialLinks from "../components/contact/socialLinks";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Monzer Danesh for inquiries, collaborations, or questions. Reach out for professional advice in full-stack web technology.",
  keywords:
    "contact, support, help, email, danesh.monzer@gmail.com, phone, +989922377340, address, sanandaj",
  author: "Monzer Danesh",
};

export default function page() {
  return (
    <div className="md:flex">
      <div className="w-full flex-1">
        <SideNav />
      </div>
      <div className="flex-6 w-full px-4 pt-8 pb-4">
        <div className="md:flex gap-4">
          <Form />
          <div className="flex flex-col justify-between ">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
