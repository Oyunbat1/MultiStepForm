import ContinueButton  from "./ContinueButton"
const ProfileStep =(props)=>{
    return (
        <div>
        <ContinueButton
          currentStep={props.currentStep + 1}
          prevStep={props.prevStep}
          
        />
        </div>
    )
}

export default ProfileStep