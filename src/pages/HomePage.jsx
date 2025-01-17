import Brands from "../components/ui/Brands";
import Hero from "../components/ui/Hero";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Brands/>
    </MainLayout>
  );
};

export default HomePage;
