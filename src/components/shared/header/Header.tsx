import Link from "next/link";
import { ModeToggle } from "@/components/shared/mode-toggle/ModeToggle";

export const Header = () => {
  return (
    <header className="bg-transparent">
      <div className="flex items-center justify-between px-6 py-6">
        <h1 className="font-medium text-2xl">
          <Link href="/">木更津高専単位カウンター</Link>
        </h1>
        <div className="flex items-center gap-5">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
