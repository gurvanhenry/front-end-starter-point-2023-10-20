import { useEffect, useState } from 'react';

import * as Api from './AboutApi';

export function About() {
  const [aboutContent, setAboutContent] = useState('');

  // could be replaced by loader function in router
  useEffect(() => {
    const fetchData = async () => {
      const data = await Api.getAboutContent();
      setAboutContent(data);
    };
    fetchData();
  }, []);

  let content = 'Loading...⏲';
  if (aboutContent) {
    content = aboutContent;
  }

  return (
    <div>
      <h3>About page</h3>
      <p>this content is loaded from an api:</p>
      <p>----------------------</p>
      <p>{content}</p>
      <p>----------------------</p>
    </div>
  );
}
