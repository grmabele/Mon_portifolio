import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ReactLogo } from "./icons/ReactLogo"
import { AngularLogo } from "./icons/AngularLogo"
import { TailwindLogo } from "./icons/TailwindLogo"
import { SymfonyLogo } from "./icons/SymfonyLogo"
import { SpringLogo } from "./icons/SpringLogo"
import { PhpLogo } from "./icons/PhpLogo"
import { JavaLogo } from "./icons/JavaLogo"
import { NextjsLogo } from "./icons/NextjsLogo"
import { MysqlLogo } from "./icons/MysqlLogo"

export const Skills = () => {
    return (
        <Section ClassName="flex flex-col items-start gap-6 w-full">
            <Badge className="text-xl" variant={"outline"}>Skills</Badge>

            {/* Frontend Skills */}
            <div className="w-full">
                <h3 className="text-xl font-bold tracking-wide mb-2">Front-end </h3>
                <div className="flex justify-between gap-4 w-full flex-wrap">
                    <div className="flex flex-col items-center gap-2">
                        <ReactLogo size={42} className="animate-spin" style={{ animationDuration: "10s" }} />
                        <h3 className="text-lg font-semibold">React</h3>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                        <AngularLogo size={42} />
                        <h3 className="text-lg font-semibold">Angular</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <TailwindLogo size={42} />
                        <h3 className="text-lg font-semibold">Tailwind CSS</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <NextjsLogo size={42} />
                        <h3 className="text-lg font-semibold">Next.js</h3>
                    </div>
                </div>
            </div>

            {/* Backend Skills */}
            <div className="w-full mt-6">
                <h3 className="text-xl font-bold tracking-wide mb-2">Back-end </h3>
                <div className="flex justify-between gap-4 w-full flex-wrap">
                    <div className="flex flex-col items-center gap-2">
                        <SymfonyLogo size={42} />
                        <h3 className="text-lg font-semibold">Symfony</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <SpringLogo size={42} />
                        <h3 className="text-lg font-semibold">Spring Boot</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <JavaLogo size={42} />
                        <h3 className="text-lg font-semibold">Java</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <PhpLogo size={42} />
                        <h3 className="text-lg font-semibold">PHP</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <MysqlLogo size={42} />
                        <h3 className="text-lg font-semibold">MySQL</h3>
                    </div>
                </div>
            </div>
        </Section>
    );
};
