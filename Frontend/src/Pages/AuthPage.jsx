import { useState } from "react";
import SendOtpForm from "../components/templates/SendOtpForm";
import CheckOtpFrom from "../components/templates/CheckOtpFrom";

function AuthPage(props) {
   const [step, setStep] = useState(1)
   const [mobile, setMobile] = useState("")
   const [code, setCode] = useState("")


   return (
      <div>
         {step === 1 && <SendOtpForm setStep={setStep} setMobile={setMobile} mobile={mobile} />}
         {step === 2 && <CheckOtpFrom />}
      </div>
   );
}

export default AuthPage;