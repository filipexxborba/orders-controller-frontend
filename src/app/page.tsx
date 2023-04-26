import LoginForm from "./components/Forms/LoginForm";
import Header from "./components/Header";

export default function Login() {
   return (
      <main className="flex flex-col h-[100vh]">
         <Header />
         <div className="flex items-center justify-center flex-1 w-full">
            <section className="w-[400px] flex flex-col gap-3">
               <h1 className="text-4xl font-medium text-primary">Login</h1>
               <p className="mb-2 text-base text-gray-500">
                  Preencha os campos abaixo com suas informações de acesso. 👇
               </p>
               <LoginForm />
            </section>
         </div>
      </main>
   );
}
