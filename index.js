//
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const organization = process.env.ORGANIZATION;
const apikey = process.env.APIKEY;
const model = process.env.MODEL;

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: organization,
  apiKey: apikey,
});
const openai = new OpenAIApi(configuration);

// create a simple express api that calls the function above
const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3080;

app.post("/", async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: model,
    prompt: `${message}`,
    max_tokens: 300,
    temperature: 0.5,
  });
  res.json({
    message: response.data.choices[0].text,
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
