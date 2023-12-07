import Image from "next/image";

export default function SobreMi() {
  return (
    <section className="bg-gradient-to-tr text-gray-300 from-red-950 via-black to-red-950 text-left px-5">
      <div className="pb-8 pt-8">
        <h1 className="text-4xl font-bold md:px-8 lg:px-12">
          Sobre mi <span className="text-red-500">.</span>
        </h1>
      </div>
      <div>
        <p className="text-2xl md:px-8 lg:px-12">
          Hola! Mi nombre es Matias Correa, soy un desarrollador FullStack que
          vive en Argentina. Actualmente estoy terminando la Diplomatura en
          Next.JS y MDP Programa. Mis habilidades más fuertes son HTML, CSS y
          JavaScript, estoy constantemente expandiendo mis conocimientos con
          nuevas tecnologías y herramientas. También cuento con experiencia
          usando frameworks como Next.JS y Angular.
        </p>
      </div>
      <section className="lg:flex lg:justify-around">
      <div className="md:pl-8 lg:pl-12">
        <p className="text-3xl font-bold mt-12 mb-2 ">Educacion:</p>
        <ul className="
        text-gray-300 list-disc pl-4 sm:flex sm:justify-around sm:text-lg
        lg:flex-col
        ">
          <li className="text-2xl sm:text-base">
            Diplomatura en Next.js
            <br />
            <span className="text-gray-600">
              Universidad Tecnologica Nacional
              <br />
              <span>2023-2023</span>
            </span>
          </li>
          <li className="text-2xl sm:text-base">
            Tecnicatura en Programacion
            <br />
            <span className="text-gray-600">
              Universidad Tecnologica Nacional
              <br />
              <span>2023-Presente</span>
            </span>
          </li>
        </ul>
      </div>

      <div className="md:px-8">
        <p className="text-3xl font-bold mt-12 mb-2 ">Tecnologias:</p>

        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={"/html-52732337.svg"} width={44} height={48} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={"/css-8e01670c.svg"} width={44} height={48} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={"/javascript-0ac5e3cc.svg"} width={44} height={48} alt="Javascript" />
            <p>Javascript</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={"/Typescript_logo_2020.svg.png"} width={44} height={48} alt="Typescript" />
            <p>Typescript</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={"/Logo_C_sharp.svg.png"} width={44} height={48} alt="Typescript" />
            <p>C#</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={"/react-9fe43511.svg"} width={44} height={48} alt="React" />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={"/1657707878-nextjs_logo.png"} width={44} height={48} alt="React" />
            <p>Next.JS</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={"/Angular_full_color_logo.svg.png"} width={52} height={56} alt="React" />
            <p>Angular</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={"/tailwind-2a43431b.svg"} width={44} height={48} alt="React" />
            <p>Tailwind</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={"/git-3f0b1bae.svg"} width={44} height={48} alt="React" />
            <p>Git</p>
          </div>
        </div>
      </div>
      </section>

      <style jsx>{`
        li::marker {
          color: #ff0000;
        }
      `}</style>
    </section>
  );
}
