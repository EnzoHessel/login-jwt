import { FC } from "react";

interface SubmitButtonProps {
  loading: boolean;
  text: String;
}

const SubmitButton: FC<SubmitButtonProps> = ({ loading, text }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
