import { useState } from 'react';

import textContent from './data/textContent';

import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

export default function App() {
  const [lang, setLang] = useState('en');
  const content = textContent[lang];

  return (
    <div className="container">
      <Header
        title={content.title}
        subtitle={content.subtitle}
        profile={content.profile}
        lang={lang}
        setLang={setLang}
      />

      <main>
        <LeftPanel content={content} lang={lang}/>
        <RightPanel content={content} />
      </main>
    </div>
  );
}


