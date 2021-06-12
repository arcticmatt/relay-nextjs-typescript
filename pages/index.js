import RelayEnvironment from "../src/RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay";
import RelayTest from "../src/RelayTest.js";
import RelayTestDynamic from "../src/RelayTestDynamic.js";
import { Suspense } from "react";

export default function Home() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      {/* <RelayTestDynamic /> */}
      <RelayTest />
    </RelayEnvironmentProvider>
  );
}
