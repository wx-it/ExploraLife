import AboutUs from "./components/AboutUs";
import Articles from "./components/Articles";
import FeaturedContent from "./components/FeaturedContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <AboutUs />
        <FeaturedContent />
        <Articles />
        <Newsletter />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
