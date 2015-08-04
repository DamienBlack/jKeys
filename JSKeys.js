function JSKeys_keyEventToPrintable(event) {
    if (event.ctrlKey || event.altKey) {
        return "";
    } else if (event.shiftKey) {
        return JSKeys_codeToKeyInfo[event.keyCode].shiftPrint;
    } else {
        return JSKeys_codeToKeyInfo[event.keyCode].print;
    }
}

function JSKeys_keyEventToDescription(event) {
    text = "";
    if (event.ctrlKey) {
        text = JSKeys_attachDescriptor(text, "ctrl");
    }
    if (event.altKey) {
        text = JSKeys_attachDescriptor(text, "alt");
    }
    if (event.shiftKey) {
        text = JSKeys_attachDescriptor(text, "shift");
    }
    if (event.keyCode != JSKeys_keyToCode["shift"] && event.keyCode != JSKeys_keyToCode["ctrl"] && event.keyCode != JSKeys_keyToCode["alt"]) {
        text = JSKeys_attachDescriptor(text, JSKeys_codeToKeyInfo[event.keyCode].description)
    }
    return text;
}

function JSKeys_attachDescriptor(text, descriptor) {
    if (text !== "") {
        text += "-";
    }
    text += descriptor;
    return text;
}

var JSKeys_keyToCode = {
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

var JSKeys_codeToKeyInfo = [];
JSKeys_codeToKeyInfo[8] = JSKeys_makeKeyInfo("backspace", "", "");
JSKeys_codeToKeyInfo[9] = JSKeys_makeKeyInfo("tab", "\t", "\t");
JSKeys_codeToKeyInfo[13] = JSKeys_makeKeyInfo("enter", "\n", "\n");
JSKeys_codeToKeyInfo[16] = JSKeys_makeKeyInfo("shift", "", "");
JSKeys_codeToKeyInfo[17] = JSKeys_makeKeyInfo("ctrl", "", "");
JSKeys_codeToKeyInfo[18] = JSKeys_makeKeyInfo("alt", "", "");
JSKeys_codeToKeyInfo[19] = JSKeys_makeKeyInfo("pause", "", "");
JSKeys_codeToKeyInfo[20] = JSKeys_makeKeyInfo("caps", "", "");
JSKeys_codeToKeyInfo[27] = JSKeys_makeKeyInfo("escape", "", "");
JSKeys_codeToKeyInfo[32] = JSKeys_makeKeyInfo("space", " ", " ");
JSKeys_codeToKeyInfo[33] = JSKeys_makeKeyInfo("pageUp", "", "");
JSKeys_codeToKeyInfo[34] = JSKeys_makeKeyInfo("pageDown", "", "");
JSKeys_codeToKeyInfo[35] = JSKeys_makeKeyInfo("end", "", "");
JSKeys_codeToKeyInfo[36] = JSKeys_makeKeyInfo("home", "", "");
JSKeys_codeToKeyInfo[37] = JSKeys_makeKeyInfo("left", "", "");
JSKeys_codeToKeyInfo[38] = JSKeys_makeKeyInfo("up", "", "");
JSKeys_codeToKeyInfo[39] = JSKeys_makeKeyInfo("right", "", "");
JSKeys_codeToKeyInfo[40] = JSKeys_makeKeyInfo("down", "", "");
JSKeys_codeToKeyInfo[45] = JSKeys_makeKeyInfo("insert", "", "");
JSKeys_codeToKeyInfo[46] = JSKeys_makeKeyInfo("delete", "", "");
JSKeys_codeToKeyInfo[48] = JSKeys_makeKeyInfo("0", "0", ")");
JSKeys_codeToKeyInfo[49] = JSKeys_makeKeyInfo("1", "1", "!");
JSKeys_codeToKeyInfo[50] = JSKeys_makeKeyInfo("2", "2", "@");
JSKeys_codeToKeyInfo[51] = JSKeys_makeKeyInfo("3", "3", "#");
JSKeys_codeToKeyInfo[52] = JSKeys_makeKeyInfo("4", "4", "$");
JSKeys_codeToKeyInfo[53] = JSKeys_makeKeyInfo("5", "5", "%");
JSKeys_codeToKeyInfo[54] = JSKeys_makeKeyInfo("6", "6", "^");
JSKeys_codeToKeyInfo[55] = JSKeys_makeKeyInfo("7", "7", "&");
JSKeys_codeToKeyInfo[56] = JSKeys_makeKeyInfo("8", "8", "*");
JSKeys_codeToKeyInfo[57] = JSKeys_makeKeyInfo("9", "9", "(");
JSKeys_codeToKeyInfo[65] = JSKeys_makeKeyInfo("a", "a", "A");
JSKeys_codeToKeyInfo[66] = JSKeys_makeKeyInfo("b", "b", "B");
JSKeys_codeToKeyInfo[67] = JSKeys_makeKeyInfo("c", "c", "C");
JSKeys_codeToKeyInfo[68] = JSKeys_makeKeyInfo("d", "d", "D");
JSKeys_codeToKeyInfo[69] = JSKeys_makeKeyInfo("e", "e", "E");
JSKeys_codeToKeyInfo[70] = JSKeys_makeKeyInfo("f", "f", "F");
JSKeys_codeToKeyInfo[71] = JSKeys_makeKeyInfo("g", "g", "G");
JSKeys_codeToKeyInfo[72] = JSKeys_makeKeyInfo("h", "h", "H");
JSKeys_codeToKeyInfo[73] = JSKeys_makeKeyInfo("i", "i", "I");
JSKeys_codeToKeyInfo[74] = JSKeys_makeKeyInfo("j", "j", "J");
JSKeys_codeToKeyInfo[75] = JSKeys_makeKeyInfo("k", "k", "K");
JSKeys_codeToKeyInfo[76] = JSKeys_makeKeyInfo("l", "l", "L");
JSKeys_codeToKeyInfo[77] = JSKeys_makeKeyInfo("m", "m", "M");
JSKeys_codeToKeyInfo[78] = JSKeys_makeKeyInfo("n", "n", "N");
JSKeys_codeToKeyInfo[79] = JSKeys_makeKeyInfo("o", "o", "O");
JSKeys_codeToKeyInfo[80] = JSKeys_makeKeyInfo("p", "p", "P");
JSKeys_codeToKeyInfo[81] = JSKeys_makeKeyInfo("q", "q", "Q");
JSKeys_codeToKeyInfo[82] = JSKeys_makeKeyInfo("r", "r", "R");
JSKeys_codeToKeyInfo[83] = JSKeys_makeKeyInfo("s", "s", "S");
JSKeys_codeToKeyInfo[84] = JSKeys_makeKeyInfo("t", "t", "T");
JSKeys_codeToKeyInfo[85] = JSKeys_makeKeyInfo("u", "u", "U");
JSKeys_codeToKeyInfo[86] = JSKeys_makeKeyInfo("v", "v", "V");
JSKeys_codeToKeyInfo[87] = JSKeys_makeKeyInfo("w", "w", "W");
JSKeys_codeToKeyInfo[88] = JSKeys_makeKeyInfo("x", "x", "X");
JSKeys_codeToKeyInfo[89] = JSKeys_makeKeyInfo("y", "y", "Y");
JSKeys_codeToKeyInfo[90] = JSKeys_makeKeyInfo("z", "z", "Z");
JSKeys_codeToKeyInfo[91] = JSKeys_makeKeyInfo("leftWindow", "", "");
JSKeys_codeToKeyInfo[92] = JSKeys_makeKeyInfo("rightWindow", "", "");
JSKeys_codeToKeyInfo[93] = JSKeys_makeKeyInfo("select", "", "");
JSKeys_codeToKeyInfo[96] = JSKeys_makeKeyInfo("numpad0", "0", "");
JSKeys_codeToKeyInfo[97] = JSKeys_makeKeyInfo("numpad1", "1", "");
JSKeys_codeToKeyInfo[98] = JSKeys_makeKeyInfo("numpad2", "2", "");
JSKeys_codeToKeyInfo[99] = JSKeys_makeKeyInfo("numpad3", "3", "");
JSKeys_codeToKeyInfo[100] = JSKeys_makeKeyInfo("numpad4", "4", "");
JSKeys_codeToKeyInfo[101] = JSKeys_makeKeyInfo("numpad5", "5", "");
JSKeys_codeToKeyInfo[102] = JSKeys_makeKeyInfo("numpad6", "6", "");
JSKeys_codeToKeyInfo[103] = JSKeys_makeKeyInfo("numpad7", "7", "");
JSKeys_codeToKeyInfo[104] = JSKeys_makeKeyInfo("numpad8", "8", "");
JSKeys_codeToKeyInfo[105] = JSKeys_makeKeyInfo("numpad9", "9", "");
JSKeys_codeToKeyInfo[106] = JSKeys_makeKeyInfo("multiply", "*", "*");
JSKeys_codeToKeyInfo[107] = JSKeys_makeKeyInfo("add", "+", "+");
JSKeys_codeToKeyInfo[109] = JSKeys_makeKeyInfo("subtract", "-", "-");
JSKeys_codeToKeyInfo[110] = JSKeys_makeKeyInfo("decimal", ".", "");
JSKeys_codeToKeyInfo[111] = JSKeys_makeKeyInfo("divide", "/", "/");
JSKeys_codeToKeyInfo[112] = JSKeys_makeKeyInfo("f1", "", "");
JSKeys_codeToKeyInfo[113] = JSKeys_makeKeyInfo("f2", "", "");
JSKeys_codeToKeyInfo[114] = JSKeys_makeKeyInfo("f3", "", "");
JSKeys_codeToKeyInfo[115] = JSKeys_makeKeyInfo("f4", "", "");
JSKeys_codeToKeyInfo[116] = JSKeys_makeKeyInfo("f5", "", "");
JSKeys_codeToKeyInfo[117] = JSKeys_makeKeyInfo("f6", "", "");
JSKeys_codeToKeyInfo[118] = JSKeys_makeKeyInfo("f7", "", "");
JSKeys_codeToKeyInfo[119] = JSKeys_makeKeyInfo("f8", "", "");
JSKeys_codeToKeyInfo[120] = JSKeys_makeKeyInfo("f9", "", "");
JSKeys_codeToKeyInfo[121] = JSKeys_makeKeyInfo("f10", "", "");
JSKeys_codeToKeyInfo[122] = JSKeys_makeKeyInfo("f11", "", "");
JSKeys_codeToKeyInfo[123] = JSKeys_makeKeyInfo("f12", "", "");
JSKeys_codeToKeyInfo[144] = JSKeys_makeKeyInfo("numLock", "", "");
JSKeys_codeToKeyInfo[145] = JSKeys_makeKeyInfo("scrollLock", "", "");
JSKeys_codeToKeyInfo[186] = JSKeys_makeKeyInfo("semicolon", ";", ":");
JSKeys_codeToKeyInfo[187] = JSKeys_makeKeyInfo("equal", "=", "+");
JSKeys_codeToKeyInfo[188] = JSKeys_makeKeyInfo("comma", ",", "<");
JSKeys_codeToKeyInfo[189] = JSKeys_makeKeyInfo("dash", "-", "_");
JSKeys_codeToKeyInfo[190] = JSKeys_makeKeyInfo("period", ".", ">");
JSKeys_codeToKeyInfo[191] = JSKeys_makeKeyInfo("forwardSlash", "/", "?");
JSKeys_codeToKeyInfo[192] = JSKeys_makeKeyInfo("tilde", "`", "~");
JSKeys_codeToKeyInfo[219] = JSKeys_makeKeyInfo("openBracket", "[", "{");
JSKeys_codeToKeyInfo[220] = JSKeys_makeKeyInfo("backSlash", "\\", "|");
JSKeys_codeToKeyInfo[221] = JSKeys_makeKeyInfo("closeBracket", "]", "}");
JSKeys_codeToKeyInfo[222] = JSKeys_makeKeyInfo("quote", "'", "\"");

function JSKeys_makeKeyInfo(description, print, shiftPrint) {
    return {
        description: description,
        print: print,
        shiftPrint: shiftPrint
    }
}
