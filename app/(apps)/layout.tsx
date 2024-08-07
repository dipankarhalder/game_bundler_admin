import { IChildren } from "@/interface";
import { Header } from "@/components/elements/header";
import { Sidebar } from "@/components/elements/sidebar";

export default function AppsLayout({ children }: IChildren) {
  return (
    <div className="grid lg:grid-cols-6">
      <Sidebar />
      <div className="col-span-3 lg:col-span-5">
        <Header />
        {children}
      </div>
    </div>
  );
}
