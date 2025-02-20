const ContinueButton = (props) => {
  console.log(props.nextStep);
  return (
    <div
      className={`absolute bottom-[30px] ${
        props.currentStep === 2 ? "flex gap-2 justify-center " : ""
      } ${props.currentStep === 3 ? "flex gap-2 justify-center " : ""}`}
    >
      {props.currentStep === 2 ? (
        <button
          className="flex items-center w-[100px] border-[1px] rounded-md gap-1 justify-center "
          onClick={props.prevStep}
        >
          {" "}
          <img src="chevron_left.png" className="w-[16px] "></img>{" "}
          <p className="text-[14px] font-medium">Back</p>
        </button>
      ) : (
        ""
      )}

      {props.currentStep === 3 ? (
        <button
          className="flex items-center w-[100px] border-[1px] rounded-md gap-1 justify-center "
          onClick={props.prevStep}
        >
          {" "}
          <img src="chevron_left.png" className="w-[16px] "></img>{" "}
          <p className="text-[14px] font-medium">Back</p>
        </button>
      ) : (
        ""
      )}
      <button
        onClick={props.nextStep}
        className={`${
          props.currentStep == 2
            ? "flex w-[209px] h-[36px] items-center justify-center rounded-md bg-[#121316] text-white text-[14px] hover:bg-slate-700  "
            : "flex w-[315px] h-[36px] items-center justify-center rounded-md bg-[#121316] text-white text-[14px] hover:bg-slate-700 "
        } ${
          props.currentStep == 3
            ? "flex w-[209px] h-[36px] items-center justify-center rounded-md bg-[#121316] text-white text-[14px] hover:bg-slate-700  "
            : "flex w-[315px] h-[36px] items-center justify-center rounded-md bg-[#121316] text-white text-[14px] hover:bg-slate-700 "
        }`}
      >
        Continue  <span> {props.currentStep}/3</span>
        <img src="chevron_right.png"></img>
      </button>
    </div>
  );
};

export default ContinueButton;
