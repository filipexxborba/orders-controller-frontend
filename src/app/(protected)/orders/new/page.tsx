"use client";
import PageHeader from "@/app/components/PageHeader";
import { ChangeEvent, useState } from "react";
import {
   AlignLeft,
   CopyPlus,
   MessageSquare,
   Paperclip,
   ShoppingCart,
} from "lucide-react";
import SelectFieldset from "@/app/components/SelectFieldset";
import { Options } from "react-select";
import AttachmentItem from "@/app/components/AttachmentItem";
import Modal from "@/app/components/Modal";
import InputFieldset from "@/app/components/InputFieldset";
import React from "react";

const Page = () => {
   const defaultOptions: Options<any> = [
      { value: "1", label: "Teste - 1" },
      { value: "2", label: "Teste - 2" },
      { value: "3", label: "Teste - 3" },
      { value: "4", label: "Teste - 4" },
   ];
   const [formValues, setFormValues] = React.useState<any>({});
   const [attachments, setAttachments] = React.useState<any[]>([]);
   const [isModalVisible, setIsModalVisible] = React.useState<boolean>(true);
   const [newItemFormValues, setNewItemFormValues] = React.useState<any>({});

   const handleAttachmentsChange = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
         const filesList = [];
         for (const file of files) {
            filesList.push({
               name: transformNameAttachment(file.name),
               type: file.type,
            });
         }
         setAttachments([...attachments, ...filesList]);
      }
   };

   const transformNameAttachment = (name: string) => {
      const last4 = name.substring(name.length - 4);
      console.log(name, last4);
      if (name.length <= 9) return name;
      // Will return the name of the file with first 5 letters and the extension

      return `${name.substring(0, 5)}...${last4}`;
   };
   return (
      <section className="flex flex-col">
         <PageHeader
            title="Novo pedido"
            icon={<ShoppingCart size={24} className="text-primary" />}
         />
         <div className="flex flex-col gap-8 p-8 mx-6 mb-6 bg-white border rounded-2xl border-borders-neutral">
            <section className="flex flex-col items-start gap-6 p-6 border rounded-2xl border-borders-neutral">
               <div className="flex flex-col gap-1">
                  <div className="flex items-start gap-2">
                     <ShoppingCart size={14} className="mt-2" />
                     <h2 className="mb-2 text-xl font-medium text-gray-800">
                        Informações básicas
                     </h2>
                  </div>
                  <p className="text-sm font-normal text-gray-800">
                     Preencha as informações nos formulários abaixo.
                  </p>
               </div>
               <div className="grid grid-cols-3 gap-8">
                  <SelectFieldset
                     options={defaultOptions}
                     id="manager"
                     title="Responsável"
                     state={formValues}
                     dispatch={setFormValues}
                  />
                  <SelectFieldset
                     options={defaultOptions}
                     id="createUser"
                     title="Solicitante"
                     state={formValues}
                     dispatch={setFormValues}
                  />
                  <SelectFieldset
                     options={defaultOptions}
                     id="costCenter"
                     title="Centro de custo"
                     state={formValues}
                     dispatch={setFormValues}
                  />
               </div>
            </section>
            <section className="flex flex-col items-start gap-6 p-6 border rounded-2xl border-borders-neutral">
               <div className="flex flex-col gap-1">
                  <div className="flex items-start gap-2">
                     <AlignLeft size={14} className="mt-2" />
                     <h2 className="mb-2 text-xl font-medium text-gray-800">
                        Lista de produtos
                     </h2>
                  </div>
                  <p className="text-sm font-normal text-gray-800">
                     Insira todos os produtos dessa nova solicitação de compra.
                  </p>
               </div>
               <h2>teste</h2>
            </section>

            <section className="flex flex-col items-start gap-6 p-6 border rounded-2xl border-borders-neutral">
               <div className="flex flex-col gap-1">
                  <div className="flex items-start gap-2">
                     <MessageSquare size={14} className="mt-2" />
                     <h2 className="mb-2 text-xl font-medium text-gray-800">
                        Comentários
                     </h2>
                  </div>
                  <p className="text-sm font-normal text-gray-800">
                     Caso você deseja comentar, preencha o campo abaixo.
                  </p>
               </div>
               <fieldset className="flex flex-col items-start w-full gap-1">
                  <textarea
                     className="w-full px-4 py-2 text-gray-500 border rounded-md border-borders-neutral placeholder:text-borders-neutral focus:border-primary focus:outline-none"
                     placeholder="Digite aqui sua observação ou qualquer informação que você acha importante o responsável estar ciente"
                  />
               </fieldset>
            </section>
            <section className="flex flex-col items-start gap-6 p-6 border rounded-2xl border-borders-neutral">
               <div className="flex flex-col gap-1">
                  <div className="flex items-start gap-2">
                     <Paperclip size={14} className="mt-2" />
                     <h2 className="mb-2 text-xl font-medium text-gray-800">
                        Anexos
                     </h2>
                  </div>
                  <p className="text-sm font-normal text-gray-800">
                     Estes anexos ficaram disponíveis para todos que acessarem a
                     solicitação de compra. Para remover, basta clicar sobre o
                     anexo.
                  </p>
               </div>

               <fieldset className="flex flex-col items-start w-full gap-1">
                  <label htmlFor="images" className="drop-container">
                     <span className="drop-title">Solte os arquivos aqui</span>
                     ou
                     <input
                        type="file"
                        id="images"
                        accept=".jpg, .jpeg, .png, .gif, .pdf, .docx"
                        multiple
                        onChange={(event) => handleAttachmentsChange(event)}
                     />
                  </label>
               </fieldset>
               <div className="grid grid-cols-12 gap-4 px-6">
                  {attachments &&
                     attachments.length > 0 &&
                     attachments.map((attachment, index) => (
                        <AttachmentItem
                           index={index}
                           name={attachment.name}
                           key={index}
                           state={attachments}
                           dispatch={setAttachments}
                        />
                     ))}
               </div>
            </section>
         </div>
         <Modal
            title="Cadastrar novo produto"
            headerIcon={<CopyPlus className="text-gray-700" />}
            onYesFunction={() => console.log("ok")}
            onClose={() => setIsModalVisible(false)}
            isVisible={isModalVisible}
            cancelButtonMessage="Cancelar"
            confirmButtonMessage="Adicionar produto"
         >
            <div className="grid grid-cols-2 gap-4">
               <div className="col-span-2">
                  <InputFieldset
                     dispatch={setNewItemFormValues}
                     id="title"
                     state={newItemFormValues}
                     placeholder="Insira o nome do produto"
                     title="Nome do produto"
                  />
               </div>
               <div className="col-span-2">
                  <InputFieldset
                     dispatch={setNewItemFormValues}
                     id="url"
                     state={newItemFormValues}
                     placeholder="https://example.com"
                     title="URL"
                  />
               </div>
               <InputFieldset
                  dispatch={setNewItemFormValues}
                  id="quantity"
                  state={newItemFormValues}
                  title="Quantidade"
                  type="number"
               />
               <InputFieldset
                  dispatch={setNewItemFormValues}
                  id="price"
                  state={newItemFormValues}
                  title="Preço (R$)"
                  type="number"
               />
            </div>
         </Modal>
      </section>
   );
};

export default Page;
