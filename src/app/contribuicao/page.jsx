import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col w-full p-2">
      <div>
        <h2 className="text-3xl tracking-wide">Contribuição</h2>
        <h4 className="text-xl">Contribua com o Evangelho Simples:</h4>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full max-w-lg p-4 m-auto sm:justify-between">
        <div className="font-sans text-lg font-bold">
          <h5>Evangelho Simples LTDA</h5>
          <h5>Agência: 254</h5>
          <h5>C/C: 05222-56</h5>
          <h5>CNPJ: 222.765.908/0001-45</h5>
        </div>
        <div className="mt-6 rounded-md shadow-sm shadow-slate-500">
          <Image
            width={300}
            height={300}
            src={"/images/qrcodeexample.png"}
            alt="qrcode"
            className="w-40 rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
