const hello = require("./hello");
describe("Test Hello", () => {
  test("test successful", () => {
    expect(hello.hello()).toEqual("Hello World");
  });
});