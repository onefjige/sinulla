function Pj(a, b, c) {
    if ("focusin" === a) {
        Yg();
        oc = b;
        pc = c;
        oc.attachEvent("onpropertychange", Zg);
    } else if ("focusout" === a) {
        Yg();
    }
}
