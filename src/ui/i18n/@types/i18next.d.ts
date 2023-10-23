import 'i18next';

import frNs1 from '../locales/fr/fr-ns1.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1';
    resources: {
      ns1: typeof frNs1;
    };
  }
}
