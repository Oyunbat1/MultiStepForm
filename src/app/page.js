"use client";
import Header from "@/components/Header";
import UserInformationStep from "@/components/UserInformationStep";

import ContactStep from "@/components/ContactStep";
import { useState } from "react";

export default function Home() {
  const [currentStep, setcurrentStep] = useState(0);
  
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
      confirmPassword: ""
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
      confirmPassword: ""
  });

  const prevStep = () => {
    setcurrentStep((prev) => prev - 1)
  }

  const nextStep = () => {
    setcurrentStep((prev) => prev + 1);
  }

  return (
    <div className="bg-slate-700 h-screen w-screen">
      <div className="flex flex-col justify-center items-center h-screen gap-5">
        <div className="w-[380px] bg-white h-[555px] rounded-xl  ">
          <div className="p-[32px] flex flex-col h-full justify-around gap-2 relative">
            <Header />
            {currentStep === 0 && (
              <UserInformationStep
              currentStep = {currentStep}
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
              currentStep = {currentStep}
              formErrors={formErrors}
              formValues={formValues}
              setFormValues={setFormValues}
              setcurrentStep={setcurrentStep}
              setFormErrors={setFormErrors}
              prevStep={prevStep}
                nextStep={nextStep}
              ></ContactStep>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
