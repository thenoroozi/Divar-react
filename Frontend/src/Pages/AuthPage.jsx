import { useState } from "react";
import SendOtpForm from "../components/templates/SendOtpForm";
import CheckOtpFrom from "../components/templates/CheckOtpFrom";

function AuthPage(props) {
   const [step, useStep] = useState(1)
   const [mobile, useMobile] = useState("")
   const [code, useCode] = useState("")


   return (
      <div>
         {step === 1 && <SendOtpForm />}
         {step === 2 && <CheckOtpFrom />}
      </div>
   );
}

export default AuthPage;