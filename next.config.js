require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const withimgs = require("next-images");
module.exports = {
  imgs: {
    loader: "static",
  },
};
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};
module.exports = withPlugins([], {});
module.exports = withimgs();

module.exports = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
};
module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
};
