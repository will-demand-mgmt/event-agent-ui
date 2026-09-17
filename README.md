# event-agent-ui

The chat frontend for the **AI-Driven Event Management System** concept — talks to
"the Orchestrator" via the separately-deployed **event-agent** worker's API. Same
split as `demand-agent` / `demand-agent-ui`.

**Status:** R&D concept evaluation, not a production system. Not affiliated with,
endorsed by, or produced in association with TED Conferences LLC or the TEDx program.

## Setup

This is a static page with no build step. Before it's useful, open it and fill in
the **API endpoint** field (in the left panel) with your deployed `event-agent`
worker's URL, e.g. `https://event-agent.<your-subdomain>.workers.dev`. It's saved
to `localStorage` so you only need to set it once per browser.

## Privacy model (bring-your-own-key)

Your provider API key is stored only in this browser's `localStorage` and sent, per
request, to the `event-agent` endpoint you configured — which forwards it to the
provider for that one request and doesn't persist it. This is a client-side
convenience, not a security boundary: fine for personal use, not for sharing the
deployed link with people you don't want holding your key while they use it.

## Local development

```bash
wrangler dev
```

## Deploy

```bash
wrangler deploy
```

## Related

- `event-agent` — the API this page calls.
- The scripted walkthrough (hero page + fixed-scenario simulator) lives as a Claude
  artifact for now, not in this repo.
