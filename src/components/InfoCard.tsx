import { type ReactNode } from "react";

export interface InfoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

function InfoCard({ title, description, icon }: InfoCardProps) {
  return (
    <article className="flex items-start gap-4 mt-2">
      <span className="shrink-0 rounded-lg bg-primary-700 p-4">{icon}</span>

      <div>
        <h2 className="text-lg font-bold">{title}</h2>

        <p className="mt-1 text-sm text-gray-300">{description}</p>
      </div>
    </article>
  );
}

export default InfoCard;
