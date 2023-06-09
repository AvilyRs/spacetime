import Image from 'next/image';

import logo from '@/assets/logo.svg';
import Link from 'next/link';

export function Hero() {
  return (
    <div className='space-y-5'>
      <div className='max-w-[420px] space-y-4'>
        <Image src={logo} alt='NPW Spacetime' />
        <h1 className='mt-5 text-5xl font-bold leading-tight text-gray-50'>Sua cápsula do tempo</h1>
        <p className='text-lg leading-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
      </div>
      <Link href='/memories/new' className='inline-block rounded-full bg-green-500 hover:bg-green-700 transition-colors px-5 py-3 font-alt text-sm uppercase leading-none text-black'>
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  );
}