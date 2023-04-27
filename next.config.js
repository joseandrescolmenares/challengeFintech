const  EslintPlugin = require('eslint-webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, env) => {
    if(env.dev){
      config.plugins.push(new EslintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
        files: ["pages","src"],
        failOnError: false,
      }))
    }
    return config
  }

}

module.exports = nextConfig