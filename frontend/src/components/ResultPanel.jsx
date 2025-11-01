import { motion } from "framer-motion";

export default function ResultPanel({ result }) {
  return (
    <motion.div
      className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5 w-full text-center shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-lg md:text-xl font-semibold text-blue-700 mb-3">
        Detection Summary
      </h2>
      <div className="space-y-2 text-gray-700 text-sm md:text-base">
        <p><strong>Total Vehicles:</strong> {result.vehicles}</p>
        <p><strong>Traffic Density:</strong> {result.density}</p>
        <p><strong>FPS:</strong> {result.fps}</p>
      </div>
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-1 rounded-full text-sm md:text-base font-medium shadow-md">
          Processing Complete ✅
        </span>
      </motion.div>
    </motion.div>
  );
}
