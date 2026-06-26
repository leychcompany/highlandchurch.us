import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export function TeamGrid({
  members,
  columns = 3,
}: {
  members: TeamMember[];
  columns?: 2 | 3 | 4;
}) {
  const gridCols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-8 ${gridCols}`}>
      {members.map((member) => (
        <article key={member.name} className="text-center">
          <div className="relative mx-auto aspect-[3/4] max-w-xs overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
          <p className="mt-1 text-sm text-neutral-600">{member.role}</p>
        </article>
      ))}
    </div>
  );
}
