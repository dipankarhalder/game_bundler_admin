"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { sidebarLinks } from "@/content/sidebar";

export const Sidebar = () => {
  const router = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="px-2 py-4 h-screen w-[240px] bg-slate-950 overflow-y-auto fixed left-0 top-0">
      <div className="w-full h-[60px] bg-slate-700 rounded mb-4"></div>
      <div className="w-full">
        <ul>
          {sidebarLinks.map((link) => (
            <li key={link.name} className="py-1 text-gray-400">
              {link.sublist.length ? (
                <div className="flex flex-col py-2 px-3">
                  <div
                    className="flex justify-start items-center cursor-pointer"
                    onClick={() => handleToggle(link.name)}
                  >
                    <span className="mr-4 h-5 w-5 sidebar_icon">
                      {link.icon}
                    </span>
                    <div className="flex justify-between items-center w-full">
                      <p className="font-medium">{link.name}</p>
                      <em>
                        {openDropdown === link.name ? (
                          <HiChevronUp className="text-gray-600 w-[18px] h-[18px]" />
                        ) : (
                          <HiChevronDown className="text-gray-600 w-[18px] h-[18px]" />
                        )}
                      </em>
                    </div>
                  </div>
                  {openDropdown === link.name && (
                    <div className="ml-6 mt-2 py-1 bg-slate-900 rounded">
                      <ul>
                        {link.sublist.map((itm, idx) => (
                          <li
                            key={idx}
                            className={`${
                              idx === link.sublist.length - 1 ? "" : ""
                            } transition-colors hover:text-white py-2 px-4`}
                          >
                            <Link href={itm.path}>
                              <p>{itm.name} </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.path || "/"}
                  className={`${
                    router === link.path ? "bg-slate-900" : ""
                  } flex justify-start items-center transition-colors py-2 px-3 rounded hover:bg-slate-900 hover:text-white`}
                >
                  <span className="mr-4 h-5 w-5 sidebar_icon">{link.icon}</span>
                  <div className="flex justify-between items-center w-full">
                    <p className="font-medium">{link.name}</p>
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
