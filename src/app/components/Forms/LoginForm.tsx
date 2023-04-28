"use client";
import React, { useContext, useState } from "react";
import InputFieldset from "../InputFieldset";
import ActionButton from "../ActionButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/context/UserContext";

interface LoginFormInputValues {
   email: string;
   password: string;
}

const LoginForm = () => {
   const [formValues, setFormValues] = useState<LoginFormInputValues>(
      {} as LoginFormInputValues
   );
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [errorMessage, setErrorMessage] = useState<string | null>(null);
   const { setUser, user } = useContext(UserContext);
   const router = useRouter();

   const handleLoginFormSubmit = async () => {
      setErrorMessage(null);
      setIsLoading(true);
      const response = await fetch("/api/auth", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email: formValues.email.toLowerCase(),
            password: formValues.password,
         }),
      });

      const { data } = await response.json();
      if (data.error) setErrorMessage("Usuário ou senha inválidos");
      else {
         setUser(data.user);
         router.push("/home");
      }
      setIsLoading(false);
   };

   return (
      <form className="flex flex-col gap-6">
         <InputFieldset
            id="email"
            title="Email"
            placeholder="Ex: exemplo@exemplo.com"
            state={formValues}
            dispatch={setFormValues}
            type="email"
         />
         <InputFieldset
            id="password"
            title="Senha"
            placeholder="Informa sua senha"
            state={formValues}
            dispatch={setFormValues}
            toggleVisibility
         />
         <ActionButton
            title="Entrar"
            onClick={() => handleLoginFormSubmit()}
            disabled={!formValues.email || !formValues.password}
            loadingState={isLoading}
         />
         {errorMessage && (
            <p className="text-sm text-red-500">{errorMessage}</p>
         )}
         <div className="flex items-center gap-2">
            <span className="flex-1 block border-b border-b-borders-neutral" />
            <p className="text-gray-300">ou</p>
            <span className="flex-1 block border-b border-b-borders-neutral" />
         </div>
         <Link href="/forgot-password">
            <ActionButton title="Esqueci minha senha" type="secondary" />
         </Link>
      </form>
   );
};

export default LoginForm;
