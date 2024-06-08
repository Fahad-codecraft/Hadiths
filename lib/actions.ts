'use server'

export const getHadith = async () => {
  const res = await fetch("https://hadith-api-ten.vercel.app/", {cache: "no-store"});
  return await res.json();
}