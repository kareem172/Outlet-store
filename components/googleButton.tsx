import { signInWithGoogle } from "@/actions/auth";
import { Button } from "./ui/button";
import googleSvg from "@/public/google-icon-logo-svgrepo-com.svg";
import Image from "next/image";
export default function GoogleButton() {
  return (
    <form action={signInWithGoogle}>
      <Button variant={"outline"} type="submit">
        <span className="size-5 relative">
          <Image fill alt="google" src={googleSvg} />
        </span>
        <span>Login with google</span>
      </Button>
    </form>
  );
}
