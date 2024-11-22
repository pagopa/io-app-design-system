import React, { PropsWithChildren, useState } from "react";

type IONewTypefaceContextType = {
  newTypefaceEnabled: boolean;
  setNewTypefaceEnabled: (newTypefaceEnabled: boolean) => void;
};
/**
 * Experimental Context for new UI Representations
 */
export const IONewTypefaceContext =
  React.createContext<IONewTypefaceContextType>({
    newTypefaceEnabled: false,
    setNewTypefaceEnabled: () => void 0
  });

export const useIONewTypeface = () => React.useContext(IONewTypefaceContext);

type IOExperimentalContextProviderProps = {
  isNewTypefaceEnabled?: boolean;
};

export const IONewTypefaceContextProvider = ({
  children,
  isNewTypefaceEnabled
}: PropsWithChildren<IOExperimentalContextProviderProps>) => {
  const [newTypefaceEnabled, setNewTypefaceEnabled] = useState(
    isNewTypefaceEnabled ?? true
  );

  return (
    <IONewTypefaceContext.Provider
      value={{ newTypefaceEnabled, setNewTypefaceEnabled }}
    >
      {children}
    </IONewTypefaceContext.Provider>
  );
};
