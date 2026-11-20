import JoinClient from '@/components/JoinClient';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Join the Pilot',
  description: 'Join the SkillsGather Faisalabad pilot. Choose how you would like to take part and open the pilot form.',
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Faisalabad pilot"
        title={
          <>
            Join the SkillsGather <span className="grad">Faisalabad Pilot.</span>
          </>
        }
        lead="We collect responses to understand interest in the pilot and to arrange suitable matches. If you opt in to follow-up, the team may contact you when a suitable opportunity comes up."
      />
      <JoinClient />
    </>
  );
}
