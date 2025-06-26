import { getTechStack } from "@/data/getTechStack";
import { FC } from "react";
import { Fraunces } from "next/font/google";
import clsx from "clsx";

const marker = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const TechStackGrid: FC = () => {
  const techStack = getTechStack();

  return (
    <div className="p-8 tablet:px-10 desktop:px-32 tablet:py-12 flex flex-col gap-12">
      <h2
        className={clsx(
          marker.className,
          "text-center text-xl desktop:text-2xl uppercase font-semibold text-foreground"
        )}
      >
        Tech Stack
      </h2>

      <div className="grid gap-6 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2">
        {Object.entries(techStack).map(([category, items]) => (
          <div
            key={category}
            className="bg-background rounded-2xl shadow-theme p-4"
          >
            <h3 className="text-xl font-semibold mb-4 capitalize text-foreground">
              {category}
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {items.map(({ name, icon: Icon }) => (
                <li key={name} className="flex items-center space-x-2">
                  <Icon className="w-5 h-5 text-foreground" />
                  <span className="text-sm text-foreground">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackGrid;
