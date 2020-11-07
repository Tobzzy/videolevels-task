import React from "react";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
function App() {
  return (
    <div>
      <p>App is Working</p>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
