import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight, ChevronLeft, Anchor, Compass, Ship, Palmtree, Facebook, Instagram, Twitter, Monitor, Handshake, IndianRupee, Star } from 'lucide-react';
import CabSightseeing from './CabSightseeing';
import ScubaDiving from './ScubaDiving';
import FerryBooking from './FerryBooking';
import ActivityBookingPage from './ActivityBookingPage';
import Contact from './Contact';

const Navbar = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: (v: boolean) => void }) => {
  const navigate = useNavigate();
  return (
  <motion.nav
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className={`fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-colors duration-500 ${isMenuOpen ? 'bg-transparent text-white' : 'bg-gradient-to-b from-black/80 to-transparent mix-blend-difference'}`}
  >
    <button onClick={() => navigate('/contact')} className="text-xs font-medium tracking-[0.2em] uppercase hover:text-gray-300 transition-colors hidden md:block w-1/3 text-left">
      {isMenuOpen ? 'QUICK RESERVATION' : 'Plan My Trip'}
    </button>
    <div className="text-2xl md:text-3xl font-serif tracking-widest text-white text-center w-full md:w-1/3">
      SEE ANDAMAN<span className="text-sm align-top">&reg;</span>
    </div>
    <div className="w-1/3 flex justify-end hidden md:flex">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-xs font-medium tracking-[0.2em] uppercase hover:text-gray-300 transition-colors"
      >
        {isMenuOpen ? 'CLOSE' : 'MENU'}
      </button>
    </div>
    <div className="flex md:hidden absolute right-8">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-xs font-medium tracking-[0.2em] uppercase hover:text-gray-300 transition-colors"
      >
        {isMenuOpen ? 'CLOSE' : 'MENU'}
      </button>
    </div>
  </motion.nav>
  );
};

const MenuOverlay = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) => {
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const menuVariants = {
    closed: { opacity: 0, backdropFilter: "blur(0px)" },
    open: { opacity: 1, backdropFilter: "blur(16px)" }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({
      y: 0, opacity: 1,
      transition: { delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-40 bg-[#06121c]/90 flex flex-col pt-32 pb-12 px-8 sm:px-16 md:px-24 text-white overflow-y-auto"
        >
          <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col justify-center mt-12 md:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-20 gap-x-12">

              <motion.a href="#" custom={0} variants={linkVariants} initial="closed" animate="open" exit="closed" className="group block w-fit" onClick={() => setIsOpen(false)}>
                <p className="text-sm font-sans tracking-widest text-gray-400 mb-2 uppercase">Welcome to paradise</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white group-hover:text-gray-300 transition-colors">Home</h2>
              </motion.a>

              <motion.a href="#" custom={1} variants={linkVariants} initial="closed" animate="open" exit="closed" className="group block w-fit" onClick={() => setIsOpen(false)}>
                <p className="text-sm font-sans tracking-widest text-gray-400 mb-2 uppercase">Travel wherever you like</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white group-hover:text-gray-300 transition-colors">Packages</h2>
              </motion.a>

              <motion.a href="#" custom={2} variants={linkVariants} initial="closed" animate="open" exit="closed" className="group block w-fit" onClick={() => setIsOpen(false)}>
                <p className="text-sm font-sans tracking-widest text-gray-400 mb-2 uppercase">Meet the team</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white group-hover:text-gray-300 transition-colors">About us</h2>
              </motion.a>

              <motion.a href="#" custom={3} variants={linkVariants} initial="closed" animate="open" exit="closed" className="group block w-fit" onClick={() => setIsOpen(false)}>
                <p className="text-sm font-sans tracking-widest text-gray-400 mb-2 uppercase">Ask anything you want</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white group-hover:text-gray-300 transition-colors">Contact us</h2>
              </motion.a>

              <motion.a href="#" custom={4} variants={linkVariants} initial="closed" animate="open" exit="closed" className="group block w-fit" onClick={() => setIsOpen(false)}>
                <p className="text-sm font-sans tracking-widest text-gray-400 mb-2 uppercase">Reserve now</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white group-hover:text-gray-300 transition-colors">Quick Reservation</h2>
              </motion.a>

            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-7xl mx-auto border-t border-white/20 pt-8 mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-300 mb-4">ADDRESS:</p>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>Andaman Tourism and Hospitalities<br />Haddo, Port Blair</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:justify-between items-start md:items-end">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-300 mb-4">QUICK CONTACT:</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="shrink-0" />
                    <span>+91 9531811333</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="shrink-0" />
                    <span>info@seeandamans.com</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a href="#" className="p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => console.log("Autoplay prevented:", err));
    }
  }, []);

  return (
    <header className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dsrquoqqm/video/upload/c_scale,w_1280/f_auto,q_auto:eco/v1779108035/herovid_jdhmzx.mov"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1589136777351-fdc9c9cb134f?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-60 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#060c12]/40 pointer-events-none" />
      </motion.div>

      <div className="relative z-10 text-center flex flex-col items-center pt-20">
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
          className="text-sm uppercase tracking-[0.3em] mb-4 text-gray-300"
        >
          - Best Travel Agency -
        </motion.p>
        <motion.h1
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
          className="text-7xl md:text-8xl lg:text-9xl font-serif text-white leading-tight drop-shadow-2xl"
        >
          Explore <br /> Andamans.
        </motion.h1>
      </div>
    </header>
  );
};

const ImageGallerySection = () => {
  const { scrollYProgress } = useScroll();

  // Use scrollYProgress to determine when this section is in view.
  // We'll map the progress roughly when the section enters the viewport (around 0.2 to 0.4 depending on height)
  // to slide the images outward. Let's use a wide range to ensure it triggers smoothly.
  const leftX = useTransform(scrollYProgress, [0.1, 0.4], ['50%', '0%']);
  const rightX = useTransform(scrollYProgress, [0.1, 0.4], ['-50%', '0%']);

  return (
    <section className="bg-[#060c12] pt-40 pb-24 px-4 flex flex-col items-center overflow-hidden relative">
      <div className="max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] mb-4 text-gray-400">- Discover the Paradise -</p>
          <h2 className="text-5xl md:text-6xl font-serif text-white">Island Experts.</h2>
        </motion.div>

        <div className="flex justify-center items-center gap-4 md:gap-8 h-[60vh] md:h-[70vh] relative mt-10">

          {/* Left Image (Scuba Diving) */}
          <motion.div
            style={{ x: leftX }}
            className="w-1/3 h-[60%] md:h-[70%] relative group overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              src="/hero2.webp"
              alt="Scuba Diving"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <p className="absolute bottom-4 left-4 z-20 text-white font-serif tracking-widest uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scuba Diving</p>
          </motion.div>

          {/* Center Image (Sunset Beach) - Second image from user */}
          <motion.div
            className="w-1/3 h-full relative z-20 group overflow-hidden cursor-pointer shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              src="/hero1.webp"
              alt="Sunset Beach Andaman"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <p className="absolute bottom-4 left-4 z-20 text-white font-serif tracking-widest uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Sunset Views</p>
          </motion.div>

          {/* Right Image (Water Villas) */}
          <motion.div
            style={{ x: rightX }}
            className="w-1/3 h-[60%] md:h-[70%] relative group overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              src="/hero3.webp"
              alt="Water Villas"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <p className="absolute bottom-4 left-4 z-20 text-white font-serif tracking-widest uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Luxury Resorts</p>
          </motion.div>

        </div>
      </div>

      {/* Sliding Marquee Text */}
      <div className="w-full mt-32 mb-8 select-none pointer-events-none opacity-40 flex flex-col gap-4 overflow-hidden">
        {/* Row 1 - Sliding Left */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          <span className="text-[4rem] md:text-[7rem] font-serif text-[#38bdf8]/20 uppercase tracking-widest pr-12 leading-none mix-blend-screen">
            Your Dream Getaway To Andaman & Nicobar
          </span>
          <span className="text-[4rem] md:text-[7rem] font-serif text-[#38bdf8]/20 uppercase tracking-widest pr-12 leading-none mix-blend-screen">
            Your Dream Getaway To Andaman & Nicobar
          </span>
        </motion.div>
        
        {/* Row 2 - Sliding Right */}
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          <span className="text-[4rem] md:text-[7rem] font-serif text-[#38bdf8]/20 uppercase tracking-widest pr-12 leading-none mix-blend-screen">
            Your Dream Getaway To Andaman & Nicobar
          </span>
          <span className="text-[4rem] md:text-[7rem] font-serif text-[#38bdf8]/20 uppercase tracking-widest pr-12 leading-none mix-blend-screen">
            Your Dream Getaway To Andaman & Nicobar
          </span>
        </motion.div>
      </div>

    </section>
  );
};

const ServicesGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#060c12] pt-16 px-4 md:px-8 border-t border-white/5 relative z-20 mt-[-5px]">
      <div className="max-w-6xl mx-auto pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center place-items-center">
          {[
            { icon: Ship, title: "Ferries", desc: "Fastest Confirmations", link: '/ferries' },
            { icon: Anchor, title: "Cabs", desc: "Island Transfers", link: '/cabs' },
            { icon: Compass, title: "Packages", desc: "Curated Itineraries", link: null },
            { icon: Palmtree, title: "Activities", desc: "Scuba & Water Sports", link: '/scuba-diving' }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => {
                if (!service.link) return;
                navigate(service.link);
              }}
              className="flex flex-col items-center justify-center p-6 aspect-square rounded-full group cursor-pointer transition-all duration-500 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] border border-transparent hover:border-white/10 w-full max-w-[200px]"
            >
              <service.icon className="w-10 h-10 text-white/60 mb-4 group-hover:text-white transition-all duration-500 group-hover:-translate-y-1" strokeWidth={1} />
              <h3 className="text-xl font-serif text-white mb-2">{service.title}</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="w-[85%] max-w-7xl mx-auto border-t border-white/10" />
    </section>
  );
};

const PackagesSection = () => (
  <section className="bg-[#060c12] py-24 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] mb-4 text-gray-400">- Travel Themes -</p>
          <h2 className="text-5xl font-serif text-white">Popular Packages</h2>
        </div>
        <button className="px-8 py-3 border border-white/20 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 hidden md:block">
          Show All
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: "Honeymoon Exclusive", theme: "Luxury", img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800" },
          { title: "Adventure & Diving", theme: "Adventure", img: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800" }
        ].map((pkg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0a1118] border border-white/10 group cursor-pointer overflow-hidden"
          >
            <div className="relative h-72 overflow-hidden">
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/50 px-3 py-1 text-xs uppercase tracking-wider backdrop-blur-sm text-white">
                <MapPin size={12} /> {pkg.theme}
              </div>
              <img src={pkg.img} alt={pkg.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-serif text-white mb-6">{pkg.title}</h3>
              <button className="flex items-center gap-2 text-sm tracking-widest uppercase text-white group-hover:text-gray-300 transition-colors">
                View Itinerary <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CategorySliderSection = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    { title: "PACKAGES", img: "/3.webp", link: null },
    { title: "ACTIVITIES", img: "/2.webp", link: "/scuba-diving" },
    { title: "CABS", img: "/1.webp", link: "/cabs" },
    { title: "FERRYS", img: "/4.webp", link: "/ferries" }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black z-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src={slides[activeIndex].img} alt={slides[activeIndex].title} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="text-6xl md:text-9xl font-serif text-white tracking-widest mb-8 drop-shadow-2xl"
          >
            {slides[activeIndex].title}
          </motion.h2>
        </AnimatePresence>
        <button 
          onClick={() => {
            if (slides[activeIndex].link) {
              navigate(slides[activeIndex].link);
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' }); // or just return
            }
          }}
          className="px-8 py-3 bg-white text-black font-serif uppercase tracking-[0.2em] text-xs hover:bg-gray-200 transition-colors shadow-2xl"
        >
          Discover More
        </button>
      </div>

      <button onClick={handlePrev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors">
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button onClick={handleNext} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors">
        <ChevronRight size={48} strokeWidth={1} />
      </button>
    </section>
  );
};

const FerryListSection = () => {
  return (
    <section className="bg-[#060c12] py-24 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] mb-4 text-gray-400">- High Speed Transfers -</p>
            <h2 className="text-5xl font-serif text-white">Popular Ferries</h2>
          </div>
          <button className="px-8 py-3 border border-white/20 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 hidden md:block">
            Book Ferry
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Nautika & Lite", price: "From ₹800 / person", img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?w=800&auto=format&fit=crop&q=80" },
            { name: "Makruzz", price: "From ₹3,500 / person", img: "https://images.unsplash.com/photo-1544521404-51ac1c4b786b?w=800&auto=format&fit=crop&q=80" },
            { name: "ITT Majestic", price: "From ₹800 / person", img: "https://images.unsplash.com/photo-1628151025547-5d20f66671c6?w=800&auto=format&fit=crop&q=80" },
            { name: "Green Ocean 1", price: "From ₹1,200 / person", img: "https://images.unsplash.com/photo-1621532452285-06beefa9cf0c?w=800&auto=format&fit=crop&q=80" }
          ].map((ferry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative aspect-[3/4] border border-white/10 group cursor-pointer overflow-hidden bg-[#0a1118]"
            >
              <img src={ferry.img} alt={ferry.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/50 border border-white/5 px-3 py-1 text-xs uppercase tracking-wider backdrop-blur-sm text-white">
                <Anchor size={12} /> Ferry
              </div>

              <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
                <h3 className="text-2xl font-serif text-white mb-2">{ferry.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[#38bdf8] drop-shadow-md">{ferry.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OceanWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[120px] md:h-[180px] overflow-hidden pointer-events-none z-0">
      <motion.svg
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        className="absolute bottom-0 w-[200%] h-full opacity-10"
        style={{ willChange: "transform" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 150"
        preserveAspectRatio="none"
      >
        <path d="M 0 75 Q 250 150, 500 75 T 1000 75 Q 1250 150, 1500 75 T 2000 75 L 2000 150 L 0 150 Z" fill="#38bdf8" />
      </motion.svg>

      <motion.svg
        initial={{ x: "-50%" }}
        animate={{ x: 0 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
        className="absolute bottom-0 w-[200%] h-[75%] opacity-15"
        style={{ willChange: "transform" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 150"
        preserveAspectRatio="none"
      >
        <path d="M 0 75 Q 250 150, 500 75 T 1000 75 Q 1250 150, 1500 75 T 2000 75 L 2000 150 L 0 150 Z" fill="#0ea5e9" />
      </motion.svg>

      <motion.svg
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="absolute bottom-0 w-[200%] h-[50%] opacity-20"
        style={{ willChange: "transform" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 150"
        preserveAspectRatio="none"
      >
        <path d="M 0 75 Q 250 150, 500 75 T 1000 75 Q 1250 150, 1500 75 T 2000 75 L 2000 150 L 0 150 Z" fill="#0284c7" />
      </motion.svg>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-[#04080c] pt-24 pb-12 px-8 border-t border-white/10 relative overflow-hidden">
    <OceanWaves />
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-sm relative z-10">
      <div className="col-span-1 md:col-span-2">
        <div className="text-2xl font-serif tracking-widest text-white mb-6">SEE ANDAMAN&reg;</div>
        <p className="text-gray-400 leading-relaxed pr-12 max-w-md">
          Andaman's Most Trusted and Reliable Travel Partner. See the best of the islands with us, tailored exactly how you want it to be.
        </p>
      </div>
      <div>
        <h4 className="text-white uppercase tracking-widest mb-6">Quick Links</h4>
        <ul className="space-y-4 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Hotels & Cabs</a></li>
          <li><a href="/ferries" className="hover:text-white transition-colors">Ferry Tickets</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Sightseeing Tours</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Terms & Cancellation</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white uppercase tracking-widest mb-6">Contact Us</h4>
        <ul className="space-y-4 text-gray-400">
          <li className="flex gap-3">
            <MapPin size={18} className="shrink-0" />
            <span>Andaman Tourism and Hospitalities Pvt. Ltd, Haddo, Port Blair</span>
          </li>
          <li className="flex gap-3">
            <Phone size={18} className="shrink-0" />
            <span>9531811333 / 9474266777</span>
          </li>
          <li className="flex gap-3">
            <Mail size={18} className="shrink-0" />
            <span>info@seeandamans.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center border-t border-white/10 pt-8 text-xs text-gray-500 relative z-10">
      &copy; 2024 Andaman Tourism And Hospitalities Pvt. Ltd. All Rights Reserved. Crafted in Andamans.
    </div>
  </footer>
);

const WhyChooseUs = () => (
  <section className="py-24 bg-[#04080c] border-y border-white/5 relative z-10 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-wide">Why Choose Beyond Oceans</h2>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-sm">
          Beyond Oceans encapsulates the essence of exploration and adventure in the Andaman and Nicobar Islands.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            icon: Monitor, 
            title: "Exploring Made Easy", 
            desc: "Seamless exploration with our tailored tours & hassle-free booking services." 
          },
          { 
            icon: Handshake, 
            title: "Trustworthy Partner", 
            desc: "Rely on us as your trusted travel partner ensuring peace of mind journey." 
          },
          { 
            icon: MapPin, 
            title: "Native & Experienced", 
            desc: "Benefit from our native insights and seasoned expertise." 
          },
          { 
            icon: IndianRupee, 
            title: "Lowest Price", 
            desc: "Unlock unbeatable deals and enjoy adventures at the best prices." 
          }
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="bg-[#060c12] border border-white/5 rounded-2xl p-8 hover:border-[#38bdf8]/30 transition-all text-center group"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-[#0a1118] border border-white/5 flex items-center justify-center mb-8 group-hover:bg-[#38bdf8]/10 transition-colors">
              <feature.icon className="text-[#38bdf8]" size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-4">{feature.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ReviewsSection = () => {
  const containerRef = React.useRef<HTMLElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-[#060c12] relative z-10 px-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dsrquoqqm/video/upload/c_scale,w_1280/f_auto,q_auto:eco/v1779106139/dive_wxkqjn.mov"
          preload="none"
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#060c12]/70 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">What Travelers Say About Us</h2>
          <p className="text-gray-400 leading-relaxed">
            See what our customers have to say about their experiences with us
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:space-y-0 relative">
          {[
            {
              initial: "A",
              img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100",
              name: "Anurag Verma",
              text: "Beyond Oceans impressed us with their friendly service, transparent pricing, and reliable support throughout the trip. Highly recommended!"
            },
            {
              initial: "A",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
              name: "Ashna Ashu",
              text: "Had an amazing experience with Beyond Oceans. Their professional planning and local expertise made our Andaman vacation truly unforgettable."
            },
            {
              initial: "T",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
              name: "Tejas Sorte",
              text: "My recent Andaman Islands trip organized by Beyond Oceans was absolutely fantastic. From hotel stays to ferry bookings, everything was seamless and stress-free."
            }
          ].map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`w-full md:w-[85%] bg-[#0a1118]/95 border border-white/5 rounded-2xl p-8 md:p-12 relative flex flex-col z-10 
                ${idx % 2 === 0 ? 'mr-auto' : 'ml-auto md:-mt-16'}
              `}
            >
              <div className="flex justify-between items-center mb-8 relative z-10">
                <div className="flex items-center gap-4">
                  <img src={review.img} alt={review.name} loading="lazy" decoding="async" className="w-10 h-10 rounded-full object-cover grayscale opacity-90" />
                  <h4 className="text-gray-300 font-medium text-sm tracking-wide">{review.name}</h4>
                </div>
                <div className="flex text-white gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-serif relative z-10">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactAgent = () => {
  const navigate = useNavigate();
  return (
    <section className="py-32 bg-[#04080c] border-t border-white/5 relative z-10 px-8 text-center flex flex-col items-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-6xl font-serif text-white mb-6"
        >
          Contact our agent.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-lg md:text-xl font-light mb-12 tracking-wide"
        >
          Book your ferry, book a trip or transfer here.
        </motion.p>
        <motion.button
          onClick={() => window.scrollTo(0, 0) || navigate('/contact')}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="px-10 py-5 bg-[#0a1118] hover:bg-[#111827] border border-white/5 hover:border-white/20 text-gray-400 hover:text-white text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 shadow-2xl"
        >
          Get Started Now
        </motion.button>
      </div>
    </section>
  );
};

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060c12] text-white selection:bg-white/30 selection:text-white overflow-x-hidden">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MenuOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <Hero />
      <ServicesGrid />
      <ImageGallerySection />
      <PackagesSection />
      <CategorySliderSection />
      <FerryListSection />
      <WhyChooseUs />
      <ReviewsSection />
      <ContactAgent />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cabs" element={<CabSightseeing />} />
      <Route path="/scuba-diving" element={<ScubaDiving />} />
      <Route path="/ferries" element={<FerryBooking />} />
      <Route path="/activities/:id" element={<ActivityBookingPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
