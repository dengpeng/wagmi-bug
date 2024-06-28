"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function UserButton() {
  const { address, status } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect, connectors } = useConnect();

  return (
    <div>
      {status === "connected" && (
        <div>
          <div>{address}</div>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      )}
      {status === "connecting" && <div>Connecting...</div>}
      {status === "reconnecting" && <div>Reconnecting...</div>}
      {status === "disconnected" && (
        <div>
          <button
            onClick={() =>
              connect({
                connector: connectors[0],
              })
            }
          >
            Connect
          </button>
        </div>
      )}
    </div>
  );
}
