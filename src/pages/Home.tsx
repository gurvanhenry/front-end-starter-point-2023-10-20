import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <p>Home page</p>
      <p>
        go to <Link to="/about">about</Link> page
      </p>
    </div>
  );
}
