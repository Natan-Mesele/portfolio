import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_tr8x3hy", "template_r9zhhsw", form.current, "85el7MKTL1vd_8b8q")
      .then((result) => {
        console.log("Success:", result.text);
        toast.success("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error.text);
        toast.error("Failed to send message.");
      });
  };

  return (
    <div className="relative">
      {/* Contact Us Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-950 text-white p-4 rounded-full shadow-lg hover:bg-blue-900 transition"
      >
        <FaEnvelope className="text-2xl" />
      </button>

      {/* Contact Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="text-white p-8 rounded-lg w-full max-w-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✖
            </button>
            {/* Title */}
            <h2 className="text-2xl font-semibold mb-8 text-gray-300">Contact Us</h2>

            {/* Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              {/* Full Name */}
              <input
                type="text"
                name="user_name"
                placeholder="Enter your full name"
                className="w-full py-6 px-3 bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Email */}
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full py-6 px-3 bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="4"
                className="w-full py-16 px-3 bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-600 py-3 rounded hover:bg-gray-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
