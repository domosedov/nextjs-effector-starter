import type { NextPage } from "next";
import { useStore } from "effector-react";
import { appModel } from "../root";

export const About: NextPage = () => {
  const router = useStore(appModel.$router);
  const user = useStore(appModel.$user);

  if (!user) return <div>Not auth</div>;

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => router?.push("/")}>Redirect</button>
    </div>
  );
};

export default About;
