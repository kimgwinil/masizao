# src/assets

제품·로고 이미지 원본을 두는 곳이다.

`npm run assets:fetch`를 실행하면 `src/lib/images.remote.ts`에 적힌 원격 주소에서
이미지를 내려받아 이 폴더에 `<키>.<확장자>` 형태로 저장한다.
파일이 놓이는 즉시 `src/lib/images.ts`가 원격 주소 대신 로컬 파일을 사용한다.

원격 주소(AI Studio 임시 URL)는 만료될 수 있으므로, 받은 이미지는 커밋해서
저장소에 포함시켜야 배포본에서 이미지가 깨지지 않는다.
