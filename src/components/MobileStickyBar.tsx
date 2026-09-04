export function MobileStickyBar() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
      <div className="p-space-sm rounded-full bg-surface-container-lowest/95 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-space-sm">
        <div className="flex flex-col pl-space-md">
          <span className="font-label-sm text-label-sm text-secondary font-bold">구독 특가 25% OFF</span>
          <span className="font-headline-sm text-headline-sm font-black text-primary leading-tight">42,000원</span>
        </div>
        <a className="px-space-lg py-space-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-lg" href="#shop-bundle">
          구매/구독하기
        </a>
      </div>
    </div>
  );
}
