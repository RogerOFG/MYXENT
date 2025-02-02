import Image from "next/image";

const url = "/img"

export default function Home() {
  return (
    <>
      <div className="max-w-[90%] m-auto py-16 text-center">
        <h2 className="text-5xl font-bold">Bienvenidos a MyXENT</h2>
        <h3 className="pt-16 pb-4 text-3xl">Blog personal</h3>
        <p className="w-[750px] max-w-full m-auto text-lg">Hola, este es un blog diseñado para hablar sobre tecnologia, aqui encontraras información relevante sobre los mejores dispositivos moviles y accesorios del mercado.</p>
      </div>

      <div className="py-16">
        <Image className="w-full" src={`${url}/marco.jpg`} alt="" width={2000} height={2000} />
      </div>
    </>
  );
}
