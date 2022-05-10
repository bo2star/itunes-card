import { fetchTunes } from "./index";
describe("Test fetchTunes async function", () => {
  jest.setTimeout(30000);
  test("Test fetchTunes async function with correct url", async () => {
    const data = await fetchTunes("/us/rss/topsongs/limit=100/json");
    expect(data).toHaveProperty("feed");
    expect.assertions(1);
  });

  test("Test fetchTunes async function with wrong url", async () => {
    expect(fetchTunes("")).rejects.toBe(expect.anything());
  });
});
