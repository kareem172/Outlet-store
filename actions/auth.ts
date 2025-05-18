"use server";

import { signIn } from "@/auth";

export async function signInWithGoogle() {
  const res = await signIn("google", { redirect: false });
  console.log("🚀 ~ signInWithGoogle ~ res:", res);
}
