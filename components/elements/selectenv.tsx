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
              DH
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-[180px]">
            <div className="px-2 py-1.5 text-sm font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">shadcn</p>
                <p className="text-xs leading-none text-muted-foreground">
                  m@example.com
                </p>
              </div>
            </div>
            <Separator />
            <div role="group">
              <div
                role="menuitem"
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                data-orientation="vertical"
                data-radix-collection-item=""
              >
                Profile
                <span className="ml-auto text-xs tracking-widest opacity-60">
                  ⇧⌘P
                </span>
              </div>
              <div
                role="menuitem"
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                data-orientation="vertical"
                data-radix-collection-item=""
              >
                Billing
                <span className="ml-auto text-xs tracking-widest opacity-60">
                  ⌘B
                </span>
              </div>
              <div
                role="menuitem"
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                data-orientation="vertical"
                data-radix-collection-item=""
              >
                Settings
                <span className="ml-auto text-xs tracking-widest opacity-60">
                  ⌘S
                </span>
              </div>
              <div
                role="menuitem"
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                data-orientation="vertical"
                data-radix-collection-item=""
              >
                New Team
              </div>
            </div>
            <Separator />
            <div
              role="menuitem"
              className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              data-orientation="vertical"
              data-radix-collection-item=""
            >
              Log out
              <span className="ml-auto text-xs tracking-widest opacity-60">
                ⇧⌘Q
              </span>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
