const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
/** @type {import('next').NextConfig} */
export default {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};
