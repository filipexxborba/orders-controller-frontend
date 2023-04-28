"useClient";
import { Lock } from "lucide-react";
import { useState } from "react";
import InputFieldset from "./InputFieldset";

interface UserFormValues {
   password: string;
   password_confirmation: string;
}

const UserPasswordChange = () => {
   const [formValues, setFormValues] = useState<UserFormValues>(
      {} as UserFormValues
   );
   return (
      <section className="flex flex-col items-start gap-6 p-6 border rounded-2xl border-borders-neutral">
         <div className="flex items-start gap-2">
            <Lock size={14} className="mt-2" />
            <h2 className="mb-2 text-xl font-medium text-gray-800">
               Informações de acesso
            </h2>
         </div>
         <div className="grid grid-cols-2 gap-8">
            <InputFieldset
               id="password"
               dispatch={setFormValues}
               state={formValues}
               title="Nova senha"
               placeholder="Digite a nova senha"
               toggleVisibility
            />
            <InputFieldset
               id="password_confirmation"
               dispatch={setFormValues}
               state={formValues}
               title="Repita a senha"
               placeholder="Repita a nova senha"
               toggleVisibility
            />
         </div>
      </section>
   );
};

export default UserPasswordChange;
