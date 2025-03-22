import {defineConfig, UserConfig} from 'vite'
import react from "@vitejs/plugin-react-swc";
import {resolve} from "path";

export default defineConfig(({mode}) => {

  return {
    mode,
    build: {
      outDir: "build",
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  } satisfies UserConfig
});
