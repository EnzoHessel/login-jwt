"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import FormField from "@/components/FormField";
import SubmitButton from "@/components/SubmitButton";
import { loginUser } from "@/services/auth"; // Importe a função de login
import { useToast } from "@/components/ui/use-toast";

// Schema de validação usando Zod
const schema = z.object({
  email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres").nonempty("Senha é obrigatória"),
});

type FormData = z.infer<typeof schema>;

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [formError, setFormError] = useState<string | null>(null);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      const data = await loginUser(formData.email, formData.password);
      toast({
        description: "Você foi autenticado com sucesso!",
        variant: "default",
      });
      localStorage.setItem('token', data.token);
    } catch (error) {
      setFormError("Erro ao fazer login. Por favor, tente novamente.");
      toast({
        description: "Erro ao fazer login. Por favor, tente novamente.",
        variant: "destructive",
      });
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
      />
      <FormField
        id="password"
        label="Senha"
        type="password"
        register={register}
        error={errors.password}
      />
      {formError && <div className="text-red-500">{formError}</div>}
      <SubmitButton loading={false} text="Login Now" />
    </form>
  );
};

export default LoginForm;
