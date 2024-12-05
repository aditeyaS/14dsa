import PageContainer from "@/components/layout/page-container";
import logo from "@/assets/logo.svg";

export default function Home() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center gap-4">
        <img src={logo} className="w-48 h-48" alt="Logo" />
        <h2 className="text-6xl text-primary font-bold">I ♥ DSA</h2>
      </div>
    </PageContainer>
  );
}
