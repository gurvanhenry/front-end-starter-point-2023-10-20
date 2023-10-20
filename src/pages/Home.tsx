import { Link } from 'react-router-dom';

import { Logo } from '@/components/Logo';

export function Home() {
  return (
    <div>
      <Logo />
      <p>Home page</p>
      <p>
        go to <Link to="/about">about</Link> page
      </p>
    </div>
  );
}
