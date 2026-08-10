"use client";

import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

export default function Contact() {

  return (

    <section
      id="contact"
      className="py-32"
    >

      <Container>

        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Something Amazing"
          description="Looking for a developer, cybersecurity enthusiast or digital growth partner? Let's discuss your next project."
        />

        <div className="mt-20 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          <ContactCard />

          <ContactForm />

        </div>

      </Container>

    </section>

  );

}