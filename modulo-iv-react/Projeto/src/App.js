import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import { Repositories } from "./components/repositories";
import Unsearched from "./components/unsearched";
import { useGithub } from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();

  return (
        <Layout>
          { githubState.hasUser ? (
            <>
            { githubState.loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <Profile />
                <Repositories />
              </>
            )}
          </>
          ) : (
            <Unsearched />
          )}
        </Layout>
  );
};

export default App;
