Bun.serve({
  fetch(req) {
    return new Response("Bun 3!");
  },
});