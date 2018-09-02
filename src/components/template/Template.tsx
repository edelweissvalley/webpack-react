import * as React from 'react';

import {Footer} from 'src/components/template/Footer';
import {Header} from 'src/components/template/Header';

import 'src/components/template/template.pcss';

export function Template(
  {children}: {children?: React.ReactNode}
): JSX.Element {
  return (
    <section className="template">
      <Header/>{children}<Footer/>
    </section>
  );
}
