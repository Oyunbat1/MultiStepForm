const ContactStep =()=>{
    return(
        <div className=" flex flex-col gap-2 mt-[146px] mb-[100px] ">
          <div className="flex flex-col">
            <label className="text-[#334155 font-[600] tracking-normal text-[12px] pb-[4px]">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              className="border-gray-400 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
              placeholder="Your email " type="email"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-[#334155 font-[600] tracking-normal text-[12px] pb-[4px]">
        Phone number <span className="text-red-600">*</span>
            </label>
            <input
              className="border-gray-400 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
              placeholder="Your password" type="number"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-[#334155 font-[600] tracking-normal text-[12px] pb-[4px]">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              className="border-gray-400 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
              placeholder="Your password " type="password"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-[#334155 font-[600] tracking-normal text-[12px] pb-[4px]">
              Confirm password <span className="text-red-600">*</span>
            </label>
            <input
              className="border-gray-400 border-[1px]  focus:border-blue-600 focus:ring-1 focus:outline-none py-[6px] rounded-md placeholder:text-[14px] placeholder:font-[600] placeholder:pl-2"
              placeholder="Confirm password" type="password"
            ></input>
          </div>
        </div>
    )
}
export default ContactStep