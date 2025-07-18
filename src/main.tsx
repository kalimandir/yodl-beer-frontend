import ReactDOM from 'react-dom/client';

import { AppProviders } from './providers/AppProviders';
import reportWebVitals from './reportWebVitals.ts';
import './styles.css';

// Render the app
const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<AppProviders />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
