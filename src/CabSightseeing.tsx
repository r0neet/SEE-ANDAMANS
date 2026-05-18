import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tours = [
    {
        id: 1,
        title: 'PRIVATE CAB TOUR TO BARATANG - LIMESTONE CAVES AND MUD VOLCANO',
        desc: 'A personal trip to Baratang Island from Port Blair. Witness the fascinating limestone caves and the rare mud volcano.',
        price: '3800',
        img: '/hero2.webp'
    },
    {
        id: 2,
        title: 'CHIDIATAPU SUNSET TOUR',
        desc: 'Experience the most beautiful sunset in the Andaman islands. A relaxed evening by the breathtaking biological park and beach.',
        price: '1500',
        img: '/hero1.webp'
    },
    {
        id: 3,
        title: 'ROSS ISLAND AND NORTH BAY ISLAND (CORAL ISLAND)',
        desc: 'Explore the historical ruins of the British capital and the vibrant coral reefs of North Bay in a single day.',
        price: '2500',
        img: '/hero3.webp'
    },
    {
        id: 4,
        title: 'CELLULAR JAIL',
        desc: 'Explore The prison that was used by the colonial government of India for the purpose of exiling insurgents and political prisoners.',
        price: '1500',
        img: '/hero2.webp'
    }
];

export default function CabSightseeing() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#060c12] text-white pt-24 px-4 md:px-12 pb-24">
            <div className="max-w-[1400px] mx-auto">

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

                <div className="mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif mb-6 text-white"
                    >
                        Sightseeing in Andaman
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed"
                    >
                        Exclusive and premium island transfers and sightseeing tours to explore the hidden gems and popular destinations in the Andaman Islands comfortably.
                    </motion.p>
                </div>

                {/* Tour Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {tours.map((tour, idx) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                            className="group relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
                        >
                            <img src={tour.img} alt={tour.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

                            {/* Gradient overlays for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            <div className="absolute inset-0 bg-[#06121c]/20 group-hover:bg-transparent transition-colors duration-500" />

                            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                                <h2 className="text-2xl md:text-3xl font-serif text-white mb-3 leading-snug drop-shadow-md">
                                    {tour.title}
                                </h2>
                                <p className="text-gray-300 text-sm mb-6 line-clamp-2 md:line-clamp-3 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-in-out">
                                    {tour.desc}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <p className="text-white font-medium text-lg tracking-wide">
                                        <span className="text-sm text-gray-400 font-normal mr-2">Starting At just</span>
                                        ₹ {tour.price} <span className="text-sm group-hover:translate-x-1 inline-block transition-transform duration-300">&rarr;</span>
                                    </p>
                                    <button className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 hover:bg-white hover:text-black transition-all">
                                        <Calendar size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
