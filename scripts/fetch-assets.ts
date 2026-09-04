/**
 * 원격 이미지를 `src/assets/`로 내려받는다.
 *
 *   npm run assets:fetch
 *
 * 외부 네트워크가 열린 환경에서 한 번 실행하고, 받아진 파일을 커밋하면
 * 임시 URL 만료와 무관하게 이미지가 유지된다.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { REMOTE_IMAGES } from '../src/lib/images.remote.ts';

const outDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/assets');

const EXTENSION_BY_MIME: Record<string, string> = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/webp': 'webp',
  'image/avif': 'avif',
  'image/svg+xml': 'svg',
  'image/gif': 'gif',
};

async function download(key: string, url: string): Promise<boolean> {
  const response = await fetch(url, { redirect: 'follow' });
  if (!response.ok) {
    console.error(`✗ ${key}: HTTP ${response.status} ${response.statusText}`);
    return false;
  }

  const mime = (response.headers.get('content-type') ?? '').split(';')[0].trim();
  const extension = EXTENSION_BY_MIME[mime];
  if (!extension) {
    console.error(`✗ ${key}: 이미지가 아닌 응답 (content-type: ${mime || '없음'})`);
    return false;
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  const outPath = path.join(outDir, `${key}.${extension}`);
  await writeFile(outPath, bytes);
  console.log(`✓ ${key} -> src/assets/${key}.${extension} (${(bytes.length / 1024).toFixed(1)} KB)`);
  return true;
}

await mkdir(outDir, { recursive: true });

const results = await Promise.all(
  Object.entries(REMOTE_IMAGES).map(async ([key, url]) => {
    try {
      return await download(key, url);
    } catch (error) {
      console.error(`✗ ${key}: ${error instanceof Error ? error.message : String(error)}`);
      return false;
    }
  }),
);

const failed = results.filter((ok) => !ok).length;
if (failed > 0) {
  console.error(`\n${failed}개를 받지 못했다. URL이 만료됐다면 이미지를 직접 구해 src/assets/에 같은 이름으로 저장하면 된다.`);
  process.exit(1);
}
console.log('\n완료. 받아진 파일을 커밋해야 배포본에 반영된다.');
