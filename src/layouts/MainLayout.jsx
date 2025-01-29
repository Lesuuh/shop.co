/* eslint-disable react/prop-types */
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children, totalQuantity }) => {
  return (
    <>
      <TopHeader />
      <Header totalQuantity={totalQuantity} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
