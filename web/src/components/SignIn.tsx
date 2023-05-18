import { User } from 'lucide-react';

export function SignIn() {
  const githubOauthURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;

  return (
    <a href={githubOauthURL} className='flex items-center gap-3 px-5 py-4 rounded-lg text-left hover:bg-gray-400/20 transition-colors'>
      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400'>
        <User className='h-5 w-5 text-gray-500' />
      </div>

      <p className='text-small leading-snug max-w-[180px]'><span className='underline'>Crie sua conta</span> e salve suas memórias!</p>
    </a>
  );
}