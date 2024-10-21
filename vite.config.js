import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Exposes the app to your local network
    port: 3000,  // Optionally, you can specify the port (default is 3000)
  },
});
