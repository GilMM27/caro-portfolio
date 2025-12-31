export default function Subtitle({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return (
    <div
      className={`bg-blue-caro rounded-2xl w-fit px-10 py-5 text-white font-bold text-4xl shadow-2xl ${classname}`}
    >
      {children}
    </div>
  );
}
