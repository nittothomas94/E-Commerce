// app/(user)/layout.jsx

import Footer from '../components/user/Footer/footer';

export default function UserLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
