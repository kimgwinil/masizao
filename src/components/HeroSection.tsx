import { Zap, ShoppingBag, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden -mt-20 pt-24 pb-20 lg:pb-32 bg-surface-container-lowest">
      {/* Fluid background splash image */}
      <div className="absolute inset-0 z-0">
        <img alt="마시자오 청량한 물방울 스플래시" className="w-full h-full object-cover object-center transform scale-105 filter brightness-105" src="https://lh3.googleusercontent.com/aida/AEtjO1W2YX1dCxNdINMONGTGOqePn8Tqhu6xiZZpnLVUYqCURghziuU1rDdvjLykiOIlVMMpDdiT9geyhJulTpGxLH3HaBGBSObSxWwJiuSAYZyOWcyAqkVAElP9V8gI-5k-iPqnNHaNVPsGgekAR6MkFcvnSweX9np39CjeRGM3dj_KzH-8fxp1fDd69BJHGi3oSP3pNphoh6X7EsGYBLrs7nZ_MZZDuAzPO7vMd86FYobvuxyBYL9Du_UHUHE"/>
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/95 via-surface-container-lowest/80 to-transparent lg:w-3/4"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-surface-container-lowest/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-12 lg:pt-16">
        <div className="max-w-2xl flex flex-col items-start gap-space-lg">
          {/* Brand Chip & Badge */}
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xxs rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-md text-primary font-label-lg text-label-lg border-0">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
            <span className="font-bold tracking-wide">HYDRATION REVOLUTION</span>
            <span className="text-outline-variant font-normal">|</span>
            <span className="text-secondary font-semibold">미강 프리미엄 블렌디드 워터</span>
          </div>
          
          {/* Hero Primary Typography */}
          <div className="flex flex-col gap-space-xs">
            <h1 className="font-display-hero text-headline-xl lg:text-display-hero text-on-surface tracking-tight leading-tight">
              물에 <span className="text-primary underline decoration-secondary-container decoration-wavy decoration-4">미강의 생명력</span>을 더하다,<br/>
              오늘부터 <span className="text-primary font-black">마시자오!</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl pt-space-xs leading-relaxed">
              대한민국 100% 청정 암반 생수와 엄선된 일본산 프리미엄 미강(쌀겨) 추출물의 기적 같은 블렌딩. 일상 속 가장 깨끗하고 깊이 있는 수분 충전 루틴.
            </p>
          </div>
          
          {/* Key Metrics Ribbon */}
          <div className="grid grid-cols-3 gap-space-md w-full max-w-md py-space-xs">
            <div className="flex flex-col p-space-sm rounded-lg bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm">
              <span className="font-label-sm text-label-sm text-secondary font-bold">CALORIES</span>
              <span className="font-headline-md text-headline-md text-primary font-extrabold">0 kcal</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">부담 없는 순수 수분</span>
            </div>
            <div className="flex flex-col p-space-sm rounded-lg bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm">
              <span className="font-label-sm text-label-sm text-secondary font-bold">RICE BRAN</span>
              <span className="font-headline-md text-headline-md text-primary font-extrabold">100%</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">정밀 농축 추출물</span>
            </div>
            <div className="flex flex-col p-space-sm rounded-lg bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm">
              <span className="font-label-sm text-label-sm text-secondary font-bold">PACKAGE</span>
              <span className="font-headline-md text-headline-md text-primary font-extrabold">무균</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">삼양패키징 제조</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto pt-space-xs">
            <a className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-xl hover:bg-primary-container hover:shadow-2xl transition-all duration-300 group" href="#shop-bundle">
              <span>정기구독 신청하고 25% 할인받기</span>
              <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-secondary font-label-lg text-label-lg shadow-md hover:bg-surface-container-low transition-all" href="#shop-bundle">
              <ShoppingBag className="w-5 h-5" />
              <span>1회 일반 구매하기</span>
            </a>
          </div>
          
          {/* Trust Indicator */}
          <div className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm pt-space-xxs">
            <div className="flex text-amber-500">
              <Star className="w-[18px] h-[18px]" fill="currentColor" />
              <Star className="w-[18px] h-[18px]" fill="currentColor" />
              <Star className="w-[18px] h-[18px]" fill="currentColor" />
              <Star className="w-[18px] h-[18px]" fill="currentColor" />
              <Star className="w-[18px] h-[18px]" fill="currentColor" />
            </div>
            <span className="font-bold text-on-surface">실구매 평점 4.9 / 5.0</span>
            <span className="text-outline-variant">•</span>
            <span>누적 정기구독 38,400+ 병 돌파</span>
          </div>
        </div>
      </div>
    </section>
  );
}
