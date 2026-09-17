/**
 * event-agent-ui — static asset server only.
 * All chat logic happens client-side in public/index.html, which calls the
 * separately-deployed event-agent worker's /api/chat endpoint.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
