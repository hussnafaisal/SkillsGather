import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import GlowCard from '@/components/GlowCard';
import HeroVisual from '@/components/HeroVisual';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import RotatingWord from '@/components/RotatingWord';
import Section from '@/components/Section';
import Steps from '@/components/Steps';
import { ArrowRight, NamedIcon, SwapIcon } from '@/components/Icons';
import {
  HERO_WORDS,
  PARTICIPATION,
  PILOT_STEPS,
  STARTING_SKILLS,
  WHO_CAN_JOIN,
} from '@/lib/content';

export const metadata = {
  title: 'Home',
  description:
    'Exchange digital skills and help others put theirs to work. Join the SkillsGather Faisalabad pilot.',
};

const WHO_ICONS = ['users', 'folder', 'shield'];

export default function HomePage() {
  return (
    // Flex column so the order of sections can differ between mobile and desktop (see globals.css).
    <div className="home-flow">
      {/* Hero + Join the Pilot + See How It Works */}
      <div className="home-hero">
        <PageHero
          size="home"
          eyebrow="Faisalabad pilot"
          title={
            <>
              Exchange <span className="grad">digital skills</span> and help others{' '}
              <span className="grad">put theirs to work.</span>
            </>
          }
          lead="SkillsGather is a Faisalabad pilot where students, new freelancers and professionals swap skills, volunteer their time and ask for support with specific digital tasks."
          actions={
            <>
              <Button href="/join">Join the Pilot</Button>
              <Button href="/how-it-works" variant="ghost">
                See How It Works
              </Button>
            </>
          }
          aside={<HeroVisual />}
        />
        <div className="container">
          <RotatingWord words={HERO_WORDS} />
        </div>
      </div>

      {/* Swap a Skill / Volunteer Your Skills / Find Help (first on mobile) */}
      <Section
        id="participate"
        className="home-cards"
        eyebrow="Get involved"
        title="Choose how you want to take part"
        intro="Pick the path that fits you today. You can express interest in more than one."
      >
        <div className="grid grid--3">
          {PARTICIPATION.map((item, i) => (
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

      {/* Swap and volunteer examples (before the cards on desktop) */}
      <Section
        id="examples"
        className="home-examples"
        eyebrow="What it looks like"
        title="Two quick examples"
        intro="Real-feeling ideas to show what a swap or a volunteer offer can be."
      >
        <div className="grid grid--2">
          <Reveal direction="left">
            <article className="card example">
              <span className="badge">Example</span>
              <h3 className="h3">A skill swap</h3>
              <div className="example__swap">
                <div className="example__side">
                  <small>Offers</small>
                  <strong>Three social media designs</strong>
                </div>
                <span className="example__arrow" aria-label="in exchange for">
                  <SwapIcon size={26} />
                </span>
                <div className="example__side">
                  <small>Receives</small>
                  <strong>One short reel edit</strong>
                </div>
              </div>
              <p className="muted">Both people agree on the work before they start.</p>
            </article>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <article className="card example">
              <span className="badge">Example</span>
              <h3 className="h3">A volunteer offer</h3>
              <div className="example__swap example__swap--single">
                <div className="example__side">
                  <small>Offers</small>
                  <strong>Two 20-minute portfolio reviews</strong>
                </div>
              </div>
              <p className="muted">One scoped session with no return commitment.</p>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* How matching works */}
      <Section
        id="matching"
        className="home-steps"
        eyebrow="How matching works"
        title="Simple, human and manual"
        intro="Tell us what you can offer or need. The team reviews submissions and reaches out if a suitable match is available."
      >
        <Steps items={PILOT_STEPS} />
      </Section>

      {/* Who can join */}
      <Section
        id="who"
        className="home-who"
        eyebrow="Who can join"
        title="Open to people with a practical skill"
        intro="We are starting small and focused."
      >
        <div className="grid grid--3">
          {WHO_CAN_JOIN.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="card who">
                <span className="who__icon">
                  <NamedIcon name={WHO_ICONS[i]} size={24} />
                </span>
                <h3 className="h4">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="skills-row" delay={150}>
          <span>Start with:</span>
          {STARTING_SKILLS.map((skill) => (
            <span key={skill} className="pill">
              {skill}
            </span>
          ))}
        </Reveal>
      </Section>

      <div className="home-cta">
        <CtaBand
          title="Ready to join the pilot?"
          text="Visitors can express interest in more than one path. It takes a couple of minutes."
        >
          <Button href="/join">Join the Pilot</Button>
        </CtaBand>
      </div>
    </div>
  );
}
