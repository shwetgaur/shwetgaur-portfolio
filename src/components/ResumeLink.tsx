import type { ReactNode } from "react";
import { FileDown } from "lucide-react";
import { site } from "@/lib/data";

type ResumeLinkProps = {
  className?: string;
  showIcon?: boolean;
  children?: ReactNode;
};

export function ResumeLink({
  className = "",
  showIcon = true,
  children = "Resume",
}: ResumeLinkProps) {
  if (!site.resumeUrl) return null;

  return (
    <a
      href={site.resumeUrl}
      download={site.resumeDownloadName}
      className={className}
    >
      {children}
      {showIcon && <FileDown size={16} />}
    </a>
  );
}
