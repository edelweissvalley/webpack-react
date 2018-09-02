import * as React from 'react';

import {index} from 'src/components/pages/index';
import {Template} from 'src/components/template/Template';

export function App(): JSX.Element {
  return (
    <Template>{index}</Template>
  );
}
