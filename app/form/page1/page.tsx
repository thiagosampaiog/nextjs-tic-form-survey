"use client";

import { useState } from "react";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";
import { useRouter } from "next/navigation";
import { z } from "zod";

export default function FirstPage() {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });

  const firstPageFormSchema = z.object({
    question1: z.string().min(3),
    question2: z.string().min(3),
    question3: z.string().min(8),
    question4: z.string().min(4),
  });

  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleNext(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const validatedData = firstPageFormSchema.parse(formData);
      localStorage.setItem("formData", JSON.stringify(validatedData));
    } catch (e: any) {
      console.error("Validation error when saving to localStorage: ", e);
    }
    router.push("/form/page2");
  }

  return (
    <form onSubmit={handleNext}>
      <div className="flex min-h-screen items-center justify-center flex-col gap-10">
        <div className="flex justify-center items-center bg-white shadow-md rounded-lg sm:w-70 md:w-full max-w-md flex-col text-center gap-5 p-6 text-gray-600 px-6">
          <span className="font-bold text-3xl ">Informações Pessoais</span>
          <div className="flex flex-col items-center justify-center gap-5">
            <FormInput
              label="Qual o seu nome?"
              name="question1"
              type="text"
              minLength={3}
              value={formData.question1}
              onChange={handleChange}
            />
            <FormInput
              label="Qual a sua cidade?"
              name="question2"
              type="text"
              minLength={3}
              value={formData.question2}
              onChange={handleChange}
            />
            <FormInput
              label="Qual seu telefone?"
              name="question3"
              type="text"
              minLength={8}
              value={formData.question3}
              onChange={handleChange}
            />
            <FormInput
              label="Qual sua profissão?"
              name="question4"
              type="text"
              minLength={4}
              value={formData.question4}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-50 items-end flex justify-center">
          <FormButton name="Próximo >" onClick={() => {}} type="submit" />
        </div>
      </div>
    </form>
  );
}
