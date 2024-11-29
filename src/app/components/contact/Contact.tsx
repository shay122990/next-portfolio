import Divider from "../divider/Divider";
import Form from "../form/Form";

export default function Contact() {
  return (
    <section className="w-full">
      <Divider text="Get in touch" id="contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center min-h-[600px] px-10">
        <div className="flex flex-col justify-center items-center xsm: text-center sm:text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4 w-96">Let&apos;s Grab a Coffee! ☕️</h2>
          <p className="dark:text-green-400 items-center w-96">
           I’m excited to bring creative ideas and solutions to life! Whether you’re a company looking for someone passionate and skilled, or an individual with a vision for your next project, I’d love to connect. 
           <br /> Fill out the form, and I’ll get back to you promptly. Let’s make something incredible happen together! 
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Form />
        </div>
      </div>
    </section>
  );
}
