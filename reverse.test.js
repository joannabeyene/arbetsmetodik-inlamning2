const reverse = require("./reverse");

test("reverses string", () => {
    expect(reverse("boat")).toBe("taob");
});