import { useEffect, useState } from "react";
import { NetworkStatus } from "../../enums/networkStatus.enum";

export const useNetwork = () => {
  const [networkStatus, setNetworkStatus] = useState({
    isOnline: navigator.onLine,
  });

  const handleNetworkStatusChange = ({ type }: Event) =>
    setNetworkStatus((prevStatus) => ({
      ...prevStatus,
      isOnline: type === NetworkStatus.ONLINE,
    }));

  useEffect(() => {
    window.addEventListener(NetworkStatus.ONLINE, handleNetworkStatusChange);
    window.addEventListener(NetworkStatus.OFFLINE, handleNetworkStatusChange);

    return () => {
      window.removeEventListener(
        NetworkStatus.ONLINE,
        handleNetworkStatusChange
      );
      window.removeEventListener(
        NetworkStatus.OFFLINE,
        handleNetworkStatusChange
      );
    };
  }, []);

  return {
    networkStatus,
  };
};
