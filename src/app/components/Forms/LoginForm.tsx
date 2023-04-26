"use client";
import React, { useState } from "react";
import InputFieldset from "../InputFieldset";
import ActionButton from "../ActionButton";
import { useRouter } from "next/router";
import Link from "next/link";

interface LoginFormInputValues {
   email: string;
   password: string;
}

const LoginForm = () => {
   const [formValues, setFormValues] = useState<LoginFormInputValues>(
      {} as LoginFormInputValues
   );
   const [isLoading, setIsLoading] = useState<boolean>(false);

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
            onClick={() => {}}
            disabled={!formValues.email || !formValues.password}
            loadingState={isLoading}
         />
         <div className="flex items-center gap-2">
            <span className="flex-1 block border-b border-b-borders-neutral" />
            <p className="text-gray-300">ou</p>
            <span className="flex-1 block border-b border-b-borders-neutral" />
         </div>
         <Link href="/forgot-password">
            <ActionButton
               title="Esqueci minha senha"
               type="secondary"
            />
         </Link>
      </form>
   );
};

export default LoginForm;
