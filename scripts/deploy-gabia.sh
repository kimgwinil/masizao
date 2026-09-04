#!/usr/bin/env bash
# 빌드 결과물(dist/)을 가비아 웹호스팅에 FTP로 업로드한다.
#
#   cp .env.deploy.example .env.deploy   # 접속 정보 입력
#   npm run deploy:gabia
#
# 자격증명은 .env.deploy 에만 두고 절대 커밋하지 않는다(.gitignore 처리됨).
set -euo pipefail

cd "$(dirname "$0")/.."

ENV_FILE="${GABIA_ENV_FILE:-.env.deploy}"
if [[ -f "$ENV_FILE" ]]; then
  set -a; source "$ENV_FILE"; set +a
fi

: "${GABIA_FTP_HOST:?GABIA_FTP_HOST 가 설정되지 않았다 ($ENV_FILE 확인)}"
: "${GABIA_FTP_USER:?GABIA_FTP_USER 가 설정되지 않았다 ($ENV_FILE 확인)}"
: "${GABIA_FTP_PASS:?GABIA_FTP_PASS 가 설정되지 않았다 ($ENV_FILE 확인)}"
REMOTE_DIR="${GABIA_REMOTE_DIR:-/html}"
PROTOCOL="${GABIA_PROTOCOL:-ftp}"   # ftp | ftps

if [[ ! -d dist ]]; then
  echo "dist/ 가 없다. 먼저 'npm run build' 를 실행한다." >&2
  exit 1
fi

base_url="$PROTOCOL://$GABIA_FTP_HOST"
curl_opts=(--silent --show-error --fail --ftp-create-dirs --user "$GABIA_FTP_USER:$GABIA_FTP_PASS")
[[ "$PROTOCOL" == "ftps" ]] && curl_opts+=(--ssl-reqd)

echo "업로드 대상: $base_url$REMOTE_DIR"

count=0
while IFS= read -r -d '' file; do
  rel="${file#dist/}"
  printf '  %s ... ' "$rel"
  curl "${curl_opts[@]}" --upload-file "$file" "$base_url$REMOTE_DIR/$rel"
  printf 'ok\n'
  count=$((count + 1))
done < <(find dist -type f -print0)

echo "완료: ${count}개 파일 업로드"
echo "확인: http://massi.kr/  (브라우저 캐시 무시하고 강력 새로고침)"
