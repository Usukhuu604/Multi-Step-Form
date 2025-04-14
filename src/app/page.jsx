"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { InputField } from "@/components/InputField";
import { FirstCard } from "@/components/FirstCard";
import { SecondCard } from "@/components/SecondCard";
import { ThirdCard } from "@/components/ThirdCard";

const personalData = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phone: "",
};

const HomePage = () => {
  const [currentCard, setCurrentCard] = useState(0);

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
    </div>
  );
};

export default HomePage;
