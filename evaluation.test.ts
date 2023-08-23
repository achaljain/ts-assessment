import { main } from "./index";

describe("main", () => {
  it("should work with blank array", () => {
    const result = main([]);
    expect(result.length).toBe(0);
  });

  it("should work with age missing", () => {
    const result = main([
      {
        name: "PS1",
      },
      {
        name: "PS2",
        age: 65,
      },
    ]);
    expect(result).toEqual([]);
  });

  it("should return age less than 10", () => {
    const result = main([
      {
        name: "PS1",
        age: 6,
      },
      {
        name: "PS2",
        age: 65,
      },
    ]);
    expect(result).toEqual([
      {
        name: "PS1",
        age: 6,
      },
    ]);
  });
});
