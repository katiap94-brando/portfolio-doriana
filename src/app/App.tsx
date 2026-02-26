import { Hero } from './components/Hero';
import { ChiSono } from './components/ChiSono';
import { Statistics } from './components/Statistics';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="w-full">
      <Hero />
      <ChiSono />
      <Statistics />
      <Projects />
      <Contact />
    </div>
  );
}