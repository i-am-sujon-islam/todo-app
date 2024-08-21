"use client";

import { removeTodo } from "@/redux/todoSlice";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../../type";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state: State) => state?.todo);
  console.log(todoList);
  const [showReove, setShowRemove] = useState(false);
  return (
    <div className="flex flex-col gap-4 mt-2 p-4 border border-gray-600 rounded-md">
      {todoList?.length > 0 && (
        <div>
          <ul
            className="max-h-[300px] border border-slate-600 p-2 
        shadow-lg shadow-slate-800 flex flex-col gap-2"
          >
            {todoList?.map((item) => (
              <TodoItem key={item?._id} item={item} />
            ))}
          </ul>
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowRemove(true)}
            className=" text-sm text-orange-600 text-center bg-transparent 
            border-[1px] border-gray-500 rounded-md px-3 py-2 mt-2 hover:border-red-500
            duration-200"
          >
            Remove Todo
          </motion.button>
        </div>
      )}
      {todoList?.length === 0 && (
        <p className="text-center text-base text-yellow-600 font-medium tracking-wide">
          Your Todo list is emptly
        </p>
      )}
      {showReove && (
        <div
          className="w-full h-screen fixed bg-bodyColor top-0 
        left-0 bg-opacity-60"
        >
          <div
            className="absolute top-1/2 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-bodyColor
          shadow-todoShadow rounded-md"
          >
            <p className="text-center text-base lg:text-xl font-medium text-red-500">
              Are you sure to <span>remove</span>all the todo
            </p>
            <div>
              <button
                onClick={() => setShowRemove(false)}
                className="px-6 py-2 text-base text-orange-500 hover:text-red-500
              font-semibold bg-transparent border-[1px] border-gray-500 hover:border-red-500 duration-300"
              >
                No
              </button>
              <button
                onClick={() => {
                  dispatch(
                    removeTodo(),
                    toast.success("All todo removed successfully"),
                    setShowRemove(false)
                  );
                }}
                className="px-6 py-2 text-base text-orange-500 hover:text-red-500
              font-semibold bg-transparent border-[1px] border-gray-500 hover:border-red-500 duration-300"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
