export default defineBackground((): void => {
  console.log("Hello background!", { id: browser.runtime.id });
  // Commands (keyboard shortcuts) must be handled to disable Chrome's defaults.
  browser.commands.onCommand.addListener((command: string): void => {
    console.log("Command triggered:", command);
  });
});
