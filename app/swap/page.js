import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import Steps from '@/components/Steps';
import { NamedIcon, SwapIcon } from '@/components/Icons';
import { SWAP_PROMPTS, SWAP_STEPS } from '@/lib/content';

export const metadata = {
  title: 'Swap a Skill',
  description: 'Turn a skill into a specific offer another person can evaluate. Submit a swap offer to the Faisalabad pilot.',
};

export default function SwapPage() {
  return (
    <>
      <PageHero
        eyebrow="Swap a Skill"
        title={
          <>
            Offer a skill. <span className="grad">Get help with a task.</span>
          </>
        }
        lead="Turn a skill into a specific offer another person can evaluate. Both people agree on the work before anything begins."
        actions={<Button href="/join?intent=swap">Submit a Swap Offer</Button>}
        aside={
          <div className="xchg" aria-label="Exchange example: you offer three designs and receive one reel edit">
            <div className="xchg__box">
              <small>You offer</small>
              <strong>Three designs</strong>
            </div>
            <span className="xchg__arrows" aria-hidden="true">
              <SwapIcon size={30} />
            </span>
            <div className="xchg__box xchg__box--alt">
              <small>You receive</small>
              <strong>One reel edit</strong>
            </div>
          </div>
        }
      />

      <Section
        id="example"
        eyebrow="Exchange example"
        title="What a swap can look like"
        intro="Offer three social media designs in exchange for an edited reel up to 30 seconds. Both people agree on files, deadlines and revisions."
      >
        <div className="grid grid--3">
          {SWAP_PROMPTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <div className="card prompt">
                <span className="who__icon">
                  <NamedIcon name={item.icon} size={24} />
                </span>
                <h3 className="h4">{item.label}</h3>
                <p className="prompt__example">{item.example}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="how"
        eyebrow="What happens next"
        title="From proposal to completion"
        intro="A simple path with clear agreements at each step."
      >
        <Steps items={SWAP_STEPS} />
      </Section>

      <CtaBand
        title="Have a skill to trade?"
        text="Submit an offer and tell us what you would like in return."
      >
        <Button href="/join?intent=swap">Submit a Swap Offer</Button>
        <Button href="/find-help" variant="ghost">
          Compare ways to ask for help
        </Button>
      </CtaBand>
    </>
  );
}
