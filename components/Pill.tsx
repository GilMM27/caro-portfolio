export default function Pill({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return (
    <div
      className={`border-2 border-black rounded-[50px] w-fit px-5 py-3 text-2xl ${classname}`}
    >
      {children}
    </div>
  );
}
