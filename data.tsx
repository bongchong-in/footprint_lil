import React from 'react';
import { 
  Zap, Star, Compass, Heart, Mail, Instagram, 
  Battery, MapPin, Gamepad2, Plane, Camera, 
  Coffee, Shirt, Music, Activity
} from 'lucide-react';
import { Attribute, GalleryItem, HeroStatCard } from './types';

// --- Global Settings ---
export const GLOBAL = {
  statusText: "CURRENT STATUS: ONLINE 🟢",
  fullTitle: "Footprints Lil - Explorer Portfolio",
  homeLink: "/"
};

// --- Navigation ---
export const NAV = {
  logoChar: "F",
  logoText: "footprints_lil",
  ctaBtn: {
    text: "Collab",
    link: "https://ig.me/m/footprints_lil"
  }
};

// --- Hero Section ---
export const HERO = {
  level: 6,
  titlePrefix: "LEVEL",
  titleSuffix: "UNLOCKED",
  description: "Documenting the main quest: Growing up, exploring the world, and looking cool doing it.",
  
  // Hero Avatar
  avatar: {
    src: "https://raw.githubusercontent.com/bongchong-in/footprint_lil/refs/heads/main/images/justme.jpg",
    alt: "The Explorer",
    stickerText: "Vibe Check"
  },

  // Stat Cards displayed in Hero
  stats: [
    {
      label: "Class",
      value: "Explorer",
      icon: <Compass size={20} />,
      bgClass: "bg-blue-100",
      textClass: "text-blue-600"
    },
    {
      label: "XP to Lvl 7",
      value: "85%",
      icon: <Zap size={20} />,
      bgClass: "bg-yellow-100",
      textClass: "text-yellow-600"
    }
  ] as HeroStatCard[]
};

// --- Skills / Attributes Section ---
export const SKILLS = {
  title: "Skill Tree",
  subtitle: "Power Lvl",
  subtitleIcon: <Battery size={16} className="text-green-500"/>,
  
  attributes: [
    { 
      label: "Style", 
      value: 90, 
      color: "bg-orange-400", 
      icon: <Star size={16} className="text-orange-600"/> 
    },
    { 
      label: "Chaos", 
      value: 75, 
      color: "bg-red-400", 
      icon: <Zap size={16} className="text-red-600"/> 
    },
    { 
      label: "Charm", 
      value: 100, 
      color: "bg-teal-400", 
      icon: <Heart size={16} className="text-teal-600"/> 
    },
    { 
      label: "Creativity", 
      value: 85, 
      color: "bg-purple-400", 
      icon: <Compass size={16} className="text-purple-600"/> 
    }
  ] as Attribute[]
};

// --- Gallery / Quest Log ---
export const GALLERY = {
  title: "Quest Log",
  loadMoreText: "Load More Memories",
  viewText: "View in IG",
  
  items: [
    {
      id: 1,
      type: "Travel",
      title: "Travel Vibes",
      img: "https://raw.githubusercontent.com/bongchong-in/footprint_lil/refs/heads/main/images/travel.jpg",
      desc: "Rolling into new adventures. Airport mode activated.",
      tags: ["#travel", "#vacay"],
      link: "https://www.instagram.com/footprints_lil/"
    },
    {
      id: 2,
      type: "Lifestyle",
      title: "Fridge Patrol",
      img: "https://raw.githubusercontent.com/bongchong-in/footprint_lil/refs/heads/main/images/IMG20250517122412.jpg",
      desc: "Scouting for snacks. The inventory is empty, but the style is fresh.",
      tags: ["#shopping", "#cool"],
      link: "https://www.instagram.com/footprints_lil/"
    },
    {
      id: 3,
      type: "Academics",
      title: "Brain Gains",
      img: "https://raw.githubusercontent.com/bongchong-in/footprint_lil/refs/heads/main/images/Studytime.jpg",
      desc: "Leveling up the INT stat. Homework grind in progress.",
      tags: ["#study", "#focus"],
      link: "https://www.instagram.com/footprints_lil/"
    },
    {
      id: 4,
      type: "Candid",
      title: "Balcony Watch",
      img: "https://raw.githubusercontent.com/bongchong-in/footprint_lil/refs/heads/main/images/Thinker.jpg",
      desc: "Deep thoughts while the city sleeps. Wearing the colors of the day.",
      tags: ["#observer", "#colors"],
      link: "https://www.instagram.com/footprints_lil/"
    },
    {
      id: 5,
      type: "Foodie",
      title: "The Royal Feast",
      img: "https://raw.githubusercontent.com/bongchong-in/footprint_lil/refs/heads/main/images/food.jpg",
      desc: "Traditional flavors on a brass plate. Fish, rice, and fresh mangoes. 🥭",
      tags: ["#culture", "#delicious"],
      link: "https://www.instagram.com/footprints_lil/"
    },
    {
      id: 6,
      type: "Travel",
      title: "Window Seat",
      img: "https://raw.githubusercontent.com/bongchong-in/footprint_lil/refs/heads/main/images/meinblack.jpg",
      desc: "Watching the world blur by. Glasses on, cool mode activated.",
      tags: ["#journey", "#style"],
      link: "https://www.instagram.com/footprints_lil/"
    },
    {
      id: 7,
      type: "Lifestyle",
      title: "Mall Musings",
      img: "https://raw.githubusercontent.com/bongchong-in/footprint_lil/refs/heads/main/images/somuch.jpg",
      desc: "Taking a breather amidst the bright lights. So much to see, so little time.",
      tags: ["#pensive", "#chill"],
      link: "https://www.instagram.com/footprints_lil/"
    },
    {
      id: 8,
      type: "Nature",
      title: "River Discovery",
      img: "https://raw.githubusercontent.com/bongchong-in/footprint_lil/refs/heads/main/images/water.jpg",
      desc: "Testing the waters. Connecting with the elements in the great outdoors.",
      tags: ["#nature", "#explore"],
      link: "https://www.instagram.com/footprints_lil/"
    }
  ] as GalleryItem[]
};

// --- Contact Section ---
export const CONTACT = {
  title: "Open for Quests",
  description: "Brands, collaborations, or just saying hi. Mom manages footprints_lil, but I do the heavy lifting (smiling).",
  icon: <Mail size={36} />,
  
  buttons: [
    {
      text: "DM on Gram",
      icon: <Instagram size={18} />,
      link: "https://ig.me/m/footprints_lil",
      primary: false // White button
    }
    // Add more buttons here if needed
  ]
};

// --- Footer ---
export const FOOTER = {
  logoChar: "F",
  title: "footprints_lil",
  copyright: "© 2025 footprints_lil.",
  
  managedBy: {
    text: "@her.sphere",
    link: "https://www.instagram.com/her.sphere"
  },
  
  credits: {
    prefix: "Designed, gifted and supported by ",
    name: "MxS Studio",
    link: "https://mxsstudio.edgentiq.com",
    suffix: " with ❤️"
  }
};

// --- Modals ---
export const MODALS = {
  styleArchive: {
    title: "Style Archive",
    headerIcon: <Instagram size={18} />,
    embedUrl: "https://www.instagram.com/reel/DMzVnY0zLek/embed"
  }
};
