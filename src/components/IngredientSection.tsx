import { Droplet, Wheat, BadgeCheck } from 'lucide-react';

export function IngredientSection() {
  return (
    <section id="brand-story" className="w-full py-space-3xl lg:py-space-4xl bg-surface-container-low relative">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col items-center">
        {/* Section Header Copy */}
        <div className="text-center max-w-3xl flex flex-col items-center gap-space-xs mb-space-3xl">
          <span className="px-space-md py-space-xxs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold tracking-wider">
            THE DUAL ORIGIN PHILOSOPHY
          </span>
          <h2 className="font-headline-xl text-headline-lg lg:text-headline-xl text-on-surface font-extrabold tracking-tight">
            타협 없는 두 가지 핵심 원료의 만남
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            맑고 깨끗한 수분 충전과 쌀의 깊은 영양을 오롯이 한 병에 담았습니다. 근본부터 남다른 마시자오만의 듀얼 오리진 블렌딩을 경험해보세요.
          </p>
        </div>
        
        {/* Bento Cards: Symmetric Ingredients */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl w-full">
          {/* Card 1: Water */}
          <div className="group relative rounded-xl bg-surface-container-lowest p-space-xl lg:p-space-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-secondary-fixed-dim/20 blur-3xl group-hover:bg-secondary-fixed-dim/30 transition-all"></div>
            <div>
              <div className="flex items-center justify-between gap-space-md mb-space-lg">
                <span className="px-space-md py-space-xxs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                  100% KOREAN DEEP WATER
                </span>
                <Droplet className="text-secondary w-[22px] h-[22px]" />
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-sm">
                대한민국 청정 암반 생수
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                자연이 오랜 시간 여과해 낸 청정 지하 암반수를 사용하여 미네랄이 풍부하고 목넘김이 한없이 맑고 부드럽습니다. 정제된 본연의 물맛으로 깔끔한 피니시를 선사합니다.
              </p>
              <div className="grid grid-cols-3 gap-space-sm pt-space-xs">
                <div className="p-space-sm rounded-lg bg-surface-container-low text-center">
                  <span className="font-label-sm text-label-sm text-secondary block font-semibold">원산지</span>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">국내산 100%</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low text-center">
                  <span className="font-label-sm text-label-sm text-secondary block font-semibold">필터링</span>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">천연 화강암</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low text-center">
                  <span className="font-label-sm text-label-sm text-secondary block font-semibold">텍스처</span>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">소프트 워터</span>
                </div>
              </div>
            </div>
            <div className="mt-space-xl pt-space-md flex items-center justify-between text-secondary font-label-md text-label-md">
              <span className="flex items-center gap-space-xxs font-bold">
                <BadgeCheck className="w-[18px] h-[18px]" /> 천연 미네랄 밸런스 유지
              </span>
              <span className="text-outline-variant font-mono">STEP 01</span>
            </div>
          </div>
          
          {/* Card 2: Rice Bran Essence */}
          <div className="group relative rounded-xl bg-surface-container-lowest p-space-xl lg:p-space-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-primary-fixed-dim/25 blur-3xl group-hover:bg-primary-fixed-dim/40 transition-all"></div>
            <div>
              <div className="flex items-center justify-between gap-space-md mb-space-lg">
                <span className="px-space-md py-space-xxs rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                  JAPANESE PREMIUM RICE BRAN
                </span>
                <Wheat className="text-primary w-[22px] h-[22px]" />
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-sm">
                엄선된 일본산 프리미엄 미강 추출물
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                첨단 저온 고압 정밀 추출 공법을 통해 쌀눈과 쌀겨 본연의 감마오리자놀, 비타민 E, 수용성 식이섬유 등 살아있는 항산화 복합 영양소를 파괴 없이 진하게 농축 담았습니다.
              </p>
              <div className="grid grid-cols-3 gap-space-sm pt-space-xs">
                <div className="p-space-sm rounded-lg bg-surface-container-low text-center">
                  <span className="font-label-sm text-label-sm text-primary block font-semibold">핵심 성분</span>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">감마오리자놀</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low text-center">
                  <span className="font-label-sm text-label-sm text-primary block font-semibold">추출 방식</span>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">저온 진공농축</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low text-center">
                  <span className="font-label-sm text-label-sm text-primary block font-semibold">맛의 감도</span>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">은은한 고소함</span>
                </div>
              </div>
            </div>
            <div className="mt-space-xl pt-space-md flex items-center justify-between text-primary font-label-md text-label-md">
              <span className="flex items-center gap-space-xxs font-bold">
                <BadgeCheck className="w-[18px] h-[18px]" /> 고순도 쌀눈 활성 성분
              </span>
              <span className="text-outline-variant font-mono">STEP 02</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
