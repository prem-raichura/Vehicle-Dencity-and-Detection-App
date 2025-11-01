import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <motion.div
        className="w-14 h-14 border-4 border-blue-300 border-t-blue-600 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <motion.p
        className="mt-3 text-blue-600 font-semibold text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
      >
        Detecting vehicles...
      </motion.p>
    </div>
  );
}
