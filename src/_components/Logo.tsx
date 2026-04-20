import Image from "next/image";

const Logo = () => {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30">
      <Image
        src="/ladslounge.png"
        alt="Lads Lounge"
        width={70}
        height={45}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
