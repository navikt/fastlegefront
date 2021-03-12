interface Toggles {
  visVeileder: boolean;
  visSokefelt: boolean;
  visEnhetVelger: boolean;
  visEnhet: boolean;
}

interface Contextholder {
  url?: string;
  promptBeforeEnhetChange?: boolean; // Kan settes om man ikke ønsker bekreftelse-modal ved enhets-endringer
}

interface Markup {
  etterSokefelt?: string;
}

interface UncontrolledContextvalue<T> extends BaseContextvalue<T> {
  initialValue: string | null;
}

interface BaseContextvalue<T> {
  display: T;
  onChange(value: string | null): void;
  skipModal?: boolean;
  ignoreWsEvents?: boolean;
}

type Contextvalue<T> = UncontrolledContextvalue<T>;

export enum EnhetDisplay {
  ENHET = 'ENHET',
  ENHET_VALG = 'ENHET_VALG'
}

export enum FnrDisplay {
  SOKEFELT = 'SOKEFELT'
}

type EnhetContextvalue = Contextvalue<EnhetDisplay>;
type FnrContextvalue = Contextvalue<FnrDisplay>;
type ProxyConfig = boolean | string;

export interface DecoratorProps {
  appname: string;
  fnr?: FnrContextvalue;
  enhet?: EnhetContextvalue;
  toggles?: Toggles;
  markup?: Markup;
  useProxy?: ProxyConfig;
  accessToken?: string;
}
