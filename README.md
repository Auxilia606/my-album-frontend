# My-Album-Frontend

앨범 저장 및 공유 서비스 프론트엔드

## dependency 설명

react-router-dom: 기본적인 react routing 기능을 위해 추가
@tanstack/react-query: API cache 기능을 위해 추가
@craco/craco: CRA로 생성한 React 프로젝트의 설정을 eject 없이 변경하기 위해 추가
tailwindcss: css-in-js 기법이 아닌 className 기반 스타일링을 위해 추가

## VS code 설정 관련 기록

라이브러리의 method, type 불러올 때 dist 폴더의 export 값을 불러오는 현상 발생
vscode settings.json 추가

```JSON
// settings.json - VSCode
"javascript.preferences.autoImportFileExcludePatterns": ["dist", "build"],

"javascript.preferences.importModuleSpecifier": "relative"
```
