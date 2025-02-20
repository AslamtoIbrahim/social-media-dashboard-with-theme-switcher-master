
type prop = {
  isOn: boolean;
  onClick?: () => void;
};
const Switch = ({ onClick, isOn }: prop) => {
  const handleClick = () => {
    onClick?.();
  };
  return (
    <div
      onClick={handleClick}
      className={`bg-lightTheme-toggle w-14 h-7 rounded-full flex items-center 
      cursor-pointer transition-all duration-300 ease-in-out
     ${isOn ? ` bg-toggle-gradient ` : ""} `}
    >
      <div
        className={`w-5 h-5 mx-1 rounded-full bg-lightTheme-bg dark:bg-darkTheme-bg 
          transition-transform duration-300 transform ease-in-out 
          ${isOn ? "translate-x-0" : "translate-x-7"}`}
      ></div>
    </div>
  );
};

export default Switch;
