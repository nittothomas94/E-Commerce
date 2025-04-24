import ResuseableFooterBox from './resuseFooterBox';

const Footer = () => {
  return (
    <div className="bg-black text-white relative bottom-0 w-full flex flex-col items-start justify-center py-2 lg:items-center">
      <div className="grid grid-cols-1 gap-8 py-4 px-4 sm:grid-cols-3 sm:px-5 sm:gap-10 md:grid md:grid-cols-4 lg:grid-cols-6 lg:w-[1000px] lg:flex lg:justify-center xl:w-[1100px] xl:gap-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-[28px] font-bold">Exclusive</h1>
          <h2 className="text-[25px] font-bold">Subscribe</h2>
          <p>Get 10% off your first order</p>
          <input type="text" className="bg-white text-black" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[25px] font-bold">Support</h2>
          <p className="text-[15px]">
            111 Bijoy sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </p>
          <p className="text-[15px] cursor-pointer ">exclusive@gmail.com</p>
          <p className="text-[15px] cursor-pointer">+88015-88888-9999</p>
        </div>

        <ResuseableFooterBox
          title="Account"
          p1="My Account"
          p2="Login / Register"
          p3="Cart"
          p4="Wishlist"
          p5="Shop"
        />

        <ResuseableFooterBox
          title="Account"
          p1="My Account"
          p2="Login / Register"
          p3="Cart"
          p4="Wishlist"
          p5="Shop"
        />

        {/* <div className="">
        <h2></h2>
        <p></p>
        <p>r</p>
        <p>Cart</p>
        <p></p>
        <p></p>
      </div>

      <div className="">
        <h2>Quick Link</h2>
        <p>Privacy Policy</p>
        <p>Tearms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div> */}

        <div className="flex flex-col gap-2">
          <h2 className="text-[25px] font-bold">Download App</h2>
          <div className="">
            <p>Save $3 with App New User Only</p>
            <div className="flex">
              <div className="">
                <img src="/Qr-Code.png" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <img src="/GooglePlay.png" alt="" />
                <img src="/appstore.png" alt="" />
              </div>
            </div>
            <p>facebook</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-10 mt-10 border border-gray-900 text-gray-900 lg:px-20">
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
