export enum ROUTE_NAME {
  HOME = 'HOME',
  LOGIN = 'LOGIN',
  RESULTS = 'RESULTS',
  DOCUMENTATION = 'DOCUMENTATION'
}

export const ROUTE_URL: Record<ROUTE_NAME, string> = {
  [ROUTE_NAME.HOME]: '/',
  [ROUTE_NAME.LOGIN]: '/login',
  [ROUTE_NAME.RESULTS]: '/results',
  [ROUTE_NAME.DOCUMENTATION]: '/documentation'
};
