/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "jsonkeeper.com", "a0.muscache.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoic2FuYXRoLXAiLCJhIjoiY2t2czJ6aGtlMDk1NDJvcWZtZnByNTI4ZyJ9.K2PE6VSYUmSmvDdxTjIS2Q",
  },
};

module.exports = nextConfig;
