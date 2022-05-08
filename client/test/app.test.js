const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

global.fetch = require("jest-fetch-mock");
let app;

describe("app", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    app = require("../js/app.js");
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  describe("requests", () => {
    describe("getAllPp", () => {
      test("it makes a get request to /pp", () => {
        app.getAllPp();
        expect(fetch.mock.calls[0][0]).toMatch(/pp$/);
      });
    });
  });

  describe("submitPotato", () => {
    test("it makes a post request to /pp with potato data", () => {
      const fakeSubmitEvent1 = {
        preventDefault: jest.fn(),
        target: {
          name: "potato",
        },
      };
      app.submitPp(fakeSubmitEvent1);
      expect(fetch.mock.calls[0][1]).toHaveProperty("method", "POST");
      expect(fetch.mock.calls[0][1]).toHaveProperty(
        "body",
        JSON.stringify({ name: "potato" })
      );
    });
  });

  describe("submitPepsi", () => {
    test("it makes a post request to /pp with pepsi data", () => {
      const fakeSubmitEvent2 = {
        preventDefault: jest.fn(),
        target: {
          name: "pepsi",
        },
      };
      app.submitPp(fakeSubmitEvent2);
      expect(fetch.mock.calls[0][1]).toHaveProperty("method", "POST");
      expect(fetch.mock.calls[0][1]).toHaveProperty(
        "body",
        JSON.stringify({ name: "pepsi" })
      );
    });
  });
});
