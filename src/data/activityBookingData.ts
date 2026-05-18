export interface ActivityBooking {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  itinerary: {
    step: string;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  cancellation: {
    title: string;
    description: string;
  }[];
  terms: {
    title: string;
    description: string;
  }[];
}

const defaultCancellation = [
  { title: "Free Cancellation (7+ Days Before Travel)", description: "100% refund on cancellation made at least 7 days prior to the departure date." },
  { title: "50% Cancellation Charges (3–6 Days Before Travel)", description: "50% of the total booking amount will be deducted." },
  { title: "No Refund (Within 48 Hours of Travel)", description: "No refund will be applicable for last-minute cancellations." }
];

const defaultTerms = [
  { title: "Booking Confirmation", description: "Booking is confirmed only after receiving full or partial payment." },
  { title: "Travel Documents", description: "Guests must carry valid ID proof and required permits." },
  { title: "Company Rights", description: "The company reserves the right to modify itinerary due to weather or operational reasons." }
];

export const activityBookingData: Record<string, ActivityBooking> = {
  jetski: {
    id: "jetski",
    title: "Jet Ski Ride in Andaman",
    subtitle: "High-speed water adventure with professional instructors.",
    description: "Jet skiing in Andaman is a thrilling water sport where visitors ride a high-speed water scooter across the sea. It is one of the most popular beach activities in Port Blair and offers an exciting experience for adventure lovers visiting the Andaman Islands.",
    highlights: [
      "High-speed water scooter adventure",
      "Beautiful sea views of Corbyn’s Cove Beach and Havelock",
      "Safe and guided activity",
      "Perfect for adventure enthusiasts"
    ],
    itinerary: [
      { step: "Step 1", title: "Arrival & Registration", description: "Guests arrive at the Jet Ski activity point. After arrival, participants complete a quick registration process and meet the professional water sports instructor who manages the activity." },
      { step: "Step 2", title: "Safety Briefing & Equipment", description: "Before starting the ride, the instructor gives a safety briefing explaining how to control the jet ski, riding posture, and safety rules. Participants are provided with a life jacket and guidance." },
      { step: "Step 3", title: "Start the Jet Ski Ride", description: "After the briefing, the jet ski ride begins. Participants ride the high-speed water scooter across the beautiful waters with the instructor nearby." },
      { step: "Step 4", title: "Enjoy the Adventure Experience", description: "During the ride, guests experience the excitement of speeding across the waves while enjoying the stunning coastal views of the Andaman Sea." },
      { step: "Step 5", title: "Return & Relax", description: "After completing the jet ski ride, participants return to the beach safely. Guests can relax, take photos, and enjoy the beautiful surroundings." }
    ],
    inclusions: [
      "Jet ski ride with professional instructor",
      "Safety life jacket",
      "Basic safety briefing"
    ],
    exclusions: [
      "Hotel transfers",
      "Personal expenses",
      "Food and beverages",
      "Photography charges"
    ],
    cancellation: defaultCancellation,
    terms: defaultTerms,
  },
  snorkeling: {
    id: "snorkeling",
    title: "Snorkeling in Andaman",
    subtitle: "Explore coral reefs and marine life in crystal-clear waters.",
    description: "Experience snorkeling in Andaman at breathtaking spots like Elephant Beach on Havelock Island and Jolly Buoy. Explore vibrant coral reefs, amazing marine life, and crystal-clear waters with guided snorkeling tours perfectly suited for all ages.",
    highlights: [
      "Explore untouched coral reefs",
      "Swim alongside tropical marine life",
      "Guided by professional snorkel experts",
      "Safety gear included for non-swimmers"
    ],
    itinerary: [
      { step: "Step 1", title: "Arrival at Snorkeling Point", description: "Guests arrive at the pristine beach setup where they meet the snorkeling guides and fill out a quick wellness form." },
      { step: "Step 2", title: "Gear & Briefing", description: "Everyone is fitted with sterilized masks, snorkels, and life jackets. Guides explain how to breathe correctly and use the equipment in shallow waters." },
      { step: "Step 3", title: "The Snorkel Tour", description: "Float out over the stunning coral reefs. Depending on your package, a guide will pull a floatation ring to bring you directly to the best coral patches." },
      { step: "Step 4", title: "Underwater Viewing", description: "Witness incredible marine biodiversity including clownfish, sea cucumbers, parrotfish, and majestic sea turtles." },
      { step: "Step 5", title: "Return to Shore", description: "Return to the beach site to relax. Purchase underwater photos or simply enjoy a quiet rest on the white sands." }
    ],
    inclusions: [
      "Professional snorkeling guide",
      "Mask, Snorkel Tube, and Life Jacket",
      "Pre-activity training session"
    ],
    exclusions: [
      "Hotel transfers",
      "Personal expenses",
      "Food and beverages",
      "Underwater GoPro footage (unless specified in package)"
    ],
    cancellation: defaultCancellation,
    terms: defaultTerms,
  },
  seawalk: {
    id: "seawalk",
    title: "Sea Walk in Andaman",
    subtitle: "Walk on the ocean floor among schools of colorful fish.",
    description: "Enjoy sea walk in Andaman at North Bay Island or Elephant Beach. Walk on the ocean floor and explore colorful coral reefs and marine life safely with specially designed underwater helmets. You don't even need to know how to swim!",
    highlights: [
      "Walk directly on the ocean floor",
      "No swimming or diving skills required",
      "Feed fish from your own hands",
      "Immersive safe underwater helmet"
    ],
    itinerary: [
      { step: "Step 1", title: "Transfer to Pontoon", description: "Guests take a short boat transfer from the beach to the main Sea Walk pontoon stationed out in the sea." },
      { step: "Step 2", title: "Suiting Up", description: "Guides provide a brief orientation. The specially designed 35kg helmet (which feels weightless underwater) is gently lowered onto your shoulders." },
      { step: "Step 3", title: "Descending the Ladder", description: "Step-by-step, you descend down a ladder into the tropical waters accompanied by professional divers." },
      { step: "Step 4", title: "The Walk", description: "Walk safely over the sandy sea bed. Fish will swarm around you. You'll be handed fish food to attract schools of colorful reef fish right to your hands." },
      { step: "Step 5", title: "Ascent & Departure", description: "After 20 to 30 minutes, you will ascend back to the pontoon, remove your helmet, and return to the beach." }
    ],
    inclusions: [
      "Sea Walk underwater helmet apparatus",
      "Professional diving guides underwater",
      "Boat transfer to the pontoon"
    ],
    exclusions: [
      "Hotel transfers",
      "Underwater Photography & Video",
      "Towels and change rooms (available locally)"
    ],
    cancellation: defaultCancellation,
    terms: defaultTerms,
  },
  scuba: {
    id: "scuba",
    title: "Scuba Diving in Andaman",
    subtitle: "The ultimate underwater adventure in the Andaman Islands.",
    description: "Experience scuba diving in Andaman and explore the stunning underwater world of coral reefs and marine life. Enjoy safe diving at Havelock Island, Neil Island, or Port Blair with internationally certified PADI/SSI instructors.",
    highlights: [
      "Discover extreme depths and rich coral life",
      "PADI/SSI Certified Instructors",
      "Suitable for swimmers and non-swimmers",
      "High visibility tropical waters year-round"
    ],
    itinerary: [
      { step: "Step 1", title: "Meet the Dive Master", description: "Arrive at the dive center where you will complete basic medical forms and meet your certified Dive Master." },
      { step: "Step 2", title: "Theory and Confined Water", description: "Learn hand signals, ear equalization, and basic breathing techniques. Practice these skills in shallow waist-deep water first." },
      { step: "Step 3", title: "The Descent", description: "Once comfortable, the instructor will hold your tank from behind as you slowly descend along the beautiful reef, maximizing safety." },
      { step: "Step 4", title: "Exploring the Deep", description: "Glide through the ocean exploring canyons, coral patches, and finding exotic fish, octopuses, or sea turtles for up to 45 minutes." },
      { step: "Step 5", title: "Surfacing", description: "Perform a safe, gradual ascent. Return to the beach or dive boat and review your underwater footage." }
    ],
    inclusions: [
      "Complete Scuba diving gear (wetsuit, regulator, BCD, fins, mask)",
      "Dedicated 1-on-1 PADI/SSI dive instructor",
      "Basic theory and shallow water training"
    ],
    exclusions: [
      "Hotel transfers",
      "GoPro photography and videography (charged extra)",
      "Meals and refreshments"
    ],
    cancellation: defaultCancellation,
    terms: defaultTerms,
  },
  parasailing: {
    id: "parasailing",
    title: "Parasailing in Andaman",
    subtitle: "Fly high above the crystal-clear sea for breathtaking views.",
    description: "Enjoy parasailing in Andaman and fly high above the crystal-clear sea for breathtaking aerial views of the islands. Experience this thrilling water activity at Havelock Island, North Bay, and Port Blair with professional guides.",
    highlights: [
      "Soar up to 200 feet above the ocean",
      "Breathtaking 360-degree views of coral reefs and islands",
      "Advanced hydraulic winch boat for smooth take-offs",
      "Thrilling option to dip into the water"
    ],
    itinerary: [
      { step: "Step 1", title: "Boarding the Winch Boat", description: "Guests board a specialized parasailing boat. The massive colorful parachute is deployed into the wind." },
      { step: "Step 2", title: "Strapping In", description: "You are securely strapped into a comfortable seating harness by our expert crew." },
      { step: "Step 3", title: "Take Off", description: "As the boat accelerates, the winch slowly releases your line, lifting you gently off the deck and into the sky." },
      { step: "Step 4", title: "The Flight", description: "Enjoy several minutes of pure tranquility and spectacular views from high above. If requested, the captain may perform a 'dip' where you skim the water surface." },
      { step: "Step 5", title: "Smooth Landing", description: "The winch pulls you back in, bringing you to a gentle, dry landing right on the back of the boat." }
    ],
    inclusions: [
      "Parasailing flight via hydraulic winch boat",
      "Safety harness and life jackets",
      "Certified boat crew and instructors"
    ],
    exclusions: [
      "Wait-time refreshments",
      "Photography/Videography",
      "Hotel transfers"
    ],
    cancellation: defaultCancellation,
    terms: defaultTerms,
  },
  kayaking: {
    id: "kayaking",
    title: "Kayaking in Andaman Islands",
    subtitle: "Mangrove & Night Kayaking Experience.",
    description: "Experience kayaking in the Andaman Islands through peaceful mangrove forests and crystal-clear waters. Enjoy exciting day excursions or supernatural night kayaking with bioluminescence at Havelock Island with trained guides.",
    highlights: [
      "Navigate incredibly dense mangrove creeks",
      "Observe rare bird species and marine life",
      "No engine noise – pure, tranquil nature",
      "Witness glowing bioluminescence at night (seasonal)"
    ],
    itinerary: [
      { step: "Step 1", title: "Gather at Launch Site", description: "Meet your kayaking guide at the launch site. Receive your paddle and life jacket." },
      { step: "Step 2", title: "Paddling Basics", description: "A quick 10-minute briefing on how to steer, paddle effectively, and balance your kayak in current." },
      { step: "Step 3", title: "Into the Mangroves", description: "Paddle out of the open water and enter the narrow, shaded creeks of the dense mangrove forests where motorized boats cannot go." },
      { step: "Step 4", title: "Wildlife Spotting", description: "The guide will point out interesting flora, kingfishers, and occasionally small reptiles. Enjoy the absolute serene quiet." },
      { step: "Step 5", title: "Return Journey", description: "Paddle your way safely back to the starting point feeling refreshed and deeply connected with nature." }
    ],
    inclusions: [
      "Single or double kayak",
      "Oars and life jackets",
      "Expert local nature guide"
    ],
    exclusions: [
      "Hotel transfers",
      "Snacks and water bottles",
      "Waterproof equipment/bags for cameras"
    ],
    cancellation: defaultCancellation,
    terms: defaultTerms,
  }
};
