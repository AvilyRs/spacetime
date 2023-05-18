import { EmptyMemories } from '@/components/EmptyMemories';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { SignIn } from '@/components/SignIn';

export default function Home() {
  return (
    <main className='grid grid-cols-2 min-h-screen'>
      <div className='flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)]'>
        <div className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-[288px] w-[526px] rounded-full bg-purple-700 opacity-50 blur-full' />
        <div className='absolute right-2 top-0 bottom-0 w-2 bg-stripes' />

        <SignIn />
        <Hero />
        <Footer />
      </div>

      <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)]'>
        <EmptyMemories />
      </div>
    </main>
  );
}
