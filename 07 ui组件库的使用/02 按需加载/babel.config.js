module.exports = {
  // https://blog.csdn.net/qq_41302594/article/details/105323869         引用官网的es2015报错解决办法
  presets: ["@vue/cli-plugin-babel/preset", ["@babel/preset-env", { modules: false }]],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
