import { REMOTE_IMAGES, type ImageKey } from './images.remote';

/**
 * `src/assets/`에 받아둔 파일이 있으면 그것을, 없으면 원격 주소를 쓴다.
 *
 * 파일 이름(확장자 제외)이 `REMOTE_IMAGES`의 키와 같으면 자동으로 잡힌다.
 * 예: `src/assets/logo.png` -> `images.logo`
 * 번들러가 해싱·최적화까지 처리하므로 외부 호스트 만료에 영향받지 않는다.
 */
const localFiles = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const localByKey: Record<string, string> = {};
for (const [filePath, url] of Object.entries(localFiles)) {
  const fileName = filePath.split('/').pop() ?? '';
  localByKey[fileName.replace(/\.[^.]+$/, '')] = url;
}

export const images = Object.fromEntries(
  Object.entries(REMOTE_IMAGES).map(([key, remoteUrl]) => [key, localByKey[key] ?? remoteUrl]),
) as Record<ImageKey, string>;

/** 아직 원격 주소에 의존하고 있는 이미지 키 목록. */
export const remoteOnlyImageKeys = (Object.keys(REMOTE_IMAGES) as ImageKey[]).filter(
  (key) => !(key in localByKey),
);
