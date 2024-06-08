'use server'
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/appwrite";
import { Query } from 'node-appwrite'

const {
  APPWRITE_DATABASE_ID: DB_ID,
  APPWRITE_HADITH_COLLECTION_ID: COLL_ID
} = process.env

export const GET = async () => {
  const { database } = await createAdminClient()
  const total = 11699

  const randomNum: number = Math.floor(
    Math.random() * (total - 1)
  );

  const hadith = await database.listDocuments(
    DB_ID!,
    COLL_ID!,
    [Query.limit(1), Query.offset(randomNum)]
  )


  return new NextResponse(JSON.stringify(hadith.documents[0]))
}