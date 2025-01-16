/* eslint-disable react/prop-types */
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <TopHeader />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
