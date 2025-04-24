// app/(user)/layout.jsx

import Footer from '../components/user/Footer/footer';
import Navbar from '../components/user/Navbar/navbar';
import TopHeader from '../components/user/TopHeader/topHeader';
export default function UserLayout({ children }) {
  return (
    <>
      <TopHeader />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
