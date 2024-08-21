"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DiWebplatform } from "react-icons/di";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Fotter = () => {
  const footerArray = [
    { href: "https://www.facebook.com/mdsujonislam.me", icon: <FaFacebook /> },
    {
      href: "https://www.linkedin.com/in/md-sujon-islam-ss/",
      icon: <FaLinkedin />,
    },
    { href: "https://github.com/i-am-sujon-islam", icon: <FaGithub /> },
    { href: "https://md-sujon-islam.vercel.app/", icon: <DiWebplatform /> },
    { href: "https://www.youtube.com/", icon: <FaYoutube /> },
  ];

  const pathName = usePathname();
  return (
    <footer className="w-full text-gray-400">
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil qui quam
        corrupti quibusdam maxime, dicta sint quae itaque tempore, ipsa ea
        porro, provident corporis cumque nesciunt quod id nostrum veniam.
      </p>
      <div className=" flex justify-center items-center gap-4 my-3 ">
        {footerArray?.map((item, index) => (
          <Link
            className="text-2xl  text-yellow-800 hover:text-green-600 duration-200"
            key={index}
            href={item.href}
            target="blank"
          >
            {item?.icon}
          </Link>
        ))}
      </div>
      <div>
        <Link
          href={pathName === "/" ? "/todo" : "/"}
          className="text-center block bg-orange-800  py-3 opacity-80 hover:opacity-100 duration-300"
        >
          {pathName === "/" ? "Go to todo page >>" : "Go to home page >>"}
        </Link>
      </div>
    </footer>
  );
};

export default Fotter;
