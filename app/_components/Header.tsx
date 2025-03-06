import { Button, buttonVariants } from "@/components/ui/button"; 
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "./icons/LinkdInIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export const Header = () => {

  return (
    <header className="sticky top-0 bg-background p-4 ">
      <section className="flex items-center px-40 ">
        <h1 className="text-lg font-bold text-primary ">
          giresse.com
        </h1>

        <div className="flex-1" />
        <ul className="flex items-center gap-2">
            <Link
            href=" https://github.com/grmabele"
            className={cn(buttonVariants({variant: "outline"}), "size-10 p-2")}
            >
                <GithubIcon size={16} className="text-foreground" />
            </Link>

            <Link
            href="https://www.linkedin.com/in/relgrand"
            className={cn(buttonVariants({variant: "outline"}), "size-10 p-2")}
            >
                <LinkedInIcon size={16} className="text-foreground" />
            </Link>

            <Link
            href="https://twiter.com/gigi_belo8"
            className={cn(buttonVariants({variant: "outline"}), "size-10 p-2")}
            >
                <TwitterIcon size={16} className="text-foreground" />
            </Link>
          

        </ul>
      </section>
    </header>
  );
};
