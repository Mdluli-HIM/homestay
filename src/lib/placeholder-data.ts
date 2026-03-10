export type Room = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  narrative: string;
  priceFrom: number;
  guests: number;
  size: string;
  bed: string;
  stayTypes: string[];
  idealFor: string;
  amenities: string[];
  atmosphere: string[];
  sharedLiving: string[];
  careNotes: string[];
  image: string;
  gallery: string[];
};

export const rooms: Room[] = [
  {
    id: "room-01",
    name: "Garden Room",
    slug: "garden-room",
    tagline:
      "Soft, calm, and ideal for quiet short stays or focused student living.",
    description:
      "A warm room with natural light, comfortable bedding, simple storage, and a peaceful atmosphere for solo guests or couples who want a grounded home-like stay.",
    longDescription:
      "This room is designed for guests who want the feeling of retreat without losing the comfort of everyday living. It feels gentle, quiet, and settled — ideal for reading, studying, resting, or simply staying in a space that feels thoughtfully cared for.",
    narrative:
      "The Garden Room is one of the calmest expressions of the house — light-filled, modestly luxurious, and deeply home-oriented. It suits guests who want peace, privacy, and a soft visual atmosphere.",
    priceFrom: 480,
    guests: 2,
    size: "18 m²",
    bed: "Queen bed",
    stayTypes: ["Short stay", "Long stay", "Student-friendly"],
    idealFor: "Solo guests, students, quiet stays",
    amenities: [
      "Natural light",
      "Storage space",
      "Wi-Fi",
      "Shared kitchen access",
      "Weekly cleaning",
      "Fresh linen support",
    ],
    atmosphere: ["Quiet", "Soft daylight", "Warm textures", "Focused living"],
    sharedLiving: [
      "Access to the shared kitchen and dishes",
      "Comfortable use of communal home spaces",
      "Bathroom access as part of the hosted stay setup",
      "Laundry discount available for in-house guests",
    ],
    careNotes: [
      "Weekly cleaning included for longer stays",
      "Fresh sheets changed regularly",
      "Hosts live on site for a more supported stay",
      "Suitable for both short visits and extended living",
    ],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "room-02",
    name: "Family Suite",
    slug: "family-suite",
    tagline:
      "Roomier and more flexible for couples, small families, or longer stays.",
    description:
      "Designed for guests who want more space and a more settled experience, with a practical layout that works well for extended stays and shared living.",
    longDescription:
      "The Family Suite is for guests who want a room with a broader sense of ease — more breathing room, more flexibility, and a stronger feeling of being able to fully settle in. It balances boutique presentation with practical day-to-day living.",
    narrative:
      "This room feels generous and grounded. It is especially suitable for guests who are staying longer, sharing the room with another person, or simply prefer a more expansive layout with a premium domestic feel.",
    priceFrom: 650,
    guests: 3,
    size: "24 m²",
    bed: "King bed",
    stayTypes: ["Short stay", "Long stay", "Pet-friendly"],
    idealFor: "Couples, small families, longer stays",
    amenities: [
      "Extra floor space",
      "Pet-friendly option",
      "Wi-Fi",
      "Shared kitchen access",
      "Weekly cleaning",
      "Laundry discount",
    ],
    atmosphere: ["Spacious", "Settled", "Flexible", "Comfort-led"],
    sharedLiving: [
      "Shared kitchen and dishes available",
      "Easy access to core home amenities",
      "Hosted environment with a lived-in sense of comfort",
      "Laundry service benefit for guests staying in-house",
    ],
    careNotes: [
      "Weekly cleaning support for longer stays",
      "Fresh linen care included",
      "Pet-friendly by approval",
      "Works well for short stays and more settled bookings",
    ],
    image:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "room-03",
    name: "Studio Room",
    slug: "studio-room",
    tagline:
      "A practical premium option for students, workers, and independent guests.",
    description:
      "A balanced stay with comfort, clean design, and easy access to the shared home amenities, perfect for guests who want flexibility and value.",
    longDescription:
      "The Studio Room is shaped around versatility. It is clean, efficient, and comfortable, but still carries the warmth of the larger home. It works especially well for guests who need a reliable base for study, work, or day-to-day living.",
    narrative:
      "This room is ideal for guests who appreciate practical quality — a room that feels polished and cared for, while staying adaptable enough for longer living or more independent routines.",
    priceFrom: 540,
    guests: 2,
    size: "20 m²",
    bed: "Double bed",
    stayTypes: ["Student-friendly", "Long stay", "Pet-friendly"],
    idealFor: "Students, remote workers, flexible stays",
    amenities: [
      "Desk-friendly layout",
      "Wi-Fi",
      "Shared kitchen access",
      "Pet-friendly option",
      "Laundry discount",
      "Weekly cleaning",
    ],
    atmosphere: ["Practical", "Independent", "Clean-lined", "Adaptable"],
    sharedLiving: [
      "Kitchen and dishes shared as part of the home setup",
      "Communal bathroom and household amenity access",
      "Hosted environment with relaxed day-to-day usability",
      "Laundry service available at a discounted guest rate",
    ],
    careNotes: [
      "Weekly cleaning included for longer bookings",
      "Fresh linen support provided",
      "Suitable for student-friendly living",
      "Pet-friendly by approval",
    ],
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const stayHighlights = [
  {
    title: "Shared home comfort",
    text: "Guests enjoy access to the kitchen, dishes, bathroom, and everyday home amenities in a relaxed hosted environment.",
  },
  {
    title: "Weekly cleaning",
    text: "Longer stays include weekly cleaning support, freshening the space and helping guests feel settled and cared for.",
  },
  {
    title: "Fresh sheets & care",
    text: "Linen changes and basic housekeeping support keep the stay feeling clean, calm, and thoughtfully managed.",
  },
  {
    title: "Student & pet friendly",
    text: "The accommodation is flexible enough for students, practical for longer living, and welcoming for approved pets.",
  },
  {
    title: "On-site laundry",
    text: "Guests get discounted access to the on-site laundry, while the wider community can also use the service.",
  },
  {
    title: "Short or long stays",
    text: "Whether guests need a few nights or a longer home base, the stay is structured to support both.",
  },
];

export const roomFilters = [
  { label: "All rooms", value: "all" },
  { label: "Short stay", value: "short stay" },
  { label: "Long stay", value: "long stay" },
  { label: "Student-friendly", value: "student-friendly" },
  { label: "Pet-friendly", value: "pet-friendly" },
];

export function getRoomBySlug(slug: string) {
  return rooms.find((room) => room.slug === slug);
}

export function getRelatedRooms(slug: string) {
  return rooms.filter((room) => room.slug !== slug).slice(0, 2);
}
