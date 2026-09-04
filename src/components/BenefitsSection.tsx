import { Smile, Flower2, Recycle, BadgeCheck } from 'lucide-react';

export function BenefitsSection() {
  return (
    <section id="products" className="w-full py-space-3xl lg:py-space-4xl bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-space-lg mb-space-3xl">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-label-md text-label-md text-primary font-bold tracking-wider">DAILY WELLNESS BENEFIT</span>
            <h2 className="font-headline-xl text-headline-lg lg:text-headline-xl text-on-surface font-extrabold tracking-tight">
              매일 마시는 물, <span className="text-primary">마시자오가 특별한 4가지 이유</span>
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            단순한 갈증 해소를 넘어 몸의 기초 리듬과 지속 가능한 자연까지 생각한 프리미엄 하이드레이션 기준.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {/* Feature 1 */}
          <div className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-space-md group-hover:scale-110 transition-transform">
                <Smile />
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">0 kcal · 0 Sugar</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                당류, 합성 보존료, 착색료 무첨가. 텁텁함 없이 물처럼 맑고 가볍게 마실 수 있어 다이어트 및 혈당 걱정 없는 데일리 수분 보충.
              </p>
            </div>
            <span className="mt-space-lg pt-space-xs font-label-sm text-label-sm text-secondary font-bold">100% 무가당 순수 음료</span>
          </div>
          {/* Feature 2 */}
          <div className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-space-md group-hover:scale-110 transition-transform">
                <Flower2 />
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">풍부한 쌀의 영양</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                현미의 영양 95%가 집중된 미강(쌀겨)과 쌀눈의 감마오리자놀, 비타민 E, 페룰산 등 활력 항산화 성분을 한 병에 담았습니다.
              </p>
            </div>
            <span className="mt-space-lg pt-space-xs font-label-sm text-label-sm text-primary font-bold">자연 유래 항산화 에너지</span>
          </div>
          {/* Feature 3 */}
          <div className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-space-md group-hover:scale-110 transition-transform">
                <Recycle />
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">에코 프렌들리 디자인</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                분리배출의 번거로움을 덜어주는 라벨 프리(Label-free) 투명 PET 용기. 감각적인 퍼플 타이포 디자인과 환경에 대한 배려를 결합했습니다.
              </p>
            </div>
            <span className="mt-space-lg pt-space-xs font-label-sm text-label-sm text-secondary font-bold">재활용 최우수 100% PET</span>
          </div>
          {/* Feature 4 */}
          <div className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-space-md group-hover:scale-110 transition-transform">
                <BadgeCheck />
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">삼양패키징 무균 공정</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                대한민국 No.1 음료 제조 명가 삼양패키징의 아셉틱(Aseptic) 무균 충전 시스템에서 생산되어 유효 성분 파괴 없이 안전하고 신선합니다.
              </p>
            </div>
            <span className="mt-space-lg pt-space-xs font-label-sm text-label-sm text-primary font-bold">HACCP & ISO22000 인증</span>
          </div>
        </div>
      </div>
    </section>
  );
}
