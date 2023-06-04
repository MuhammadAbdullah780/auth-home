import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
// Components
import Button from "@/common/components/Button";
import Heading from "@/common/components/Heading";
import Input from "@/common/components/Input";
// Schema Import
import { LogInSchema } from "./schema";
// Hook Imports
import UseAuth from "@/hooks/UseAuth";

enum FormEnum {
  EMAIL = "email",
  PASSWORD = "password",
}

type FormProps = {
  [FormEnum.EMAIL]: string;
  [FormEnum.PASSWORD]: string;
};

const LogIn: React.FC = () => {
  const { SignIn } = UseAuth();
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(LogInSchema),
    defaultValues: {
      [FormEnum.EMAIL]: "",
      [FormEnum.PASSWORD]: "",
    },
  });

  const { handleSubmit } = methods;

  const submit = async (data: FormProps) => {
    const result = await SignIn(data[FormEnum.EMAIL], data[FormEnum.PASSWORD]);
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
        <Heading text="Log In" />
        <div className="flex flex-col mb-6">
          <Input
            label={FormEnum.EMAIL}
            type={FormEnum.EMAIL}
            id={FormEnum.EMAIL}
          />
          <Input
            label={FormEnum.PASSWORD}
            type={FormEnum.PASSWORD}
            id={FormEnum.PASSWORD}
          />
        </div>
        <div className="flex">
          <div className="w-full">
            <Button type="submit" text="Log In" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default LogIn;
