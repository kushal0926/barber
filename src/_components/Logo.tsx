import Image from "next/image";

const Logo = () => {
  return (
    <div className="absolute top-1 left-1/3 z-30 pointer-events-none">
      <Image
        src="/st2-removebg-preview.png"
        alt="Lads Lounge"
        width={400}
        height={105}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
