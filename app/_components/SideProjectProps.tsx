import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
  };

export const SideProject = ({ Logo, title, description, url }: SideProjectProps) => {
    return (
      <Link href={url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-3 rounded cursor-pointer">
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
          <Logo size={32} />
        </span>
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </Link>
    );
  };