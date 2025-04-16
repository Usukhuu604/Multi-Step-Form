"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { FirstCard } from "@/components/FirstCard";
import { SecondCard } from "@/components/SecondCard";
import { ThirdCard } from "@/components/ThirdCard";
import { initialFormValues } from "@/constants/constant";
import { TheEnd } from "@/components/TheEnd";

const HomePage = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);

  const updateFormErrors = (errors) => {
    setFormErrors((previousErrors) => ({ ...previousErrors, ...errors }));
  };

  const nextPage = () => {
    if (currentCard < 4) {
      setCurrentCard((currentCard) => currentCard + 1);
    } else {
      setCurrentCard(3);
    }
  };

  const previousPage = () => {
    if (currentCard > 0) {
      setCurrentCard((currentCard) => currentCard - 1);
    } else {
      setCurrentCard(0);
    }
  };

  const FormPageComponent = [FirstCard, SecondCard, ThirdCard, TheEnd][
    currentCard
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previousValue) => ({ ...previousValue, [name]: value }));
    setFormErrors((previousErrors) => ({ ...previousErrors, [name]: "" }));
    // console.log(formValues);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <FormPageComponent
            previousPage={previousPage}
            nextPage={nextPage}
            currentCard={currentCard}
            formValues={formValues}
            handleInputChange={handleInputChange}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            updateFormErrors={updateFormErrors}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
