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
      "A quieter room for solo guests, couples, and students who want a calm, settled atmosphere.",
    description:
      "The Garden Room is one of the softer spaces in the house — comfortable, light-filled, and easy to live in for both shorter visits and longer stays.",
    longDescription:
      "This room is designed for guests who want the feeling of retreat without losing the comfort of everyday living. It feels gentle, practical, and settled, making it well suited to reading, studying, resting, or simply having a quieter base in Cape Town.",
    narrative:
      "The Garden Room suits guests who want peace, privacy, and a more grounded rhythm. It is especially strong for solo guests, students, and anyone looking for a room that feels simple, warm, and cared for.",
    priceFrom: 480,
    guests: 2,
    size: "18 m²",
    bed: "Queen bed",
    stayTypes: ["Short stay", "Long stay", "Student-friendly"],
    idealFor: "Solo guests, students, quieter stays",
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
      "Discounted on-site laundry for in-house guests",
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
    name: "Courtyard Suite",
    slug: "courtyard-suite",
    tagline:
      "A roomier option for couples, longer stays, and guests who want more breathing room.",
    description:
      "The Courtyard Suite has a broader sense of ease — more room to settle, a more generous layout, and a stronger feeling of being able to stay comfortably over time.",
    longDescription:
      "This suite is for guests who want a room with a little more spatial ease and flexibility. It works well for couples, guests staying a little longer, and anyone who values a more expansive room while still enjoying the hosted-home atmosphere.",
    narrative:
      "The Courtyard Suite balances a boutique feel with everyday practicality. It is one of the strongest options for guests who want the home comfort of the house but need more room to settle into a longer rhythm.",
    priceFrom: 650,
    guests: 3,
    size: "24 m²",
    bed: "King bed",
    stayTypes: ["Short stay", "Long stay", "Pet-friendly"],
    idealFor: "Couples, longer stays, guests wanting more space",
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
      "Discounted laundry available for guests staying in-house",
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
      "A flexible room for students, independent guests, and practical longer-stay living.",
    description:
      "The Studio Room is built around versatility — clean, comfortable, and easy to use as a base for study, work, or day-to-day living.",
    longDescription:
      "This room is shaped around practical comfort. It is especially suitable for guests who need a reliable, adaptable space with a more independent feel, while still being part of the hosted-home atmosphere.",
    narrative:
      "The Studio Room is for guests who appreciate clarity and usefulness. It is polished without being formal, and flexible enough for students, remote workers, and guests who want a room that supports routine.",
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
    text: "Longer stays include weekly cleaning support so the room continues to feel fresh, cared for, and easy to live in.",
  },
  {
    title: "Fresh linen support",
    text: "Linen care and sheet changes help the stay feel more thoughtful and more comfortable over time.",
  },
  {
    title: "Student-friendly living",
    text: "The house works well for students who want a practical, calmer, and more supportive living setup.",
  },
  {
    title: "Pet-friendly approval",
    text: "Approved pets are welcome, which makes the stay more flexible for guests travelling or living with animals.",
  },
  {
    title: "Discounted guest laundry",
    text: "Guests receive discounted use of the on-site laundry, which becomes especially valuable for longer stays.",
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
