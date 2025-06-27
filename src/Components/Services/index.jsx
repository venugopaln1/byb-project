import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Business Development & Strategic Advisory",
    description: "Helping EV businesses define their market strategy, identify growth opportunities, and execute actionable plans."
  },
  {
    title: "Expansion Strategies",
    description: "Assisting clients in scaling operations, entering new markets, and forming strategic partnerships."
  },
  {
    title: "Partnership Recommendations",
    description: "Connecting you with OEMs, vendors, and government bodies for collaborative growth."
  },
  {
    title: "Human Resources & Recruitment Services",
    description: "We identify, screen, and recruit top talent in the EV and tech sectors to support your scaling needs."
  },
  {
    title: "Training Programs & Skilling in EMaaS",
    description: "Custom skilling programs for engineers, technicians, and support staff across the EV ecosystem."
  },
  {
    title: "EV Commerce Solutions",
    description: "Enable your online presence with EV-friendly commerce strategies and marketplace integrations."
  },
  {
    title: "Investment & Banking Support",
    description: "From pitch decks to bank negotiations, we guide you through the funding lifecycle."
  },
  {
    title: "Handholding Services for New Initiatives",
    description: "From idea validation to pilot implementation – we’re with you every step of your EV journey."
  },
  {
    title: "Team Performance Reviews",
    description: "Evaluate and improve your internal performance metrics with our advisory tools."
  }
];

const Services = () => (
  <div className="font-sans">
    {/* Header */}
    <header className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="https://placehold.co/160x64?text=BYB+Logo" alt="BYB Logo" className="h-12 object-contain" />
          <h1 className="text-xl font-bold text-green-700">BYB Consulting LLP</h1>
        </div>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About Us</Link>
          <Link to="/services" className="text-green-700 font-semibold">Services</Link>
          <Link to="/why-choose-us" className="hover:text-green-600">Why Us</Link>
          <Link to="/blog" className="hover:text-green-600">Blog</Link>
          <Link to="/careers" className="hover:text-green-600">Careers</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </nav>
      </div>
    </header>

    {/* Banner */}
    <section className="text-center bg-green-100 p-16">
      <h1 className="text-4xl font-bold mb-4 text-green-900">Our Services</h1>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Explore how BYB Consulting LLP empowers businesses across the electric mobility value chain.
      </p>
    </section>

    {/* Services Grid */}
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white shadow rounded p-6">
          <h3 className="text-lg font-semibold text-green-700 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      ))}
    </section>

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

export default Services;
