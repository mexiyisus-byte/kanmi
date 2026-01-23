import React from 'react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Showcase } from './components/Showcase';
import { Packages } from './components/Packages';
import { HowItWorks } from './components/HowItWorks';
import { SocialProof } from './components/SocialProof';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id'?: string;
      };
    }
  }
}

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <Concept />
        <Showcase />
        <HowItWorks />
        <Packages />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
      <elevenlabs-convai agent-id="agent_8101kfn6j0j9f5n8q7bm8pmgndp9"></elevenlabs-convai>
    </div>
  );
}

export default App;