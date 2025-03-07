import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // Adicione o plugin tsconfig-paths para resolver caminhos definidos no tsconfig.json
  ],
  resolve: {
    alias: {
      '@': '/src', // Alias para o diretório src (opcional, mas útil)
    },
  },
  server: {
    hmr: {
      overlay: false, // Desabilita a sobreposição de erros para evitar conflitos
    },
  },
  esbuild: {
    logLevel: 'info', // Adicione para obter logs mais detalhados durante a construção
  },
});