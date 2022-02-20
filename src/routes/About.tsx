import Card from "@app/components/common/Card";
import Center from "@app/components/common/Center";
import LoadingOverlay from "@app/components/LoadingOverlay";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { SuspenseWithPerf } from "reactfire";
import { useAxios } from "use-axios";

const FetchHello = () => {
  const hello = useAxios("/api/hello");
  return <>{hello}</>;
};

const About = () => (
  <Center>
    <Card>
      <SuspenseWithPerf fallback={<LoadingOverlay />} traceId="hello-test">
        <FetchHello />
        <hr />
        <Link to="/">Home</Link>
      </SuspenseWithPerf>
    </Card>
  </Center>
);
export default About;
