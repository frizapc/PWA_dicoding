const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const target = path.resolve(__dirname, "src/public/images/heros");
const destination = path.resolve(__dirname, "src/public/images/sharp-img");

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  if (fs.statSync(`${target}/${image}`).isFile()) {
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split(".").slice(0, -1)}-large.jpg`,
        ),
      );

    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split(".").slice(0, -1)}-small.jpg`,
        ),
      );
  }
});
