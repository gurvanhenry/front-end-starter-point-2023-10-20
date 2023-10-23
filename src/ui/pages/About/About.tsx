import { useEffect } from 'react';

import {
  selectAboutContent,
  selectAboutIsFetching,
} from '@/domain/about/about.selectors';
import { getAboutContent } from '@/domain/about/actions/get-about-content.action';
import { useAppDispatch, useAppSelector } from '@/ui/hook/store';
import { translate } from '@/ui/i18n';

export function About() {
  const dispatch = useAppDispatch();

  const isFetching = useAppSelector(selectAboutIsFetching);
  const aboutContent = useAppSelector(selectAboutContent);

  useEffect(() => {
    dispatch(getAboutContent());
  }, [dispatch]);

  let content = '--';
  if (isFetching) {
    content = 'Loading...⏲';
  } else {
    if (aboutContent) {
      content = aboutContent;
    }
  }

  return (
    <div>
      <h3>{translate('about-page-title')}</h3>
      <p>this content is loaded from an api:</p>
      <p>----------------------</p>
      <p>{content}</p>
      <p>----------------------</p>
    </div>
  );
}
