import {
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsMap } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";
import { RiFilePaper2Line } from "react-icons/ri";
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
    title: "Payments",
    path: "p_history",
    icon: <RiFilePaper2Line />,
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
