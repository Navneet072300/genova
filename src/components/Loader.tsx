import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image src={"/logo.webp"} fill alt="logo" />
      </div>
      <p className="text-lg text-muted-foreground">THINKING...</p>
    </div>
  );
};

export default Loader;
