import JustForYou from '@/app/components/user/WishList/JustForYouCard';

const ProductDetailsPage = () => {
  const productById = [
    {
      id: 1,
      name: 'Havic HV G-92 Gamepad',
      price: '192.00',
      rating: 4.0,
      reviews: 150,
      stockStatus: 'In Stock',
      description:
        'PlayStation 5 Controller Skin. High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.',
      colours: ['#4a4a4a', '#d9534f'], // gray, red
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      selectedColor: '#d9534f',
      selectedSize: 'M',
      quantity: 2,
      images: [
        'https://example.com/images/gamepad1.jpg',
        'https://example.com/images/gamepad2.jpg',
        'https://example.com/images/gamepad3.jpg',
      ],
      shipping: {
        freeDelivery: true,
        deliveryInfoLink: 'https://example.com/delivery',
        returnPolicy: 'Free 30 Days Delivery Returns',
        returnPolicyDetailsLink: 'https://example.com/returns',
      },
    },
  ];

  const JustForYouProducts = [
    {
      id: 1,
      image: '/images/products/auus-lap.png',
      name: 'ASUS FHD Gaming Laptop',
      price: '960',
      originalPrice: '1160',
      discount: '-35%',
      rating: 5,
      reviews: 65,
    },
    {
      id: 2,
      image: '/images/products/LCD-Gamming-minitor.png',
      name: 'IPS LCD Gaming Monitor',
      price: '1160',
      originalPrice: '',
      discount: '',
      rating: 5,
      reviews: 65,
    },
    {
      id: 3,
      image: '/images/products/gamepad.png',
      name: 'HAVIT HV-G92 Gamepad',
      price: '560',
      originalPrice: '',
      discount: 'NEW',
      rating: 5,
      reviews: 65,
    },
    {
      id: 4,
      image: '/images/products/gamming-keyboard.png',
      name: 'AK-900 Wired Keyboard',
      price: '200',
      originalPrice: '',
      discount: '',
      rating: 5,
      reviews: 65,
    },
  ];

  return (
    <main className="w-full min-h-screen bg-white text-black lg:px-[7%] 2xl:flex 2xl:items-center 2xl:justify-center">
      <div className="w-full min-h-50 flex flex-col gap-8 my-8">
        <p>
          <span className="text-gray-500">Account / Gamming / </span>Havic HV
          G-92 Gamepad
        </p>

        {productById.map(item => {
          return (
            <div
              className="w-full min-h-50 flex flex-col gap-10 p-2 lg:flex-row"
              key={item.id}
            >
              <div className="w-full border h-50">
                <h1>Image here </h1>
              </div>

              <div className="w-full flex flex-col gap-3">
                <h1 className="font-bold text-[22px]">{item.name}</h1>
                <h1 className="text-[20px]">${item.price}</h1>
                <p className="w-full">{item.description}</p>
                <hr className="my-3" />

                {/* Colors */}
                <p className="flex items-center">
                  Colors:
                  {item.colours.map((color, i) => (
                    <span
                      key={i}
                      className="inline-block w-5 h-5 rounded-full ml-2"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </p>
                {/* Size */}
                <p className="flex items-center">
                  Size:
                  {item.sizes.map((size, i) => (
                    <span
                      key={i}
                      className="border w-6 h-6 mx-2  hover:bg-red-500 hover:text-white"
                    >
                      {size}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          );
        })}

        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 h-10 items-center">
              <p className="h-full bg-red-700 w-3 rounded-r-[4px]"></p>
              <p className="text-[20px]">Related item</p>
            </div>
          </div>

          {/* products JustForYou */}
          <div className="w-full grid grid-cols-2 gap-3 p-3 py-8 sm:grid-cols-3 lg:flex justify-between lg:p-0 lg:py-5 2xl:gap-15">
            {JustForYouProducts.map(item => {
              return (
                <JustForYou
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  originalPrice={item.actualPrice}
                  reviews={item.reviews}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
