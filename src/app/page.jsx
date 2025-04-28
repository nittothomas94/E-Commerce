import TopHeader from './components/user/TopHeader/topHeader.jsx';
import Footer from './components/user/Footer/footer.jsx';
import Navbar from './components/user/Navbar/navbar.jsx';
import ProductDivider from './components/user/ProductDivider/ProductDivider.jsx';

export default function Home() {
  return (
    <div className="lg:flex lg:flex-col lg:items-center">
      <TopHeader />
      <Navbar />
      <div className="h-screen bg-white text-black flex flex-col gap-7 lg:w-[1100px] lg:py-4  border">
        {/* section 1 of the Home page (Iphone imag and product divider) */}
        <div className="flex flex-col gap-3 py-3 lg:flex-row">
          <ProductDivider />
          <div className="">
            <img
              src="/images/home/iphone14series.png"
              alt="iphone image"
              className="w-full h-fit object-contain lg:px-4 "
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
