import questionsImage from "../assets/questions.svg";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="font-bold text-3xl sm:text-4xl my-14 w-72 sm:w-112">
        Quiz sobre Video Games
      </h1>
      <img className="mb-14 w-72 sm:w-112" src={questionsImage} alt="Quiz" />
      <p className="text-lg sm:text-xl w-72 sm:w-112 mb-12">
        Acerte 4 das 8 questões para passar no quiz!
        OBS: O quiz é em inglês.
      </p>
      <a className="bg-lavender-floral py-3 px-6 rounded text-lotion sm:text-xl">
        Começar
      </a>
    </div>
  );
}
