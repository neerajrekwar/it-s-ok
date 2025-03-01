"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { IconHeartFilled, IconX } from "@tabler/icons-react";

export default function Home() {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [showDialog, setShowDialog] = useState(false);

  const moveNoButton = () => {
    const newX = Math.random() * window.innerWidth - window.innerWidth / 2;
    const newY = Math.random() * window.innerHeight - window.innerHeight / 2;
    setNoButtonPos({ x: newX, y: newY });
  };

// Auto close dialog & refresh after 3 seconds
  useEffect(() => {
    if (showDialog) {
      const timer = setTimeout(() => {
        setShowDialog(false);
        window.location.reload(); // Refresh page
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showDialog]);
  
  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
        <h1 className="text-xl text-center font-bold p-2">
          Will You Be My Valentine?
        </h1>

        <div className="mt-8 flex gap-16 ">
          <div>
            {/* YES BUTTON (Left Side) */}
            <motion.button
              className="bg-red-500 text-white flex gap-2 px-6 py-2 rounded-md text-lg font-semibold"
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowDialog(true)}
            >
              No <IconX size={24} />
            </motion.button>
          </div>
          <div>
            {/* NO BUTTON (Right Side, Moves Around) */}
            <motion.button
              className="bg-green-500 text-white flex gap-2 px-6 py-2 rounded-md text-lg font-semibold "
              animate={{ x: noButtonPos.x, y: noButtonPos.y }}
              onMouseEnter={moveNoButton} // Moves on hover (Desktop)
              onClick={moveNoButton} // Moves on tap (Mobile)
            >
              Yes <IconHeartFilled size={24} />
            </motion.button>
          </div>
        </div>
        {/* Dialog for "Yes" Button */}
        <Dialog.Root open={showDialog} onOpenChange={setShowDialog}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg text-center">
              <Dialog.Title className="text-xl font-bold flex flex-row  items-center justify-center gap-2 dark:text-[#171717]">
                it&apos;s Ok! <IconHeartFilled size={24} />
              </Dialog.Title>
              <p className="mt-2 dark:text-[#171717]">
                {" "}
                Mention not... <br /> You made my day!
              </p>
              <Dialog.Close asChild>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                  Close
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <div className="text-xs">
        {" "}
        © {new Date().getFullYear()} it&apos;s-ok. Created by{" "}
        <a
          href="https://www.instagram.com/uneerajrekwar"
          target="_blank"
          rel="noopener noreferrer"
        >
          @uneerajrekwar
        </a>
      </div>
    </main>
  );
}
