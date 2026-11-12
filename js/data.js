// Central class catalogue for the Disability Network homepage.
// Add or edit classes here; the homepage renders the cards automatically.
export const classes = [
  {
    id: "fitness-1",
    category: "Fitness",
    title: "5-Minute Seated Cardio Blast",
    instructor: "Twyla Teitzel",
    instructorImage: "assets/images/community-1.jpg",
    image: "assets/images/community-1.jpg",
    date: "2026-11-11",
    time: "16:00",
    duration: 5,
    video: false,
    status: "upcoming"
  },
  {
    id: "fitness-2",
    category: "Fitness",
    title: "Ab Workout to Improve Balance and Prevent Pain (20-min class)",
    instructor: "Twyla Teitzel",
    instructorImage: "assets/images/community-1.jpg",
    image: "assets/images/community-2.jpg",
    date: "2026-11-11",
    time: "16:30",
    duration: 20,
    video: true,
    status: "upcoming"
  },
  {
    id: "fitness-3",
    category: "Fitness",
    title: "Resistance Band Workout",
    instructor: "Twyla Teitzel",
    instructorImage: "assets/images/community-1.jpg",
    image: "assets/images/community-3.jpg",
    date: "2026-11-11",
    time: "18:00",
    duration: 30,
    video: false,
    status: "upcoming"
  },
  {
    id: "fitness-4",
    category: "Fitness",
    title: "Relax & Recharge: Post-Workout Recovery Stretches",
    instructor: "Stacy Robinson",
    instructorImage: "assets/images/community-2.jpg",
    image: "assets/images/community-2.jpg",
    date: "2026-11-11",
    time: "23:00",
    duration: 20,
    video: true,
    status: "upcoming"
  },
  {
    id: "fitness-5",
    category: "Fitness",
    title: "Gentle Exercises for Knee Pain (20-min class)",
    instructor: "Twyla Teitzel",
    instructorImage: "assets/images/community-1.jpg",
    image: "assets/images/community-3.jpg",
    date: "2026-11-12",
    time: "14:00",
    duration: 20,
    video: false,
    status: "upcoming"
  },
  {
    id: "technology-1",
    category: "Technology",
    title: "Getting Comfortable with Your Smartphone",
    instructor: "Stacy Robinson",
    instructorImage: "assets/images/community-2.jpg",
    image: "assets/images/community-2.jpg",
    date: "2026-11-12",
    time: "15:00",
    duration: 45,
    video: true,
    status: "upcoming"
  },
  {
    id: "wellness-1",
    category: "Health & Wellness",
    title: "Everyday Wellness and Healthy Habits",
    instructor: "Twyla Teitzel",
    instructorImage: "assets/images/community-1.jpg",
    image: "assets/images/community-1.jpg",
    date: "2026-11-13",
    time: "13:00",
    duration: 30,
    video: false,
    status: "upcoming"
  }
];

export const learningCategories = [
  "Fitness",
  "Technology",
  "Arts & Creative",
  "Food",
  "Health & Wellness",
  "Medicare",
  "Money & Jobs",
  "Lifestyle",
  "Travel & History",
  "Community",
  "Other Languages"
];


// Featured series content. Update this object to change the homepage feature.
export const featuredSeries = {
  badge: "FEATURED PROGRAM",
  title: "Discover More with Disability Network",
  tag: "COMMUNITY CONNECTION",
  description:
    "Explore programs, community activities and opportunities designed to help people with disabilities connect, learn and participate.",
  image: "assets/images/community-3.jpg",
  imageAlt: "Disability Network community members connecting and sharing an activity",
  buttonText: "Explore Programs",
  href: "about.html"
};


/**
 * Featured Disability Network series cards.
 * Replace the temporary image paths with approved series photography when available.
 * Update href values when dedicated series detail pages are created.
 */
export const featuredSeriesCards = [
  {
    id: "independent-living",
    title: "Independent Living Resources",
    tag: "PLAN AHEAD",
    description: "Explore resources and practical guidance that support greater independence at home and in the community.",
    image: "assets/images/community-1.jpg",
    imageAlt: "Disability Network team member in a community support setting",
    buttonText: "View Series",
    href: "#contact"
  },
  {
    id: "assistive-technology",
    title: "Assistive Technology",
    tag: "LIVE WELL",
    description: "Discover accessible technology, tools and everyday solutions that can make daily activities easier.",
    image: "assets/images/community-2.jpg",
    imageAlt: "Disability Network team member representing accessible community support",
    buttonText: "View Series",
    href: "#contact"
  },
  {
    id: "disability-rights",
    title: "Disability Rights & Advocacy",
    tag: "KNOW YOUR RIGHTS",
    description: "Learn about disability rights, self-advocacy and ways to take part in an inclusive community.",
    image: "assets/images/community-3.jpg",
    imageAlt: "Disability Network team member representing advocacy and community inclusion",
    buttonText: "View Series",
    href: "#contact"
  }
];
