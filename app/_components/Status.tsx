import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {  LucideIcon, ArrowUpRight, Notebook, WormIcon, Smartphone, SendToBack } from "lucide-react";
import Link from "next/link"; 
import { Badge } from "@/components/ui/badge";



export const Status = () => {
  return (
    <Section>
      <section className="flex max-md:flex-col items-start gap-4">
      
        <div className="flex-[3] w-full">
          <Card className="w-full p-4 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">Mes réalisations</p>
            <div className="flex flex-col gap-4">
              {SIDE_PROJECTS.map((project, index) => (
                <SideProject
                  key={index}
                  Logo={project.Logo}
                  title={project.title}
                  description={project.description}
                  url={project.url}
                />
              ))}
            </div>
          </Card>
        </div>

       
        <div className="flex-[2] w-full  flex flex-col gap-6 hfull">
         
          <Card className="p-4 flex-1 h-full">
            <p className="text-lg text-muted-foreground">Expériences professionnelles</p>
            <div className="flex flex-col gap-4 mt-2">
              {WORK_PROJECTS.map((work, index) => (
                <WorkProject
                  key={index}
                  image={work.image}
                  title={work.title}
                  role={work.role}
                  date={work.date}
                  url={work.url}
                  freelance={work.freelance}
                />
              ))}
            </div>
          </Card>

          <Card className="p-4 flex-1 flex flex-col gap-2 h-full">
            <p className="text-lg text-muted-foreground ">Contactez-moi</p>
              
            <ContactCard
            className= "flex-1 h-full min-h-[0px]"
            url="mailto:grmabele@gmail.com"
            name="grmabele@gmail.com"
            image="https://lh3.googleusercontent.com/a/ACg8ocJ8YVoM9v20iok3nO73RHr9WFVc-Vyg_D2NbbXeQrdH--xP4fKV=s576-c-no"
            mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vtphMtxRWfK6nO2CIbGfSETyEs79Dr6oPw&s"
            description="Envoyez-moi un e-mail pour toute question"
            />

            <ContactCard 
            className= "flex-1 h-full min-h-[86px]"
            url="https://www.linkedin.com/in/relgrand"
            name="Relgrand Giresse"
            image="https://lh3.googleusercontent.com/a/ACg8ocJ8YVoM9v20iok3nO73RHr9WFVc-Vyg_D2NbbXeQrdH--xP4fKV=s576-c-no"
            mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC"
            description="5&apos;00"/>
          </Card>
        </div>
      </section>
    </Section>
  );
};

// Liste des Side Projects
const SIDE_PROJECTS: SideProjectProps[] = [
  { Logo: Notebook, title: "Portifolio", description: "Création de mon portifolio (React/Nextjs/Tailwind)", url: "/project-1" },
  { Logo: SendToBack, title: "Gestion de stocks", description: "Application développée (Angular/Spring)", url: "/project-2" },
  { Logo: Notebook, title: "Prise de notes", description: "Outils de prise de notes (Java/JavaFx)", url: "/project-3" },
  { Logo: Smartphone, title: "Jeu Bejeweled", description: "Application mobile (React-Native)", url: "/project-4" },
  { Logo: WormIcon, title: "Serpent", description: "création site elevage de serpents (PHP/MySQL)", url: "/project-5" },
];

// Liste des expériences professionnelles
const WORK_PROJECTS: WorkProjectProps[] = [
  
  {
    image: "https://avatars.githubusercontent.com/u/130936492?s=48&v=4",
    title: "Freelance",
    role: "Développeur web",
    date: "2024-présent",
    url: "https://www.c-monetiquette.fr/",
    freelance: true
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D4D0BAQG9IurN9gabOA/company-logo_100_100/company-logo_100_100/0/1730890883367/universite_de_haute_alsace_mulhouse_colmar_logo?e=1749081600&v=beta&t=NOpxXmFGlRzUZSlk4EmWxwtCsogmaZerSXDhy5eFcKM",
    title: "Nimofy",
    role: "Développeur Symfony",
    date: "2024-2024",
    url: "https://www.pappers.fr/entreprise/chanvrier-jerome-923793996",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/C4D0BAQGDgBUhsnh-ig/company-logo_100_100/company-logo_100_100/0/1630562206642/osdigit_logo?e=1749081600&v=beta&t=NDOFmfQDHQufk5MqRBYNaJl5ufd7tr_AusdjwHn2AQw",
    title: "Osdigit",
    role: "Développeur web",
    date: "2020-2022",
    url: "http://osdigit.com",
  }
  
];

// Composant SideProject
type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url?: string;
};

const SideProject = ({ Logo, title, description, url }: SideProjectProps) => {
  return (
    <Link href={url ?? "#"} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-3 rounded cursor-pointer">
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

// Composant WorkProject 
type WorkProjectProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean
};


const WorkProject = ({ image, title, role, date, url, freelance }: WorkProjectProps) => {
    return (
      <Link href={url} className="flex items-center gap-4 hover:bg-accent/50 transition-colors p-3 rounded cursor-pointer">
      
        <span className="w-10 h-10 flex-shrink-0">  
          <img src={image} alt={title} className="rounded-full object-cover w-full h-full" />
        </span>
        
        
        <div className="flex flex-col flex-grow min-w-0">
          <div className="flex justify-between items-center w-full">
            
            <div className="min-w-0">
               <div className="flex items-center gap-2">
                <p className="text-lg font-semibold truncate">{title}</p>
                {freelance === true && <Badge variant="outline">Missions</Badge>}
               </div>
               <p className="text-sm text-muted-foreground truncate">{role}</p>
            </div>
            
            <p className="text-sm text-muted-foreground whitespace-nowrap ml-4">{date}</p>
          </div>
        </div>
      </Link>
    );
  };

type ContactCardProps = {
  image: string;
    mediumImage: string;
    name: string;
    description: string;
    url?: string;
    className?: string
     
};

export const ContactCard = ({ image, mediumImage, name, description, url, className }: ContactCardProps) => {
  return (
    <Link 
      href={url ?? "#"} 
      className="w-full" 
      target={url?.startsWith("http") ? "_blank" : undefined} 
      rel={url?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <Card className={`p-3 bg-accent/10 flex items-center gap-4 h-full min-h-[150px] ${className || ""}`}> 
        <div className="relative">
          <img src={image} alt={name} className="w-10 h-10 rounded-full object-contain" />
          <img src={mediumImage} alt={`${name} icon`} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
        </div>

        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>

        <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
      </Card>
    </Link>
  );
};
