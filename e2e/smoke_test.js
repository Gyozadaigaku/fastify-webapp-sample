SuiteOf("スモークテスト");

Scenario("exmaple.comにアクセスする", ({ I }) => {
  I.amOnPage("https://example.com");
  I.see("Example Domain");
});
