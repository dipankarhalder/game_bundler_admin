import { SelectGame } from "@/components/elements/selectgame";
import { SelectEnv } from "@/components/elements/selectenv";

export const Header = () => {
  return (
    <div className="flex w-full justify-between px-5 py-3 border-b bg-white shadow-sm sticky top-0">
      <SelectGame />
      <SelectEnv />
    </div>
  );
};
