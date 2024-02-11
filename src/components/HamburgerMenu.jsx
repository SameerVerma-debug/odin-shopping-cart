import { RxHamburgerMenu } from "react-icons/rx";

export const HamburgerMenu = ({setSidebar}) => {
  return (
    <button
      className="open-sidebar hideOnDesktop"
      onClick={() => setSidebar(true)}
    >
      <RxHamburgerMenu size={20} />
    </button>
  );
};
