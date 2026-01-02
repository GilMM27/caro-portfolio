import Pill from "@/components/Pill";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

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
      <section className="mx-20 text-3xl">
        <section className="grid grid-cols-2 gap-10">
          <div className="space-y-10">
            <Subtitle>Educación</Subtitle>
            <Pill>2021 - 2025</Pill>
            <div className="-mt-4">
              <span className="font-bold">Universidad de Monterrey (UDEM)</span>
              <br />
              Licenciatura en Diseño Industrial
              <br />
              Beca de excelencia académica 90%
              <br />
              Promedio acumulado de 96.97
            </div>
            <Pill>2019 - 2021</Pill>
            <div className="-mt-4">
              <span className="font-bold">Preparatoria CETYS Universidad</span>
              <br />
              Ensenada, Baja California
              <br />
              Bachillerato Bilingüe
              <br />
            </div>
            <Subtitle>Experiencia formativa</Subtitle>
            <Pill>ene2025 - dic2025</Pill>
            <div className="-mt-4">
              <span className="font-bold">
                Programa de Formadores de Grupos Estudiantiles
              </span>
              <br />
              Programa institucional de liderazgo y acompañamiento académico
              enfocado en el desarrollo humano de la comunidad universitaria.
            </div>
            <Pill>ene2023 - dic2023</Pill>
            <div className="-mt-4">
              <span className="font-bold">CampusLife UDEM</span>
              <br />
              Presidenta del grupo estudiantil más grande de la UDEM. Promueve
              el sentido de pertenencia.
            </div>
            <div className="-mt-4">
              <span className="font-bold">JUXNL UDEM</span>
              <br />
              Comunicación e imágen de un grupo estudiantil enfocado en el
              servicio a la comunidad.
            </div>
            <div className="-mt-4">
              <span className="font-bold">Redes CELES UDEM</span>
              <br />
              Desarrollo de contenido y estrategia de las redes sociales del
              Centro de Liderazgo de la UDEM.
            </div>
            <Pill>ene2022 - dic2022</Pill>
            <div className="-mt-4">
              <span className="font-bold">CampusLife UDEM</span>
              <br />
              Responsable de actividades formativas.
            </div>
          </div>
          <div className="space-y-10">
            <Subtitle>Experiencia laboral</Subtitle>
            <Pill>dic2024 - presente</Pill>
            <div className="-mt-4">
              <span className="font-bold">AG Media</span>
              <br />
              Diseñadora de contenido
              <ul className="list-disc list-inside">
                <li>Revisión de contenido</li>
                <li>Administración</li>
                <li>
                  Diseño de miniaturas y publicaciones para redes sociales
                </li>
              </ul>
            </div>
            <Pill>ene2025 - sep2025</Pill>
            <div className="-mt-4">
              <span className="font-bold">Baja Norte Brand</span>
              <br />
              Community Manager / Diseño de contenido
              <ul className="list-disc list-inside">
                <li>Manejo de redes sociales</li>
                <li>Creación de contenido</li>
                <li>Planeaciones</li>
              </ul>
            </div>
            <Pill>ene2024 - jun2025</Pill>
            <div className="-mt-4">
              <span className="font-bold">Residencias UDEM</span>
              <br />
              Residente formador. Trabajo medio tiempo
              <ul className="list-disc list-inside">
                <li>Función administrativa</li>
              </ul>
              {">"} Regulación de los estándares de vida comunitaria
              <br />
              {">"} Check ins y Check outs
              <br />
              {">"} Inspecciones
              <ul className="list-disc list-inside">
                <li>Función de acompañamiento</li>
              </ul>
              {">"} Orientación a Nuevo Ingreso
              <br />
              {">"} Actividades semanales
              <br />
              {">"} Club de cerámica para residentes
              <br />
              {">"} Primeros auxilios psicológicos
            </div>
          </div>
        </section>
        <section className="mt-20">
          <Subtitle>Skills</Subtitle>
          <div className="grid grid-cols-4 my-10">
            <ul className="list-disc list-inside">
              <li>Disciplina</li>
              <li>Proactividad</li>
              <li>Comunicación</li>
              <li>Trabajo en equipo</li>
              <li>Liderazgo</li>
              <li>Adaptabilidad</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Atención al detalle</li>
              <li>Organización</li>
              <li>Pasión</li>
              <li>Amabilidad</li>
              <li>Resolución de conflictos</li>
              <li>Inteligencia emocional</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Fusion 360</li>
              <li>Rhino 8</li>
              <li>Adobe Illustrator</li>
              <li>Adobe InDesign</li>
              <li>Adobe Premier Pro</li>
              <li>Adobe Lightroom</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Redes sociales</li>
              <li>Creación de contenido</li>
              <li>CapCut</li>
              <li>Canva</li>
              <li>Microsoft Office</li>
              <li>Diseño editorial</li>
            </ul>
          </div>
        </section>
        <section className="mt-20">
          <Subtitle>Contacto</Subtitle>
          <div className="my-10">
            <a
              href="mailto:carolinamalagambam@gmail.com"
              className="text-5xl hover:underline"
            >
              carolinamalagambam@gmail.com
            </a>
            <div className="flex space-x-10 mt-5 text-7xl">
              <a
                href="https://www.instagram.com/caromalagamba/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-caro"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/carolina-malagamba-montejo-a4664a277/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-caro"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
