import LegalPage from '@/components/LegalPage';
import { COOKIES } from '@/lib/legal';

export const metadata = {
  title: 'Cookie Policy',
  description: 'What SkillsGather stores in your browser. No tracking or advertising cookies.',
};

export default function CookiesPage() {
  return <LegalPage doc={COOKIES} currentHref="/cookies" />;
}
