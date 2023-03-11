import {
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdHistoryEdu } from "react-icons/md";
import { BsMap } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";
export const useSidebarItems = [
  {
    title: "Home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    title: "Active Tickets",
    path: "tickets",
    icon: <TbFileInvoice />,
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
