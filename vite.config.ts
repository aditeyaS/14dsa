import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === "PROD" ? "/python-dsa/" : "/",
    plugins: [react()],
  };
});
