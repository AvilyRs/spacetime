import Image from 'next/image';

import { getUser } from '@/lib/auth';

export function Profile() {
  const { name, avatarUrl } = getUser();

  return (
    <div className='flex items-center gap-3 px-5 py-4 rounded-lg text-left'>
      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400'>
        <Image
          src={avatarUrl}
          width={40}
          height={40}
          title={name}
          alt=''
          className='w-10 h-10 rounded-full'
        />
      </div>

      <p className='text-small leading-snug max-w-[180px]'>
        <span className='font-bold'>{name}</span>
        <a href='#' className='block text-red-400 hover:text-red-300 transition-colors'>Sair</a>
      </p>
    </div>
  );
}