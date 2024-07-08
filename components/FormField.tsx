import { LockKeyhole, Mail } from "lucide-react";
import { FC } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  email?: Boolean;
}

const FormField: FC<FormFieldProps> = ({ id, label, type, register, error, email }) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      <div className="flex justify-center items-center bg-gray-200 text-black rounded-xl min-w-[340px] mt-1">
        <input
          type={type}
          id={id}
          {...register(id)}
          className="w-full px-3 py-2 rounded-md bg-gray-200 text-black sm:text-sm outline-none"
        />
        <div className="bg-purple-700 p-3 rounded-xl">
          {email ? <Mail className="text-white"/> : <LockKeyhole className="text-white"/>}
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default FormField;
