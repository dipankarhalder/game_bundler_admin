import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { environments } from "@/content/environment";

export const SelectEnv = () => {
  return (
    <div className="flex items-center font-semibold">
      <p className="text-xs mr-2 text-slate-500">Environment: </p>
      <Select>
        <SelectTrigger className="w-[160px] text-xs">
          <SelectValue placeholder={environments[0]} />
        </SelectTrigger>
        <SelectContent>
          {environments.map((item, idx) => (
            <SelectItem value={item} key={idx} className="font-medium text-sm">
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
