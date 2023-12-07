export default function Header() {
  return (
    <>
      <section className="flex w-screen justify-end fixed bg-opacity-50">
        <button>
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>

        <div>
          <ul className="hidden sm:hidden md:hidden lg:block xl:block">
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>
    </>
  );
}
