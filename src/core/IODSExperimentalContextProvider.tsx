import * as React from "react";
import { constVoid } from "fp-ts/lib/function";

type IOExperimentalContextType = {
  isExperimental: boolean;
  setExperimental: (isExperimental: boolean) => void;
};
/**
 * Experimental Context for new UI Representations
 */
const IOExperimentalDesignContext =
  React.createContext<IOExperimentalContextType>({
    isExperimental: true,
    setExperimental: constVoid
  });

export const useIOExperimentalDesign = () =>
  React.useContext(IOExperimentalDesignContext);

export const IODSExperimentalContextProvider = ({
  children
}: React.PropsWithChildren<any>) => {
  const [isExperimental, setExperimental] = React.useState(false);

  return (
    <IOExperimentalDesignContext.Provider
      value={{ isExperimental, setExperimental }}
    >
      {children}
    </IOExperimentalDesignContext.Provider>
  );
};
