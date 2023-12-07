import Image from "next/image";

export default function Presentacion() {
  return (
    <main className="
    bg-gradient-to-tl flex flex-col justify-center items-center from-red-950 via-black to-red-950 h-auto w-screen py-5
    lg:flex lg:flex-row-reverse lg:justify-around
    ">
      <div>
        <Image
          src="/Yo.jpg"
          width={240}
          height={240}
          class="w-60 border-8 border-red-500 border-solid border-primary md:w-80 animate-radiusMorph select-none bg-white"
          style={{
            borderRadius: "47% 53% 53% 47% / 46% 47% 53% 54%",
          }}
        />
      </div>
      <div className="text-center">
        <p className="dark:text-gray-100 text-xl md:text-2xl xl:text-3xl">Hola, soy Mati ✌</p>
        <h4 className="text-2xl text-red-500 scale-110 sm:scale-100 sm:text-3xl font-bold md:text-4xl xl:text-5xl">
          Desarrollador FullStack
        </h4>
        <p className="dark:text-gray-100 text-xl font-semiboldd md:text-2xl xl:text-3xl">Apasionado del Desarrollo Web</p>
      </div>
    </main>
  );
}
