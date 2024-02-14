import Form from "@/components/contact/contactForm";
import ContactInfo from "@/components/contact/contactInfo";

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
    <main className='flex-6 px-4 py-8'>
      <div className='md:flex gap-4 overflow-hidden'>
        <Form />
        <ContactInfo />
      </div>
    </main>
  );
}
