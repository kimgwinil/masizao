/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IngredientSection } from './components/IngredientSection';
import { ShopSection } from './components/ShopSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          <HeroSection />
          <IngredientSection />
          <ShopSection />
          <BenefitsSection />
          <ReviewsSection />
          <MobileStickyBar />
        </div>
      </main>
      <Footer />
    </>
  );
}

