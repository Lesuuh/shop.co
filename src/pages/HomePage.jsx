import Brands from "../components/ui/Brands";
import DressStyle from "../components/ui/DressStyle";
import Hero from "../components/ui/Hero";
import NewArrivals from "../components/ui/NewArrivals";
import Newsletters from "../components/ui/Newsletters";
import Reviews from "../components/ui/Reviews";
import TopSelling from "../components/ui/TopSelling";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Reviews />
      <Newsletters/>
    </MainLayout>
  );
};

export default HomePage;
