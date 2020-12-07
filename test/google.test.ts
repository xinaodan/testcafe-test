import { Selector } from 'testcafe';

fixture `Google Search`
    .page `https://www.google.com`;

const SEARCH_INPUT = Selector('input.gsfi');

test('should display search input', async t => {
    await t.expect(SEARCH_INPUT.visible).ok();
});
