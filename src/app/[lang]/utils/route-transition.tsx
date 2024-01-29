"use client";

import type {PropsWithChildren} from "react";

import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";



// variants
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const RouteTransition = (props: PropsWithChildren<object>) => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence>
        <motion.div key={pathname} className="h-full">
          <Transition />
          {props.children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

function Transition() {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3B2D71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4B3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
    </>
  );
}



export default RouteTransition;
