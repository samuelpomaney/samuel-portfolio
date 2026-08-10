import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

import CertificateGrid from "./CertificateGrid";


export default function Certificates() {

  return (

    <section
      id="certificates"
      className="py-24"
    >

      <Container>

        <SectionHeader
          eyebrow="Professional Development"
          title="Continuous Learning & Industry Credentials"
          description="Qualifications I've earned and certifications I'm actively pursuing to strengthen my expertise in technology, cybersecurity and digital growth."
        />


        <div className="mt-16">

          <CertificateGrid />

        </div>


      </Container>


    </section>

  );
}