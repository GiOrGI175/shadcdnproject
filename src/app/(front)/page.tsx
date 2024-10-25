import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans) w=full]'>
      <Button>
        <button disabled>
          <Mail></Mail>
        </button>
      </Button>
      <div>
        <blockquote className='m-6 w-full '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem nemo minima molestias inventore culpa, assumenda, ipsam
          odio ab ipsum id sint veritatis. Atque quam consectetur, quidem
          temporibus fuga nobis! Illum.
        </blockquote>
        <blockquote className='m-6 w-full '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum magni,
          esse sequi, voluptates fuga velit praesentium molestiae cumque ut hic
          voluptatibus consequatur laudantium repellendus officia
          exercitationem. Est excepturi incidunt minus.
        </blockquote>
      </div>
    </div>
  );
}
