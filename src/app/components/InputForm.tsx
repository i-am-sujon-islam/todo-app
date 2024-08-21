"use client";

import { addTodo } from "@/redux/todoSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";

const InputForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleTodo = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    if (todo == "") {
      toast.error("Please write Todo");
    } else {
      dispatch(addTodo({ _id: Math.random().toString(), todo: todo }));
      setTodo("");
      toast.success("Nice! You added todo");
    }
  };
  return (
    <div>
      {/* {Todo Form} */}
      <form
        onSubmit={handleTodo}
        className="flex items-center gap-4 h-10 md:h-12 relative"
      >
        <input
          type="text"
          placeholder="Enter your Todo"
          className="flex-1 h-full border-[1px] border-gray-600 bg-transparent
          pl-4 pr-2 lg:pr-6 outline-none tracking-wide rounded-md hover:border-green-500
          focus-visible:border-green-500 "
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        {todo && (
          <MdClose
            onClick={() => setTodo("")}
            className="absolute top:3 right-2 sm:right-28 lg:top-3.5 text-xl md:right-32 hover:text-red-600"
          />
        )}
        <button
          type="submit"
          className="h-full border-[1px] border-gray-600 px-2 rounded-md hover:text-orange-600
        uppercase duration-200 text-sm md:text-base"
        >
          Add Todo
        </button>
      </form>

      {/* {Todo List} */}

      <TodoList />
    </div>
  );
};

export default InputForm;
