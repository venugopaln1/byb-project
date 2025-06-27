import React from "react";

const articles = [
  {
    id: 1,
    title: "Top 5 EV Trends to Watch in 2025",
    summary: "From solid-state batteries to vehicle-to-grid integration, discover the technologies shaping the future of electric mobility.",
    image: "https://placehold.co/400x200?text=EV+Trends"
  },
  {
    id: 2,
    title: "Navigating EV Policies: What Businesses Need to Know",
    summary: "A deep dive into recent government regulations, incentives, and compliance best practices for EV stakeholders.",
    image: "https://placehold.co/400x200?text=EV+Policies"
  }
];

const caseStudies = [
  {
    id: 1,
    title: "Scaling an EV Startup: A Success Story",
    summary: "How BYB Consulting helped an EV battery company grow revenue by 150% in one year.",
    image: "https://placehold.co/400x200?text=Case+Study"
  }
];

const guides = [
  {
    id: 1,
    title: "ICE Dealer’s Guide to Transitioning to EV",
    summary: "Step-by-step best practices for traditional automobile dealers to enter the electric vehicle market.",
    image: "https://placehold.co/400x200?text=ICE+Guide"
  }
];

const updates = [
  {
    id: 1,
    title: "BYB Launches New Charging Infrastructure Initiative",
    summary: "We're partnering with state transport bodies to install 500+ fast-charging stations by 2026.",
    image: "https://placehold.co/400x200?text=BYB+Update"
  }
];

const Blog = () => (
  <div className="font-sans flex flex-col min-h-screen">
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
          <a href="/" className="hover:text-green-600">Home</a>
          <a href="/about" className="hover:text-green-600">About Us</a>
          <a href="/services" className="hover:text-green-600">Services</a>
          <a href="/why-choose-us" className="hover:text-green-600">Why Us</a>
          <a href="/blog" className="text-green-700 font-semibold">Blog</a>
          <a href="/careers" className="hover:text-green-600">Careers</a>
          <a href="/contact" className="hover:text-green-600">Contact</a>
        </nav>
      </div>
    </header>

    <main className="flex-grow max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Banner */}
      <section className="relative text-center bg-green-50 p-16 rounded">
        <h1 className="text-4xl font-bold mb-4 text-green-900">Blog & Insights</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Thought leadership articles, case studies, guides, and updates to keep you ahead in the EV industry.
        </p>
      </section>

      {/* Articles */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map(a => (
            <div key={a.id} className="bg-white shadow rounded overflow-hidden">
              <img src={a.image} alt={a.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{a.title}</h3>
                <p className="text-gray-700 text-sm">{a.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Case Studies & Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map(c => (
            <div key={c.id} className="bg-white shadow rounded overflow-hidden">
              <img src={c.image} alt={c.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-gray-700 text-sm">{c.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Guides for Transition</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {guides.map(g => (
            <div key={g.id} className="bg-white shadow rounded overflow-hidden">
              <img src={g.image} alt={g.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{g.title}</h3>
                <p className="text-gray-700 text-sm">{g.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Updates */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">BYB Initiatives</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {updates.map(u => (
            <div key={u.id} className="bg-white shadow rounded overflow-hidden">
              <img src={u.image} alt={u.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{u.title}</h3>
                <p className="text-gray-700 text-sm">{u.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer id="contact" className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© {new Date().getFullYear()} BYB Consulting LLP. All rights reserved.</p>
        <div className="flex space-x-4 text-sm">
          <a href="mailto:info@bybconsultants.com" className="hover:underline">info@bybconsultants.com</a>
          <a href="https://www.linkedin.com/in/vgraonellutla" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
);

export default Blog;
