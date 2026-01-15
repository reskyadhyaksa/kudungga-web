import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-w-screen flex w-full place-items-center justify-between sm:px-28 font-notoSans">
      <div className="animate-slide-right flex flex-col gap-2 h-full justify-center px-4">
        <div className="flex flex-col">
          <h1 className="3xl:text-6xl text-3xl leading-[1.1] font-bold sm:font-semibold sm:text-4xl lg:text-5xl">
            Cybersecurity That
          </h1>
          <h1 className="3xl:text-6xl text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-5xl">
            Protects Your
          </h1>
          <h1 className="3xl:text-6xl bg-linear-to-r from-teal-600 to-[#23D1AE] bg-clip-text text-3xl leading-[1.2] font-extrabold text-transparent sm:text-4xl lg:text-5xl">
            Digital Future
          </h1>
        </div>
        <p className="3xl:max-w-xl 3xl:text-lg max-w-lg text-xs leading-relaxed font-medium text-slate-500 sm:text-base">
          Solusi keamanan siber terintegrasi untuk melindungi bisnis Anda dari
          ancaman digital yang terus berkembang — aman, andal, dan
          berkelanjutan.
        </p>
        <p className="max-w-xl border-l-2 border-[#23D1AE]/50 pl-4 text-xs leading-normal font-normal text-slate-400 sm:text-base">
          Partner resmi solusi keamanan siber kelas dunia untuk enterprise dan
          institusi.
        </p>
        <div className="mt-4 flex gap-3">
          <button className="3xl:text-base flex cursor-pointer place-items-center rounded-sm bg-[#23D1AE] px-10 py-2 text-xs font-semibold text-white shadow-sm hover:scale-105">
            <p>Lihat Solusi Kami</p>
            <Image
              src="/Shield.svg"
              height={13}
              width={13}
              alt="1"
              className="ml-2"
            />
          </button>
          <button className="3xl:text-base flex cursor-pointer place-items-center hover:scale-105 rounded-sm border border-[#23D1AE] px-10 py-2 text-xs font-bold text-[#23D1AE] shadow-sm">
            <p>Konsultasi Gratis</p>
            <Image
              src="/Call.svg"
              height={13}
              width={13}
              alt="1"
              className="ml-2"
            />
          </button>
        </div>
      </div>
      <Image
        src="/security.png"
        alt="Security"
        width={600}
        height={200}
        className="3xl:w-200 mb-10 hidden lg:inline"
      />
    </section>
  );
}
