"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import FormField from "@/components/FormField";
import SubmitButton from "@/components/SubmitButton";
import useApi from "@/lib/hooks/useApi";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres").nonempty("Senha é obrigatória"),
  confirmPassword: z.string().min(6, "Senha deve ter no mínimo 6 caracteres").nonempty("Confirmação de senha é obrigatória"),
}).refine(data => data.password === data.confirmPassword, {
  message: "As senhas não são iguais",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;

const SignupForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [formError, setFormError] = useState<string | null>(null);
  const { data, loading, error, fetchData } = useApi('/auth/register', 'POST');
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    const { confirmPassword, ...submissionData } = formData;
    await fetchData(submissionData);

    if (error) {
      setFormError("Erro ao enviar o formulário. Por favor, tente novamente.");
      toast({ description: "Erro ao enviar o formulário. Por favor, tente novamente.", variant: "destructive" });
    } else {
      toast({ description: "Cadastro realizado com sucesso!", variant: "default" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 space-y-5">
      <FormField
        id="name"
        label="Name"
        type="text"
        register={register}
        error={errors.name}
      />
      <FormField
        id="email"
        label="Email"
        type="email"
        register={register}
        error={errors.email}
      />
      <FormField
        id="password"
        label="Senha"
        type="password"
        register={register}
        error={errors.password}
      />
      <FormField
        id="confirmPassword"
        label="Confirmar Senha"
        type="password"
        register={register}
        error={errors.confirmPassword}
      />
      {formError && <div className="text-red-500">{formError}</div>}
      <SubmitButton loading={loading} text={"Sign up"}/>
    </form>
  );
};

export default SignupForm;
