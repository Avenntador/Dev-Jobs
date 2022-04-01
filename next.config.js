const path = require("path");
require("dotenv").config();

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
    prependData: `@import "style.scss";`,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    REQUEST_DEVS: process.env.REQUEST_DEVS,
  },
};
