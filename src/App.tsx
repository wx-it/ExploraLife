import AboutUs from "./sections/AboutUs";
import Articles from "./sections/Articles";
import FeaturedContent from "./sections/FeaturedContent";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Newsletter from "./sections/Newsletter";
import { BrowserRouter } from "react-router-dom";
//clean up!

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
