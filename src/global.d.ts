export {};

declare global {
  interface Window {
    initHotspots?: () => void;
  }
}
