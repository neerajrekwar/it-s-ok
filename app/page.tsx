"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { IconHeartFilled, IconX } from "@tabler/icons-react";

export default function Home() {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [showDialog, setShowDialog] = useState(false);

  const handleMouseMove = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const randomX = Math.random() * (screenWidth - 100) - screenWidth / 2;
    const randomY = Math.random() * (screenHeight - 60) - screenHeight / 2;

    setNoButtonPos({ x: randomX, y: randomY });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center border border-black relative overflow-hidden">
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
            onMouseEnter={handleMouseMove}
          >
            Yes <IconHeartFilled size={24} />
          </motion.button>
        </div>
      </div>
      {/* Dialog for "Yes" Button */}
      <Dialog.Root open={showDialog} onOpenChange={setShowDialog}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg text-center">
            <Dialog.Title className="text-xl font-bold  flex gap-2 dark:text-[#171717]">
              it&apos;s Ok! <IconHeartFilled size={24} />
            </Dialog.Title>
            <p className="mt-2 dark:text-[#171717]">
              {" "}
              Mention not... <br /> You made my day! 🥲
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
  );
}
