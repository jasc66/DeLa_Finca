let userConfig = {};

try {
  // Verificar si el archivo existe antes de importarlo
  const module = await import('./v0-user-next.config.js')
    .then((mod) => mod.default || mod)
    .catch(() => ({}));

  userConfig = module;
} catch (e) {
  console.warn("User config not found, using default config.");
}

/** @type {import('next').NextConfig} */
const baseConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Fusionar la configuración del usuario con la configuración base
const nextConfig = mergeConfig(baseConfig, userConfig);

function mergeConfig(baseConfig, userConfig) {
  if (!userConfig || Object.keys(userConfig).length === 0) {
    return baseConfig; // Retorna la configuración original si no hay nada que fusionar
  }

  const mergedConfig = { ...baseConfig };

  for (const key in userConfig) {
    if (
      typeof baseConfig[key] === "object" &&
      !Array.isArray(baseConfig[key]) &&
      baseConfig[key] !== null
    ) {
      mergedConfig[key] = {
        ...baseConfig[key],
        ...userConfig[key],
      };
    } else {
      mergedConfig[key] = userConfig[key];
    }
  }

  return mergedConfig;
}

export default nextConfig;
