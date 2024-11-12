/// <reference types="vite/client" />

interface ImportMetaENV {
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaENV;
}
