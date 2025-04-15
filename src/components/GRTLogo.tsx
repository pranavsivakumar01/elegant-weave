
import { cn } from "@/lib/utils";

interface GRTLogoProps {
  className?: string;
}

const GRTLogo = ({ className }: GRTLogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <span className="font-playfair font-bold text-2xl tracking-wider">GRT</span>
      <span className="font-nunito font-light text-xl ml-1">Textile</span>
    </div>
  );
};

export default GRTLogo;
