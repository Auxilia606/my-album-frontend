# My-Album-Frontend

앨범 저장 및 공유 서비스 프론트엔드

<img src="https://github.com/Auxilia606/my-album-frontend/assets/56806864/4bdad2e3-0702-4cbf-a282-9677514ec1c3" width="30%" height="30%">
<img src="https://github.com/Auxilia606/my-album-frontend/assets/56806864/80e84675-77ef-433f-a02c-1a1b22b5c5cf" width="30%" height="30%">

PC, 모바일 환경에서 원하는 사진을 업로드 하는 애플리케이션

## 디렉토리 구분

api, components(공용 컴포넌트), pages(각 라우트 별 페이지)

## dependency 설명

react-router-dom: 기본적인 react routing 기능을 위해 추가

@tanstack/react-query: API cache 기능을 위해 추가 

@craco/craco: CRA로 생성한 React 프로젝트의 설정을 eject 없이 변경하기 위해 추가

tailwindcss: css-in-js 기법이 아닌 className 기반 스타일링을 위해 추가

mobx: 애플리케이션 전역에서 사용할 데이터 관리

react-hook-form: 로그인, 업로드 등 서버에 제출할 데이터 관리

## VS code 설정 관련 기록

라이브러리의 method, type 불러올 때 dist 폴더의 export 값을 불러오는 현상 발생

vscode settings.json 추가

```JSON
// settings.json - VSCode
"javascript.preferences.autoImportFileExcludePatterns": ["dist", "build"],

"javascript.preferences.importModuleSpecifier": "relative"
```
