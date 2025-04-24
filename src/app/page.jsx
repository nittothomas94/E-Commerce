import TopHeader from './components/user/TopHeader/topHeader.jsx';
import Footer from './components/user/Footer/footer.jsx';
import Navbar from './components/user/Navbar/navbar.jsx';
export default function Home() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <div className="h-screen bg-white text-black">
        <h1>Home page</h1>
      </div>
      <Footer />
    </>
  );
}
