import React from "react";
import { Link } from "react-router-dom";

const Career = () => (
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
          <Link to="/careers" className="text-green-700 font-semibold">Careers</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </nav>
      </div>
    </header>

    {/* Banner */}
    <section className="bg-green-100 py-16 px-6 text-center">
      <h1 className="text-4xl font-bold text-green-900 mb-4">Careers</h1>
      <p className="text-lg text-green-800">Join the EV revolution with BYB Consulting LLP – opportunities for professionals and partners.</p>
    </section>

    {/* Sections */}
    <section className="max-w-6xl mx-auto py-12 px-6 space-y-16">
      {/* Join Our Team */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
        <p className="text-gray-700">We’re always on the lookout for passionate professionals. Current openings are updated regularly on our LinkedIn page. Reach out to explore exciting EV-focused roles.</p>
      </div>

      {/* For Job Seekers */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">For Job Seekers</h2>
        <p className="text-gray-700 mb-4">Looking to grow your career in the electric mobility space? We connect talent with forward-thinking EV companies.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
          <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" required />
          <input type="tel" placeholder="Phone Number" className="w-full border p-2 rounded" required />
          <input type="file" className="w-full border p-2 rounded" />
          <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">Submit Application</button>
        </form>
      </div>

      {/* For Employers */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">For Employers</h2>
        <p className="text-gray-700">We provide end-to-end recruitment services for EV businesses, including sourcing, screening, and onboarding talent with domain expertise.</p>
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

export default Career;