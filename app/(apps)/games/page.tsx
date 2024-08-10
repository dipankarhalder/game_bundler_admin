import { Badge } from "@/components/ui/badge";

export default function Games() {
  return (
    <div className="flex flex-col">
      <div className="flex items-end mb-1 pb-6 border-b">
        <h1 className="font-semibold mr-8 text-base text-black">
          Manage List of Games
          <Badge className="ml-4 bg-slate-300 text-black">22 games</Badge>
        </h1>
        <ul className="flex font-medium text-xs mb-[3px] text-slate-500">
          <li>... /&nbsp;</li>
          <li>Games</li>
        </ul>
      </div>
    </div>
  );
}
