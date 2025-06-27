import React from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";




const testimonials = [
  {
    name: "Arjun Mehta",
    message: "BYB Consulting's strategic guidance helped us successfully expand into the EV space with confidence.",
  },
  {
    name: "Priya Sharma",
    message: "Their expertise in EV commerce transformed our distribution approach entirely. Truly valuable consultants!",
  },
  {
    name: "Rahul Desai",
    message: "Great team to work with. The training program was spot-on for our technicians.",
  },
];

const Home = () => {
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
            <Link to="/" className="text-green-700 font-semibold">Home</Link>
            <Link to="/about" className="hover:text-green-600">About Us</Link>
            <Link to="/services" className="hover:text-green-600">Services</Link>
            <Link to="/why-choose-us" className="hover:text-green-600">Why Us</Link>
            <Link to="/blog" className="hover:text-green-600">Blog</Link>
            <Link to="/careers" className="hover:text-green-600">Careers</Link>
            <Link to="/contact" className="hover:text-green-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-green-100 text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4 text-green-900">BYB – Build Your Business in Electric Mobility</h1>
        <p className="text-lg mb-6 text-green-800">Empowering your EV journey with strategic consulting and expert insights.</p>
        <Link to="/services" className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700">
          Explore Our Services
        </Link>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 text-lg">
          Founded by industry veteran Venugopal Rao Nellutla, BYB Consulting LLP is dedicated to supporting businesses and entrepreneurs in the electric mobility space. With over 35 years of industry experience, we specialize in strategic growth, partnerships, skilling, and transition to EV commerce.
        </p>
      </section>

      {/* Core Services Highlights */}
      <section className="bg-green-50 py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Business Development",
            "Partnerships & Expansion",
            "Recruitment & HR Services",
            "EV Training & Skilling",
            "EV Commerce Enablement",
            "Investment & Banking Support",
          ].map((service, index) => (
            <div key={index} className="bg-white shadow rounded p-6 text-center">
              <h3 className="text-lg font-semibold text-green-800 mb-2">{service}</h3>
              <p className="text-sm text-gray-600">Tailored consulting to accelerate your EV transition.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">Why Choose BYB?</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-green-700 text-lg mb-2">35+ Years Experience</h3>
            <p className="text-gray-600 text-sm">Deep domain expertise in automobile and EV transition.</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-700 text-lg mb-2">Global Network</h3>
            <p className="text-gray-600 text-sm">Council member in four international consulting alliances.</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-700 text-lg mb-2">Tailored Solutions</h3>
            <p className="text-gray-600 text-sm">Every business is unique – we adapt and support accordingly.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">What Our Clients Say</h2>
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow p-6 rounded text-center">
                <p className="text-gray-700 italic mb-4">“{t.message}”</p>
                <p className="text-green-700 font-semibold">– {t.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
};

export default Home;
