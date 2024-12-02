"use client";

import {
  RHFFormDropdownField,
  RHFInputField,
  RHFNumberField,
  RHFRadioGroup,
  SubmitButton,
} from "@/components";
import CONFIG from "@/config";
import axios from "axios";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type SignUpFormType = {
  first_name: string;
  last_name: string;
  gender_id: string;
  email: string;
  country_id: string;
  mobile_number: string;
};

const DEFAULT_VALUES = {
  first_name: "",
  last_name: "",
  gender_id: "",
  email: "",
  country_id: "",
  mobile_number: "",
};

const PreRegisterForm = ({
  countries,
  genders,
}: {
  countries: any[];
  genders: any[];
}) => {
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  const methods = useForm<SignUpFormType>({
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = async (data: SignUpFormType) => {
    try {
      setDisableSubmit(true);
      const registrationResponse = await axios.post(
        `${CONFIG.apiUrl}/pre-user-registration`,
        data
      );
      if (registrationResponse.data.success) {
        toast.success("Thank you for signing up! You’ve been added to our list and will be the first to know when we launch!");
        methods.reset(DEFAULT_VALUES);
      } else {
        toast.error(
          registrationResponse.data.message || "Something went wrong!"
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setDisableSubmit(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="grid gap-5 md:grid-cols-2">
            <RHFInputField
              name="first_name"
              className="!bg-transparent border-indigo-600"
              label="First Name"
              required
            />
            <RHFInputField
              name="last_name"
              className="!bg-transparent border-indigo-600"
              label="Last Name"
              required
            />
          </div>
          <div className="grid gap-5">
            <RHFInputField
              name="email"
              label="Email Address"
              required
              type="email"
              className="!bg-transparent border-indigo-600"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-[120px_auto]">
            <RHFFormDropdownField
              label="Phone Code"
              name="country_id"
              placeholder=""
              options={countries}
              isClearable={false}
              required
              className="!bg-transparent !border-indigo-600 focus:!border-indigo-600 !text-gray-100"
            />
            <RHFNumberField
              name="mobile_number"
              label="Phone Number"
              className="!bg-transparent border-indigo-600 focus:border-indigo-600"
              required
            />
          </div>
          <RHFRadioGroup
            name="gender_id"
            label="Gender"
            options={genders}
            required
            className="bg-transparent"
          />
        </div>
        <div className="flex items-center justify-end mt-6">
          <SubmitButton label="Sign Up" disabled={disableSubmit} />
        </div>
      </form>
    </FormProvider>
  );
};

export default PreRegisterForm;
