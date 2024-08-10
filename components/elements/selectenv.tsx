import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { environments } from "@/content/environment";

export const SelectEnv = () => {
  const dropdownlist = {
    profile_name: "Dipankar Halder",
    profile_short_name: "DH",
    profile_email: "dipankarh.dev@gmail.com",
    profile_group: [
      { title: "Profile", keyShort: "⇧⌘P" },
      { title: "Billing", keyShort: "⌘B" },
      { title: "Settings", keyShort: "⌘S" },
    ],
  };

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
      <div className="ml-6">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full p-[8px] w-[40px] h-[40px] bg-slate-100"
            >
              {dropdownlist.profile_short_name}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-[200px] mr-6">
            <div className="px-4 py-2 text-sm font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold mb-0">
                  {dropdownlist.profile_name}
                </p>
                <p className="text-xs font-medium text-slate-500">
                  {dropdownlist.profile_email}
                </p>
              </div>
            </div>
            <Separator />
            <div className="py-2 px-2">
              {dropdownlist.profile_group.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex cursor-pointer items-center rounded-sm px-2 py-1 text-sm font-medium hover:bg-slate-200"
                >
                  {item.title}
                  <span className="ml-auto text-xs tracking-widest">
                    {item.keyShort}
                  </span>
                </div>
              ))}
            </div>
            <Separator />
            <div className="relative flex cursor-pointer items-center font-medium rounded-sm px-4 py-2 text-sm hover:bg-slate-200">
              Log out
              <span className="ml-auto text-xs tracking-widest">⇧⌘Q</span>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
