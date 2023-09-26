describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('mostrar a tela principal', async () => {
    await expect(element(by.id('viewPrincipal'))).toBeVisible();
  });

  it('apertar botão mostrar', async () => {
    await element(by.id('botaoBuscar')).tap();
    await expect(
      element(by.id('scroll').withDescendant(by.id(/[0-9]+/))),
    ).toExist();
  });
});
