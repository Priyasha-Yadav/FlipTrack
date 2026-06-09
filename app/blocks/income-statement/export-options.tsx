import { IconDownload, IconFileText } from "@tabler/icons-react";
import styles from "./export-options.module.css";

interface Props { className?: string; }

export function ExportOptions({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <a href="/api/export/tax" download className={[styles.btn, styles.csvBtn].join(" ")} style={{ textDecoration: 'none' }}><IconDownload size={16} /> Export CSV</a>
      <button className={[styles.btn, styles.pdfBtn].join(" ")}><IconFileText size={16} /> Export PDF</button>
    </div>
  );
}
