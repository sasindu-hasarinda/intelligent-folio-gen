import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import * as Toast from "@radix-ui/react-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastContent, setToastContent] = useState({
    message: "",
    success: true,
  });

  const validateEmail = (email: string) => {
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      return;
    }
    if (!formData.name || !formData.subject || !formData.message) {
      setToastContent({ message: "Please fill all fields.", success: false });
      setToastOpen(true);
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setToastContent({ message: "Message sent successfully!", success: true });
      setToastOpen(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setToastContent({
        message: "Failed to send. Try again.",
        success: false,
      });
      setToastOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 font-inter"
      aria-label="Get In Touch contact section"
    >
      <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 md:text-left text-center relative inline-block">
        Get In Touch
        <span className="block mx-auto md:mx-0 mt-2 h-1 rounded bg-[#06B6D4] w-[80px]" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {/* Contact Information Card */}
        <div
          tabIndex={0}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col space-y-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#06B6D4]"
          aria-labelledby="contact-info-title"
        >
          <h3
            id="contact-info-title"
            className="text-2xl font-semibold text-[#06B6D4]"
          >
            Contact Information
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4 cursor-pointer hover:text-[#0599b3] transition-colors">
              <div className="p-3 rounded-full bg-[#d1f1fb] text-[#06B6D4]">
                <Mail className="w-6 h-6" />
              </div>
              <a
                href="mailto:sasinduhasarinda1998@gmail.com"
                className="text-lg font-medium"
                aria-label="Email to sasinduhasarinda1998@gmail.com"
              >
                sasinduhasarinda1998@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer hover:text-[#0599b3] transition-colors">
              <div className="p-3 rounded-full bg-[#d1f1fb] text-[#06B6D4]">
                <Phone className="w-6 h-6" />
              </div>
              <a
                href="tel:0777546696"
                className="text-lg font-medium"
                aria-label="Call phone number 0777546696"
              >
                0777546696
              </a>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer hover:text-[#0599b3] transition-colors">
              <div className="p-3 rounded-full bg-[#d1f1fb] text-[#06B6D4]">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium">Matara, Sri Lanka</span>
            </li>
          </ul>
        </div>

        {/* Send a Message Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col space-y-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#06B6D4]"
          aria-labelledby="send-message-title"
          noValidate
        >
          <h3
            id="send-message-title"
            className="text-2xl font-semibold text-[#06B6D4]"
          >
            Send a Message
          </h3>

          {["name", "email", "subject"].map((field) => (
            <div key={field} className="relative z-0 w-full group">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                id={field}
                required
                value={(formData as any)[field]}
                onChange={handleChange}
                className={`block py-2.5 px-0 w-full text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-[#06B6D4] peer`}
                placeholder=" "
                aria-invalid={
                  field === "email" && errors.email ? "true" : "false"
                }
                aria-describedby={
                  field === "email" && errors.email ? "email-error" : undefined
                }
              />
              <label
                htmlFor={field}
                className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#06B6D4] peer-focus:bg-white"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === "email" && errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>
          ))}

          <div className="relative z-0 w-full group">
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="block py-2.5 px-3 w-full text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm resize-none appearance-none focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-[#06B6D4] placeholder-transparent peer"
              placeholder="Message"
            />
            <label
              htmlFor="message"
              className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#06B6D4] peer-focus:bg-white"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#06B6D4] ${
              loading
                ? "bg-[#05a4c0] cursor-not-allowed"
                : "bg-[#06B6D4] hover:bg-teal-500 text-white"
            }`}
            aria-label="Send Message"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : (
              <Send className="w-5 h-5 mr-2 text-white" />
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <Toast.Provider swipeDirection="right">
        <Toast.Root
          open={toastOpen}
          onOpenChange={setToastOpen}
          duration={4000}
          className="fixed bottom-8 right-8 bg-[#06B6D4] text-white p-4 rounded-xl shadow-lg flex items-center space-x-3 max-w-xs w-full z-50"
          aria-live="assertive"
        >
          {toastContent.success ? (
            <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
          ) : (
            <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
          )}
          <Toast.Description className="flex-1">
            {toastContent.message}
          </Toast.Description>
          <Toast.Close className="text-white hover:text-gray-300 focus:outline-none">
            &#x2715;
          </Toast.Close>
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>
    </section>
  );
};

export default Contact;
