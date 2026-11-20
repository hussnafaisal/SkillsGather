import LegalPage from '@/components/LegalPage';
import { PRIVACY } from '@/lib/legal';

export const metadata = {
  title: 'Privacy Policy',
  description: 'What the SkillsGather Faisalabad pilot collects, why, and the choices you have.',
};

export default function PrivacyPage() {
  return <LegalPage doc={PRIVACY} currentHref="/privacy" />;
}
