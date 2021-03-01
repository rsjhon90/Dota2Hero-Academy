import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Alô mundo!' }));

app.listen(3020, () => {
  console.log('💥 server started! on port 3020!');
});
