module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@contexts": "./src/contexts",
            "@data": "./src/data",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@assets": "./assets",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx", ".png", ".jpg"],
        },
      ],
    ],
  };
};
