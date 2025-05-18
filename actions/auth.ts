"use server";

import { signIn } from "@/auth";

export async function signInWithGoogle() {
  const res = await signIn("google", { redirectTo: "/" });
  console.log("🚀 ~ signInWithGoogle ~ res:", res);
}
