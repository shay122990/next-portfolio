"use client";
import { useState, useId } from "react";
import { send } from "@emailjs/browser";

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
        "service_82ksbfh",
        "template_fpy8vcm",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "3VxZ2XS6rmTPLzTwV"
      );

      setSubmissionMessage("Your message was sent successfully! I will get back to you shortly.");
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
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>

      {submissionMessage && messageType && (
        <div
          className={`mb-4 p-3 rounded-md ${
            messageType === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
          dangerouslySetInnerHTML={{ __html: submissionMessage }}
        />
      )}

      <div className="mb-4">
        <label htmlFor={`name-${uniqueId}`} className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id={`name-${uniqueId}`}
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          autoComplete="name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor={`email-${uniqueId}`} className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id={`email-${uniqueId}`}
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          autoComplete="email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor={`message-${uniqueId}`} className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          id={`message-${uniqueId}`}
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          autoComplete="off"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full p-2 bg-green-500 text-white rounded-md font-semibold ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
