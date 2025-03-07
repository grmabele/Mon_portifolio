import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";



export type ContactCardProps = {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url?: string
    className?:string 
  };
  
  export const ContactCard = ({ image, mediumImage, name, description, url, className }: ContactCardProps) => {
    return (
      <Link href={url ?? "#"} className="w-full">
        
        <Card className={`p-3 bg-accent/10 flex items-center gap-4 min-w-0 ${className || ""}`}>
            <div className="relative">
                <img src={image} alt={name} className="w-10 h-10 rounded-full object-contain" />
                <img src={mediumImage} alt={name + " icon"} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
            </div>

            <div className="mr-auto min-w-0">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{name}</p>
                </div>
                <p className="text-xs text-muted-foreground truncate">{description}</p>
            </div>

            <ArrowUpRight 
            className="group-hover:translate-x-2 mr-4 group"
            size={16}/>
        </Card>
      </Link>
    );
  };