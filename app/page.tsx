import { getHadith } from "@/lib/actions";

export default async function Home() {

  const hadith = await getHadith();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-[300px] flex flex-col gap-10 h-full sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]">
        <p className="text-2xl 2xl:text-3xl font-bold text-center">
          {hadith.Narrated}
        </p>
        <p className="text-white text-lg 2xl:text-xl text-center">
          {hadith.Hadith}
        </p>
        <p className="text-center text-md">
          {hadith.Reference}
        </p>
      </div>
    </main>
  );
}
