import React from "react";

type IOExperimentalContextType = {
  isExperimental: boolean;
  setExperimental: (isExperimental: boolean) => void;
};
/**
 * Experimental Context for new UI Representations
 */
export const IOExperimentalDesignContext =
  React.createContext<IOExperimentalContextType>({
    isExperimental: false,
    setExperimental: () => void 0
  });

export const useIOExperimentalDesign = () =>
  React.useContext(IOExperimentalDesignContext);

type IOExperimentalContextProviderProps = {
  isExperimentaEnabled?: boolean;
};

export const IODSExperimentalContextProvider = ({
  children,
  isExperimentaEnabled
}: React.PropsWithChildren<IOExperimentalContextProviderProps>) => {
  const [isExperimental, setExperimental] = React.useState(
    isExperimentaEnabled ?? false
  );

  return (
    <IOExperimentalDesignContext.Provider
      value={{ isExperimental, setExperimental }}
    >
      {children}
    </IOExperimentalDesignContext.Provider>
  );
};
