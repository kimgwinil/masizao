import { useState } from 'react';
import { ShieldCheck, RefreshCw, ShoppingBag, Gift, Check, Minus, Plus, ShoppingCart, CreditCard, Truck, Shield, Leaf } from 'lucide-react';

export function ShopSection() {
  const [currentType, setCurrentType] = useState<'sub' | 'once'>('sub');
  const [quantity, setQuantity] = useState(1);
  const [cycle, setCycle] = useState('4w');
  const [customCycle, setCustomCycle] = useState<number | string>('');

  const unitPrices = { sub: 42000, once: 49000 };

  const handleCartAction = (action: 'cart' | 'buy') => {
    const total = (unitPrices[currentType] * quantity).toLocaleString();
    const typeLabel = currentType === 'sub' ? '정기구독' : '1회 구매';
    if (action === 'cart') {
      alert(`[마시자오] ${typeLabel} ${quantity}박스가 장바구니에 담겼습니다. (총 ${total}원)`);
    } else {
      alert(`[마시자오 주문] ${typeLabel} ${quantity}박스 주문 결제 페이지로 이동합니다. (결제 예정 금액: ${total}원)`);
    }
  };

  return (
    <section className="w-full py-space-3xl lg:py-space-4xl bg-surface" id="shop-bundle">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          
          {/* Left: Product High-Res Bottle Visual Display */}
          <div className="lg:col-span-6 flex flex-col items-center relative">
            <div className="w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden shadow-2xl relative bg-surface-container-low flex items-center justify-center group">
              <img alt="마시자오 미강 블렌디드 워터 350ml 투명 PET 실물" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcDpaxFMBcTydlA_8xt7kkX9KuOK5EyIC_v6ZLmosN_CVEhhV2oYO_Scaq2dEL6IamlkZqJU7kICf3l8YkIkNFCR6oVr5J13l_bysqlX6dFgjcPgaULQTjpduqVJl1rldi-_IpX2jtPVPFL4f9X3mbeClDmfVDLZM06vtLz-USmIK8zZFcHAcuD_HqqUvkg6Ti2MNVgUcATcjjAH-fs6bzWw0ENAcmOVAXB1UoZhBWJDLRHVdyu75C9S_rGZgAQaK9ew"/>
              <div className="absolute top-space-md left-space-md flex flex-col gap-space-xs">
                <span className="px-space-md py-space-xxs rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-md">
                  BEST SELLER
                </span>
                <span className="px-space-md py-space-xxs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold shadow-md">
                  350ml x 28병 번들
                </span>
              </div>
              <div className="absolute bottom-space-md right-space-md px-space-md py-space-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-lg font-label-sm text-label-sm text-primary font-bold flex items-center gap-space-xxs">
                <Leaf className="w-4 h-4" />
                <span>라벨 프리 무라벨 PET</span>
              </div>
            </div>
            
            {/* Thumbnail Strip */}
            <div className="flex items-center gap-space-sm mt-space-md">
              <div className="w-16 h-16 rounded-lg overflow-hidden ring-2 ring-primary p-0.5 bg-surface-container-lowest cursor-pointer">
                <img alt="썸네일 1" className="w-full h-full object-cover rounded-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRZ4WwRfMLR2FjJxtmGfk-9sre4fho_W9k1v-h4WKc9K6FmxEZn8f9b5qn0q2dGwnziFLZ6Y_k52d1wxyMlsaJ8bcz6UwXzU7auI-in6Fc7H5ik8vE8TNgA4tX9yDghDJY4lTld_Cz4qbQh8epoBuaZMtL7I5YLS2_UlQYSoHn6VE5R0OeoND4sywyQ07xQTXzWTPxB5ymjCrxBCO4GDE8gyQ_26UZ4JOHYTAb7YOvBescJoG6pgp70seLKMkb6JTV5w"/>
              </div>
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-low p-0.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <img alt="썸네일 2" className="w-full h-full object-cover rounded-md" src="https://lh3.googleusercontent.com/aida/AEtjO1W2YX1dCxNdINMONGTGOqePn8Tqhu6xiZZpnLVUYqCURghziuU1rDdvjLykiOIlVMMpDdiT9geyhJulTpGxLH3HaBGBSObSxWwJiuSAYZyOWcyAqkVAElP9V8gI-5k-iPqnNHaNVPsGgekAR6MkFcvnSweX9np39CjeRGM3dj_KzH-8fxp1fDd69BJHGi3oSP3pNphoh6X7EsGYBLrs7nZ_MZZDuAzPO7vMd86FYobvuxyBYL9Du_UHUHE"/>
              </div>
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-high flex items-center justify-center text-secondary font-label-sm text-label-sm font-bold cursor-pointer">
                +12컷
              </div>
            </div>
          </div>
          
          {/* Right: Purchasing Configuration & Toggle Panels */}
          <div className="lg:col-span-6 flex flex-col gap-space-lg">
            <div>
              <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md font-bold mb-space-xs">
                <ShieldCheck className="w-[18px] h-[18px]" />
                <span>공식 브랜드 스토어 정품 보증 · 직배송</span>
              </div>
              <h2 className="font-headline-xl text-headline-lg lg:text-headline-xl text-on-surface font-extrabold tracking-tight">
                마시자오 미강 블렌디드 워터<br/>
                <span className="text-primary font-bold">350ml x 28병 전용 패키지 번들</span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                가벼운 그립감의 350ml 규격. 출근길, 운동 전후, 일상 회복에 최적화된 하루 1병 미강 수분 루틴 박스.
              </p>
            </div>
            
            {/* Purchase Model Toggle */}
            <div className="p-1 rounded-full bg-surface-container-high flex items-center gap-1 w-full max-w-lg">
              <button 
                onClick={() => setCurrentType('sub')}
                className={`flex-1 py-space-sm px-space-md rounded-full font-label-lg text-label-lg font-bold shadow-md transition-all text-center flex items-center justify-center gap-space-xs ${currentType === 'sub' ? 'bg-primary text-on-primary' : 'bg-transparent text-on-surface-variant hover:text-on-surface shadow-none font-medium'}`}
              >
                <RefreshCw className="w-[18px] h-[18px]" />
                <span>정기배송 구독형 (25% OFF)</span>
              </button>
              <button 
                onClick={() => setCurrentType('once')}
                className={`flex-1 py-space-sm px-space-md rounded-full font-label-lg text-label-lg font-bold shadow-md transition-all text-center flex items-center justify-center gap-space-xs ${currentType === 'once' ? 'bg-primary text-on-primary' : 'bg-transparent text-on-surface-variant hover:text-on-surface shadow-none font-medium'}`}
              >
                <ShoppingBag className="w-[18px] h-[18px]" />
                <span>일반 1회 구매</span>
              </button>
            </div>
            
            {/* Active Purchase Pane */}
            {currentType === 'sub' ? (
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-space-xs">
                    <span className="font-headline-xl text-headline-xl font-black text-primary">42,000원</span>
                    <span className="font-body-md text-body-md text-outline line-through">56,000원</span>
                    <span className="px-space-xs py-space-xxs rounded-md bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">25% 특가</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold">병당 약 1,500원꼴</span>
                </div>
                
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md font-bold text-on-surface flex items-center justify-between">
                    <span>정기배송 주기 선택</span>
                    <span className="text-secondary font-normal font-label-sm text-label-sm">언제든 해지 · 건너뛰기 가능</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs">
                    {['2w', '4w', '8w', 'custom'].map((c) => (
                      <button 
                        key={c}
                        onClick={() => setCycle(c)}
                        className={`py-space-xs px-space-sm rounded-lg font-label-md text-label-md transition-all text-center ${cycle === c ? 'bg-primary text-on-primary font-bold shadow-sm' : 'bg-surface-container text-on-surface-variant font-semibold hover:bg-surface-container-high'}`}
                      >
                        {c === '2w' ? '2주마다' : c === '4w' ? '4주마다 (추천)' : c === '8w' ? '8주마다' : '직접 입력'}
                      </button>
                    ))}
                  </div>

                  {cycle === 'custom' && (
                    <div className="mt-space-xs flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low border border-primary/20">
                      <span className="font-label-md text-label-md font-bold text-primary">원하시는 배송 주기</span>
                      <div className="flex items-center gap-space-xs">
                        <input 
                          type="number" 
                          min="1" 
                          max="52" 
                          placeholder="예: 3"
                          value={customCycle} 
                          onChange={(e) => setCustomCycle(e.target.value === '' ? '' : parseInt(e.target.value))} 
                          className="w-20 p-2 text-center rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface font-bold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                        />
                        <span className="font-label-md text-label-md font-bold">주마다</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="rounded-lg bg-surface-container-low p-space-md flex flex-col gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                  <div className="flex items-center gap-space-xs text-secondary font-semibold">
                    <Gift className="w-[18px] h-[18px]" />
                    <span>정기구독 고객 특별 혜택</span>
                  </div>
                  <ul className="flex flex-col gap-1 text-on-surface">
                    <li className="flex items-center gap-space-xs">
                      <Check className="text-secondary w-4 h-4" />
                      첫 회차 주문 시 MASIZAO 전용 친환경 리유저블 트라이탄 보틀 증정
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <Check className="text-secondary w-4 h-4" />
                      전 회차 무료 배송 보장 (제주/도서산간 포함)
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <Check className="text-secondary w-4 h-4" />
                      3회차마다 브랜드 굿즈 및 미강 뷰티 케어 샘플 키트 추가 증정
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-space-xs">
                    <span className="font-headline-xl text-headline-xl font-black text-on-surface">49,000원</span>
                    <span className="font-body-md text-body-md text-outline line-through">56,000원</span>
                    <span className="px-space-xs py-space-xxs rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">12% 할인</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold">전국 무료 배송</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  정기구독 전, 마시자오만의 청량하고 고소한 미강 워터를 먼저 한 박스 맛보고 싶은 분들께 권장합니다.
                </p>
              </div>
            )}
            
            {/* Quantity Counter */}
            <div className="flex items-center justify-between p-space-md rounded-xl bg-surface-container-low">
              <span className="font-label-lg text-label-lg font-bold text-on-surface">구매 수량 (박스)</span>
              <div className="flex items-center gap-space-sm bg-surface-container-lowest px-space-sm py-1 rounded-full shadow-sm">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
                  <Minus className="w-[18px] h-[18px]" />
                </button>
                <span className="font-headline-sm text-headline-sm font-bold text-primary px-space-xs">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
                  <Plus className="w-[18px] h-[18px]" />
                </button>
              </div>
            </div>
            
            {/* Big Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <button onClick={() => handleCartAction('cart')} className="py-space-md px-space-lg rounded-full bg-surface-container-lowest text-secondary font-label-lg text-label-lg font-bold shadow-md hover:bg-surface-container transition-all flex items-center justify-center gap-space-xs">
                <ShoppingCart className="w-[20px] h-[20px]" />
                <span>장바구니 담기</span>
              </button>
              <button onClick={() => handleCartAction('buy')} className="py-space-md px-space-lg rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-xl hover:bg-primary-container transition-all flex items-center justify-center gap-space-xs">
                <CreditCard className="w-[20px] h-[20px]" />
                <span>{currentType === 'sub' ? '정기구독 신청하기' : '일반 구매 결제하기'}</span>
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-space-xs gap-space-xs">
              <span className="flex items-center gap-space-xxs"><Truck className="text-secondary w-4 h-4" /> 오늘 오후 3시 이전 결제 시 당일 출고</span>
              <span className="flex items-center gap-space-xxs"><Shield className="text-secondary w-4 h-4" /> 품질 이상 시 100% 교환/환불</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
