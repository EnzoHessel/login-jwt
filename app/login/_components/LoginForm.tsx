"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import FormField from "@/components/FormField";
import SubmitButton from "@/components/SubmitButton";
import useApi from "@/lib//hooks/useApi";
import { useToast } from "@/components/ui/use-toast";


const schema = z.object({
  email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres").nonempty("Senha é obrigatória"),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [formError, setFormError] = useState<string | null>(null);
  const { data, loading, error, fetchData } = useApi('/auth/login', 'POST');
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      await fetchData(formData);

      if (error) {
        setFormError("Erro ao enviar o formulário. Por favor, tente novamente.");
        toast({ description: "Erro ao enviar o formulário. Por favor, tente novamente.", variant: "destructive" });
      } else {
        toast({ description: "Login feito com sucesso!", variant: "destructive" });
      }
    } catch (error) {
      console.log("Erro ao enviar a requisição:", error);
      toast({ description: "Erro ao enviar a requisição.", variant: "destructive" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 space-y-5">
      <FormField
        id="email"
        label="Email"
        type="email"
        register={register}
        error={errors.email}
        email={true}
      />
      <FormField
        id="password"
        label="Senha"
        type="password"
        register={register}
        error={errors.password}
        email={false}
      />
      {formError && <div className="text-red-500">{formError}</div>}
      <SubmitButton loading={loading} text={"Login Now"}/>
    </form>
  );
};

export default LoginForm;
