"use client";

import { useState } from "react";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";
import { useRouter } from "next/navigation";
import { z } from "zod";

export default function SecondPage() {
  const router = useRouter();

  const previousFormData = JSON.parse(localStorage.getItem("formData") ?? "");

  const secondPageformSchema = z.object({
    question1: z.string().min(3),
    question2: z.string().min(3),
    question3: z.string().min(8),
    question4: z.string().min(4),
    question5: z.string().min(2),
    question6: z.string(),
    question7: z.string(),
    question8: z.string(),
    question9: z.string(),
  });

  type FormData = z.infer<typeof secondPageformSchema>;

  const [formData, setFormData] = useState<FormData>({
    ...previousFormData,
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    question11: "",
    question12: "",
    question13: "",
    question14: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const validatedData = secondPageformSchema.parse(formData);
      localStorage.setItem("formData", JSON.stringify(validatedData));
    } catch (e: any) {
      console.error("Validation error when saving to localStorage: ", e);
    }

    router.push("/form/success");
  }

  function handleBack() {
    router.push("/form/page1");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex min-h-screen items-center justify-center flex-col gap-10">
        <div className="flex justify-center items-center bg-white shadow-md rounded-lg sm:w-70 md:w-full max-w-md flex-col text-center gap-5 p-6 text-gray-600 px-6">
          <span className="font-bold text-3xl">Tecnologia em casa</span>
          <div className="flex flex-col items-center justify-center gap-5">
            <FormInput
              label="Quais aparelhos você tem em casa?"
              name="question5"
              type="text"
              value={formData.question5}
              onChange={handleChange}
            />
            <FormInput
              label="Você tem internet banda larga?"
              name="question6"
              type="text"
              value={formData.question6}
              onChange={handleChange}
            />
            <FormInput
              label="Quantos smartphones?"
              name="question7"
              type="number"
              value={formData.question7}
              onChange={handleChange}
            />
            <FormInput
              label="Possui smart TV?"
              name="question8"
              type="text"
              value={formData.question8}
              onChange={handleChange}
            />
            <FormInput
              label="Usa assistente por voz?"
              name="question9"
              type="text"
              value={formData.question9}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center gap-5 md:justify-between sm:w-100 md:w-100">
          <FormButton name="< Voltar" onClick={handleBack} type="button" />
          <FormButton name="Enviar" onClick={() => {}} type="submit" />
        </div>
      </div>
    </form>
  );
}
