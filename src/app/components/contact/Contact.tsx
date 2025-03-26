import Divider from "../divider/Divider";
import Form from "../form/Form";

export default function Contact() {
  return (
    <section className="w-full lg:px-10 px-4 mb-12">
      <Divider text="Get in touch" id="contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center min-h-[600px] bg-black bg-opacity-20 rounded gap-4 py-5 px-5">
        <div className="lg:text-2xl flex flex-col lg:pl-20 justify-center items-center md:items-start md:text-left text-center">
          <h2 className="font-semibold mb-4 max-w-md">Let&apos;s Grab a Coffee! ☕️</h2>
          <p className="dark:text-green-400 max-w-md">
            I’m excited to bring creative ideas and solutions to life! Whether you’re a company looking for someone passionate and skilled, or an individual with a vision for your next project, I’d love to connect. 
            <br /> Fill out the form, and I’ll get back to you promptly.
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Form />
        </div>
      </div>
    </section>
  );
}
