export type Article = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

export type CategorizedArticles = {
  lifestyleArticles: Article[];
  travelArticles: Article[];
  wellnessArticles: Article[];
  technologyArticles: Article[];
  cultureArticles: Article[];
};


const articlesData: CategorizedArticles = {
  lifestyleArticles: [
    {
      id: "lifestyle1",
      title: "10 Ways to Practice Mindfulness in Daily Life",
      description:
        "Discover simple and effective ways to incorporate mindfulness into your daily routine.",
      imageUrl: "/images/articles/mindfulness.jpg",
    },
    {
      id: "lifestyle2",
      title: "The Art of Journaling: Unlocking Your Creativity",
      description:
        "Explore the power of journaling and how it can enhance your creative expression.",
      imageUrl: "/images/articles/journaling.jpg",
    },
    {
      id: "lifestyle3",
      title: "Embracing Minimalism: Finding Joy in Simplicity",
      description:
        "Learn how living with less can bring more clarity, peace, and fulfillment to your life.",
      imageUrl: "/images/articles/minimal.jpg",
    },
  ],
  travelArticles: [
    {
      id: "travel1",
      title: "Exploring Hidden Gems: Off-the-Beaten-Path Destinations",
      description:
        "Uncover lesser-known travel destinations that offer unique experiences and breathtaking landscapes.",
      imageUrl: "/images/articles/explore.jpg",
    },
    {
      id: "travel2",
      title: "A Food Lover's Guide to Culinary Adventures",
      description:
        "Embark on a gastronomic journey as we explore the world's most delicious cuisines and culinary traditions.",
      imageUrl: "/images/articles/culinary.jpg",
    },
    {
      id: "travel3",
      title: "Sustainable Travel: Preserving the Planet While Exploring It",
      description:
        "Discover eco-friendly travel tips and responsible tourism practices to minimize your environmental impact.",
      imageUrl: "/images/articles/travel.jpg",
    },
  ],
  wellnessArticles: [
    {
      id: "wellness1",
      title:
        "Boost Your Energy: Effective Strategies for a Healthier Lifestyle",
      description:
        "Learn practical tips for increasing your energy levels and maintaining a balanced and healthy lifestyle.",
      imageUrl: "/images/articles/lifestyle.jpg",
    },
    {
      id: "wellness2",
      title: "The Power of Meditation: Cultivating Inner Peace and Clarity",
      description:
        "Explore the benefits of meditation and how it can enhance your mental well-being and overall quality of life.",
      imageUrl: "/images/articles/mindfulness.jpg",
    },
    {
      id: "wellness3",
      title: "Healthy Habits for a Strong Body and Mind",
      description:
        "Discover daily habits and practices that contribute to physical and mental strength, resilience, and vitality.",
      imageUrl: "/images/articles/healthy-habits.jpg",
    },
  ],
  technologyArticles: [
    {
      id: "technology1",
      title:
        "The Future of Artificial Intelligence: Transforming Industries and Everyday Life",
      description:
        "Explore the latest advancements in AI and how they are shaping various aspects of our society.",
      imageUrl: "/images/articles/ai.jpg",
    },
    {
      id: "technology2",
      title: "Smart Home Essentials: Enhancing Comfort and Convenience",
      description:
        "Discover cutting-edge smart home devices that can automate tasks and create a seamless living environment.",
      imageUrl: "/images/articles/home.jpg",
    },
    {
      id: "technology3",
      title: "Cybersecurity in the Digital Age: Protecting Your Online Privacy",
      description:
        "Learn essential tips and best practices for staying safe and secure in an increasingly connected world.",
      imageUrl: "/images/articles/cybersecurity.jpg",
    },
  ],
  cultureArticles: [
    {
      id: "culture1",
      title: "Exploring World Heritage Sites: Preserving Our Shared History",
      description:
        "Delve into the fascinating stories behind UNESCO World Heritage Sites and their cultural significance.",
      imageUrl: "/images/articles/heritage-sites.jpg",
    },
    {
      id: "culture2",
      title: "Art and Inspiration: Unveiling the Beauty of Creative Expression",
      description:
        "Discover the diverse world of art and its profound impact on our lives and the human experience.",
      imageUrl: "/images/articles/creative.jpg",
    },
    {
      id: "culture3",
      title:
        "Celebrating Cultural Festivals: Embracing Traditions and Diversity",
      description:
        "Immerse yourself in vibrant cultural celebrations from around the world, filled with music, food, and joy.",
      imageUrl: "/images/articles/cultural-festival.jpg",
    },
  ],
};

export default articlesData;
