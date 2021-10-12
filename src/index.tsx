import { createRoot } from 'react-dom/client';

import { App } from 'src/App';

const root: HTMLElement = document.createElement('section');
root.setAttribute('id', 'root');
document.body.appendChild(root);

createRoot(root).render(<App />);
