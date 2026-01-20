import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <div className="fixed left-0 right-0 z-40 bg-[#F68D2E] text-white py-2 md:py-2.5 top-16 md:top-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex items-center justify-between gap-2">
        <motion.div
          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base font-medium flex-shrink min-w-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
          </motion.div>
          <span className="truncate">Entregamos para todo o Brasil</span>
        </motion.div>
        <motion.a
          href="tel:+551133334444"
          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base font-medium flex-shrink-0 whitespace-nowrap"
          data-testid="topbar-phone"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            whileHover={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 0.4 }}
          >
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
          </motion.div>
          <span className="hidden sm:inline">+55 (11) 3333-4444</span>
          <span className="sm:hidden">(11) 3333-4444</span>
        </motion.a>
      </div>
    </div>
  );
}