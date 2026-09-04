import { Star } from 'lucide-react';

export function ReviewsSection() {
  return (
    <section id="reviews" className="w-full py-space-3xl lg:py-space-4xl bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        {/* Section Top with Aggregate Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-2xl">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-primary font-bold">CUSTOMER SATISFACTION</span>
            <h2 className="font-headline-xl text-headline-lg lg:text-headline-xl text-on-surface font-extrabold tracking-tight">
              먼저 경험한 고객들의 생생한 리뷰
            </h2>
          </div>
          <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
            <div className="flex flex-col items-center pr-space-md">
              <span className="font-display-hero text-headline-xl font-extrabold text-primary leading-none">4.9</span>
              <span className="font-label-sm text-label-sm text-outline">5.0 만점 기준</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex text-amber-500">
                <Star className="w-5 h-5" fill="currentColor" />
                <Star className="w-5 h-5" fill="currentColor" />
                <Star className="w-5 h-5" fill="currentColor" />
                <Star className="w-5 h-5" fill="currentColor" />
                <Star className="w-5 h-5" fill="currentColor" />
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">누적 리뷰 2,410건 · 재구매율 88.4%</span>
            </div>
          </div>
        </div>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Review Card 1 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                </div>
                <span className="px-space-xs py-space-xxs rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">정기구독 4회차</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">
                "맹물 비린내 못 마시는 저에게 구원투수예요"
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                평소 하루 물 500ml도 겨우 넘기던 편이었는데, 마시자오는 은은하게 누룽지 같으면서도 뒷맛이 완전 맑아서 하루 2병씩 술술 비우고 있습니다. 출근 가방에 쏙 들어가는 350ml 사이즈도 신의 한 수!
              </p>
            </div>
            <div className="flex items-center justify-between pt-space-md text-outline font-label-sm text-label-sm">
              <span className="font-semibold text-on-surface">김*희 님 (직장인)</span>
              <span>2일 전 구매</span>
            </div>
          </div>
          
          {/* Review Card 2 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                </div>
                <span className="px-space-xs py-space-xxs rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">정기구활용</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">
                "운동할 때 갈증이 훨씬 빨리 잡힙니다"
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                러닝과 웨이트 트레이닝 후 이온음료는 당류 때문에 부담스러웠는데 0칼로리에 감마오리자놀 영양까지 챙길 수 있어서 너무 만족스럽네요. 패키지 디자인도 힙해서 헬스장에서 다들 물어봐요.
              </p>
            </div>
            <div className="flex items-center justify-between pt-space-md text-outline font-label-sm text-label-sm">
              <span className="font-semibold text-on-surface">이*혁 님 (크로스핏 코치)</span>
              <span>1주일 전 구매</span>
            </div>
          </div>
          
          {/* Review Card 3 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                </div>
                <span className="px-space-xs py-space-xxs rounded bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold">일반 번들 구매</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">
                "부모님도 차 대신 물처럼 드세요"
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                일본산 프리미엄 미강 추출물과 국내산 생수 블렌딩이라 그런지 잡맛 없이 깔끔합니다. 삼양패키징 무균 제조라 위생도 안심되고 분리배출 라벨 뗄 필요도 없어서 바로 정기구독으로 갈아탑니다!
              </p>
            </div>
            <div className="flex items-center justify-between pt-space-md text-outline font-label-sm text-label-sm">
              <span className="font-semibold text-on-surface">박*서 님 (가정주부)</span>
              <span>2주 전 구매</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
