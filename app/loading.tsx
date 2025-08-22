import Image from "next/image";
import loader from "@/assets/loader.gif";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Image src={loader} alt="loading..." width={150} height={150} />
    </div>
  );
}