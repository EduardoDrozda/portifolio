import { sendEmail } from "@shared/services";
import { Email } from "@shared/types";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

import { ToastContainer, toast } from "react-toastify";

type EmailContext = {
  isLoading: boolean;
  handleSendEmail: (email: Email) => Promise<void>;
};

const EmailContext = createContext<EmailContext>({} as EmailContext);

type Props = {
  children: ReactNode;
};

const DEFAULT_VALUE = {
  isLoading: false,
};

const EmailContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(DEFAULT_VALUE.isLoading);

  const handleSendEmail = useCallback(async (data: Email) => {
    setIsLoading(true);
    await sendEmail(data)
      .then(() => {
        toast.success("Email enviado com sucesso", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(() => {
        toast.error("Houve um erro ao enviar o e-mail, tente novamente", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <EmailContext.Provider
      value={{
        isLoading,
        handleSendEmail,
      }}
    >
      {children}
      <ToastContainer />
    </EmailContext.Provider>
  );
};

function useEmail() {
  const value = useContext(EmailContext);
  if (!value)
    throw new Error("The context need be use with EmailContextProvider");
  return value;
}

export { EmailContextProvider, useEmail };
export default EmailContext;
