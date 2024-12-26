// import Image from "next/image";
// import { list } from "postcss";

interface Card {
    id: number;
    title: string;
    description: any
    skills: string[];
}
interface SkillsProps {
    Cards: Card[];
}
  
export function Skills({ Cards }: SkillsProps) {
    return (
    <div className="mt-2 relative">
        {/* {Cards.map((item) => (
            <div className="flex mb-2">
                <div className="font-bold text-gray-600">{item.title}</div>
                <div className="text-xs ml-2 font-mono my-auto text-gray-200 flex flex-wrap  flex-1 gap-2 ">
                    {item.skills?.map((skill) => (
                        <div key={skill} className="bg-gray-900 group w-fit px-2 rounded-sm transition-all ease-in-out duration-300 hover:glowing-text-density border border-transparent hover:border-gray-300 relative hover:scale-110 hover:font-extrabold hover:shadow-xl">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        ))} */}
        random

    </div>
    )
}
  