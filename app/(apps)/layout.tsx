import { IChildren } from "@/interface";
import { Header } from "@/components/elements/header";
import { Sidebar } from "@/components/elements/sidebar";

export default function AppsLayout({ children }: IChildren) {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="col-span-3 flex-1 ml-[240px]">
        <Header />
        <div className="pt-6 px-7">{children}</div>
      </div>
    </div>
  );
}
