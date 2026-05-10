const { builder } = require('@netlify/functions');

let server;

async function loadServer() {
  if (!server) {
    // Try to load the built server entry. Adjust this path if your build outputs a different file.
    // TanStack Start may require a Node-target build step that emits `dist/server.js`.
    server = await import('../../dist/server.js').then(m => m.default || m);
  }
  return server;
}

exports.handler = async (event, context) => {
  try {
    const srv = await loadServer();

    // Build a Node Request-like object from Netlify event
    const url = new URL(event.path, `https://${event.headers.host || 'localhost'}`);
    const req = new Request(url, {
      method: event.httpMethod,
      headers: event.headers,
      body: event.body ? Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8') : undefined,
    });

    const res = await srv.fetch(req);

    const body = await res.text();
    const headers = {};
    res.headers.forEach((v, k) => (headers[k] = v));

    return {
      statusCode: res.status,
      headers,
      body,
    };
  } catch (err) {
    console.error('Server error:', err);
    return { statusCode: 500, body: 'Internal Server Error' };
  }
};
