import Image from 'next/image';
import logoImg from '../public/images/logo.png';

export default function Logo({ size = 42, text = true, priority = false, className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <Image
        src={logoImg}
        alt={text ? '' : 'SkillsGather'}
        width={size}
        height={Math.round(size * 0.88)}
        priority={priority}
        className="logo__img"
      />
      {text && (
        <span className="logo__text">
          Skills<b>Gather</b>
        </span>
      )}
    </span>
  );
}
