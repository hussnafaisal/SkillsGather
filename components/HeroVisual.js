import Image from 'next/image';
import logoImg from '../public/images/logo.png';
import { SwapIcon, HeartIcon, CompassIcon } from './Icons';

/** Home hero artwork: the logo inside rotating rings with three floating path chips. */
export default function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      <div className="hv__ring hv__ring--1" />
      <div className="hv__ring hv__ring--2" />
      <div className="hv__ring hv__ring--3" />
      <div className="hv__core">
        <Image src={logoImg} alt="" width={200} height={176} priority className="hv__logo" />
      </div>
      <div className="hv__chip hv__chip--1">
        <SwapIcon size={18} /> Swap
      </div>
      <div className="hv__chip hv__chip--2">
        <HeartIcon size={18} /> Volunteer
      </div>
      <div className="hv__chip hv__chip--3">
        <CompassIcon size={18} /> Find help
      </div>
    </div>
  );
}
