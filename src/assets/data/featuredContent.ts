interface FeaturedContent {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const featuredContent: FeaturedContent[] = [
  {
    title: "Discover New Places",
    description:
      "Explore breathtaking destinations around the world and create unforgettable memories.",
    image: "path/to/discover-places.jpg",
    buttonText: "Learn More",
    buttonLink: "/explore",
  },
  {
    title: "Unleash Your Creativity",
    description:
      "Unlock your creative potential with our innovative tools and resources.",
    image: "path/to/unleash-creativity.jpg",
    buttonText: "Get Started",
    buttonLink: "/creativity",
  },
  {
    title: "Connect with Like-minded Individuals",
    description:
      "Join our community of passionate individuals and share your interests with others.",
    image: "path/to/connect-individuals.jpg",
    buttonText: "Join Now",
    buttonLink: "/community",
  },
  {
    title: "Boost Your Productivity",
    description:
      "Discover effective strategies and tools to enhance your productivity and achieve your goals.",
    image: "path/to/boost-productivity.jpg",
    buttonText: "Explore",
    buttonLink: "/productivity",
  },
  {
    title: "Learn a New Language",
    description:
      "Embark on a language-learning journey and expand your cultural horizons.",
    image: "path/to/learn-language.jpg",
    buttonText: "Start Learning",
    buttonLink: "/language",
  },
  {
    title: "Stay Fit and Healthy",
    description:
      "Discover fitness routines, nutritious recipes, and wellness tips to maintain a healthy lifestyle.",
    image: "path/to/stay-fit.jpg",
    buttonText: "Get Active",
    buttonLink: "/fitness",
  },
  {
    title: "Master the Art of Photography",
    description:
      "Capture captivating moments and master the techniques of photography.",
    image: "path/to/photography.jpg",
    buttonText: "Get Inspired",
    buttonLink: "/photography",
  },
  {
    title: "Learn to Play a Musical Instrument",
    description:
      "Unleash your musical talent and embark on a melodious journey of learning an instrument.",
    image: "path/to/learn-instrument.jpg",
    buttonText: "Start Playing",
    buttonLink: "/music",
  },
  {
    title: "Cook Delicious Recipes",
    description:
      "Delight your taste buds with mouthwatering recipes and culinary adventures.",
    image: "path/to/cook-recipes.jpg",
    buttonText: "Try Recipes",
    buttonLink: "/cooking",
  },
  {
    title: "Master the Art of Calligraphy",
    description:
      "Learn the timeless art of calligraphy and express your creativity through beautiful lettering.",
    image: "path/to/calligraphy.jpg",
    buttonText: "Begin Writing",
    buttonLink: "/calligraphy",
  },
];

export default featuredContent;
