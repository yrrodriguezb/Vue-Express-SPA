const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const { createBundleRenderer } = require('vue-server-renderer')
let renderer

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();

// Static Files
app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

// dev-server
/* require("./build/dev-server")(app, bundle => {
  renderer = createBundleRenderer(bundle)
}); */
require("./build/dev-server")(app);

app.get("*", (req, res) => {
  res.write(indexHTML);
  res.end();

  /* renderer.renderToString({ url: req.url }, (err, html) => {
    if (err) {
      console.log(err)
      return res.status(500).send('Server Error.')
    }

    html = indexHTML.replace('{{ APP }}', html)
    res.write(html);
    res.end();
  }) */
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
