import { AiOutlineHistory } from "react-icons/ai";
import { MdHistoryEdu, MdInvertColors } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsMap } from "react-icons/bs";
export const sidebarItems = [
  {
    title: "History",
    path: "history",
    icon: <AiOutlineHistory />,
  },
  {
    title: "P-History",
    path: "p_history",
    icon: <MdHistoryEdu />,
  },
  {
    title: "Profile",
    path: "profile",
    icon: <CgProfile />,
  },
  {
    title: "Themes",
    path: "themes",
    icon: <MdInvertColors />,
  },
  {
    title: "Guide map",
    path: "map",
    icon: <BsMap />,
  },
];
