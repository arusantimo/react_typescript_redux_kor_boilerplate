/**
 * 전역 변수 유형 선언
 */

interface Window {
  //Redux DevTools Chrome 확장 프로그램의 인터페이스
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <F extends Function>(f: F) => F;
  __INITIAL_STATE__?: any;
}

interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}