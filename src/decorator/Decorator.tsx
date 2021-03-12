import React, { useCallback } from "react";
import NAVSPA from "@navikt/navspa";
import { DecoratorProps } from "./decoratorProps";
import decoratorConfig from "./decoratorconfig";
import { pushModiaContext } from "../data/modiacontext/modiacontext_actions";
import { CONTEXT_EVENT_TYPE } from "../konstanter";
import { fullNaisUrlDefault } from "../utils/miljoUtil";
import { useDispatch } from "react-redux";

const InternflateDecorator = NAVSPA.importer<DecoratorProps>(
  "internarbeidsflatefs"
);

const Decorator = () => {
  const dispatch = useDispatch();

  const handleChangeEnhet = (data: string) => {
    dispatch(
      pushModiaContext({
        verdi: data,
        eventType: CONTEXT_EVENT_TYPE.NY_AKTIV_ENHET,
      })
    );
  };

  const handlePersonsokSubmit = (nyttFnr: string) => {
    const host = "syfomodiaperson";
    const path = `/sykefravaer/${nyttFnr}`;
    (window as any).location = fullNaisUrlDefault(host, path);
  };

  const config = useCallback(decoratorConfig, [
    undefined,
    handlePersonsokSubmit,
    undefined,
    handleChangeEnhet,
  ])(undefined, handleChangeEnhet, undefined, handleChangeEnhet);

  return <InternflateDecorator {...config} />;
};

export default Decorator;
