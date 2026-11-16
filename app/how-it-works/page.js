import Accordion from '@/components/Accordion';
import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import GlowCard from '@/components/GlowCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import Steps from '@/components/Steps';
import { ArrowRight, NamedIcon } from '@/components/Icons';
import { FAQ, HOW_STEPS } from '@/lib/content';

export const metadata = {
  title: 'How It Works',
  description: 'How the SkillsGather pilot coordinates matches, commitments and common questions.',
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title={
          <>
            Clear steps, <span className="grad">simple commitments.</span>
          </>
        }
        lead="A coordinator reviews submissions and proposes matches when needs and availability align. Here is what to expect."
        actions={<Button href="/join">Join the Pilot</Button>}
        aside={
          <ol className="dots" aria-hidden="true">
            <li>Submit</li>
            <li>Review</li>
            <li>Agree</li>
            <li>Confirm</li>
          </ol>
        }
      />

      <Section
        id="steps"
        eyebrow="Four steps"
        title="From first submission to finished work"
      >
        <Steps items={HOW_STEPS} />
      </Section>

      <Section
        id="compare"
        eyebrow="Compare"
        title="Swap or volunteer: what is the difference?"
      >
        <div className="grid grid--2">
          <Reveal direction="left">
            <article className="card compare">
              <span className="who__icon">
                <NamedIcon name="swap" size={24} />
              </span>
              <h3 className="h3">Swap: two deliverables</h3>
              <p>A swap closes after both agreed deliveries are accepted.</p>
            </article>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <article className="card compare">
              <span className="who__icon">
                <NamedIcon name="heart" size={24} />
              </span>
              <h3 className="h3">Volunteer: one task or session</h3>
              <p>Volunteering has one scoped task or session with no return commitment.</p>
            </article>
          </Reveal>
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Common questions">
        <Reveal>
          <Accordion items={FAQ} />
        </Reveal>
      </Section>

      <Section
        id="paths"
        eyebrow="Ready to start?"
        title="Choose a path"
      >
        <div className="grid grid--3">
          {[
            { href: '/swap', label: 'Swap a Skill', icon: 'swap' },
            { href: '/volunteer', label: 'Volunteer Your Skills', icon: 'heart' },
            { href: '/find-help', label: 'Find Help', icon: 'compass' },
          ].map((item, i) => (
            <Reveal key={item.href} delay={i * 90}>
              <GlowCard href={item.href} className="linkcard">
                <span className="who__icon">
                  <NamedIcon name={item.icon} size={24} />
                </span>
                <strong>{item.label}</strong>
                <ArrowRight size={20} />
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title="Join the SkillsGather pilot" text="Tell us how you would like to take part.">
        <Button href="/join">Join the Pilot</Button>
      </CtaBand>
    </>
  );
}
