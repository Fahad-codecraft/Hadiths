'use server'

export const getHadith = async () => {
  const res = await fetch("https://hadiths-nine.vercel.app/api/hadith", {cache: "no-store"});
  return await res.json();
}