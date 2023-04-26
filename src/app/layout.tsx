import "./globals.css";

export const metadata = {
   title: "Controle de Pedidos de Compra | Tecnomyl Brasil",
   description:
      "Software desenvolvido internamente, pela equipe de T.I. da Tecnomyl Brasil, com foco em controle de pedidos e requisições de compra.",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pt-br">
         <body>{children}</body>
      </html>
   );
}
