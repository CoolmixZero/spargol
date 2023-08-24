import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      Spargol
      <div>
        <Link href={"/sign-up"}>
          <Button>
            Register
          </Button>
        </Link>
        <Link href={"/sign-in"}>
          <Button>
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
}