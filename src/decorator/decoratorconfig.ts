import { DecoratorProps, EnhetDisplay, FnrDisplay } from "./decoratorprops";

const decoratorconfig = (
  fnrValue: string | undefined | null,
  setFnr: (fnr: string) => void,
  enhet: string | undefined | null,
  setEnhet: (enhet: string) => void,
): DecoratorProps => {
  return {
    appname: "Finn fastlege",
    fnr: {
      initialValue: fnrValue || null,
      display: FnrDisplay.SOKEFELT,
      onChange(fnr: string | null): void {
        if (fnr && fnr.length > 0) {
          setFnr(fnr)
        }
      }
    },
    enhet: {
      initialValue: enhet || null,
      display: EnhetDisplay.ENHET_VALG,
      onChange(enhet: string | null): void {
        if (enhet) {
          setEnhet(enhet);
        }
      }
    },
    toggles: {
      visVeileder: true,
      visSokefelt: true,
      visEnhetVelger: true,
      visEnhet: true,
    },
  };
};

export default decoratorconfig;
