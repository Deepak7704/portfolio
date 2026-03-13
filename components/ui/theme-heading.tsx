"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = {
  defaultText: string;
  themedText: string;
  className?: string;
};

export function ThemeHeading({ defaultText, themedText, className }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="inline-block cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.h2
              key="themed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className={className}
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              {themedText}
            </motion.h2>
          ) : (
            <motion.h2
              key="default"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className={className}
            >
              {defaultText}
            </motion.h2>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
