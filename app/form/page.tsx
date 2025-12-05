"use client";

import { useRouter } from "next/navigation";
import { FormButton } from "./components/FormButton";
import Container from "./components/Container";

export default function SurveyForm() {
  const router = useRouter();

  function handleClick() {
    router.push("/form/page1");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container>
        <span>
          <h1 className="text-4xl text-gray-700 font-bold ">
            Iniciar Questionário
          </h1>
        </span>
        <FormButton name="Iniciar" onClick={handleClick} type="button" />
      </Container>
    </div>
  );
}
