import { Camera } from "lucide-react";

interface Props {
  description: string;
  aspectRatio?: string;
  className?: string;
}

/**
 * Elegant placeholder for photos that haven't been provided yet.
 * Maintains the page's visual rhythm while signaling what content is missing.
 */
export const PhotoPlaceholder = ({
  description,
  aspectRatio = "4/5",
  className = "",
}: Props) => (
  <div
    className={`relative w-full overflow-hidden flex items-center justify-center text-center px-6 ${className}`}
    style={{
      aspectRatio,
      background:
        "repeating-linear-gradient(135deg, #F5EFE6 0px, #F5EFE6 14px, #EFE7DA 14px, #EFE7DA 28px)",
      border: "1px dashed rgba(160,82,45,0.35)",
      borderRadius: 2,
    }}
    role="img"
    aria-label={`Foto pendente: ${description}`}
  >
    <div className="flex flex-col items-center gap-3 max-w-[80%]">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: "rgba(160,82,45,0.12)" }}
      >
        <Camera className="w-6 h-6" style={{ color: "#A0522D" }} />
      </div>
      <p
        className="uppercase"
        style={{
          fontFamily: "'Quicksand', sans-serif",
          color: "#A0522D",
          fontSize: "11px",
          letterSpacing: "0.22em",
          fontWeight: 600,
        }}
      >
        Foto pendente
      </p>
      <p
        className="font-serif-italic italic leading-snug"
        style={{ color: "rgba(26,20,16,0.7)", fontSize: "14px" }}
      >
        {description}
      </p>
    </div>
  </div>
);
