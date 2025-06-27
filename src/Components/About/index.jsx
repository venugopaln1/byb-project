import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
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
            <Link to="/about" className="text-green-700 font-semibold">About Us</Link>
            <Link to="/services" className="hover:text-green-600">Services</Link>
            <Link to="/why-choose-us" className="hover:text-green-600">Why Us</Link>
            <Link to="/blog" className="hover:text-green-600">Blog</Link>
            <Link to="/careers" className="hover:text-green-600">Careers</Link>
            <Link to="/contact" className="hover:text-green-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Founder's Message */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-green-900">Founder's Message</h2>
          <p className="text-gray-700 text-lg">
            "At BYB Consulting LLP, we envision a future driven by electric mobility. With decades of experience, I founded BYB to empower businesses and individuals alike to participate in the EV revolution."
          </p>
          <p className="mt-4 text-green-800 font-medium">– Venugopal Rao Nellutla</p>
        </section>

        {/* Mission & Vision */}
        <section className="text-center bg-green-50 p-8 rounded">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Our Mission & Vision</h2>
          <p className="text-gray-700 mb-4">
            <strong>Mission:</strong> To accelerate the adoption of electric mobility through strategic consulting, partnerships, and upskilling services.
          </p>
          <p className="text-gray-700">
            <strong>Vision:</strong> To be the go-to catalyst for EV transformation across industries in India and beyond.
          </p>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-2xl font-semibold text-center text-green-800 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { title: "Sustainability", desc: "Committed to green, eco-friendly transitions." },
              { title: "Innovation", desc: "Fostering smart, data-driven EV solutions." },
              { title: "Leadership", desc: "Driving change with confidence and insight." },
              { title: "Partnership", desc: "Collaborating closely with clients and industry." },
            ].map((val, i) => (
              <div key={i} className="bg-white shadow p-6 rounded">
                <h3 className="text-lg font-semibold text-green-700 mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} BYB Consulting LLP. All rights reserved.</p>
          <div className="flex space-x-4 text-sm">
            <a href="mailto:info@bybconsultants.com" className="hover:underline">info@bybconsultants.com</a>
            <a
              href="https://www.linkedin.com/in/vgraonellutla"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
