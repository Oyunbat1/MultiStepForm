import ContinueButton from "./ContinueButton";
const ProfileStep = (props) => {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-[#334155 font-[600] tracking-normal text-[12px] mb-[6px]">
            Date of birth <span className="text-red-600">*</span>{" "}
          </h1>
          <input
            type="date"
            className=" w-[316px] py-[6px] px-[6px] rounded-md outline-none border-[1px] mb-[4px] "
          />
        </div>
        <div className="">
          <h1 className="text-[#334155 font-[600] tracking-normal text-[12px] mb-[4px]">
            Profile image <span className="text-red-600">*</span>
          </h1>
          <div className=" bg-slate-100 w-[315px] h-[160px] flex justify-center items-center flex-col">
            <div className="flex flex-col w-[26px] h-[26px] bg-white rounded-full  justify-center items-center">
              <img src="image.png" className="w-[14px]"></img>
            </div>
            <h1>Add image</h1>
          </div>
        </div>
      </div>
      <ContinueButton
        currentStep={props.currentStep + 1}
        prevStep={props.prevStep}
        nextStep={props.nextStep}
      />
    </div>
  );
};

export default ProfileStep;
