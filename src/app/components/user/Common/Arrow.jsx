const Arrow = ({ onPrev, onNext }) => {
  return (
    <div className="flex gap-2 h-10">
      <img
        src="/images/home/Fill With Left Arrow.png"
        alt="arrow-left"
        className="hover:shadow-sm cursor-pointer"
        onClick={onPrev}
      />
      <img
        src="/images/home/Fill with Right Arrow.png"
        alt="arrow-right"
        className="hover:shadow-sm cursor-pointer"
        onClick={onNext}
      />
    </div>
  );
};

export default Arrow;
