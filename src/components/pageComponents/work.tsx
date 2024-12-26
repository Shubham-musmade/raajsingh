import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";


import Image from "next/image";
// import { list } from "postcss";


interface WorkExperience {
    id: number;
    companyName: string;
    iconSrc: string;
    duration: string;
    role: string;
    description?: string;
    href?: string;
    skills?: string[];
}
interface WorkExpProps {
    workExp: WorkExperience[];
}
  
  
export function WorkExp({ workExp }: WorkExpProps) {
    return (
    <div className=" my-5">
        <Accordion type="single" collapsible className="w-full" >
            {workExp.map((item) => (
                <AccordionItem value={`item-${item.id}`} key={`item-${item.id}`}>
                    <AccordionTrigger>
                        <div className="flex">
                            <Image src={item.iconSrc} width={50} height={50} alt={item.companyName} className="border rounded-full object-contain" />
                            <div className="w-full mx-2">
                                <div>
                                    <div className="font-bold">
                                       {item.companyName}
                                    </div>
                                    <div className="text-xs font-mono">
                                        {item.role}
                                    </div>
                                </div>
                                <div className="mr-0 text-xs font-mono ">
                                    {item.duration}
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="">
                            <div>
                                {item.description}
                            </div>
                            <div className="text-xs font-mono my-2 text-gray-200 flex flex-wrap gap-1 px-2">
                                {item.skills?.map((skill) => (
                                    <div key={skill} className="bg-gray-900 group w-fit px-2 rounded-sm transition-all ease-in-out duration-300 hover:glowing-text-density border border-transparent hover:border-gray-300 relative hover:scale-110 hover:font-extrabold hover:shadow-xl">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
            
        </Accordion>

    </div>
    )
}
  