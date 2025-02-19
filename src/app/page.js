"use client";

import UserInformationStep from "@/components/UserInformationStep";
import ProfileStep from "@/components/ProfileStep";
import YoureAllSet from "@/components/YoureAllSet";
import ContactStep from "@/components/ContactStep";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentStep, setcurrentStep] = useState(0);
  console.log(currentStep);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const prevStep = () => {
    setcurrentStep((prev) => prev - 1);
  };

  const nextStep = () => {
    setcurrentStep((prev) => prev + 1);

    window.localStorage.setItem(
      "multi-step-form",
      JSON.stringify({ formValues, currentStep: currentStep + 1 })
    );
  };

  useEffect(() => {
    const localStorage = JSON.parse(
      window.localStorage.getItem("multi-step-form")
    );

    if (!localStorage) return;
    setFormValues(localStorage.formValues);
    setcurrentStep(localStorage.currentStep);
  }, []);

  return (
    <div className="bg-slate-700 h-screen w-screen">
      <div className="flex flex-col justify-center items-center h-screen gap-5">
        <div
          className={`w-[380px] bg-white h-[555px] rounded-xl ${
            currentStep === 3 ? "h-[200px]" : ""
          }`}
        >
          <div className="p-[32px] flex flex-col h-full justify-around gap-2 relative">
            {currentStep === 0 && (
              <UserInformationStep
                currentStep={currentStep}
                formErrors={formErrors}
                formValues={formValues}
                setFormValues={setFormValues}
                setcurrentStep={setcurrentStep}
                setFormErrors={setFormErrors}
                prevStep={prevStep}
                nextStep={nextStep}
              ></UserInformationStep>
            )}
            {currentStep === 1 && (
              <ContactStep
                currentStep={currentStep}
                formErrors={formErrors}
                formValues={formValues}
                setFormValues={setFormValues}
                setcurrentStep={setcurrentStep}
                setFormErrors={setFormErrors}
                prevStep={prevStep}
                nextStep={nextStep}
              ></ContactStep>
            )}
            {currentStep === 2 && (
              <ProfileStep
                currentStep={currentStep}
                prevStep={prevStep}
                nextStep={nextStep}
              />
            )}
            {currentStep === 3 && <YoureAllSet />}
          </div>
        </div>
      </div>
    </div>
  );
}
