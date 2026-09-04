import { ShoppingBag, User } from 'lucide-react';
import { images } from '../lib/images';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,188,212,0.06)]">
      <div className="h-20 max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <a className="flex items-center gap-space-xs transition-opacity hover:opacity-90" data-path="home" href="#">
            <img alt="MASIZAO Logo" className="h-8 w-auto object-contain" src={images.logo}/>
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary font-bold">MASIZAO</span>
          </a>
          <nav className="hidden lg:flex items-center gap-space-xl ml-space-md">
            <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" data-path="brand-story" href="#brand-story">브랜드 스토리</a>
            <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" data-path="products" href="#products">제품 소개</a>
            <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" data-path="subscription" href="#shop-bundle">정기구독</a>
            <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" data-path="reviews" href="#reviews">구매후기</a>
            <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" data-path="customer-center" href="#customer-center">고객센터</a>
          </nav>
        </div>
        <div className="flex items-center gap-space-sm">
          <a className="relative p-space-xs rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all flex items-center justify-center" data-path="cart" href="#">
            <ShoppingBag size={24} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-on-primary rounded-full font-label-sm text-label-sm flex items-center justify-center font-bold">2</span>
          </a>
          <a className="hidden sm:inline-flex items-center px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all" data-path="login" href="#">로그인</a>
          <a className="hidden sm:inline-flex items-center px-space-md py-space-xs rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-all shadow-[0_4px_16px_rgba(104,0,129,0.2)]" data-path="signup" href="#">회원가입</a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs">
            <User className="text-on-primary" size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}
