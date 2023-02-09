import {
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdHistoryEdu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsMap } from "react-icons/bs";
export const sidebarItems = [
  {
    title: "Home",
    path: "/",
    icon: <AiOutlineHome />,
  },
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
    path: "profile/12345",
    icon: <CgProfile />,
  },
  {
    title: "Guide map",
    path: "map",
    icon: <BsMap />,
  },
  {
    title: "Setting",
    path: "setting",
    icon: <AiOutlineSetting />,
  },
];
