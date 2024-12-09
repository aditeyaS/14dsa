import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full p-20">
      <div className="flex flex-col items-center gap-4">
        <img src={logo} className="w-48 h-48" alt="Logo" />
        <h2 className="text-6xl text-primary font-bold">I ♥ DSA</h2>

        <Link to={"/app/basic/analysis"}>
          <Button variant={"secondary"} size={"lg"}>
            READ
          </Button>
        </Link>
      </div>
    </div>
  );
}
