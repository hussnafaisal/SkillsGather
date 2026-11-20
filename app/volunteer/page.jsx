import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import Steps from '@/components/Steps';
import { ClockIcon, NamedIcon, UsersIcon } from '@/components/Icons';
import { VOLUNTEER_STEPS, VOLUNTEER_WAYS } from '@/lib/content';

export const metadata = {
  title: 'Volunteer Your Skills',
  description: 'Give someone a hand with a skill you already have. Choose a contribution that fits your time.',
};

const AVAILABILITY = [
  { label: 'Task', value: 'Design portfolio reviews', icon: 'eye' },
  { label: 'Slots', value: 'Two this month', icon: 'users' },
  { label: 'Duration', value: '20 minutes each', icon: 'clock' },
  { label: 'Format', value: 'Written feedback', icon: 'file' },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer Your Skills"
        title={
          <>
            Give someone a hand with a <span className="grad">skill you already have.</span>
          </>
        }
        lead="You set the scope and the time limit. Offer a little time and help someone take their next step."
        actions={<Button href="/join?intent=volunteer">Offer Volunteer Help</Button>}
        aside={
          <div className="mini card" aria-hidden="true">
            <span className="badge">Your time, your limits</span>
            <div className="mini__row">
              <ClockIcon size={22} /> <strong>20 minutes</strong>
            </div>
            <div className="mini__row">
              <UsersIcon size={22} /> <strong>2 slots</strong>
            </div>
            <div className="mini__bar">
              <span />
            </div>
          </div>
        }
      />

      <Section
        id="ways"
        eyebrow="Ways to help"
        title="Pick a contribution that fits"
        intro="Choose what you are comfortable with. You decide which requests to accept."
      >
        <div className="grid grid--3">
          {VOLUNTEER_WAYS.map((item, i) => (
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
        id="availability"
        eyebrow="Availability example"
        title="What an offer can say"
        intro={
          '“I can review two design portfolios this month, 20 minutes each, with written feedback.”'
        }
      >
        <div className="grid grid--4">
          {AVAILABILITY.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="card slot">
                <span className="who__icon">
                  <NamedIcon name={item.icon} size={22} />
                </span>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="how"
        eyebrow="What happens next"
        title="From offer to session"
        intro="Submit availability, review a suitable request if one comes up, confirm scope or session time, then complete the contribution."
      >
        <Steps items={VOLUNTEER_STEPS} />
      </Section>

      <CtaBand
        title="Ready to share your time?"
        text="Volunteers choose which requests they accept."
      >
        <Button href="/join?intent=volunteer">Offer Volunteer Help</Button>
      </CtaBand>
    </>
  );
}
