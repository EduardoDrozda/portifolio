import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="w-full pt-8 pb-[150px] px-5 text-justify bg-white"
    >
      <h1 className="text-secondary font-bold text-2xl text-center mb-10">
        É um prazer te conhecer
      </h1>
      <div className="flex flex-col gap-y-10 w-full py-10 px-5 text-justify bg-white md:px-72 md:flex-row md:gap-x-36">
        <div className="w-full flex-col justify-center items-center md:w-1/4 flex">
          <Image
            src="/images/me2.jpeg"
            width={450}
            height={450}
            alt="Image of Eduardo Drozda"
            className="rounded-full border-primary border-2"
          />
        </div>
        <div className="w-full md:w-3/4">
          <p className="w-full text-black text-md">
            Olá, meu nome é Eduardo Drozda, um engenheiro de software sênior com
            especialização em Javascript e uma paixão por aprimorar a
            Experiência do Usuário (UX). Possuo uma sólida experiência de
            aproximadamente 7 anos no setor de tecnologia. Minha atuação
            profissional se destaca por projetos de larga escala, com foco na
            manipulação de grandes volumes de dados.
          </p>

          <br />

          <p className="w-full text-black text-md">
            Durante minha trajetória, tive a oportunidade de colaborar com
            instituições financeiras de grande renome, incluindo o Itaú e o BS2.
            Nestas organizações, desempenhei um papel fundamental na aplicação
            de práticas avançadas em Javascript na construção de interfaces web
            com o intuito de aprimorar cada vez mais a expência do usuário
          </p>
          <br />

          <p className="w-full text-black text-md">
            Além disso, sou formado em Engenharia de Software, o que solidificou
            minha base de conhecimento técnico e minha capacidade de resolver
            desafios complexos no âmbito do desenvolvimento de software.
          </p>

          <br />

          <p className="w-full text-black text-md">
            Atualmente, ocupo a posição de engenheiro de software na Picpay,
            onde continuo a aprimorar minhas habilidades técnicas, implementando
            inovações em soluções financeiras e tecnológicas. Minha missão é
            perpetuamente buscar a harmonia entre funcionalidade técnica de alto
            nível e a melhoria da experiência do usuário, elevando a qualidade
            da experiência digital a um novo patamar.
          </p>
        </div>
      </div>
    </section>
  );
}
