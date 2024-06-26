'use client';

import Modal from "./Modal";

import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
      const SignupModal = useSignupModal()

      const content = (
        <>
        <h2 className="mb-6 text-2xl">Enter Your Details</h2>

        <form className="space-y-4">
           <input placeholder="Your e-mail address " type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"/>

           <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"/>

           <input placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"/>

           <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                The error message
           </div>

           <CustomButton
                 label="Submit"
                 onClick={()=> console.log('Test')}
                 /> 
        </form>
        </>
      )


    return (
        <Modal
          isOpen={SignupModal.isOpen}
          close={SignupModal.close}
          label="Sign up"
          content={content}
          />
    )
}

export default SignupModal;