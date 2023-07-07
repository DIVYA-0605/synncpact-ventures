const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors(
  {
    origin:'https://splendid-gumdrop-3a6b2a.netlify.app/',
    methods:["GET"]
  }
));

app.get('/api/photo-gallery-feed-page/page/:page', async (req, res) => {
  const { page } = req.params;
  try {
    const response = await axios.get(
      `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
