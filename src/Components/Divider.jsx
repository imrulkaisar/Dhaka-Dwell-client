const Divider = ({ text = "or" }) => {
  return (
    <div className="flex gap-3 items-center justify-center w-full uppercase">
      <span className="border flex-grow"></span>
      <span>{text}</span>
      <span className="border flex-grow"></span>
    </div>
  );
};

export default Divider;
