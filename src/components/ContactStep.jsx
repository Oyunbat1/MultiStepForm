import ContinueButton from "./ContinueButton";
import Header from "@/components/Header";
const ContactStep = (props) => {
  const onChange = (event) => {
    props.setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (!props.formValues.email) {
      props.setFormErrors((prev) => ({
        ...prev,
        email: "Mайлээ оруулна уу",
      }));
    } else {
      props.setFormErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }

    const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegexPattern.test(props.formValues.email)) {
      props.setFormErrors((prev) => ({
        ...prev,
        email: "Mайл бүтэц биш байна.",
      }));
    }

    const passwordRegexPattern = /^\+?\d{8}$/;
    if(!passwordRegexPattern.test(props.formValues.phoneNumber)){
      props.setFormErrors((prev)=>({
        ...prev,
        phoneNumber: "Дугаар буруу байна."
      }))
    }

    if (!props.formValues.phoneNumber) {
      props.setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Дугаараа оруулна уу",
      }));
    } else {
      props.setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "",
      }));
    }
    if (!props.formValues.password) {
      props.setFormErrors((prev) => ({
        ...prev,
        password: "Пасспортоо  оруулна уу",
      }));
    } else {
      props.setFormErrors((prev) => ({
        ...prev,
        password: "",
      }));
    }
    if (!props.formValues.confirmPassword) {
      props.setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Пасспортоо баталгаажуулна уу",
      }));
    } else {
      props.setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "",
      }));
    }                                                                                                           if(props.formValues.password != props.formValues.confirmPassword && props.formValues.confirmPassword){
      props.setFormErrors((prev) => ({
        ...prev, confirmPassword: "Пасспорт таарахгүй байна."
      }))
    }
    if (
      !props.formValues.email ||
      !props.formValues.phoneNumber ||
      !props.formValues.password ||
      !props.formValues.confirmPassword
    ) {
      return;
    }
    props.nextStep();
  };
  return (
    <>
      <Header></Header>
      <form onSubmit={handleNext}>
        <div className=" flex flex-col gap-2 mt-[136px] mb-[100px] ">
          <div className="flex flex-col">
            <label className="text-[#334155 font-[600] tracking-normal text-[12px] ">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              className={`${
                props.formErrors.email == ""
                  ? "border-grey-400 border-[1px]   focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
                  : "border-red-600 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
              }`}
              placeholder="Your email"
              name="email"
              onChange={onChange}
              type="text"
              value = {props.formValues.email}
            ></input>
            {props.formErrors.email && (
              <p className="text-red-600 text-[10px]">
                {props.formErrors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-[#334155 font-[600] tracking-normal text-[12px] ">
              PhoneNumber <span className="text-red-600">*</span>
            </label>
            <input
              className={`${
                props.formErrors.phoneNumber == ""
                  ? "border-grey-400 border-[1px]   focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
                  : "border-red-600 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
              }`}
              placeholder="Your phoneNumber"
              name="phoneNumber"
              onChange={onChange}
              type="number"
              value = {props.formValues.phoneNumber}
            ></input>
            {props.formErrors.phoneNumber && (
              <p className="text-red-600 text-[10px]">
                {props.formErrors.phoneNumber}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-[#334155 font-[600] tracking-normal text-[12px] ">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              className={`${
                props.formErrors.password == ""
                  ? "border-grey-400 border-[1px]   focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
                  : "border-red-600 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
              }`}
              placeholder="Your password"
              name="password"
              onChange={onChange}
              type="password"
              value = {props.formValues.password}
            ></input>
            {props.formErrors.password && (
              <p className="text-red-600 text-[10px]">
                {props.formErrors.password}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-[#334155 font-[600] tracking-normal text-[12px] ">
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <input
              className={`${
                props.formErrors.confirmPassword == ""
                  ? "border-grey-400 border-[1px]   focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
                  : "border-red-600 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
              }`}
              placeholder="Your password"
              name="confirmPassword"
              onChange={onChange}
              type="password"
              value = {props.formValues.confirmPassword}
            ></input>
            {props.formErrors.confirmPassword && (
              <p className="text-red-600 text-[10px]">
                {props.formErrors.confirmPassword}
              </p>
            )}
          </div>
          <ContinueButton
            currentStep={props.currentStep + 1}
            prevStep={props.prevStep}
          />
        </div>
      </form>
    </>
  );
};
export default ContactStep;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  