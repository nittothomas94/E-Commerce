import TopHeader from './components/user/TopHeader/topHeader.jsx';
import Footer from './components/user/Footer/footer.jsx';
import Navbar from './components/user/Navbar/navbar.jsx';
import ProductDivider from './components/user/ProductDivider/ProductDivider.jsx';
import ReuseFrame from './components/user/ResuseFrame/reuseFrame.jsx';
import FlashSales from './components/user/FlashSales/FlashSales.jsx';
import ProductCardHome from './components/user/ProductCardHome/ProductCardHome.jsx';
import BrowseByCategory from './components/user/BrowseByCategory/BrowseByCategory.jsx';
import BestSellingProducts from './components/user/BestSellingProducts/BestSellingProducts.jsx';
import ExploreOurProducts from './components/ExploreOurProducts/ExploreOurProducts.jsx';
export default function Home() {
  return (
    <div className="bg-white text-black lg:flex lg:flex-col lg:items-center">
      <TopHeader />
      <Navbar />
      <div className="min-h-screen bg-white text-black flex flex-col gap-15 mb-10 lg:w-[90%] 2xl:w-[1200px] lg:py-4">
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

        {/* section 2 */}

        {/* <FlashSales /> */}
        <h1>Flash sale</h1>

        {/* Browse By Category */}

        <BrowseByCategory />

        {/* Best Selling Products */}

        <BestSellingProducts />

        {/* Enhance Your Music Experience */}

        <div className="min-h-20 w-full">
          <img
            src="/images/home/Enhance-Your-Music-Experience.png"
            alt=""
            className="w-full"
          />
        </div>

        {/* Explore Our Products */}

        <ExploreOurProducts />

        {/* New Arrival */}
      </div>
      <Footer />
    </div>
  );
}
