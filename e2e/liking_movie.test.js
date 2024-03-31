const assert = require("assert");

Feature("liking movie");

Before(({ I }) => {
  I.amOnPage("/#favorite");
});

Scenario("user click button like restaurant", async ({ I }) => {
  I.dontSeeElement(".catalog_card");

  I.amOnPage("/");
  const firstResto = locate(".link-detail").first();
  const textResto = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement(".fa");

  I.click(".fa");
  I.amOnPage("/#favorite");

  I.seeElement(".catalog_card");
  const restoLiked = await I.grabTextFrom("h4 > a");

  assert.strictEqual(textResto, restoLiked);
});

Scenario("user click button unliked restaurant", async ({ I }) => {
  I.dontSeeElement(".catalog_card");

  I.amOnPage("/");
  I.click(locate(".link-detail").first());

  I.seeElement(".fa");
  I.click(".fa");

  I.amOnPage("/#favorite");
  I.seeElement(".link-detail");
  I.click(".link-detail");

  I.seeElement(".fa");
  I.click(".fa");

  I.amOnPage("/#favorite");

  I.dontSeeElement(".catalog_card");
});
