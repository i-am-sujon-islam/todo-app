"use client";

import { deleteTodo } from "@/redux/todoSlice";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

interface Item {
  item: {
    todo: string;
    _id: string;
  };
}

const TodoItem = ({ item }: Item) => {
  const dispatech = useDispatch();
  return (
    <motion.li
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ y: { type: "spring", stiffness: 120 } }}
      className="border-[1px] border-l-green-500 border-green-900 w-full
     font-medium border-l-[6px] cursor-pointer px-2 py-1 flex items-center justify-between "
    >
      {item?.todo}
      <MdDelete
        onClick={() => {
          dispatech(
            deleteTodo(item?._id),
            toast.success("Todo deleted successfully")
          );
        }}
        className="text-lg hover:text-red-500 duration-200"
      />
    </motion.li>
  );
};

export default TodoItem;
