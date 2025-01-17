import Brands from "../components/ui/Brands";
import Hero from "../components/ui/Hero";
import NewArrivals from "../components/ui/NewArrivals";
import TopSelling from "../components/ui/TopSelling";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {

  return (
    <MainLayout>
      <Hero />
      <Brands/>
      <NewArrivals/>
      <TopSelling/>
    </MainLayout>
  );
};

export default HomePage;
