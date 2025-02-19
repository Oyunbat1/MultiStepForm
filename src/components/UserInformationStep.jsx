import ContinueButton from "./ContinueButton";
const UserInformationStep = (props) => {
  const onChange = (event) => {
    const { setFormValues } = props;
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const nextStep = () => {
    props.setcurrentStep((prev) => prev + 1);
  };
  const handleNext = (event) => {
    event.preventDefault();
    if (!props.formValues.firstName) {
      props.setFormErrors((prev) => ({
        ...prev,
        firstName: "Нэрээ оруулна уу",
      }));
      return;
    }
    if (!formValues.lastName) {
      setFormErrors((prev) => ({ ...prev, lastName: "Нэрээ оруулна уу" }));
      return;
    }
    nextStep();
  };
  return (
    <form onSubmit={handleNext}>
      <div className=" flex flex-col gap-2 mt-[106px] mb-[100px]">
        <div className="flex flex-col">
          <label className="text-[#334155 font-[600] tracking-normal text-[12px] ">
            First name <span className="text-red-600">*</span>
          </label>
          <input
            className={`${
              props.formErrors.firstName == ""
                ? "border-grey-400 border-[1px]   focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
                : "border-red-600 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
            }`}
            placeholder="Your first name"
            name="firstName"
            onChange={onChange}
          ></input>
          {props.formErrors.firstName && (
            <p className="text-red-600 text-[10px]">
              {props.formErrors.firstName}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-[#334155 font-[600] tracking-normal text-[12px] pb-[4px]">
            Last name <span className="text-red-600">*</span>
          </label>
          <input
            className="border-gray-400 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
            placeholder="Your last name"
            name="lastName"
            onChange={onChange}
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="text-[#334155 font-[600] tracking-normal text-[12px] pb-[4px]">
            Username <span className="text-red-600">*</span>
          </label>
          <input
            className="border-gray-400 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
            placeholder="Your username "
            name="userName"
            onChange={onChange}
          ></input>
        </div>
        <ContinueButton currentStep={props.currentStep + 1} />
      </div>
    </form>
  );
};

export default UserInformationStep;
