import CertificateCard from "./CertificateCard";
import { certificates } from "./certificatesData";

export default function CertificateGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {certificates.map((certificate) => (
        <CertificateCard
          key={certificate.title}
          certificate={certificate}
        />
      ))}
    </div>
  );
}