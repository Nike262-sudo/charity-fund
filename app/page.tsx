'use client';

import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FocusAreas } from './components/FocusAreas';
import { Involved } from './components/Involved';
import { Impact } from './components/Impact';
import { Stories } from './components/Stories';
import { Projects } from './components/Projects';
import { Donation } from './components/Donation';

export default function Home() {
  return (
    <div className="antialiased text-stone-800">
      <Nav />
      <Hero />
      <About />
      <FocusAreas />
      <Impact />
      <Stories />
      <Projects />
      <Donation />
      <Involved />
      <Footer />
    </div>
  );
}
