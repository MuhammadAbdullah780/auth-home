import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
// Components
import Button from "@/common/components/Button";
import Heading from "@/common/components/Heading";
import Input from "@/common/components/Input";
// Schema Imports
import { SignUpSchema } from "./schema";
// Hooks
import UseAuth from "@/hooks/UseAuth";

enum FormEnum {
  USERNAME = "username",
  EMAIL = "email",
  PASSWORD = "password",
}

type FormProps = {
  [FormEnum.USERNAME]: string;
  [FormEnum.EMAIL]: string;
  [FormEnum.PASSWORD]: string;
};

const SignUp: React.FC = () => {
  const { SignUp } = UseAuth();
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      [FormEnum.USERNAME]: "",
      [FormEnum.EMAIL]: "",
      [FormEnum.PASSWORD]: "",
    },
  });
  const { handleSubmit } = methods;

  const submit = async (data: FormProps) => {
    const result = await SignUp(data[FormEnum.EMAIL], data[FormEnum.PASSWORD]);
    if (!result) {
      return alert("Something wrong happens");
    }
    sessionStorage.setItem("user", JSON.stringify(result));
    router.push("/");
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full max-w-sm bg-[#191d2b] rounded-sm p-5"
        onSubmit={handleSubmit(submit)}
      >
        <Heading text="Sign Up" />
        <div className="flex flex-col mb-6">
          <Input label={FormEnum.USERNAME} id={FormEnum.USERNAME} type="text" />
          <Input label={FormEnum.EMAIL} id={FormEnum.EMAIL} type="email" />
          <Input
            label={FormEnum.PASSWORD}
            id={FormEnum.PASSWORD}
            type="password"
          />
        </div>
        <div className="flex">
          <div className="w-full">
            <Button type="submit" text="Sign Up" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUp;
