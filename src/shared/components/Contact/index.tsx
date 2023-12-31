"use client";

import { Email } from "@shared/types";
import { Controller, useForm } from "react-hook-form";
import { Input } from "..";
import { Button } from "../Button";

type Props = {
  isLoading: boolean;
  handleSendEmail: (v: Email) => Promise<void>;
};

export function Contact({ isLoading, handleSendEmail }: Props) {
  const { control, handleSubmit, formState } = useForm<Email>({
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
    <section id="contact" className="w-full bg-white py-10 px-5 md:px-48">
      <div className=" bg-background rounded-md shadow-md drop-shadow-sm md:flex p-10">
        <div className="w-full">
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
                      placeholder="Nome"
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
                      placeholder="Email"
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
                      placeholder="Telefone"
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
                      placeholder="Assunto"
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
                <Input placeholder="Mensagem" textarea {...field} />
              )}
            />
            <div className="mt-4 w-full flex justify-center items-center">
              <Button type="submit" isLoading={isLoading}>
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
