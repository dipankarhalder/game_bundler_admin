import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { environments } from "@/content";

export const SelectEnv = () => {
  return (
    <div className="flex items-center font-semibold">
      <p className="text-sm mr-2 text-slate-500">Environment: </p>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={environments[0]} />
        </SelectTrigger>
        <SelectContent>
          {environments.map((item, idx) => (
            <SelectItem value={item} key={idx}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
