import { useRef } from "react";
import { TextField, Button } from "@mui/material";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactSection = () => {
  const formRef = useRef();

  // HANDLE SEND MESSAGE
  const handleSendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_API_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again.");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-10"
    >
      {/* Left side - Contact info */}
      <div className="flex-1 flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold mb-1">Contact Me</h2>
        <p className="text-gray-700 font-medium">Feel free to reach out.</p>

        <div className="flex flex-col gap-4 text-gray-800 mt-5">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-cyan-600 text-xl" />
            <a
              href="mailto:mdrakibulislam11928@gmail.com"
              className="hover:text-blue-700 transition duration-300"
            >
              mdrakibulislam11928@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub className="text-gray-900 text-xl" />
            <a
              href="https://github.com/mrirakib04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition duration-300"
            >
              github.com/mrirakib04
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-blue-700 text-xl" />
            <a
              href="https://www.linkedin.com/in/webdev-rakib/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              linkedin.com/in/webdev-rakib
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Contact Form */}
      <div className="flex-1">
        <form
          ref={formRef}
          onSubmit={handleSendMessage}
          className="flex flex-col gap-4"
        >
          <TextField
            name="from_name"
            label="Name"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            name="from_email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            name="message"
            label="Message"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
