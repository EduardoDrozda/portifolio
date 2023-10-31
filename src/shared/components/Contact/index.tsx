"use client";

import { Email } from "@shared/types";
import { Controller, useForm } from "react-hook-form";
import { Input } from "..";

type Props = {
  isLoading: boolean;
  handleSendEmail: (v: Email) => void;
};

export function Contact({ isLoading, handleSendEmail }: Props) {
  const { control, handleSubmit } = useForm<Email>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      about: "",
      message: "",
    },
  });

  const onSubmit = (data: Email) => {
    handleSendEmail(data);
  };

  return (
    <section id="contact" className="w-full bg-white py-10 px-5 md:px-40">
      <div className=" bg-background rounded-md shadow-md drop-shadow-sm md:flex p-10">
        <div className="w-full md:w-1/2 md:border-r-primary md:border-x-[0.5px] md:pr-5">
          <h1 className="text-secondary font-bold text-2xl text-center">
            Fale comigo
          </h1>

          <p className="w-full text-black text-md text-center my-5">
            Será um prazer te conhecer
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-y-3 justify-center items-center"
          >
            <div className="w-full flex flex-col gap-y-2 justify-center items-center gap-x-2 md:flex-row md:gap-y-0">
              <Controller
                name="name"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "O campo nome é obrigatório",
                  },
                }}
                render={({ field, fieldState: { invalid, error } }) => (
                  <div className="w-full flex flex-col gap-y-2">
                    <Input
                      label="Nome"
                      placeholder="Digite aqui"
                      type="text"
                      invalid={invalid}
                      {...field}
                    />
                    <span className="text-xs text-red-500">
                      {error?.message}
                    </span>
                  </div>
                )}
              />

              <Controller
                name="email"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "O campo email é obrigatório",
                  },
                  validate: {
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Insira um e-mail válido",
                  },
                }}
                render={({ field, fieldState: { invalid, error } }) => (
                  <div className="w-full flex flex-col gap-y-2">
                    <Input
                      label="Email"
                      placeholder="Digite aqui"
                      type="text"
                      invalid={invalid}
                      {...field}
                    />
                    <span className="text-xs text-red-500">
                      {error?.message}
                    </span>
                  </div>
                )}
              />
            </div>
            <div className="w-full flex flex-col gap-y-2 justify-center items-center gap-x-2 md:flex-row md:gap-y-0">
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "O campo telefone é obrigatório",
                  },
                }}
                render={({ field, fieldState: { invalid, error } }) => (
                  <div className="w-full flex flex-col gap-y-2">
                    <Input
                      label="Telefone"
                      placeholder="(__)_________"
                      type="text"
                      invalid={invalid}
                      {...field}
                    />
                    <span className="text-xs text-red-500">
                      {error?.message}
                    </span>
                  </div>
                )}
              />

              <Controller
                name="about"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "O campo assunto é obrigatório",
                  },
                }}
                render={({ field, fieldState: { invalid, error } }) => (
                  <div className="w-full flex flex-col gap-y-2">
                    <Input
                      label="Assunto"
                      placeholder="Digite aqui"
                      type="text"
                      invalid={invalid}
                      {...field}
                    />
                    <span className="text-xs text-red-500">
                      {error?.message}
                    </span>
                  </div>
                )}
              />
            </div>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Input
                  label="Mensagem"
                  placeholder="Digite um breve texto aqui"
                  textarea
                  {...field}
                />
              )}
            />
            <div className="mt-4 w-full flex justify-center items-center">
              <button
                type="submit"
                className={`bg-primary text-white py-2 px-4 rounded-md w-full md:w-1/4 hover:bg-primary_light active:bg-primary focus:outline-none`}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
