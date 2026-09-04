import { Phone, MessageCircle, Mail } from 'lucide-react';
import { images } from '../lib/images';

export function Footer() {
  return (
    <footer id="customer-center" className="w-full bg-surface-container-low mt-space-4xl shadow-[0_-1px_16px_rgba(0,104,118,0.03)]">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl mb-space-2xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <img alt="MASIZAO Logo" className="h-7 w-auto object-contain" src={images.logo}/>
              <span className="font-headline-sm text-headline-sm tracking-tight text-primary font-bold">마시자오 (MASIZAO)</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md leading-relaxed">
              맑고 깨끗한 심층 수질과 고영양 미강(쌀겨) 추출물의 조화. 매일의 활력을 채우는 프리미엄 라이프스타일 웰니스 하이드레이션 음료입니다.
            </p>
            <div className="flex flex-wrap gap-space-xs pt-space-xs">
              <span className="px-space-sm py-space-xxs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">원산지 표기</span>
              <span className="px-space-sm py-space-xxs rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm">정제수/생수: 국내산</span>
              <span className="px-space-sm py-space-xxs rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm">미강추출물: 일본산 엄선 원료</span>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <div className="font-label-lg text-label-lg text-on-surface font-bold mb-space-xs">사업자 정보</div>
            <div><span className="text-on-surface font-semibold">상호:</span> 마시 ｜ <span className="text-on-surface font-semibold">대표자:</span> 조영덕</div>
            <div><span className="text-on-surface font-semibold">사업자등록번호:</span> 319-30-00541</div>
            <div><span className="text-on-surface font-semibold">사업장:</span> 경기도 성남시 중원구 갈마치로203번길 12, 1층동</div>
            <div className="pt-space-xxs"><span className="text-on-surface font-semibold">제조원:</span> 삼양패키징 ｜ <span className="text-on-surface font-semibold">유통원:</span> (주)에프아이씨씨 ｜ <span className="text-on-surface font-semibold">판매원:</span> 마시</div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <div className="font-label-lg text-label-lg text-on-surface font-bold mb-space-xs">고객센터 & 제휴</div>
            <div className="flex items-center gap-space-xs"><Phone className="text-secondary w-[18px] h-[18px]" /><span>TEL: 010-3439-0294</span></div>
            <div className="flex items-center gap-space-xs"><MessageCircle className="text-secondary w-[18px] h-[18px]" /><span>KAKAO: @aiscream</span></div>
            <div className="flex items-center gap-space-xs"><Mail className="text-secondary w-[18px] h-[18px]" /><span>choyoungduke@gmail.com</span></div>
            <p className="font-label-sm text-label-sm text-outline pt-space-xs">상담시간: 평일 10:00 - 18:00 (점심시간 12:30 - 13:30)</p>
          </div>
        </div>
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm bg-surface-container-high/40 p-space-md rounded-lg">
          <p>© 2025 MASI (마시). All rights reserved. MASIZAO Hydration.</p>
          <div className="flex gap-space-md">
            <a className="hover:text-primary transition-colors" href="#">이용약관</a>
            <a className="hover:text-primary transition-colors font-semibold" href="#">개인정보처리방침</a>
            <a className="hover:text-primary transition-colors" href="#">제휴문의</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
