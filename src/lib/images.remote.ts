/**
 * 원본 이미지의 원격 주소.
 *
 * AI Studio가 발급한 임시 호스팅 URL이라 예고 없이 만료될 수 있다.
 * 운영에서는 `npm run assets:fetch`로 파일을 `src/assets/`에 받아두면
 * `src/lib/images.ts`가 로컬 파일을 우선 사용하고, 이 주소는 대비책으로만 남는다.
 */
export const REMOTE_IMAGES = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1WoJ_cLamRSe6eT9Woonj958PptZI-LvAYa4H5oNDgzR0c1cpPS4O2cW8QjkaNQe0bNQ9q4wf2jpgxlwzJN5xzFvThYfGs7j4uqT3URt03X__Z7U-V2EHKPoE42NvA3mjn1kH9lt6ooCZuJDHXRqgj-MD8x_suMhJOyA1o3WdRh0WbbAEefMIOV1HPQ9jaFpAfr67MtS5KC00j2a8sYC5hTy3XWOuxVcvfBw-N7Ax2AfiN66dbjfbTtsgU',
  heroSplash: 'https://lh3.googleusercontent.com/aida/AEtjO1W2YX1dCxNdINMONGTGOqePn8Tqhu6xiZZpnLVUYqCURghziuU1rDdvjLykiOIlVMMpDdiT9geyhJulTpGxLH3HaBGBSObSxWwJiuSAYZyOWcyAqkVAElP9V8gI-5k-iPqnNHaNVPsGgekAR6MkFcvnSweX9np39CjeRGM3dj_KzH-8fxp1fDd69BJHGi3oSP3pNphoh6X7EsGYBLrs7nZ_MZZDuAzPO7vMd86FYobvuxyBYL9Du_UHUHE',
  productBundle: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcDpaxFMBcTydlA_8xt7kkX9KuOK5EyIC_v6ZLmosN_CVEhhV2oYO_Scaq2dEL6IamlkZqJU7kICf3l8YkIkNFCR6oVr5J13l_bysqlX6dFgjcPgaULQTjpduqVJl1rldi-_IpX2jtPVPFL4f9X3mbeClDmfVDLZM06vtLz-USmIK8zZFcHAcuD_HqqUvkg6Ti2MNVgUcATcjjAH-fs6bzWw0ENAcmOVAXB1UoZhBWJDLRHVdyu75C9S_rGZgAQaK9ew',
  productThumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRZ4WwRfMLR2FjJxtmGfk-9sre4fho_W9k1v-h4WKc9K6FmxEZn8f9b5qn0q2dGwnziFLZ6Y_k52d1wxyMlsaJ8bcz6UwXzU7auI-in6Fc7H5ik8vE8TNgA4tX9yDghDJY4lTld_Cz4qbQh8epoBuaZMtL7I5YLS2_UlQYSoHn6VE5R0OeoND4sywyQ07xQTXzWTPxB5ymjCrxBCO4GDE8gyQ_26UZ4JOHYTAb7YOvBescJoG6pgp70seLKMkb6JTV5w',
} as const;

export type ImageKey = keyof typeof REMOTE_IMAGES;
