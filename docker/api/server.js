const express = require("express");
const { getFeatureState } = require("./featureStore");

function createServer() {
  const app = express();

  app.get("/feature/:feature", async (req, res) => {
    const { feature } = req.params;
    try {
      const state = await getFeatureState(feature);

      if (state) {
        return res.status(200).json({ feature, state });
      } else {
        return res.status(404).json({ message: `Feature ${feature} not found` });
      }
    } catch (error) {
      return res.status(500).json({ error: `Error retrieving feature: ${error.message}` });
    }
  });

  return app;
}

const port = 3000;
const app = createServer();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
