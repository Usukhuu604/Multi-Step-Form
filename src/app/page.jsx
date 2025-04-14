"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { FirstCard } from "@/components/FirstCard";
import { SecondCard } from "@/components/SecondCard";
import { ThirdCard } from "@/components/ThirdCard";
import { initialFormValues } from "@/constants/constant";

const HomePage = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);

  const addOne = () => {
    setCurrentCard((currentCard) => currentCard + 1);
  };
  const subOne = () => {
    setCurrentCard((currentCard) => currentCard - 1);
  };

  // const zawef = [FirstCard, SecondCard, ThirdCard][0];

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      {/* <FirstCard addOne={addOne} /> */}
      {/* <SecondCard addOne={addOne} /> */}
      <ThirdCard addOne={addOne} />

      {/* <AnimatePresence mode="wait">
      <motion.div key={} initial={{}} animate={{}} exit={{}} transition={{}}>

      </motion.div>
     </AnimatePresence> */}
    </div>
  );
};

export default HomePage;
