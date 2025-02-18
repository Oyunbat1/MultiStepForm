const UserInformationStep = (props) => {
    const onFirstNameChange = (event)=>{
      props.setFormValues((prev) => ({...prev , firstName: event.target.value}));
    }
    const onLastNameChange = (event)=>{
      props.setFormValues((prev) => ({...prev , lastName: event.target.value}));
    }
    const onUserNameChange = (event)=>{
      props.setFormValues((prev) => ({...prev , userName: event.target.value}));
    }
    return (

        <div className=" flex flex-col gap-2 mt-[106px] mb-[100px]">
          <div className="flex flex-col">
            <label className="text-[#334155 font-[600] tracking-normal text-[12px] ">
              First name <span className="text-red-600">*</span>
            </label>
            <input
              className={`${props.formErrors.firstName == "" ? "border-grey-400 border-[1px]   focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2" : "border-red-600 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"}`}
              placeholder="Your first name" onChange={onFirstNameChange}
            ></input>
            {
              props.formErrors.firstName && <p className="text-red-600 text-[10px]">{props.formErrors.firstName}</p>
            }
          </div>
          <div className="flex flex-col">
            <label className="text-[#334155 font-[600] tracking-normal text-[12px] pb-[4px]">
              Last name <span className="text-red-600">*</span>
            </label>
            <input
              className="border-gray-400 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
              placeholder="Your last name" onChange={onLastNameChange}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-[#334155 font-[600] tracking-normal text-[12px] pb-[4px]">
              Username <span className="text-red-600">*</span>
            </label>
            <input
              className="border-gray-400 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
              placeholder="Your username " onChange={onUserNameChange}
            ></input>
          </div>
        </div>
   
    );
  };


export default UserInformationStep