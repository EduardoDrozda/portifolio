import Image from "next/image";

export function About() {

  return (
    <section id="about" className="w-full py-8 px-5 text-justify bg-white">
      <h1 className="text-secondary font-bold text-2xl text-center mb-10">
        Nice to meet you
      </h1>
      <div className="flex flex-col gap-y-10 w-full py-10 px-5 text-justify bg-white lg:px-72 lg:flex-row lg:gap-x-36">
        <div className="w-full flex-col justify-center items-center lg:w-1/4 flex">
          <Image
            src="/images/me2.jpeg"
            width={450}
            height={450}
            alt="Image of Eduardo Drozda"
            className="rounded-full border-primary border-2"
          />
        </div>
        <div className="w-full lg:w-3/4">
          <p className="w-full text-black text-md">
            A dedicated professional with 7+ years of experience in Web/Mobile
            development. My journey has spanned diverse tech landscapes,
            contributing to the success of organizations I&apos;ve served.
          </p>

          <br />

          <p className="w-full text-black text-md">
            My career highlights include groundbreaking projects like an
            Angular/Node.js-based online bidding system, a dynamic JSON-driven
            form generator using Angular, and microservices architecture
            employing Node.js/Nest.js. I&apos;ve also contributed to
            barcode-based appointment tracking for doctors using React Native,
            among other endeavors.
          </p>
          <br />
          <p className="w-full text-black text-md">
            One pivotal achievement is the Dynamic Form Generator, spotlighting
            my architectural prowess. Leading both its development and a team of
            experts underscored my industry presence.
          </p>

          <p className="w-full text-black text-md">
            Proficient in Frontend, Backend, and Mobile Development, my passion
            for growth keeps me aligned with market trends. My skills shine in
            Angular, Node.js (Express/Nest.js), React, and React Native.
          </p>
        </div>
      </div>
    </section>
  );
}
