"use client";

import { useState, useId } from "react";
import { send } from "@emailjs/browser";
import FormInput from "../form-input/FormInput";
import FormTextarea from "../form-textarea/FormTextarea";
import MessageDisplay from "../message-display/MessageDisplay";

export default function EmailForm() {
  const uniqueId = useId();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionMessage("All fields are required.");
      setMessageType("error");
      return;
    }

    setIsSubmitting(true);

    try {
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      setSubmissionMessage("Your message was sent successfully!");
      setMessageType("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmissionMessage(
        "Error sending a message, please try again or reach out to me through " +
          '<a href="mailto:shay.asanova@gmail.com" class="text-green-500">shay.asanova@gmail.com</a>'
      );
      setMessageType("error");
    }

    setIsSubmitting(false);

    setTimeout(() => {
      setSubmissionMessage("");
      setMessageType(null);
    }, 5000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg w-full mx-auto p-6 dark:bg-grey rounded border shadow-lg shadow-gray-500  dark:shadow-green-400"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700 dark:text-white">Contact Me</h2>

      {submissionMessage && messageType && <MessageDisplay message={submissionMessage} type={messageType} />}

      <FormInput
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        uniqueId={uniqueId}
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        uniqueId={uniqueId}
      />
      <FormTextarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        uniqueId={uniqueId}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full p-2 bg-white text-gray-700 border rounded-md font-semibold ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:border-green-500"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
