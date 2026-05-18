import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Ship, Calendar, MapPin, Users, Search, ArrowRightLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const islands = [
    "Port Blair",
    "Havelock (Swaraj Dweep)",
    "Neil (Shaheed Dweep)"
];

export default function FerryBooking() {
    const navigate = useNavigate();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [tripType, setTripType] = useState<'ONE_WAY' | 'ROUND_TRIP'>('ONE_WAY');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [passengers, setPassengers] = useState(1);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically integrate with the real ferry booking API
        alert('Searching ferries from ' + from + ' to ' + to);
    };

    return (
        <div className="min-h-screen bg-[#060c12] text-white pt-24 px-4 md:px-12 pb-24 relative overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Navigation & Header */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors mb-12"
                >
                    <ChevronLeft size={16} /> Back to Home
                </motion.button>

                <div className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center md:justify-start gap-4 mb-4 text-blue-400"
                    >
                        <Ship size={32} strokeWidth={1.5} />
                        <span className="text-sm uppercase tracking-[0.3em] font-medium">Fastest Confirmations</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif mb-6 text-white leading-tight"
                    >
                        Book Your Ferry
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed mx-auto md:mx-0"
                    >
                        Seamless island hopping in the Andamans. Compare schedules and book tickets instantly for Makruzz, Nautika, and Green Ocean.
                    </motion.p>
                </div>

                {/* Booking Form Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10" />

                    {/* Trip Type Toggle */}
                    <div className="flex gap-4 mb-10 border-b border-white/10 pb-6">
                        <button
                            onClick={() => setTripType('ONE_WAY')}
                            className={`text-sm tracking-widest uppercase pb-2 transition-all ${tripType === 'ONE_WAY' ? 'text-white border-b-2 border-white font-medium' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            One Way
                        </button>
                        <button
                            onClick={() => setTripType('ROUND_TRIP')}
                            className={`text-sm tracking-widest uppercase pb-2 transition-all ${tripType === 'ROUND_TRIP' ? 'text-white border-b-2 border-white font-medium' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            Round Trip
                        </button>
                    </div>

                    <form onSubmit={handleSearch} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
                            
                            {/* From */}
                            <div className="lg:col-span-1">
                                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3 ml-1">From</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                    <select
                                        required
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                        className="w-full bg-[#0a1118] border border-white/20 text-white rounded-xl py-4 pl-12 pr-4 appearance-none focus:outline-none focus:border-white transition-colors cursor-pointer"
                                    >
                                        <option value="" disabled>Select Starting Island</option>
                                        {islands.map(island => <option key={island} value={island}>{island}</option>)}
                                    </select>
                                </div>
                            </div>

                            {/* Exchange Icon (Visual only on desktop) */}
                            <div className="hidden lg:flex justify-center items-center pb-4 text-white/40">
                                <ArrowRightLeft size={20} />
                            </div>

                            {/* To */}
                            <div className="lg:col-span-1">
                                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3 ml-1">To</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                    <select
                                        required
                                        value={to}
                                        onChange={(e) => setTo(e.target.value)}
                                        className="w-full bg-[#0a1118] border border-white/20 text-white rounded-xl py-4 pl-12 pr-4 appearance-none focus:outline-none focus:border-white transition-colors cursor-pointer"
                                    >
                                        <option value="" disabled>Select Destination</option>
                                        {islands.map(island => (
                                            <option key={island} value={island} disabled={island === from}>{island}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Depart Date */}
                            <div className="lg:col-span-1">
                                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3 ml-1">Depart</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                    <input
                                        type="date"
                                        required
                                        value={departDate}
                                        onChange={(e) => setDepartDate(e.target.value)}
                                        className="w-full bg-[#0a1118] border border-white/20 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-white transition-colors [color-scheme:dark]"
                                    />
                                </div>
                            </div>

                            {/* Return Date (Conditional) */}
                            <AnimatePresence>
                                {tripType === 'ROUND_TRIP' && (
                                    <motion.div
                                        initial={{ opacity: 0, width: 0, x: -20 }}
                                        animate={{ opacity: 1, width: 'auto', x: 0 }}
                                        exit={{ opacity: 0, width: 0, x: -20, overflow: 'hidden' }}
                                        className="lg:col-span-1"
                                    >
                                        <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3 ml-1">Return</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input
                                                type="date"
                                                required={tripType === 'ROUND_TRIP'}
                                                value={returnDate}
                                                onChange={(e) => setReturnDate(e.target.value)}
                                                className="w-full bg-[#0a1118] border border-white/20 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-white transition-colors [color-scheme:dark]"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Passengers */}
                            <div className="lg:col-span-1">
                                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3 ml-1">Passengers</label>
                                <div className="relative">
                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                    <select
                                        value={passengers}
                                        onChange={(e) => setPassengers(Number(e.target.value))}
                                        className="w-full bg-[#0a1118] border border-white/20 text-white rounded-xl py-4 pl-12 pr-4 appearance-none focus:outline-none focus:border-white transition-colors cursor-pointer"
                                    >
                                        {[1,2,3,4,5,6,7,8,9].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 flex justify-end">
                            <button
                                type="submit"
                                className="bg-white text-black hover:bg-gray-200 uppercase tracking-widest text-sm font-medium py-4 px-10 rounded-xl transition-all flex items-center gap-3 w-full md:w-auto justify-center"
                            >
                                <Search size={18} />
                                Search Ferries
                            </button>
                        </div>
                    </form>
                </motion.div>

            </div>
        </div>
    );
}
