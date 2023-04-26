import Image from "next/image";

const Header = () => {
   return (
      <header className="px-6 py-3 border-b border-b-borders-neutral">
         <Image
            src="/tecnomyl-logo-colored.png"
            alt="Logo da Tecnomyl Brasil, na cor verde, escrito Tecnomyl"
            width={200}
            height={50}
         />
      </header>
   );
};

export default Header;
