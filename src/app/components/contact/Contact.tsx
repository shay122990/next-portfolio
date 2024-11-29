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
            I&apos;m excited to collaborate with you on
            your project and contributing to your organization&apos;s success. Let&apos;s connect
            and discuss how I can bring that vision to life. <br /> Please fill
            out the form below, and I&apos;ll be in touch shortly.
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Form />
        </div>
      </div>
    </section>
  );
}
