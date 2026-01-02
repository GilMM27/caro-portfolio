"use client";

import GradientText from "@/components/GradientText";

export default function Home() {
  return (
    <main className="bg-blue-caro flex-1 font-atkinson px-20 py-44">
      <h1 className="text-8xl font-bold text-white">
        Hola!
        <br />
        Soy Caro Malagamba
      </h1>
      <h2 className="text-tan-caro text-7xl mt-10">
        Me mueve crear experiencias significativas e impactar la vida de las
        personas a través del{" "}
        <GradientText
          animationSpeed={2}
          yoyo={false}
          colors={["#ffffff", "#FFB3B3"]}
        >
          diseño
        </GradientText>
      </h2>
    </main>
  );
}
