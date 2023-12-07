import Link from "next/link";

export default function MisExperiencias() {
  return (
    <section className="bg-gradient-to-tr from-red-950 via-black to-red-950 h-auto w-screen p-8">
      <div>
        <h1 className="text-4xl font-bold text-center">
          Mis experiencias laborales <span className="text-red-500">.</span>
        </h1>
      </div>

      <section className="sm:flex sm:flex-wrap sm:flex-row sm:justify-around">
      <article
          className="
      overflow-hidden rounded-lg border border-red-500 shadow-sm my-4
      sm:w-64 sm:h-auto
      "
        >
          <img
            alt="Office"
            src="/Capturadepantalla(26).png"
            className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-white">Landing Page</h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Tecnologias: HTML, CSS y JS
            </p>

            <Link
              href="https://globalsolidarity.live/"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Mira mas!
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </article>

        <article
          className="
      overflow-hidden rounded-lg border border-red-500 shadow-sm my-4
      sm:w-64 sm:h-auto
      "
        >
          <img
            alt="Office"
            src="/Capturadepantalla(27).png"
            className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-white">Landing Page</h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Tecnologias: HTML, CSS y JS
            </p>

            <Link
              href="http://spacearch.solutions/"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Mira mas!
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </article>
        <article
          className="
      overflow-hidden rounded-lg border border-red-500 shadow-sm my-4
      sm:w-64 sm:h-auto
      "
        >
          <img
            alt="Office"
            src="/Capturadepantalla(28).png"
            className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-white">Landing Page</h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Tecnologias: React
            </p>

            <Link
              href="https://proyecto15.ecolan.com/"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Mira mas!
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </article>
      </section>
    </section>
  );
}
