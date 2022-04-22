import express from 'express';

express()
  .use(express.static('dist'))
  .get('/events', (_req, res) => {
    res.set({
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive'
    })
    res.flushHeaders();
    res.write('hellooo');
  })
  .listen(4200, () => console.log('Listening on port 4200'));
