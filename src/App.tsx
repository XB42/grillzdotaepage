import React from 'react';
import { Calendar, Sparkles, Palette, Crown, Camera, Star, Quote } from 'lucide-react';

function App() {
  const galleryImages = [
    {
      src: "https://i.imgur.com/VLs76rd.jpeg",
      alt: "Premium Gold Grillz"
    },
    {
      src: "https://i.imgur.com/CYcTB5o.jpeg",
      alt: "Custom Diamond Grillz"
    },
    {
      src: "https://i.imgur.com/2D077ah.jpeg",
      alt: "Rose Gold Grillz"
    },
    {
      src: "https://i.imgur.com/jugPEaH.jpeg",
      alt: "One Tooth Grillz"
    },
    {
      src: "https://i.imgur.com/hoP80zi.jpeg",
      alt: "Platinum Grillz Design"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      role: "Professional Artist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
      quote: "The craftsmanship is unmatched. My custom grillz have become a signature part of my stage presence. The attention to detail and premium quality exceeded my expectations."
    },
    {
      name: "Sarah Martinez",
      role: "Fashion Influencer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
      quote: "From design to fitting, the entire process was seamless. The team's expertise in creating unique, comfortable pieces is remarkable. I've never felt more confident."
    },
    {
      name: "Michael Chen",
      role: "Entertainment Producer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
      quote: "The quality speaks for itself. These aren't just grillz, they're wearable art. The compliments I receive are endless, and the comfort is unbelievable."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-purple-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-purple-950/95 backdrop-blur-sm z-50 border-b border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Crown className="h-8 w-8 text-gold-400" />
              <span className="ml-2 text-2xl font-bold text-white">grillz<span className="text-gold-400">.ae</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-purple-100 hover:text-gold-400 transition">About</a>
              <a href="#process" className="text-purple-100 hover:text-gold-400 transition">Process</a>
              <a href="#gallery" className="text-purple-100 hover:text-gold-400 transition">Gallery</a>
              <button className="bg-gold-400 text-purple-950 px-6 py-2 rounded-full hover:bg-gold-300 transition flex items-center font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-5xl font-bold leading-tight mb-6 text-white">
                Elevate Your
                <span className="text-gold-400"> Smile </span>
                with Custom Grillz
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Discover custom, handcrafted grillz designed exclusively for you. We blend cutting-edge design with expert craftsmanship to create statement pieces that reflect your unique style.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gold-400 text-purple-950 px-8 py-3 rounded-full hover:bg-gold-300 transition flex items-center text-lg font-medium shadow-lg shadow-gold-400/20">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Free Call
                </button>
                <a href="#gallery" className="border-2 border-gold-200 text-gold-200 px-8 py-3 rounded-full hover:bg-gold-400 hover:text-purple-950 hover:border-gold-400 transition text-lg font-medium flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  View Gallery
                </a>
              </div>
            </div>
            <div className="relative lg:ml-12">
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-gold-400/20 to-purple-500/20 rounded-[2rem] transform rotate-6 scale-105"></div>
              <img
                src="https://i.imgur.com/CpcO4lg.jpeg"
                alt="Custom Grillz"
                className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 left-0 sm:-left-6 bg-purple-950 p-4 rounded-lg shadow-xl z-20 border border-gold-400/30">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-8 h-8 text-gold-400" />
                  <div>
                    <p className="font-bold text-gold-100">#1 Rated</p>
                    <p className="text-sm text-purple-100/80">in the UAE</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 right-0 sm:-right-6 bg-purple-950 px-6 py-3 rounded-full shadow-xl z-20 border border-gold-400/30">
                <p className="text-gold-400 font-bold">Premium Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-purple-950/50 py-20 border-t border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-900/50 p-8 rounded-xl border border-gold-400/20 backdrop-blur-sm hover:transform hover:-translate-y-1 transition duration-300">
              <Calendar className="w-12 h-12 text-gold-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gold-100">Book a Call</h3>
              <p className="text-purple-100/80">Start your journey with a personalized consultation with our style experts</p>
            </div>
            <div className="bg-purple-900/50 p-8 rounded-xl border border-gold-400/20 backdrop-blur-sm hover:transform hover:-translate-y-1 transition duration-300">
              <Palette className="w-12 h-12 text-gold-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gold-100">Design & Create</h3>
              <p className="text-purple-100/80">Our skilled artisans handcraft your custom grillz using premium materials</p>
            </div>
            <div className="bg-purple-900/50 p-8 rounded-xl border border-gold-400/20 backdrop-blur-sm hover:transform hover:-translate-y-1 transition duration-300">
              <Crown className="w-12 h-12 text-gold-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gold-100">Perfect Fit</h3>
              <p className="text-purple-100/80">Enjoy a meticulous fitting process ensuring comfort and lasting quality</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="py-20 border-t border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Gallery</h2>
            <p className="text-purple-100/80 max-w-2xl mx-auto">
              Explore our collection of custom-crafted grillz, each piece a unique masterpiece designed to make a statement.
            </p>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="flex-none w-80 h-80 snap-center group relative overflow-hidden rounded-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 border-t border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-purple-100/80 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients who trust us with their smile transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-purple-900/30 rounded-xl p-8 border border-gold-400/20 backdrop-blur-sm relative">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <Quote className="w-8 h-8 text-gold-400/40 mb-4 mt-6" />
                <p className="text-purple-100/90 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gold-400">{testimonial.name}</p>
                    <p className="text-sm text-purple-100/60">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 border-t border-gold-400/20 bg-purple-950/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl text-purple-100/80 mb-12 max-w-2xl mx-auto">
            Book your free consultation today and join our community of satisfied clients who've elevated their style with custom grillz.
          </p>
          <button className="bg-gold-400 text-purple-950 px-12 py-4 rounded-full hover:bg-gold-300 transition flex items-center text-lg font-medium mx-auto shadow-xl shadow-gold-400/20 transform hover:scale-105 duration-300">
            <Calendar className="w-6 h-6 mr-3" />
            Schedule Your Free Consultation
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-950 border-t border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Crown className="h-8 w-8 text-gold-400" />
                <span className="ml-2 text-2xl font-bold text-white">grillz<span className="text-gold-400">.ae</span></span>
              </div>
              <p className="text-purple-100/60 text-sm">
                Crafting premium custom grillz that make a statement. Your smile, elevated.
              </p>
            </div>
            <div>
              <h4 className="text-gold-400 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-purple-100/60 hover:text-gold-400 transition text-sm">About Us</a></li>
                <li><a href="#process" className="text-purple-100/60 hover:text-gold-400 transition text-sm">Our Process</a></li>
                <li><a href="#gallery" className="text-purple-100/60 hover:text-gold-400 transition text-sm">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold-400 font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-purple-100/60 text-sm">Dubai, UAE</li>
                <li className="text-purple-100/60 text-sm">info@grillz.ae</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gold-400/20 pt-8 text-center">
            <p className="text-purple-100/60 text-sm">
              © {new Date().getFullYear()} grillz.ae. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;