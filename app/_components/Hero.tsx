
import { Section } from "./Section";

export const Hero = () => {
  return (
    
    <Section>
      <section className="flex max-md:flex-col items-start">
        <div className="flex-[3] w-full flex flex-col gap-4 ">
          <h2 className="font-caption text-5xl text-primary">Relgrand MOUNGUEMBO</h2>
          <h3 className="font-caption text-3xl">Développeur Full stack</h3>
          <p>
            Je recherche actuellement un contrat d&apos;alternance de 2 ans, à partir de septembre 2025,
            avec un rythme de 3 semaines en entreprise/1 semaine à l&apos;école.
          </p>
        </div>

        <div className="flex-[2] max-w-[350px] max-md:m-auto ml-auto">
          <img 
            src="https://lh3.googleusercontent.com/a/ACg8ocJ8YVoM9v20iok3nO73RHr9WFVc-Vyg_D2NbbXeQrdH--xP4fKV=s576-c-no"       
            className=" rounded-full object-cover mx-auto" 
            alt="relgrand picture" 
          />
        </div>

      </section>
    </Section>
  );
};
