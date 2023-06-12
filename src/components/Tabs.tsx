import { type ReactNode, useState } from "react";
import Link from "next/link";

export interface Tab {
  name: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  width?: number;
}

function Tabs({ tabs, width }: TabsProps) {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <nav aria-label="Tabs" className={`m-auto w-${width ?? "80"} flex border-b border-gray-100 text-sm font-medium`}>
        {tabs.map((tab, index) => (
          <Link
            key={index}
            onClick={() => setSelected(index)}
            href=""
            className={`${index === selected ? "text-primary-700" : ""} -mb-px text-center border-b border-transparent p-4 hover:text-primary-700`}
          >
            {tab.name}
          </Link>
        ))}
      </nav>
      <div className="mt-8">{tabs[selected]?.content}</div>
    </div>
  );
}

export default Tabs;
