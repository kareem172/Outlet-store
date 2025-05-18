"use server";

import { signIn, signOut } from "@/auth";

export async function signInWithGoogle() {
  const res = await signIn("google", { redirectTo: "/" });
  console.log("🚀 ~ signInWithGoogle ~ res:", res);
}

export async function logout() {
  const res = await signOut({ redirectTo: "/" });
  console.log("🚀 ~ logout ~ res:", res);
}
