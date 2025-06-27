import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "35+ Years of Industry Experience",
    description: "Led by an EV veteran, our advisory roots run deep across automotive and electric mobility domains.",
    image: "https://placehold.co/400x250?text=Experience"
  },
  {
    title: "Global Consulting Network",
    description: "Member of four international consulting councils, we bring global perspectives to local execution.",
    image: "https://placehold.co/400x250?text=Global+Network"
  },
  {
    title: "Tailored Strategic Solutions",
    description: "No cookie-cutter approach. Every recommendation is crafted to fit your EV journey.",
    image: "https://placehold.co/400x250?text=Tailored+Strategy"
  },
  {
    title: "Client Success Stories",
    description: "From early startups to major OEMs, our clients have expanded, scaled, and succeeded.",
    image: "https://placehold.co/400x250?text=Success+Stories"
  }
];

const WhyUs = () => (
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
          <Link to="/services" className="hover:text-green-600">Services</Link>
          <Link to="/why-choose-us" className="text-green-700 font-semibold">Why Us</Link>
          <Link to="/blog" className="hover:text-green-600">Blog</Link>
          <Link to="/careers" className="hover:text-green-600">Careers</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </nav>
      </div>
    </header>

    {/* Hero Banner */}
    <section className="bg-green-100 text-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-4 text-green-900">Why Choose Us</h1>
      <p className="text-lg mb-6 text-green-800">We combine decades of experience, global exposure, and localized insights to empower your EV ambitions.</p>
    </section>

    {/* Highlights */}
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      {features.map((feature, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
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

export default WhyUs;