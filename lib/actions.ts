'use server'

export const getHadith = async () => {
  const res = await fetch("http://localhost:3000/api/hadith", {cache: "no-store"});
  return await res.json();
}