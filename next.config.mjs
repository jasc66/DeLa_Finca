let userConfig = {};

// Intenta importar solo si el archivo existe
try {
  const module = await import('./v0-user-next.config.js').then(mod => mod.default || mod).catch(() => ({}));
  userConfig = module;
} catch (e) {
  console.warn("User config not found, using default config.");
}

/** @type {import('next').NextConfig} */
const baseConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Fusionar configuración
const nextConfig = { ...baseConfig, ...userConfig };

export default nextConfig;
