import i18next from 'i18next';

import frNs1 from './locales/fr/fr-ns1.json';

i18next.init({
  lng: 'fr',
  fallbackLng: 'fr',
  defaultNS: 'ns1',
  debug: true,
  resources: {
    fr: {
      ns1: frNs1,
    },
  },
});

const translate = i18next.t;

export { translate };
