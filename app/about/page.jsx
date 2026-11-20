import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import Steps from '@/components/Steps';
import { NamedIcon } from '@/components/Icons';
import { ABOUT_PRINCIPLES, PILOT_STEPS, STARTING_SKILLS, WHO_CAN_JOIN } from '@/lib/content';

export const metadata = {
  title: 'About Us',
  description:
    'SkillsGather is a small Faisalabad pilot where people exchange digital skills, volunteer their time and find help with real tasks.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            A small pilot where <span className="grad">skills do the talking.</span>
          </>
        }
        lead="SkillsGather is a Faisalabad pilot that helps people exchange digital skills, volunteer some of their time and find help with real tasks."
        actions={
          <>
            <Button href="/join">Join the Pilot</Button>
            <Button href="/how-it-works" variant="ghost">
              See How It Works
            </Button>
          </>
        }
      />

      <Section
        id="aim"
        eyebrow="What we are testing"
        title="Can people help each other with skills they already have?"
        intro="The pilot tests a simple idea: when a task is small, clear and agreed in advance, people can swap or share skills with confidence. We are starting small in Faisalabad to learn what works before going further."
      >
        <div className="grid grid--3">
          {ABOUT_PRINCIPLES.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="card who">
                <span className="who__icon">
                  <NamedIcon name={item.icon} size={24} />
                </span>
                <h3 className="h4">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="who"
        eyebrow="Who it is for"
        title="Made for people building their skills"
        intro="Whether you are learning, freelancing or already working, there is a way to take part."
      >
        <div className="grid grid--3">
          {WHO_CAN_JOIN.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="card who">
                <span className="who__icon">
                  <NamedIcon name="users" size={24} />
                </span>
                <h3 className="h4">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="skills-row">
          <span>Starting with:</span>
          {STARTING_SKILLS.map((skill) => (
            <span key={skill} className="pill">
              {skill}
            </span>
          ))}
        </p>
      </Section>

      <Section
        id="how"
        eyebrow="How the pilot runs"
        title="Reviewed by people, not an algorithm"
        intro="The team reads every submission and coordinates matches by hand."
      >
        <Steps items={PILOT_STEPS} />
      </Section>

      <CtaBand title="Want to be part of the pilot?" text="Tell us what you can offer or what you need, or get in touch with a question.">
        <Button href="/join">Join the Pilot</Button>
        <Button href="/contact" variant="ghost">
          Contact Us
        </Button>
      </CtaBand>
    </>
  );
}
