import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "./src") },
            {
                find: "@actions",
                replacement: path.resolve(__dirname, "./src/actions"),
            },
            {
                find: "@components",
                replacement: path.resolve(__dirname, "./src/components"),
            },
            {
                find: "@hooks",
                replacement: path.resolve(__dirname, "./src/hooks"),
            },
            {
                find: "@config",
                replacement: path.resolve(__dirname, "./src/config"),
            },
            {
                find: "@helpers",
                replacement: path.resolve(__dirname, "./src/helpers"),
            },
            {
                find: "@hooks",
                replacement: path.resolve(__dirname, "./src/hooks"),
            },
            {
                find: "@layouts",
                replacement: path.resolve(__dirname, "./src/layouts"),
            },
            {
                find: "@reducers",
                replacement: path.resolve(__dirname, "./src/reducers"),
            },
            {
                find: "@pages",
                replacement: path.resolve(__dirname, "./src/pages"),
            },
            {
                find: "@themes",
                replacement: path.resolve(__dirname, "./src/themes"),
            },
            {
                find: "@types",
                replacement: path.resolve(__dirname, "./src/types"),
            },
        ],
    },
    plugins: [react()],
});
