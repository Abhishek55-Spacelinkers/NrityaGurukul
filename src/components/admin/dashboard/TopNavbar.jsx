"use client";

import React, { useState } from "react";
import { User } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useFirebase } from "@/context/firebase";
const TopNavbar = () => {
  const { user } = useFirebase();

  return (
    <div className="flex items-center justify-between w-[98%] mx-auto">
      <h2 className="text-xl font-semibold">
        Hello, {user ? user.email : "--------"}
      </h2>
      <Flyout />
    </div>
  );
};

const Flyout = () => {
  const [open, setOpen] = useState(false);
  const { logoutUser } = useFirebase();

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <div
      className="group relative h-fit w-fit text-black "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-2">
        <User className="w-9 h-9 text-white bg-blue-500 rounded-full p-1.5" />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            key="Modal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ x: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute w-fit left-1/2 top-12 bg-white shadow-[0_0_10px_0px_rgba(0,0,0,0.2)] z-40 rounded-lg"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

            <div className="flex flex-col gap-2.5">
              <button className="flex gap-1 items-center px-4 py-1.5 hover:bg-gray-200 rounded-lg duration-100" onClick={()=>handleLogout()}>
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TopNavbar;
