import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h3 className="text-2xl">Not found</h3>
        <Link to="/">
          <Button size={"lg"}>
            <Home />
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
