export function Footer() {
  return (
    <footer className="bg-primary w-full flex flex-col justify-center items-center p-10">
      <h1 className="text-white text-xl font-bold text-center italic">
        &quot;É fácil evitar erros; basta não fazer nada. <br /> Mas isso seria
        o maior erro de todos.&quot; - Dan Tocchini
      </h1>
      <span className="mt-4 text-center text-sm text-white font-light">
        Copyright &copy; {new Date().getFullYear()} Eduardo Drozda
      </span>
    </footer>
  );
}
