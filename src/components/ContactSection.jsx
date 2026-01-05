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

  // Common styles for Material UI Dark Input
  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
      "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.4)" },
      "&.Mui-focused fieldset": { borderColor: "#9333ea" }, // Purple focus
    },
    "& .MuiInputLabel-root": { color: "#9ca3af" }, // Gray label
    "& .MuiInputLabel-root.Mui-focused": { color: "#a855f7" },
    "& .MuiOutlinedInput-input": { color: "white" }, // White text
  };

  return (
    <section
      id="contact"
      className="w-full max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-12 bg-[#050505]"
    >
      {/* Left side - Contact info */}
      <div className="flex-1 flex flex-col">
        <h2 className="sm:text-3xl text-2xl md:text-4xl font-bold text-white mb-2">
          Contact Me
        </h2>
        <div className="h-1 w-16 bg-purple-600 rounded-full mb-6"></div>
        <p className="text-gray-400 font-medium mb-8">
          I'm currently available for freelance work or full-time positions.
          Feel free to reach out!
        </p>

        <div className="flex flex-col gap-6 mt-2">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-all">
              <FaEnvelope className="text-purple-500 text-xl" />
            </div>
            <a
              href="mailto:mdrakibulislam11928@gmail.com"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              mdrakibulislam11928@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-all">
              <FaGithub className="text-gray-300 text-xl" />
            </div>
            <a
              href="https://github.com/mrirakib04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              github.com/mrirakib04
            </a>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-all">
              <FaLinkedin className="text-blue-500 text-xl" />
            </div>
            <a
              href="https://www.linkedin.com/in/webdev-rakib/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              linkedin.com/in/webdev-rakib
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Contact Form */}
      <div className="flex-1 bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl">
        <form
          ref={formRef}
          onSubmit={handleSendMessage}
          className="flex flex-col gap-5"
        >
          <TextField
            name="from_name"
            label="Your Name"
            variant="outlined"
            fullWidth
            required
            sx={inputStyles}
          />
          <TextField
            name="from_email"
            label="Your Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            sx={inputStyles}
          />
          <TextField
            name="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            required
            sx={inputStyles}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="h-12 rounded-xl font-bold bg-white text-black hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg"
            style={{ textTransform: "none", fontSize: "1rem" }}
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
