# Typescript-react-redux-ssr-boilerplate-sass

[![TypeScript](https://barbaruploads.s3.amazonaws.com/bicoz/typescript.png)](https://www.typescriptlang.org/)
[![React](https://barbaruploads.s3.amazonaws.com/bicoz/react.png)](https://github.com/facebook/react)
[![Redux](https://barbaruploads.s3.amazonaws.com/bicoz/redux.png)](https://github.com/reactjs/redux)


## 라이브러리 Libraries

### Base Core
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://github.com/facebook/react)
- [React Router](https://github.com/reactjs/react-router) v3
- [Redux](https://github.com/reactjs/redux)
- [React-Redux](https://github.com/reactjs/react-redux)
- [React-Router-Redux](https://github.com/reactjs/react-router-redux)

### Utilities
- [Isomorphic Fetch](https://github.com/matthew-andrews/isomorphic-fetch) with [ES6-Promise](https://github.com/stefanpenner/es6-promise) 클라이언트 서버사이드 양쪽에서 fetch api를 사용하기 위한 툴
- [Redux Thunk](https://github.com/gaearon/redux-thunk) 비동기 dispatch를 위한 툴
- [Redux Connect](https://github.com/makeomatic/redux-connect) 리엑트라우터에서 비동기 작업을 하기 위한 툴
- [React Helmet](https://github.com/nfl/react-helmet) html head meta정보를 삽입하는데 사용한다
- [classnames](https://github.com/JedWatson/classnames) classname의 사용 편의성을 높인다

### Build System
- [Webpack2](https://github.com/webpack/webpack) build를 위한 툴
  - [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader) 타입스크립트 로더.
  - [Babel Loader](https://github.com/babel/babel-loader) 자바스크립트 바벨 로더.
  - [React Hot Loader](https://github.com/gaearon/react-hot-loader) 개발서버 핫 로딩을 위한 로더
  - [Isomorphic Style Loader](https://github.com/kriasoft/isomorphic-style-loader) 서버사이드 스타일 로더
  - [Style Loader](https://github.com/webpack/style-loader)
  - [CSS Loader](https://github.com/webpack/css-loader)
  - [SCSS Loader](https://github.com/webpack-contrib/sass-loader)
  - [PostCSS Loader](https://github.com/postcss/postcss)
    - [PostCSS cssnext](https://github.com/MoOx/postcss-cssnext)
    - [PostCSS Assets](https://github.com/assetsjs/postcss-assets)
  - [JSON Loader](https://github.com/webpack/json-loader)
  - [File Loader](https://github.com/webpack/file-loader)
  - [URL Loader](https://github.com/webpack/url-loader)
  - [Sourcemap Loader](https://github.com/webpack/source-map-loader)
  - [Manifest Plugin](https://github.com/danethurber/webpack-manifest-plugin)
  - [Extract Text Plugin](https://github.com/webpack/extract-text-webpack-plugin) css를 파일로 뽑아줌
  - [tslint Loader](https://github.com/wbuchwalter/tslint-loader) 빌드 프로세스에서 tslint를 미리 로더로 사용.

#### Dev & Prod Server
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
  - [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)
  - [Webpack Hot Middleware](https://github.com/webpack/webpack-hot-middleware)
- [Express](https://github.com/expressjs/express) 클라이언트 서버사이드의 서버프레임워크
- [Compression](https://github.com/expressjs/compression) gzip 압축툴
- [Serve Favicon](https://github.com/expressjs/serve-favicon) 파비콘 서비스.

#### Developer Experience
- [Typings](https://github.com/typings/typings) definition(*.d.ts)파일이 없는 외부 라이브러리를 위한 definition파일을 설치
- [tslint](https://github.com/palantir/tslint)
- [stylelint](https://github.com/stylelint/stylelint)
- [Redux Logger](https://github.com/theaqua/redux-logger)
- [Redux DevTools](https://github.com/gaearon/redux-devtools)
- [Chalk](https://github.com/chalk/chalk) 터미널 스타일링

#### Testing
- [Fetch Mock](https://github.com/wheresrhys/fetch-mock) for testing async actions.
- [Redux Mock Store](https://github.com/arnaudbenard/redux-mock-store) for creating mock stores.

## 디렉토리 구조
```bash
.
├── build                       #
├── config                      # 구성(설정)을 위한 폴더
│   ├── test                    # 테스트 설정 폴더
│   ├── types                   # 작성한 전역 유형 정의
│   ├── webpack                 # Webpack 설정 폴더.
│   └── main.ts                 # 일반 설정 파일(앱환경).
├── node_modules                # Node Packages 모듈.
├── src                         # 소스폴더
│   ├── app                     #
│   │ ├── components            # React Components (재사용 가능한 Components).
│   │ ├── containers            # React/Redux Containers.
│   │ ├── models                # interface & type 파일
│   │ ├── redux                 # Redux.
│   │ │   ├── modules           # Redux modules(action & reducer).
│   │ │   ├── reducers.ts       # reducers 결합.
│   │ │   └── store.ts          # Redux 스토어, 글로벌 앱 상태 포함.
│   │ └── routes.tsx            # Routes 파일.
│   ├── client.tsx              # 클라이언트 측 렌더링을위한 파일.
│   ├── favicon.ico             # Favicon.
│   └── server.tsx              # 서버 측 렌더링을위한 파일.
├── typings                     # typings 작성한 전역 유형 정의.
├── .gitignore                  # git 무시할 파일을 선언.
├── .gitAttribute               # git 파일에 적용시킬 속성을 기술
├── package.json                # Package 설정파일.
├── README.md                   # This file
├── tsconfig.json               # TypeScript 설정파일.
└── tslint.json                 # Configures tslint 설정 파일.
```
## Usage

모든 명령어는 개발환경이 기본입니다. <br>
`NODE_ENV`를`production`으로 설정하거나 아래의 단축키를 사용할 수 있습니다.

```bash
# Running

$ npm start # 기본적으로 개발모드로 시작한다.

# production로 시작
$ NODE_ENV=production npm start # or
$ npm run start:prod

# Building

$ npm build # 개발모드로 빌드

# production로 빌드
$ NODE_ENV=production npm build # or
$ npm run build:prod

# 테스트(미완성)
$ npm test
```

## 추가할 기능
- 테스트 (e2e, unit..)

이 Repo는 vortigern기반으로 제작되어 있었습니다. (This Repo was based on <a href="https://github.com/barbar/vortigern" target="_blank">vortigern</a>.)