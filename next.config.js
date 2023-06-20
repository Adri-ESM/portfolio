// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: { flexbox: "no-2009" },
        stage: 3,
        features: { "custom-properties": false },
      },
    ],
  ],
};
