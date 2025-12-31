import Pill from "@/components/Pill";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";

export default function sobremi() {
  return (
    <main>
      <section className="p-20 bg-linear-to-b from-white via-tan-caro to-white">
        <section className="flex space-x-20 items-center">
          <Image
            src="/cubo.jpg"
            alt="cubo"
            width={3376}
            height={6000}
            className="h-200 max-w-170 object-cover rounded-[50px]"
          />
          <div className="text-3xl ">
            <Subtitle classname="-ml-40 mb-10">Sobre mí</Subtitle>
            <p>
              ¡Hola! Soy Carolina Malagamba, diseñadora industrial recien
              egresada de la Universidad de Monterrey y orgullosamente de
              Ensenada, Baja California. Crecí cerca del mar, y quizá por eso
              creo mucho en el movimiento, el cambio y las ideas que fluyen.
            </p>
            <br />
            <p>
              Me mueve crear experiencias significativas para las personas e
              impactar positivamente su vida a través del diseño. Pienso en el
              diseño como una herramienta de cambio: puede acompañar, sanar,
              jugar, provocar conversaciones y conectar a las personas entre sí.
            </p>
            <br />
            <p>
              Hoy estoy enfocada en seguir aprendiendo, explorando nuevas
              disciplinas y expandiendo mi caja de herramientas creativas. Me
              apasiona la industria musical, el arte y los proyectos sociales.
            </p>
          </div>
        </section>
        <Image
          src="/cm.png"
          alt="cm logo"
          width={910}
          height={567}
          className="h-36 object-contain w-fit -mt-20 -ml-13 -rotate-12"
        />
      </section>
      <section className="grid grid-cols-2 mx-20 gap-10">
        <div className="space-y-10 text-4xl">
          <Subtitle>Educación</Subtitle>
          <Pill>2021 - 2025</Pill>
          <p className="-mt-4">
            <span className="font-bold">Universidad de Monterrey (UDEM)</span>{" "}
            <br />
            Licenciatura en Diseño Industrial <br />
            Beca de excelencia académica 90% <br />
            Promedio acumulado de 96.97
          </p>
          <Subtitle>Experiencia formativa</Subtitle>
        </div>
        <div>
          <Subtitle>Experiencia laboral</Subtitle>
        </div>
      </section>
      <section className="mt-20"></section>
    </main>
  );
}
