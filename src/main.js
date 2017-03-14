export function configure(aurelia) {
  aurelia.use.standardConfiguration();
  return aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName("app")));
}