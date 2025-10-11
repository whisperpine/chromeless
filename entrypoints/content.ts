export default defineContentScript({
  matches: ["*://*.google.com/*"],
  main(): void {
    console.log("Hello content.");
  },
});
