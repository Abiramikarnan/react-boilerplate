import { PropsWithChildren } from "react";
import Offline from "../Offline";
import { useNetwork } from "../../hooks/useNetwork";

const RequireNetwork = ({ children }: PropsWithChildren) => {
  const {
    networkStatus: { isOnline },
  } = useNetwork();

  return (
    <>
      <Offline isOffline={!isOnline} />
      {children}
    </>
  );
};

export default RequireNetwork;
