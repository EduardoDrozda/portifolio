import { sendEmail } from "@shared/services";
import { Email } from "@shared/types";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

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
    try {
      setIsLoading(true);
      await sendEmail(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <EmailContext.Provider
      value={{
        isLoading,
        handleSendEmail,
      }}
    >
      {children}
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
