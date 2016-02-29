KeyboardEvent.prototype.printable = function() {
    console.log(this);
    if (this.ctrlKey || this.altKey) {
        return "";
    } else if (this.shiftKey) {
        return this.codeToKeyInfo[this.keyCode].shiftPrint;
    } else {
        return this.codeToKeyInfo[this.keyCode].print;
    }
};

if (typeof jQuery !== 'undefined') {
    jQuery.Event.prototype.printable = function() {
        return this.originalEvent.printable();
    }
}

KeyboardEvent.prototype.description = function() {
    text = "";
    if (this.ctrlKey) {
        text = this.attachDescriptor(text, "ctrl");
    }
    if (this.altKey) {
        text = this.attachDescriptor(text, "alt");
    }
    if (this.shiftKey) {
        text = this.attachDescriptor(text, "shift");
    }
    if (this.keyCode != this.keyToCode["shift"] && event.keyCode != this.keyToCode["ctrl"] && event.keyCode != this.keyToCode["alt"]) {
        text = this.attachDescriptor(text, this.codeToKeyInfo[event.keyCode].description)
    }
    return text;
};

if (typeof jQuery !== 'undefined') {
    jQuery.Event.prototype.description = function() {
        return this.originalEvent.description();
    }
}

KeyboardEvent.prototype.attachDescriptor = function(text, descriptor) {
    if (text !== "") {
        text += "-";
    }
    text += descriptor;
    return text;
};

if (typeof jQuery !== 'undefined') {
    jQuery.Event.prototype.attachDescriptor = function() {
        return this.originalEvent.attachDescriptor();
    }
}

KeyboardEvent.prototype.keyToCode = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pause: 19,
    caps: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    delete: 46,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimal: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numLock: 144,
    scrollLock: 145,
    semicolon: 186,
    equal: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    tilde: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    quote: 222
};

if (typeof jQuery !== 'undefined') {
    jQuery.Event.prototype.keyToCode = KeyboardEvent.prototype.keyToCode;
}

KeyboardEvent.prototype.makeKeyInfo = function(description, print, shiftPrint) {
    return {
        description: description,
        print: print,
        shiftPrint: shiftPrint
    }
};

KeyboardEvent.prototype.codeToKeyInfo = [];
KeyboardEvent.prototype.codeToKeyInfo[8] = KeyboardEvent.prototype.makeKeyInfo("backspace", "", "");
KeyboardEvent.prototype.codeToKeyInfo[9] = KeyboardEvent.prototype.makeKeyInfo("tab", "\t", "\t");
KeyboardEvent.prototype.codeToKeyInfo[13] = KeyboardEvent.prototype.makeKeyInfo("enter", "\n", "\n");
KeyboardEvent.prototype.codeToKeyInfo[16] = KeyboardEvent.prototype.makeKeyInfo("shift", "", "");
KeyboardEvent.prototype.codeToKeyInfo[17] = KeyboardEvent.prototype.makeKeyInfo("ctrl", "", "");
KeyboardEvent.prototype.codeToKeyInfo[18] = KeyboardEvent.prototype.makeKeyInfo("alt", "", "");
KeyboardEvent.prototype.codeToKeyInfo[19] = KeyboardEvent.prototype.makeKeyInfo("pause", "", "");
KeyboardEvent.prototype.codeToKeyInfo[20] = KeyboardEvent.prototype.makeKeyInfo("caps", "", "");
KeyboardEvent.prototype.codeToKeyInfo[27] = KeyboardEvent.prototype.makeKeyInfo("escape", "", "");
KeyboardEvent.prototype.codeToKeyInfo[32] = KeyboardEvent.prototype.makeKeyInfo("space", " ", " ");
KeyboardEvent.prototype.codeToKeyInfo[33] = KeyboardEvent.prototype.makeKeyInfo("pageUp", "", "");
KeyboardEvent.prototype.codeToKeyInfo[34] = KeyboardEvent.prototype.makeKeyInfo("pageDown", "", "");
KeyboardEvent.prototype.codeToKeyInfo[35] = KeyboardEvent.prototype.makeKeyInfo("end", "", "");
KeyboardEvent.prototype.codeToKeyInfo[36] = KeyboardEvent.prototype.makeKeyInfo("home", "", "");
KeyboardEvent.prototype.codeToKeyInfo[37] = KeyboardEvent.prototype.makeKeyInfo("left", "", "");
KeyboardEvent.prototype.codeToKeyInfo[38] = KeyboardEvent.prototype.makeKeyInfo("up", "", "");
KeyboardEvent.prototype.codeToKeyInfo[39] = KeyboardEvent.prototype.makeKeyInfo("right", "", "");
KeyboardEvent.prototype.codeToKeyInfo[40] = KeyboardEvent.prototype.makeKeyInfo("down", "", "");
KeyboardEvent.prototype.codeToKeyInfo[45] = KeyboardEvent.prototype.makeKeyInfo("insert", "", "");
KeyboardEvent.prototype.codeToKeyInfo[46] = KeyboardEvent.prototype.makeKeyInfo("delete", "", "");
KeyboardEvent.prototype.codeToKeyInfo[48] = KeyboardEvent.prototype.makeKeyInfo("0", "0", ")");
KeyboardEvent.prototype.codeToKeyInfo[49] = KeyboardEvent.prototype.makeKeyInfo("1", "1", "!");
KeyboardEvent.prototype.codeToKeyInfo[50] = KeyboardEvent.prototype.makeKeyInfo("2", "2", "@");
KeyboardEvent.prototype.codeToKeyInfo[51] = KeyboardEvent.prototype.makeKeyInfo("3", "3", "#");
KeyboardEvent.prototype.codeToKeyInfo[52] = KeyboardEvent.prototype.makeKeyInfo("4", "4", "$");
KeyboardEvent.prototype.codeToKeyInfo[53] = KeyboardEvent.prototype.makeKeyInfo("5", "5", "%");
KeyboardEvent.prototype.codeToKeyInfo[54] = KeyboardEvent.prototype.makeKeyInfo("6", "6", "^");
KeyboardEvent.prototype.codeToKeyInfo[55] = KeyboardEvent.prototype.makeKeyInfo("7", "7", "&");
KeyboardEvent.prototype.codeToKeyInfo[56] = KeyboardEvent.prototype.makeKeyInfo("8", "8", "*");
KeyboardEvent.prototype.codeToKeyInfo[57] = KeyboardEvent.prototype.makeKeyInfo("9", "9", "(");
KeyboardEvent.prototype.codeToKeyInfo[65] = KeyboardEvent.prototype.makeKeyInfo("a", "a", "A");
KeyboardEvent.prototype.codeToKeyInfo[66] = KeyboardEvent.prototype.makeKeyInfo("b", "b", "B");
KeyboardEvent.prototype.codeToKeyInfo[67] = KeyboardEvent.prototype.makeKeyInfo("c", "c", "C");
KeyboardEvent.prototype.codeToKeyInfo[68] = KeyboardEvent.prototype.makeKeyInfo("d", "d", "D");
KeyboardEvent.prototype.codeToKeyInfo[69] = KeyboardEvent.prototype.makeKeyInfo("e", "e", "E");
KeyboardEvent.prototype.codeToKeyInfo[70] = KeyboardEvent.prototype.makeKeyInfo("f", "f", "F");
KeyboardEvent.prototype.codeToKeyInfo[71] = KeyboardEvent.prototype.makeKeyInfo("g", "g", "G");
KeyboardEvent.prototype.codeToKeyInfo[72] = KeyboardEvent.prototype.makeKeyInfo("h", "h", "H");
KeyboardEvent.prototype.codeToKeyInfo[73] = KeyboardEvent.prototype.makeKeyInfo("i", "i", "I");
KeyboardEvent.prototype.codeToKeyInfo[74] = KeyboardEvent.prototype.makeKeyInfo("j", "j", "J");
KeyboardEvent.prototype.codeToKeyInfo[75] = KeyboardEvent.prototype.makeKeyInfo("k", "k", "K");
KeyboardEvent.prototype.codeToKeyInfo[76] = KeyboardEvent.prototype.makeKeyInfo("l", "l", "L");
KeyboardEvent.prototype.codeToKeyInfo[77] = KeyboardEvent.prototype.makeKeyInfo("m", "m", "M");
KeyboardEvent.prototype.codeToKeyInfo[78] = KeyboardEvent.prototype.makeKeyInfo("n", "n", "N");
KeyboardEvent.prototype.codeToKeyInfo[79] = KeyboardEvent.prototype.makeKeyInfo("o", "o", "O");
KeyboardEvent.prototype.codeToKeyInfo[80] = KeyboardEvent.prototype.makeKeyInfo("p", "p", "P");
KeyboardEvent.prototype.codeToKeyInfo[81] = KeyboardEvent.prototype.makeKeyInfo("q", "q", "Q");
KeyboardEvent.prototype.codeToKeyInfo[82] = KeyboardEvent.prototype.makeKeyInfo("r", "r", "R");
KeyboardEvent.prototype.codeToKeyInfo[83] = KeyboardEvent.prototype.makeKeyInfo("s", "s", "S");
KeyboardEvent.prototype.codeToKeyInfo[84] = KeyboardEvent.prototype.makeKeyInfo("t", "t", "T");
KeyboardEvent.prototype.codeToKeyInfo[85] = KeyboardEvent.prototype.makeKeyInfo("u", "u", "U");
KeyboardEvent.prototype.codeToKeyInfo[86] = KeyboardEvent.prototype.makeKeyInfo("v", "v", "V");
KeyboardEvent.prototype.codeToKeyInfo[87] = KeyboardEvent.prototype.makeKeyInfo("w", "w", "W");
KeyboardEvent.prototype.codeToKeyInfo[88] = KeyboardEvent.prototype.makeKeyInfo("x", "x", "X");
KeyboardEvent.prototype.codeToKeyInfo[89] = KeyboardEvent.prototype.makeKeyInfo("y", "y", "Y");
KeyboardEvent.prototype.codeToKeyInfo[90] = KeyboardEvent.prototype.makeKeyInfo("z", "z", "Z");
KeyboardEvent.prototype.codeToKeyInfo[91] = KeyboardEvent.prototype.makeKeyInfo("leftWindow", "", "");
KeyboardEvent.prototype.codeToKeyInfo[92] = KeyboardEvent.prototype.makeKeyInfo("rightWindow", "", "");
KeyboardEvent.prototype.codeToKeyInfo[93] = KeyboardEvent.prototype.makeKeyInfo("select", "", "");
KeyboardEvent.prototype.codeToKeyInfo[96] = KeyboardEvent.prototype.makeKeyInfo("numpad0", "0", "");
KeyboardEvent.prototype.codeToKeyInfo[97] = KeyboardEvent.prototype.makeKeyInfo("numpad1", "1", "");
KeyboardEvent.prototype.codeToKeyInfo[98] = KeyboardEvent.prototype.makeKeyInfo("numpad2", "2", "");
KeyboardEvent.prototype.codeToKeyInfo[99] = KeyboardEvent.prototype.makeKeyInfo("numpad3", "3", "");
KeyboardEvent.prototype.codeToKeyInfo[100] = KeyboardEvent.prototype.makeKeyInfo("numpad4", "4", "");
KeyboardEvent.prototype.codeToKeyInfo[101] = KeyboardEvent.prototype.makeKeyInfo("numpad5", "5", "");
KeyboardEvent.prototype.codeToKeyInfo[102] = KeyboardEvent.prototype.makeKeyInfo("numpad6", "6", "");
KeyboardEvent.prototype.codeToKeyInfo[103] = KeyboardEvent.prototype.makeKeyInfo("numpad7", "7", "");
KeyboardEvent.prototype.codeToKeyInfo[104] = KeyboardEvent.prototype.makeKeyInfo("numpad8", "8", "");
KeyboardEvent.prototype.codeToKeyInfo[105] = KeyboardEvent.prototype.makeKeyInfo("numpad9", "9", "");
KeyboardEvent.prototype.codeToKeyInfo[106] = KeyboardEvent.prototype.makeKeyInfo("multiply", "*", "*");
KeyboardEvent.prototype.codeToKeyInfo[107] = KeyboardEvent.prototype.makeKeyInfo("add", "+", "+");
KeyboardEvent.prototype.codeToKeyInfo[109] = KeyboardEvent.prototype.makeKeyInfo("subtract", "-", "-");
KeyboardEvent.prototype.codeToKeyInfo[110] = KeyboardEvent.prototype.makeKeyInfo("decimal", ".", "");
KeyboardEvent.prototype.codeToKeyInfo[111] = KeyboardEvent.prototype.makeKeyInfo("divide", "/", "/");
KeyboardEvent.prototype.codeToKeyInfo[112] = KeyboardEvent.prototype.makeKeyInfo("f1", "", "");
KeyboardEvent.prototype.codeToKeyInfo[113] = KeyboardEvent.prototype.makeKeyInfo("f2", "", "");
KeyboardEvent.prototype.codeToKeyInfo[114] = KeyboardEvent.prototype.makeKeyInfo("f3", "", "");
KeyboardEvent.prototype.codeToKeyInfo[115] = KeyboardEvent.prototype.makeKeyInfo("f4", "", "");
KeyboardEvent.prototype.codeToKeyInfo[116] = KeyboardEvent.prototype.makeKeyInfo("f5", "", "");
KeyboardEvent.prototype.codeToKeyInfo[117] = KeyboardEvent.prototype.makeKeyInfo("f6", "", "");
KeyboardEvent.prototype.codeToKeyInfo[118] = KeyboardEvent.prototype.makeKeyInfo("f7", "", "");
KeyboardEvent.prototype.codeToKeyInfo[119] = KeyboardEvent.prototype.makeKeyInfo("f8", "", "");
KeyboardEvent.prototype.codeToKeyInfo[120] = KeyboardEvent.prototype.makeKeyInfo("f9", "", "");
KeyboardEvent.prototype.codeToKeyInfo[121] = KeyboardEvent.prototype.makeKeyInfo("f10", "", "");
KeyboardEvent.prototype.codeToKeyInfo[122] = KeyboardEvent.prototype.makeKeyInfo("f11", "", "");
KeyboardEvent.prototype.codeToKeyInfo[123] = KeyboardEvent.prototype.makeKeyInfo("f12", "", "");
KeyboardEvent.prototype.codeToKeyInfo[144] = KeyboardEvent.prototype.makeKeyInfo("numLock", "", "");
KeyboardEvent.prototype.codeToKeyInfo[145] = KeyboardEvent.prototype.makeKeyInfo("scrollLock", "", "");
KeyboardEvent.prototype.codeToKeyInfo[186] = KeyboardEvent.prototype.makeKeyInfo("semicolon", ";", ":");
KeyboardEvent.prototype.codeToKeyInfo[187] = KeyboardEvent.prototype.makeKeyInfo("equal", "=", "+");
KeyboardEvent.prototype.codeToKeyInfo[188] = KeyboardEvent.prototype.makeKeyInfo("comma", ",", "<");
KeyboardEvent.prototype.codeToKeyInfo[189] = KeyboardEvent.prototype.makeKeyInfo("dash", "-", "_");
KeyboardEvent.prototype.codeToKeyInfo[190] = KeyboardEvent.prototype.makeKeyInfo("period", ".", ">");
KeyboardEvent.prototype.codeToKeyInfo[191] = KeyboardEvent.prototype.makeKeyInfo("forwardSlash", "/", "?");
KeyboardEvent.prototype.codeToKeyInfo[192] = KeyboardEvent.prototype.makeKeyInfo("tilde", "`", "~");
KeyboardEvent.prototype.codeToKeyInfo[219] = KeyboardEvent.prototype.makeKeyInfo("openBracket", "[", "{");
KeyboardEvent.prototype.codeToKeyInfo[220] = KeyboardEvent.prototype.makeKeyInfo("backSlash", "\\", "|");
KeyboardEvent.prototype.codeToKeyInfo[221] = KeyboardEvent.prototype.makeKeyInfo("closeBracket", "]", "}");
KeyboardEvent.prototype.codeToKeyInfo[222] = KeyboardEvent.prototype.makeKeyInfo("quote", "'", "\"");

if (typeof jQuery !== 'undefined') {
    jQuery.Event.prototype.codeToKeyInfo = KeyboardEvent.prototype.codeToKeyInfo;
}