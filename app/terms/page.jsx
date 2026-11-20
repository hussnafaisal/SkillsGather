import LegalPage from '@/components/LegalPage';
import { TERMS } from '@/lib/legal';

export const metadata = {
  title: 'Terms of Service',
  description: 'Rules for using the SkillsGather website and taking part in the Faisalabad pilot.',
};

export default function TermsPage() {
  return <LegalPage doc={TERMS} currentHref="/terms" />;
}
