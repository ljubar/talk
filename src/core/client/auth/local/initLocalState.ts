import qs from "query-string";
import { commitLocalUpdate, Environment } from "relay-runtime";

import { TalkContext } from "talk-framework/lib/bootstrap";
import { initLocalBaseState, LOCAL_ID } from "talk-framework/lib/relay";

/**
 * Initializes the local state, before we start the App.
 */
export default async function initLocalState(
  environment: Environment,
  context: TalkContext
) {
  const authToken = window.location.hash
    ? window.location.hash.substr(1)
    : null;
  // Remove hash with token.
  if (window.location.hash) {
    window.history.replaceState(null, undefined, location.pathname);
  }

  await initLocalBaseState(environment, context, authToken);

  commitLocalUpdate(environment, s => {
    const localRecord = s.get(LOCAL_ID)!;

    // Parse query params
    const query = qs.parse(location.search);

    // Set default view.
    localRecord.setValue(query.view || "SIGN_IN", "view");
  });
}
