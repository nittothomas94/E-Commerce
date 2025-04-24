// app/(user)/layout.jsx

import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

export default function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
