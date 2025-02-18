"use client";
import Header from "@/components/Header";
import UserInformationStep from "@/components/UserInformationStep"
import ContinueButton from "@/components/ContinueButton"
import ContactStep from "@/components/ContactStep";
import { useState } from "react";

export default function Home() {
  const [currentStep , setcurrentStep] = useState(0)
  const [formValues , setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
  })

  const [formErrors , setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
  })
  const prevStep = () =>{
    setcurrentStep((prev) => prev-1)
  }
  const nextStep = () =>{
    if(formValues.firstName == ""){
     
      setFormErrors((prev) => ({...prev, firstName: "Нэрээ оруулна уу"}))
      return;
    }else{
      setcurrentStep((prev) => prev+1)
    }
  }
  return (
    <div className="bg-slate-700 h-screen w-screen">
      <div className="flex flex-col justify-center items-center h-screen gap-5">
        <div className="w-[380px] bg-white h-[555px] rounded-xl  ">
          <div className="p-[32px] flex flex-col h-full justify-around gap-2 relative">
            <Header/>
            <form>
              {currentStep === 0 && <UserInformationStep formErrors={formErrors} formValues ={formValues} setFormValues={setFormValues}></UserInformationStep>}
              {currentStep === 1 && <ContactStep  formValues ={formValues} setFormValues={setFormValues} ></ContactStep>}
            </form>
            <ContinueButton currentStep = {currentStep+1} nextStep ={nextStep} prevStep={prevStep}/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
