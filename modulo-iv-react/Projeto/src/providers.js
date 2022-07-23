import React from "react";
import App from "./App";
import { GithubProvider } from "./components/providers/github-provider";
import { GlobalStyle } from "./globalStyle";

const Providers = () => {
    return(
        <main>
            <GithubProvider>
                <GlobalStyle />
                <App />
            </GithubProvider>
        </main>
    )
};

export default Providers;