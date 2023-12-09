const jour1 = require("./jour1.js");
const { splitAndParse, spliceEnd } = require("./jour1.js");

// it("adds 1 + 2 to equal 3", () => {
//   expect(jour1(1, 2)).toBe(3);
// });
describe("On extrait tout les nombres", () => {
  it("On regarde si on return que des nombres", () => {
    const result = splitAndParse("1abc2");
    expect(typeof result).toBe("number");
  });
  it("On regarde si on return que des nombres", () => {
    const result = splitAndParse("7eighttwo17fournsmrznntgjrdpkdjvx");

    expect(typeof result).toBe("number");
  });
  it("On regarde si on return que des nombres", () => {
    const result = splitAndParse("plckvxznnineh34eight2");
    expect(typeof result).toBe("number");
  });
});

describe("On extrait seulement les deux nombres au extrémité", () => {
  it("le nombre 15381 doit sortir 11", () => {
    const result = spliceEnd(15381);
    expect(result).toBe("11");
  });

  it("le nombre 7556117 doit sortir 11", () => {
    const result = spliceEnd(7556117);
    expect(result).toBe("77");
  });

  it("le nombre 762629268 doit sortir 78", () => {
    const result = spliceEnd(762629268);
    expect(result).toBe("78");
  });
});

describe("on addition toutes les sortie", () => {
  it("on addition tout", () => {
    const result = [15, 50, 70, 80];
    expect(result).toBe("215");
  });
});
