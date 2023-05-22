import express from "express";
import fetch from "node-fetch";
import cloudinary from "cloudinary";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3001;

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: "dzumurjj4",
  api_key: "151231199569346",
  api_secret: "tiLemh0Z0yYGSFLatRhJOec2Va8",
});

app.get("/api/cloudinary", async (req, res) => {
  try {
    const apiKey = cloudinary.config().api_key;
    const apiSecret = cloudinary.config().api_secret;

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dzumurjj4/resources/image`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${apiKey}:${apiSecret}`
          ).toString("base64")}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      res.json(data);
    } else {
      res.status(response.status).json({ error: "Error fetching images" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.delete("/api/cloudinary/:public_id", async (req, res) => {
  try {
    const apiKey = cloudinary.config().api_key;
    const apiSecret = cloudinary.config().api_secret;
    const public_id = req.params.public_id;
    await cloudinary.uploader.destroy(public_id);
    return res.status(200).json({ message: "delted imaeg" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
