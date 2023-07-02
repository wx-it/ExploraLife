interface FeaturedContent {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const featuredContent: FeaturedContent[] = [
  {
    id: 1,
    title: "Discover New Places",
    description:
      "Explore breathtaking destinations around the world and create unforgettable memories.",
    image: "https://source.unsplash.com/featured/?travel",
    buttonText: "Learn More",
    buttonLink: "/explore",
  },
  {
    id: 2,
    title: "Unleash Your Creativity",
    description:
      "Unlock your creative potential with our innovative tools and resources.",
    image: "https://source.unsplash.com/featured/?creativity",
    buttonText: "Get Started",
    buttonLink: "/creativity",
  },
  {
    id: 3,
    title: "Connect with Like-minded Individuals",
    description:
      "Join our community of passionate individuals and share your interests with others.",
    image: "https://source.unsplash.com/featured/?community",
    buttonText: "Join Now",
    buttonLink: "/community",
  },
  {
    id: 4,
    title: "Boost Your Productivity",
    description:
      "Discover effective strategies and tools to enhance your productivity and achieve your goals.",
    image: "https://source.unsplash.com/featured/?productivity",
    buttonText: "Explore",
    buttonLink: "/productivity",
  },
  {
    id: 5,
    title: "Learn a New Language",
    description:
      "Embark on a language-learning journey and expand your cultural horizons.",
    image: "https://source.unsplash.com/featured/?language",
    buttonText: "Start Learning",
    buttonLink: "/language",
  },
  {
    id: 6,
    title: "Stay Fit and Healthy",
    description:
      "Discover fitness routines, nutritious recipes, and wellness tips to maintain a healthy lifestyle.",
    image: "https://source.unsplash.com/featured/?fitness",
    buttonText: "Get Active",
    buttonLink: "/fitness",
  },
  {
    id: 7,
    title: "Master the Art of Photography",
    description:
      "Capture captivating moments and master the techniques of photography.",
    image: "https://source.unsplash.com/featured/?photography",
    buttonText: "Get Inspired",
    buttonLink: "/photography",
  },
  {
    id: 8,
    title: "Learn to Play a Musical Instrument",
    description:
      "Unleash your musical talent and embark on a melodious journey of learning an instrument.",
    image: "https://source.unsplash.com/featured/?music",
    buttonText: "Start Playing",
    buttonLink: "/music",
  },
  {
    id: 9,
    title: "Cook Delicious Recipes",
    description:
      "Delight your taste buds with mouthwatering recipes and culinary adventures.",
    image: "https://source.unsplash.com/featured/?cooking",
    buttonText: "Try Recipes",
    buttonLink: "/cooking",
  },
  {
    id: 10,
    title: "Master the Art of Calligraphy",
    description:
      "Learn the timeless art of calligraphy and express your creativity through beautiful lettering.",
    image: "https://source.unsplash.com/featured/?calligraphy",
    buttonText: "Begin Writing",
    buttonLink: "/calligraphy",
  },
];

export default featuredContent;
