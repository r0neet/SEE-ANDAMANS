import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, MapPin, Phone, Mail, Send, Calendar, Users, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#060c12] text-white selection:bg-[#38bdf8]/30 overflow-x-hidden">
            
            {/* Header & Back Button */}
            <div className="absolute top-0 w-full z-50 pt-8 px-4 flex">
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => navigate(-1)}
                    className="flex flex-row items-center gap-2 text-xs md:text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors lg:ml-12"
                >
                    <ChevronLeft size={16} /> Go Back
                </motion.button>
            </div>

            {/* Static Hero Section */}
            <section className="relative h-[45vh] flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=2000"
                        alt="Contact Andaman Tourism"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#060c12]" />
                </div>

                <div className="relative z-10 text-center px-4 pt-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <p className="text-sm uppercase tracking-[0.3em] mb-4 text-[#38bdf8] font-semibold">
                            Get In Touch
                        </p>
                        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-2xl">
                            Plan My Trip
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 -mt-20 relative z-20">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                    
                    {/* Left Column: Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2 space-y-12 bg-[#0a1118]/80 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-3xl"
                    >
                        <div>
                            <h2 className="text-3xl font-serif mb-4">Contact Info</h2>
                            <p className="text-gray-400 font-light leading-relaxed text-sm">
                                Planning your tropical escape to the breathtaking Andaman Islands? Fill out the form, and our Andaman travel expert will get in touch with the best itinerary, activities, and exclusive offers for you.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#38bdf8]/10 transition-colors">
                                    <MapPin className="text-[#38bdf8]" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1 tracking-wide">Address</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed max-w-[250px]">
                                        Andaman Tourism & Hospitality Pvt. Ltd.<br/>
                                        Horticulture Road, Haddo<br/>
                                        Sri Vijaya Puram (Port Blair), A&N Islands
                                    </p>
                                </div>
                            </div>

                            <a href="tel:9474266777" className="flex items-start gap-5 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#38bdf8]/20 transition-colors">
                                    <Phone className="text-[#38bdf8]" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1 tracking-wide group-hover:text-[#38bdf8] transition-colors">Call or WhatsApp</h4>
                                    <p className="text-gray-400 text-sm tracking-widest">+91 9474266777</p>
                                </div>
                            </a>

                            <a href="mailto:info@seeandamans.com" className="flex items-start gap-5 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#38bdf8]/20 transition-colors">
                                    <Mail className="text-[#38bdf8]" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1 tracking-wide group-hover:text-[#38bdf8] transition-colors">Email Us</h4>
                                    <p className="text-gray-400 text-sm tracking-wide">info@seeandamans.com</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-3 bg-[#0a1118] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/5 rounded-bl-[150px] -z-10 pointer-events-none" />

                        <h3 className="text-2xl md:text-3xl font-serif mb-8 text-white">Send Your Query</h3>
                        
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Full Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="John Doe"
                                        className="w-full bg-[#060c12] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8]/50 transition-colors placeholder:text-gray-700" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        placeholder="+91 Your Number"
                                        className="w-full bg-[#060c12] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8]/50 transition-colors placeholder:text-gray-700" 
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Email Address</label>
                                    <input 
                                        type="email" 
                                        placeholder="john@example.com"
                                        className="w-full bg-[#060c12] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8]/50 transition-colors placeholder:text-gray-700" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Travel Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                                        <input 
                                            type="date" 
                                            className="w-full bg-[#060c12] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-[#38bdf8]/50 transition-colors [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full" 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold flex items-center gap-2">
                                    <Users size={14} /> Total Travelers
                                </label>
                                <select className="w-full bg-[#060c12] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-[#38bdf8]/50 transition-colors appearance-none">
                                    <option value="">Select number of people</option>
                                    <option value="1-2">1 - 2 Travelers</option>
                                    <option value="3-4">3 - 4 Travelers</option>
                                    <option value="5-8">5 - 8 Travelers</option>
                                    <option value="9+">9+ Travelers</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold flex items-center gap-2">
                                    <MessageSquare size={14} /> Special Requests / Message
                                </label>
                                <textarea 
                                    rows={4}
                                    placeholder="Tell us about your interests, dream package, or any dietary requirements..."
                                    className="w-full bg-[#060c12] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8]/50 transition-colors placeholder:text-gray-700 resize-none" 
                                />
                            </div>

                            <button type="submit" className="w-full py-4 bg-white text-black font-semibold rounded-xl text-sm uppercase tracking-widest hover:bg-[#38bdf8] transition-colors relative overflow-hidden group mt-4">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Submit Request <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-[#38bdf8] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
