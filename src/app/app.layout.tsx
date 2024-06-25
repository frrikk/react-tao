import { cn } from "@/utils/cn.ts";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={cn("max-w-[1600px] h-dvh mx-auto border-x")}>
      {children}
    </div>
  );
};
