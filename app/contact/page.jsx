import Button from '@/components/Button';
import ContactForm from '@/components/ContactForm';
import GlowCard from '@/components/GlowCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { NamedIcon } from '@/components/Icons';
import { CONTACT } from '@/lib/config';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with the SkillsGather Faisalabad pilot team with a question, idea or feedback.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Questions about the pilot? <span className="grad">Say hello.</span>
          </>
        }
        lead="Ask about how matching works, share an idea or send feedback. For joining the pilot, the short pilot form is the fastest route."
        actions={<Button href="/join">Join the Pilot</Button>}
      />

      <section className="section" aria-labelledby="contact-title">
        <div className="container contact">
          <h2 id="contact-title" className="h2 contact__title">
            Reach the team
          </h2>
          <div className="contact__info">
            <div className="contact__cards">
              <Reveal>
                <GlowCard className="contact__card">
                  <span className="who__icon">
                    <NamedIcon name="mail" size={24} />
                  </span>
                  <div>
                    <h3 className="h4">Email</h3>
                    {CONTACT.email ? (
                      <a className="contact__link" href={`mailto:${CONTACT.email}`}>
                        {CONTACT.email}
                      </a>
                    ) : (
                      <p className="muted">Use the form and we will get back to you.</p>
                    )}
                  </div>
                </GlowCard>
              </Reveal>
              <Reveal delay={100}>
                <GlowCard className="contact__card">
                  <span className="who__icon">
                    <NamedIcon name="pin" size={24} />
                  </span>
                  <div>
                    <h3 className="h4">Location</h3>
                    <p className="muted">{CONTACT.location}</p>
                  </div>
                </GlowCard>
              </Reveal>
              <Reveal delay={200}>
                <GlowCard href="/how-it-works#faq" className="contact__card">
                  <span className="who__icon">
                    <NamedIcon name="eye" size={24} />
                  </span>
                  <div>
                    <h3 className="h4">Read the FAQ</h3>
                    <p className="muted">Eligibility, cost, cancellations and more.</p>
                  </div>
                </GlowCard>
              </Reveal>
            </div>
          </div>

          <Reveal className="contact__formwrap" direction="left">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
