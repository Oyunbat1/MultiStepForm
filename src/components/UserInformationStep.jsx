import ContinueButton from "./ContinueButton";
const UserInformationStep = (props) => {
  const onChange = (event) => {
    props.setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (!props.formValues.firstName) {
      props.setFormErrors((prev) => ({
        ...prev,
        firstName: "Нэрээ оруулна уу",
      }));
    }
    else {
      props.setFormErrors((prev) => ({
        ...prev,
        firstName: "",
      }));
    }


    if (!props.formValues.lastName) {
      props.setFormErrors((prev) => ({
        ...prev,
        lastName: "Нэрээ оруулна уу",
      }));
    }
    else {
      props.setFormErrors((prev) => ({
        ...prev,
        lastName: "",
      }));
    }
    if (!props.formValues.userName) {
      props.setFormErrors((prev) => ({
        ...prev,
        userName: "Нэрээ оруулна уу",
      }));
    }
    else {
      props.setFormErrors((prev) => ({
        ...prev,
        userName: "",
      }));
    }

    if (
      !props.formValues.firstName ||
      !props.formValues.lastName ||
      !props.formValues.userName
    ) {
     return
    }

    props.nextStep();
  };
  return (
    <form onSubmit={handleNext}>
      <div className=" flex flex-col gap-2 mt-[116px] mb-[100px]">
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
            className={`${
              props.formErrors.lastName == ""
                ? "border-grey-400 border-[1px]   focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
                : "border-red-600 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
            }`}
            placeholder="Your last name"
            name="lastName"
            onChange={onChange}
          ></input>
          {props.formErrors.lastName && (
            <p className="text-red-600 text-[10px]">
              {props.formErrors.lastName}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-[#334155 font-[600] tracking-normal text-[12px] pb-[4px]">
            Username <span className="text-red-600">*</span>
          </label>
          <input
            className={`${
              props.formErrors.userName == ""
                ? "border-grey-400 border-[1px]   focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
                : "border-red-600 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
            }`}
            placeholder="Your user name"
            name="userName"
            onChange={onChange}
          ></input>
          {props.formErrors.userName && (
            <p className="text-red-600 text-[10px]">
              {props.formErrors.userName}
            </p>
          )}
        </div>

        <ContinueButton
          currentStep={props.currentStep + 1}
          prevStep={props.prevStep}
        />
      </div>
    </form>
  );
};

export default UserInformationStep;
