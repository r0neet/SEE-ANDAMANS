import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, CheckCircle2, XCircle,
  CalendarDays, Users, IndianRupee, ShieldCheck, 
  ChevronDown, BookOpen, Clock, AlertTriangle 
} from 'lucide-react';
import { activityBookingData } from './data/activityBookingData';

export default function ActivityBookingPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState<string | null>('itinerary');

  const data = id ? activityBookingData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#060c12] text-white flex flex-col justify-center items-center">
        <h2 className="text-4xl font-serif mb-4">Activity Not Found</h2>
        <button 
          onClick={() => navigate('/scuba-diving')}
          className="px-6 py-2 border border-white/20 hover:bg-white hover:text-black transition-colors rounded-xl tracking-widest text-sm uppercase"
        >
          Return to Activities
        </button>
      </div>
    );
  }

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#060c12] text-white selection:bg-[#38bdf8]/30 overflow-x-hidden">
      
      {/* Navigation Header */}
      <div className="absolute top-0 w-full z-50 pt-8 px-4 flex">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/scuba-diving')}
          className="flex flex-row items-center gap-2 text-xs md:text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors lg:ml-12"
        >
          <ChevronLeft size={16} /> Back to Activities
        </motion.button>
      </div>

      {/* Hero Image Section (Placeholder for User to Add Images) */}
      <section className="relative h-[55vh] flex flex-col justify-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0a1118]">
          <div className="w-full h-full flex flex-col items-center justify-center opacity-30 text-gray-500">
            <span className="text-lg font-serif">Image Placeholder</span>
            <span className="text-xs uppercase tracking-widest">({data.title})</span>
          </div>
          {/* Example actual image structure when added: */}
          {/* <img src="/path/to/hero.jpg" alt={data.title} className="w-full h-full object-cover opacity-60" /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060c12] via-[#060c12]/60 to-transparent" />
        </div>

        <div className="relative z-10 px-8 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-[#38bdf8] text-xs font-semibold tracking-widest uppercase mb-4 border border-white/10 rounded-full">
              Water Sports
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-4 leading-tight">
              {data.title}
            </h1>
            <p className="text-lg text-gray-300 font-light max-w-2xl">
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column (Content) */}
          <div className="w-full lg:w-2/3 space-y-16">
            
            {/* About Package */}
            <div>
              <h2 className="text-3xl font-serif mb-6 flex items-center gap-3">
                <BookOpen className="text-[#38bdf8]" size={28} /> About The Package
              </h2>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                {data.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-[#0a1118] border border-white/5 p-8 rounded-3xl">
              <h3 className="text-2xl font-serif mb-6 text-white">Highlights of the Tour</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#38bdf8]/10 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-6 text-white flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={20} /> Inclusions
                </h3>
                <ul className="space-y-3">
                  {data.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-green-500/70 mt-0.5 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-6 text-white flex items-center gap-2">
                  <XCircle className="text-red-500/80" size={20} /> Exclusions
                </h3>
                <ul className="space-y-3">
                  {data.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <XCircle size={16} className="text-red-500/50 mt-0.5 shrink-0" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Accordions (Itinerary, Cancel Policy, Terms) */}
            <div className="space-y-4">
              
              {/* Itinerary Accordion */}
              <div className="border border-white/10 rounded-2xl bg-[#0a1118]/50 overflow-hidden">
                <button 
                  onClick={() => toggleAccordion('itinerary')}
                  className="w-full flex justify-between items-center p-6 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-serif flex items-center gap-3">
                    <Clock className="text-[#38bdf8]" size={20} /> Tour Itinerary
                  </h3>
                  <ChevronDown className={`transition-transform duration-300 ${activeAccordion === 'itinerary' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeAccordion === 'itinerary' && (
                    <motion.div 
                      initial={{ height: 0 }} 
                      animate={{ height: 'auto' }} 
                      exit={{ height: 0 }} 
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 space-y-8">
                        {data.itinerary.map((step, i) => (
                          <div key={i} className="relative pl-8 md:pl-12">
                            <div className="absolute left-0 top-0 w-px h-full bg-white/10" />
                            <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />
                            <div className="text-[#38bdf8] text-xs font-semibold tracking-widest uppercase mb-1">{step.step}</div>
                            <h4 className="text-lg font-medium text-white mb-2">{step.title}</h4>
                            <p className="text-sm text-gray-400 font-light leading-relaxed">{step.description}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Cancellation Policy Accordion */}
              <div className="border border-white/10 rounded-2xl bg-[#0a1118]/50 overflow-hidden">
                <button 
                  onClick={() => toggleAccordion('cancellation')}
                  className="w-full flex justify-between items-center p-6 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-serif flex items-center gap-3">
                    <ShieldCheck className="text-[#38bdf8]" size={20} /> Cancellation Policy
                  </h3>
                  <ChevronDown className={`transition-transform duration-300 ${activeAccordion === 'cancellation' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeAccordion === 'cancellation' && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="p-6 space-y-4">
                        {data.cancellation.map((rule, i) => (
                          <div key={i} className="bg-white/5 p-4 rounded-xl">
                            <span className="block text-sm font-medium text-white mb-1">{rule.title}</span>
                            <span className="text-xs text-gray-400">{rule.description}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Terms & Conditions Accordion */}
              <div className="border border-white/10 rounded-2xl bg-[#0a1118]/50 overflow-hidden">
                <button 
                  onClick={() => toggleAccordion('terms')}
                  className="w-full flex justify-between items-center p-6 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-serif flex items-center gap-3">
                    <AlertTriangle className="text-[#38bdf8]" size={20} /> Terms & Conditions
                  </h3>
                  <ChevronDown className={`transition-transform duration-300 ${activeAccordion === 'terms' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeAccordion === 'terms' && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="p-6 text-sm text-gray-400 space-y-4">
                        {data.terms.map((term, i) => (
                          <p key={i}><strong className="text-white">{term.title}:</strong> {term.description}</p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* Right Column (Sticky Booking Sidebar) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24 mt-8 lg:mt-0">
            <div className="bg-[#0a1118] border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8]/5 rounded-bl-[100px] -z-10" />
              
              <h3 className="text-2xl font-serif mb-2 text-white">Book Your Spot</h3>
              <p className="text-sm text-gray-400 mb-8 border-b border-white/10 pb-6">Secure your adventure instantly.</p>

              <div className="space-y-5 mb-8 text-sm">
                <div className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/5">
                  <CalendarDays size={20} className="text-[#38bdf8]" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Select Date</p>
                    <p className="text-white font-medium">Any Date Available</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/5">
                  <Users size={20} className="text-[#38bdf8]" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Travelers</p>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">2 Adults</span>
                      <span className="text-xs text-[#38bdf8] cursor-pointer hover:underline">Change</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 mt-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Starts From</span>
                    <span className="text-2xl font-serif text-white flex items-center gap-1 mt-1">
                       <IndianRupee size={20} className="text-[#38bdf8]" />
                       Pricing inside
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-white text-black font-semibold rounded-xl text-sm uppercase tracking-widest hover:bg-[#38bdf8] transition-colors relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Proceed to Book
                </span>
                <div className="absolute inset-0 bg-[#38bdf8] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0" />
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                No payment required right now.
              </p>
            </div>
          </div>
          
        </div>
      </section>
      
    </div>
  );
}
