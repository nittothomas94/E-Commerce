const ResuseableFooterBox = ({ title, p1, p2, p3, p4, p5 }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-[25px] font-bold">{title}</h1>
      <p className="text-[15px] cursor-pointer">{p1}</p>
      <p className="text-[15px] cursor-pointer">{p2}</p>
      <p className="text-[15px] cursor-pointer">{p3}</p>
      <p className="text-[15px] cursor-pointer">{p4}</p>
      <p className="text-[15px] cursor-pointer">{p5}</p>
    </div>
  );
};

export default ResuseableFooterBox;
