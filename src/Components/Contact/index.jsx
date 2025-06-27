import React from "react";
import { Link } from "react-router-dom";

const Contact = () => (
  <div className="font-sans">
    {/* Header */}
    <header className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://placehold.co/160x64?text=BYB+Logo"
            alt="BYB Logo"
            className="h-12 object-contain"
          />
          <h1 className="text-xl font-bold text-green-700">BYB Consulting LLP</h1>
        </div>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About Us</Link>
          <Link to="/services" className="hover:text-green-600">Services</Link>
          <Link to="/why-choose-us" className="hover:text-green-600">Why Us</Link>
          <Link to="/blog" className="hover:text-green-600">Blog</Link>
          <Link to="/careers" className="hover:text-green-600">Careers</Link>
          <Link to="/contact" className="text-green-700 font-semibold">Contact</Link>
        </nav>
      </div>
    </header>

    {/* Banner */}
    <section className="bg-green-100 py-16 px-6 text-center">
      <h1 className="text-4xl font-bold text-green-900 mb-4">Contact Us</h1>
      <p className="text-lg text-green-800">Let’s connect and grow the future of electric mobility together.</p>
    </section>

    {/* Contact Form */}
    <section className="max-w-4xl mx-auto py-12 px-6">
      <form className="space-y-6">
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" required />
        <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" required />
        <input type="tel" placeholder="Your Phone" className="w-full border p-3 rounded" required />
        <textarea placeholder="Your Message" rows="5" className="w-full border p-3 rounded" required></textarea>
        <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">Send Message</button>
      </form>
    </section>

    {/* Contact Details */}
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-6">
      <div className="bg-white shadow p-6 rounded">
        <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
        <p>Email: <a href="mailto:info@bybconsultants.com" className="text-green-700 underline">info@bybconsultants.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/vgraonellutla" target="_blank" rel="noopener noreferrer" className="text-green-700 underline">Venugopal Rao N</a></p>
        <p>Office Address: 123 EV Innovation Street, Hyderabad, Telangana, India</p>
      </div>
      <div className="w-full h-64">
        <iframe
          title="BYB Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.568193564398!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978c0b6b7cfb%3A0x1e3e3f2f3b4b6f4!2sHyderabad!5e0!3m2!1sen!2sin!4v1619797658181!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© {new Date().getFullYear()} BYB Consulting LLP. All rights reserved.</p>
        <div className="flex space-x-4 text-sm">
          <a href="mailto:info@bybconsultants.com" className="hover:underline">info@bybconsultants.com</a>
          <a href="https://www.linkedin.com/in/vgraonellutla" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
);

export default Contact;
