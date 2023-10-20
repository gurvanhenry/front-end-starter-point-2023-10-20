import { Link } from 'react-router-dom';

import { Logo } from '@/ui/components/Logo';

export function Home() {
  return (
    <div>
      <h3>Home page</h3>
      <Logo />
      <p>
        go to <Link to="/about">about</Link> page
      </p>
    </div>
  );
}
