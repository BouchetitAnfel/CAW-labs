test('myColor String', () => {
    const myColor = ["Red", "Green", "White", "Black"];

    expect(myColor.toString()).toBe("Red,Green,White,Black");
    expect(myColor.join()).toBe("Red,Green,White,Black");
    expect(myColor.join('')).toBe("RedGreenWhiteBlack");
});