import { createRoot } from 'react-dom/client';
import App from './App.server.js';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
