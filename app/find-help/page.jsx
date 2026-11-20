import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import GlowCard from '@/components/GlowCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { ArrowRight, NamedIcon } from '@/components/Icons';
import { HELP_PATHS, HELP_PROMPTS } from '@/lib/content';

export const metadata = {
  title: 'Find Help',
  description: 'Describe a concrete need and choose how to receive support from the SkillsGather Faisalabad pilot.',
};

export default function FindHelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Find Help"
        title={
          <>
            What do you need <span className="grad">help with?</span>
          </>
        }
        lead="Invite support on a specific digital task, a feedback request or a short mentoring session."
        actions={<Button href="/join?intent=help">Tell Us What You Need</Button>}
        aside={
          <div className="bubbles" aria-hidden="true">
            <p className="bubble bubble--a">I need feedback on my portfolio</p>
            <p className="bubble bubble--b">Happy to review it. 20 minutes?</p>
            <p className="bubble bubble--a">That would be perfect</p>
          </div>
        }
      />

      <Section
        id="paths"
        eyebrow="Two paths"
        title="Choose how to receive support"
        intro="Pick the one that suits you. You can change it when you reach the form."
      >
        <div className="grid grid--2">
          {HELP_PATHS.map((item, i) => (
            <Reveal key={item.href} delay={i * 110}>
              <GlowCard href={item.href} className="pcard">
                <span className="pcard__icon">
                  <NamedIcon name={item.icon} size={28} />
                </span>
                <h3 className="h3">{item.title}</h3>
                <p>{item.text}</p>
                <span className="pcard__cta">
                  {item.cta} <ArrowRight size={18} />
                </span>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="example"
        eyebrow="Example request"
        title="What a good request sounds like"
      >
        <Reveal>
          <blockquote className="quote card">
            <span className="badge">Example</span>
            <p>
              {
                '“I need feedback on my first design portfolio before applying for internships. I’d like a 20-minute review and advice on the three pieces to feature.”'
              }
            </p>
          </blockquote>
        </Reveal>
      </Section>

      <Section
        id="prepare"
        eyebrow="Prepare your request"
        title="Four prompts to get ready"
        intro="Having these answers in mind makes it easier to find the right person."
      >
        <div className="grid grid--4">
          {HELP_PROMPTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="card prompt">
                <span className="who__icon">
                  <NamedIcon name={item.icon} size={22} />
                </span>
                <h3 className="h4">{item.label}</h3>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="note-line">Matching depends on available skills and time.</p>
        </Reveal>
      </Section>

      <CtaBand
        title="Tell us what you need"
        text="Matching depends on available skills and time, and the team reaches out if a suitable match is available."
      >
        <Button href="/join?intent=help">Tell Us What You Need</Button>
      </CtaBand>
    </>
  );
}
