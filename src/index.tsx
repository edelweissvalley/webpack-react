import React from 'react';
import { render } from 'react-dom';

import { App } from 'src/App';

const root: HTMLElement = document.createElement('section');
root.setAttribute('id', 'root');
document.body.appendChild(root);

render(<App />, root);
