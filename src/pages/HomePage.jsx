import Brands from "../components/ui/Brands";
import DressStyle from "../components/ui/DressStyle";
import Hero from "../components/ui/Hero";
import NewArrivals from "../components/ui/NewArrivals";
import Reviews from "../components/ui/Reviews";
import TopSelling from "../components/ui/TopSelling";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Reviews />
    </>
  );
};

export default HomePage;
