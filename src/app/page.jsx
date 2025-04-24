import TopHeader from './components/user/TopHeader/topHeader.jsx';
import Footer from './components/user/Footer/footer.jsx';

export default function Home() {
  return (
    <>
      <TopHeader />
      <div className="h-screen bg-white text-black">
        <h1>Home page</h1>
      </div>

      <Footer />
    </>
  );
}
