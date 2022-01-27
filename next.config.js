const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const settings = {
    reactStrictMode: true,
    images: {
      loader: "custom",
    },
  };

  if (phase !== PHASE_DEVELOPMENT_SERVER) {
    settings.basePath = "/best-practices";
  }

  return settings;
};
