import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Anchor, MapPin, Fish, Waves, CheckCircle2, LifeBuoy, Wind, Navigation, Droplets, Smile } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const activitiesData = [
    {
        id: 'scuba',
        name: 'Scuba Diving',
        heroImg: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&q=80&w=2000',
        heroSubtitle: 'Heart of the Coral Triangle',
        heroTitle: 'Scuba Diving',
        heroTitleSpan: 'in Andaman Islands',
        heroDesc: 'Scuba diving in the Andaman Sea isn’t just a water sport—it’s your ticket to explore the 70% of our planet that lies beneath the surface. The vibrant reefs and rich marine life attract adventurers worldwide.',
        whyIcon1: Fish,
        whyTitle1: 'Rich Marine Biodiversity',
        whyDesc1: 'Encounter majestic sea turtles, graceful manta rays, secretive moray eels, vibrant lionfish, and giant groupers in their natural habitat.',
        whyIcon2: Waves,
        whyTitle2: 'Pristine Coral Reefs',
        whyDesc2: 'The region is home to vibrant, incredibly healthy coral ecosystems offering excellent visibility, especially from October to May.',
        whyImg: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=800',
        whyQuote: '"One of the best diving destinations in South Asia."',
        places: [
            { name: 'Havelock Island', subtitle: 'The Scuba Diving Capital', desc: "Home to world-class sites like Nemo Reef, Dixon's Pinnacle, and Jackson's Bar. Perfect for both beginners and pros.", img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139509/hero1_kvhccf.png' },
            { name: 'Neil Island', subtitle: 'Pristine & Quiet', desc: 'Known for being quieter and less explored, offering pristine untouched reefs and deeper, thrilling boat dive sites.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139515/hero3_ihu2dr.png' },
            { name: 'Port Blair', subtitle: 'Convenient & Accessible', desc: 'A great option for those with limited time in the islands, offering several nearby vibrant reef sites like North Bay.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139508/hero2_sdquhn.png' }
        ],
        pricingTitle: 'Types of Dives & Pricing',
        pricingSub: 'Professional PADI/SSI instructors and high safety standards make it perfect for swimmers and non-swimmers alike.',
        pricingItems: [
            { title: 'DSD Shore Dive', price: '5,000', desc: 'Perfect for beginners to get comfortable in shallow water before exploring the reef. Conducted directly from the shore at the famous Nemo Reef.', features: ['Max depth 12m', 'No swimming skills needed', 'Includes 45-min dive', 'GoPro Photos & Video'] },
            { title: 'DSD Boat Dive', price: '6,799', desc: 'A boat takes you to exclusive, secluded reef spots away from the shore. Offers better visibility and a more serene atmosphere.', features: ['Max depth 12m', 'Exclusive Reef Access', 'Includes 60-min dive', 'GoPro Photos & Video'] },
            { title: 'PADI/SSI Open Water', price: '18,500', desc: 'Professional certification course for those looking to become independent certified divers and explore the ocean freely.', features: ['4 Day Course', 'Worldwide Validity', 'Theory + Confined Water', '4 Open Water Dives'] }
        ]
    },
    {
        id: 'seawalk',
        name: 'Sea Walk',
        heroImg: 'https://images.unsplash.com/photo-1516766453883-fa4c0dcd1d18?auto=format&fit=crop&q=80&w=2000',
        heroSubtitle: 'Walk on the Ocean Floor',
        heroTitle: 'Sea Walk',
        heroTitleSpan: 'in Andaman Islands',
        heroDesc: 'If swimming isn’t your thing, sea walking is the perfect alternative! With a special helmet that lets you breathe underwater, you can walk along the ocean floor surrounded by colourful fish species and corals.',
        whyIcon1: Smile,
        whyTitle1: 'No Experience Needed',
        whyDesc1: 'You don\'t need to know how to swim or dive. The specially designed helmet allows you to breathe normally underwater.',
        whyIcon2: Fish,
        whyTitle2: 'Close Encounters',
        whyDesc2: 'Feed the fish from your own hands and witness the vibrant coral ecosystem up close with zero effort.',
        whyImg: 'https://images.unsplash.com/photo-1621272036047-bf0ebfd413f6?auto=format&fit=crop&q=80&w=800',
        whyQuote: '"A walk to remember beneath the waves."',
        places: [
            { name: 'North Bay Island', subtitle: 'The Pioneer Hub', desc: 'The most popular destination for Sea Walk in Port Blair, famous for its rich marine life near the coast.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139508/hero2_sdquhn.png' },
            { name: 'Havelock Island', subtitle: 'Elephant Beach', desc: 'A premium sea walking experience amidst the crystal clear waters of the famous Elephant Beach.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139509/hero1_kvhccf.png' },
            { name: 'Neil Island', subtitle: 'Quiet & Calm', desc: 'Experience the underwater walk in a more secluded environment with very calm currents.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139515/hero3_ihu2dr.png' }
        ],
        pricingTitle: 'Sea Walk Packages',
        pricingSub: 'Safe, guided, and purely magical. All equipment and underwater photography included.',
        pricingItems: [
            { title: 'Standard Sea Walk', price: '3,500', desc: 'Enjoy a 20-30 minute walk on the ocean floor hand-in-hand with our expert divers.', features: ['No swimming skills needed', 'Includes underwater photos', 'Briefing & Equipment', '20-min bottom time'] },
            { title: 'Premium Sea Walk', price: '4,500', desc: 'Extended time with exclusive video coverage and private transfers to the pontoon.', features: ['30-min bottom time', 'Private guide', 'GoPro Photos & Video', 'Priority Boarding'] },
            { title: 'Couple Special', price: '8,000', desc: 'A specialized experience for couples with personalized photography.', features: ['Dedicated Photographer', 'Extended bottom time', 'Souvenir print', 'Couples only'] }
        ]
    },
    {
        id: 'snorkeling',
        name: 'Snorkeling',
        heroImg: 'https://images.unsplash.com/photo-1544474650-cf17196656ab?auto=format&fit=crop&q=80&w=2000',
        heroSubtitle: 'Float Above The Reef',
        heroTitle: 'Snorkeling',
        heroTitleSpan: 'Crystal Clear Waters',
        heroDesc: 'Not ready for scuba diving but still want to explore the underwater world? Snorkelling is fun, easy, and gives you a great glimpse of the vibrant marine life floating above stunning coral reefs.',
        whyIcon1: Droplets,
        whyTitle1: 'Crystal Clear Visibility',
        whyDesc1: 'The Andaman waters offer unparalleled visibility, making surface snorkeling incredibly rewarding.',
        whyIcon2: LifeBuoy,
        whyTitle2: 'Safe & Family Friendly',
        whyDesc2: 'Perfect for all ages. With a life jacket and a guide, even non-swimmers can safely enjoy the beauty of the reefs.',
        whyImg: 'https://images.unsplash.com/photo-1508004526072-3be43a5005f6?auto=format&fit=crop&q=80&w=800',
        whyQuote: '"A mesmerizing window to the underwater world."',
        places: [
            { name: 'Elephant Beach', subtitle: 'Snorkeling Paradise', desc: 'Havelock’s primary hub for snorkeling. Shallow, clear waters teeming with colorful fish right off the beach.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139509/hero1_kvhccf.png' },
            { name: 'Jolly Buoy', subtitle: 'Protected Marine Area', desc: 'Part of the Mahatma Gandhi Marine National Park, offering the most vibrant and strictly protected corals.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139508/hero2_sdquhn.png' },
            { name: 'Bharatpur Beach', subtitle: 'Neil Island', desc: 'A gentle slope into the sea makes it highly accessible for families and elderly snorkelers.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139515/hero3_ihu2dr.png' }
        ],
        pricingTitle: 'Snorkeling Adventures',
        pricingSub: 'Guided snorkeling tours ensuring you see the best parts of the reef safely.',
        pricingItems: [
            { title: 'Shore Snorkeling', price: '1,000', desc: 'A quick and easy 15-minute guided snorkeling session right off the beach.', features: ['Guide included', 'Mask & Tube provided', 'Life jacket supplied', 'Immediate access'] },
            { title: 'Boat Snorkeling', price: '2,500', desc: 'Take a small boat to a deeper, more exotic reef area where marine life is abundant.', features: ['Boat transfer to reef', '30-45 min session', 'Snacks & Water', 'Better corals'] },
            { title: 'Half-Day Snorkel Tour', price: '4,500', desc: 'Visit multiple snorkeling spots in one go. Ideal for enthusiasts.', features: ['3 different reefs', 'Professional Guide', 'GoPro Footage', 'Lunch included'] }
        ]
    },
    {
        id: 'jetski',
        name: 'Jet Ski',
        heroImg: 'https://images.unsplash.com/photo-1518331557008-0f13e731d102?auto=format&fit=crop&q=80&w=2000',
        heroSubtitle: 'Feel The Adrenaline',
        heroTitle: 'Jet Skiing',
        heroTitleSpan: 'Across The Ocean',
        heroDesc: 'Jet Ski ride is like hopping on a water scooter for an adrenaline-pumping adventure! Zoom across the water, weave through the waves, and enjoy the thrill of speed in your personal playground.',
        whyIcon1: Wind,
        whyTitle1: 'Adrenaline Rush',
        whyDesc1: 'Feel the wind in your hair and salt spray on your face as you maneuver high-speed watercraft.',
        whyIcon2: Navigation,
        whyTitle2: 'Safe Environment',
        whyDesc2: 'Operate in designated safe zones under the watchful eye of our expert instructors riding pillion.',
        whyImg: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800',
        whyQuote: '"Fast, fierce, and incredibly fun."',
        places: [
            { name: 'Water Sports Complex', subtitle: 'Port Blair', desc: 'The most accessible spot to hop on a Jet Ski and rip around the harbor area.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139508/hero2_sdquhn.png' },
            { name: 'Corbyn\'s Cove', subtitle: 'Scenic Coastline', desc: 'Ride the waves alongside a beautiful crescent-shaped, coconut palm-fringed beach.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139515/hero3_ihu2dr.png' },
            { name: 'Elephant Beach', subtitle: 'Havelock Action', desc: 'Combine your snorkeling trip with an adrenaline-pumping Jet Ski ride.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139509/hero1_kvhccf.png' }
        ],
        pricingTitle: 'Jet Ski Rides',
        pricingSub: 'Short bursts of absolute thrill. Safe, thoroughly maintained machines.',
        pricingItems: [
            { title: 'Joy Ride', price: '600', desc: 'A quick 2-3 minute spin guided by an instructor to give you a taste of the speed.', features: ['Instructor rides along', 'Life jacket included', 'Briefing provided', 'Instant booking'] }
        ]
    },
    {
        id: 'parasailing',
        name: 'Parasailing',
        heroImg: 'https://images.unsplash.com/photo-1499557432321-dfcb5eb8d6a8?auto=format&fit=crop&q=80&w=2000',
        heroSubtitle: 'Fly Like A Bird',
        heroTitle: 'Parasailing',
        heroTitleSpan: 'High Above The Sea',
        heroDesc: 'For a thrilling mix of airborne adventure and water sports! Strap into a harness and get lifted into the sky as a speedboat pulls you along for an epic ride with breathtaking views.',
        whyIcon1: Wind,
        whyTitle1: 'Spectacular Views',
        whyDesc1: 'Enjoy an unmatched aerial perspective of the coral reefs and white sandy beaches.',
        whyIcon2: CheckCircle2,
        whyTitle2: 'Completely Safe',
        whyDesc2: 'Towed by specialized, purpose-built boats utilizing advanced hydraulic winch systems for incredibly smooth takeoffs and landings.',
        whyImg: 'https://images.unsplash.com/photo-1520626337972-0056972e0d37?auto=format&fit=crop&q=80&w=800',
        whyQuote: '"The closest you can get to flying naturally."',
        places: [
            { name: 'Corbyn\'s Cove', subtitle: 'Port Blair Aerials', desc: 'Launch from the beach or boat and see Port Blair coastline from a completely new angle.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139508/hero2_sdquhn.png' },
            { name: 'Elephant Beach', subtitle: 'Havelock Heights', desc: 'The absolute best place for parasailing, where you can literally see the reefs from the sky.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139509/hero1_kvhccf.png' },
            { name: 'North Bay', subtitle: 'Lighthouse Views', desc: 'Fly near the famous North Bay lighthouse, depicted on the 20-rupee note.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139515/hero3_ihu2dr.png' }
        ],
        pricingTitle: 'Parasailing Flights',
        pricingSub: 'Soar securely. Dry landings and water dips available on request.',
        pricingItems: [
            { title: 'Standard Flight', price: '3,000', desc: 'A standard flight reaching up to 100 meters high. Smooth takeoff and landing on the boat.', features: ['3-4 minute flight', 'Boat launch & land', 'Safety harness', 'Dry experience'] }
        ]
    },
    {
        id: 'kayaking',
        name: 'Kayaking',
        heroImg: 'https://images.unsplash.com/photo-1544473244-f6895e69ce8d?auto=format&fit=crop&q=80&w=2000',
        heroSubtitle: 'Paddle Through Nature',
        heroTitle: 'Sea & Mangrove',
        heroTitleSpan: 'Kayaking',
        heroDesc: 'Paddle slowly through the pristine waters and lush green mangroves, taking in the untouched beauty of the island’s lesser-explored areas. Soak in the sun, sea, and vibrant greenery.',
        whyIcon1: Navigation,
        whyTitle1: 'Explore Hidden Creeks',
        whyDesc1: 'Access remote mangrove ecosystems that larger boats cannot reach, experiencing profound silence and nature.',
        whyIcon2: Smile,
        whyTitle2: 'Bioluminescence',
        whyDesc2: 'Experience the magic of glowing waters during exclusive night kayaking tours in Havelock.',
        whyImg: 'https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?auto=format&fit=crop&q=80&w=800',
        whyQuote: '"A meditative journey through water and woods."',
        places: [
            { name: 'Havelock Mangroves', subtitle: 'Night Kayaking', desc: 'Famous for bioluminescence tours where every paddle stroke lights up the water.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139509/hero1_kvhccf.png' },
            { name: 'Mayabunder', subtitle: 'Deep Forest Creeks', desc: 'Pristine, untouched mangrove forests offering long, undisturbed kayaking tracks.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139508/hero2_sdquhn.png' },
            { name: 'Baratang', subtitle: 'Limestone Passage', desc: 'Paddle through incredibly dense mangrove canopies en route to the famous limestone caves.', img: 'https://res.cloudinary.com/dsrquoqqm/image/upload/f_auto,q_auto/v1779139515/hero3_ihu2dr.png' }
        ],
        pricingTitle: 'Kayaking Tours',
        pricingSub: 'Guided group paddles. Perfect for fitness enthusiasts and nature lovers.',
        pricingItems: [
            { title: 'Day Mangrove Tour', price: '2,500', desc: 'A 2.5 hour guided leisurely paddle through lush green mangrove canopies.', features: ['Safety briefing', 'Life jacket', 'Guide & water', 'Bird watching'] },
            { title: 'Sunset Kayaking', price: '3,000', desc: 'Watch the sky turn crimson from the tranquility of your kayak in open water.', features: ['Golden hour views', 'Relaxed pace', 'Refreshments', 'Photography assist'] },
            { title: 'Night Bioluminescence', price: '3,500', desc: 'A surreal experience. Paddle in complete darkness and watch the water glow with phytoplankton.', features: ['Stargazing', 'Bioluminescence', 'Expert night guide', 'Includes torch'] }
        ]
    }
];

export default function ScubaDiving() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(activitiesData[0].id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const activeData = activitiesData.find(a => a.id === activeTab) || activitiesData[0];
    const headerData = activitiesData[0]; // Keep hero static as Scuba/Water Sports or dynamic if preferred. We'll make it static to "Water Sports & Scuba"

    return (
        <div className="min-h-screen bg-[#060c12] text-white">

            {/* Navigation Header */}
            <div className="absolute top-0 w-full z-50 pt-8 px-4 flex">
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => navigate('/')}
                    className="flex flex-row items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex-1 md:ml-12"
                >
                    <ChevronLeft size={16} /> Back to Home
                </motion.button>
            </div>

            {/* Static Hero Section */}
            <section className="relative h-[70vh] flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={headerData.heroImg}
                        alt="Scuba Diving Andaman underwater"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#060c12]" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <p className="text-sm uppercase tracking-[0.3em] mb-4 text-[#38bdf8] font-semibold flex items-center justify-center gap-2">
                            <Anchor size={16} /> Heart of the Coral Triangle
                        </p>
                        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-2xl">
                            Water Sports <br /> <span className="text-4xl md:text-6xl text-gray-300">in Andaman Islands</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                            Experience world-class aquatic adventures characterized by rich marine biodiversity, pristine coral reefs, and perfect tropical water temperatures year-round.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Tab Bar (Placed exactly below the Hero section!) */}
            <section className="relative z-20 -mt-10 mb-8 max-w-7xl mx-auto px-4 flex justify-center">
                <div className="flex flex-wrap justify-center items-center gap-2 bg-[#0a1118]/80 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-2xl">
                    {activitiesData.map(activity => (
                        <button
                            key={activity.id}
                            onClick={() => setActiveTab(activity.id)}
                            className={`px-5 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${activeTab === activity.id ? 'bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.3)] scale-105' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                        >
                            {activity.name}
                        </button>
                    ))}
                </div>
            </section>

            {/* Dynamic Content Section */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="min-h-[800px]"
                >
                    {/* Why Activity Here Section */}
                    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-5xl font-serif mb-4">Why {activeData.name} here?</h2>
                                <p className="text-lg text-gray-400 font-light leading-relaxed mb-8 border-l-2 border-[#38bdf8] pl-6 italic">
                                    {activeData.heroDesc}
                                </p>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                            <activeData.whyIcon1 className="text-[#38bdf8]" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium mb-2">{activeData.whyTitle1}</h4>
                                            <p className="text-gray-400 font-light leading-relaxed">{activeData.whyDesc1}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                            <activeData.whyIcon2 className="text-[#38bdf8]" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium mb-2">{activeData.whyTitle2}</h4>
                                            <p className="text-gray-400 font-light leading-relaxed">{activeData.whyDesc2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-3xl overflow-hidden h-[500px] border border-white/10 shadow-2xl relative group">
                                <img src={activeData.whyImg} alt="Activity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                    <p className="text-2xl font-serif italic text-white/90">{activeData.whyQuote}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Top Places Section */}
                    <section className="py-24 bg-[#0a1118] border-y border-white/5">
                        <div className="max-w-7xl mx-auto px-6 md:px-12">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-serif mb-4">Best Places To Experience it</h2>
                                <p className="text-gray-400 max-w-2xl mx-auto font-light">Explore the unique topographies and scenic views across different islands.</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {activeData.places.map((place, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                                    >
                                        <img src={place.img} alt={place.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center">
                                            <MapPin className="text-[#38bdf8] mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0" size={24} />
                                            <h3 className="text-3xl font-serif mb-1 group-hover:text-[#38bdf8] transition-colors">{place.name}</h3>
                                            <p className="text-sm uppercase tracking-widest text-gray-300 mb-4">{place.subtitle}</p>
                                            <p className="text-sm text-gray-400 font-light opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-in-out">
                                                {place.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif mb-4">{activeData.pricingTitle}</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto font-light">{activeData.pricingSub}</p>
                        </div>

                        <div className={`grid gap-8 ${
                            activeData.pricingItems.length === 1 
                            ? 'max-w-xl mx-auto' 
                            : activeData.pricingItems.length === 2 
                            ? 'md:grid-cols-2 max-w-4xl mx-auto' 
                            : 'md:grid-cols-2 lg:grid-cols-3'
                        }`}>
                            {activeData.pricingItems.map((type, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                                    className="bg-[#0a1118] border border-white/10 rounded-3xl p-8 hover:border-[#38bdf8]/50 transition-colors group relative overflow-hidden flex flex-col"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8]/5 rounded-bl-[100px] -z-10 group-hover:bg-[#38bdf8]/10 transition-colors" />
                                    <h3 className="text-xl font-serif mb-2 line-clamp-1">{type.title}</h3>
                                    <div className="flex items-baseline gap-2 mb-6">
                                        <span className="text-xs text-gray-400">Starts from</span>
                                        <span className="text-3xl font-medium text-white">₹{type.price}</span>
                                    </div>
                                    <p className="text-gray-400 text-xs font-light leading-relaxed mb-6 h-16 overflow-hidden">
                                        {type.desc}
                                    </p>

                                    <div className="space-y-3 mb-8 border-t border-white/5 pt-6 flex-1">
                                        {type.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-3 text-xs text-gray-300">
                                                <CheckCircle2 className="text-[#38bdf8] shrink-0" size={14} />
                                                <span className="truncate">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button 
                                        onClick={() => navigate(`/activities/${activeData.id}`)}
                                        className="w-full mt-auto py-3 rounded-xl border border-white/20 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                                    >
                                        Book Now
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </motion.div>
            </AnimatePresence>

        </div>
    );
}
