var KHCOM_PORTRAIT_NAMES = [
    "sora", "riku", "cloud", "genie", "aerith", "aladdin", "alice", "ansem",
    "ariel", "axel", "beast", "belle", "hook", "cheshire", "cid", "diz",
    "donald", "donald-classic", "dr-finkelstein", "eeyore", "flounder", "gepetto",
    "goofy", "goofy-classic", "hades", "hercules", "jack-skellington", "jafar",
    "jiminy-cricket", "kairi", "larxene", "leon", "lexaeus", "maleficent",
    "marluxia", "mickey", "moogle", "namine", "oogie-boogie", "owl", "peter-pan",
    "phil", "piglet", "pinocchio", "queen-of-hearts", "bunny", "dark-riku", "roo",
    "sally", "sebastian", "selphie", "tidus", "tigger", "unknown", "ursula",
    "vexen", "wakka", "wendy", "white-bunny", "pooh", "yuffie", "zexion"
];

var KHCOM_PORTRAIT_HEIGHTS = [
    88, 83, 99, 103, 86, 79, 83, 90, 80, 96, 69, 78, 111, 72, 86, 82,
    80, 82, 77, 68, 77, 82, 96, 94, 111, 88, 76, 123, 85, 80, 80, 81,
    92, 119, 87, 85, 90, 80, 80, 71, 95, 80, 84, 88, 88, 85, 83, 80,
    76, 69, 87, 87, 72, 81, 91, 85, 96, 81, 81, 77, 80, 83
];

var KHCOM_PORTRAIT_LABELS = {
    "diz": "DiZ",
    "donald-classic": "Donald (Classic)",
    "goofy-classic": "Goofy (Classic)",
    "queen-of-hearts": "Queen of Hearts"
};

var THEME_DATA_KHCOM = { overlays: { portrait: { options: {} } } };

(function () {
    var opts = THEME_DATA_KHCOM.overlays.portrait.options;
    for (var i = 0; i < KHCOM_PORTRAIT_NAMES.length; i++) {
        var name = KHCOM_PORTRAIT_NAMES[i];
        opts[name] = {
            x: (i % 16) * 66,
            y: Math.floor(i / 16) * 123,
            w: 66,
            h: KHCOM_PORTRAIT_HEIGHTS[i],
            label: KHCOM_PORTRAIT_LABELS[name] || null
        };
    }
})();

var THEME_KHCOM = {
    key: "khcom",
    label: "Kingdom Hearts: Chain of Memories",
    atlas: "assets/themes/khcom/portraits/spritesheet.png",
    data: THEME_DATA_KHCOM,
    ccBox: true,
    boxStyles: {
        default: {}
    },
    defaultBoxStyle: "default",
    boxParts: {
        default: {
            dir: "assets/themes/khcom/box/",
            tl: { x: 0, y: 0, w: 8, h: 8 }, t: { x: 0, y: 0, w: 8, h: 8 }, tr: { x: 0, y: 0, w: 8, h: 8 },
            l: { x: 0, y: 0, w: 8, h: 8 }, c: { x: 0, y: 0, w: 8, h: 8 }, r: { x: 0, y: 0, w: 8, h: 8 },
            bl: { x: 0, y: 0, w: 8, h: 8 }, b: { x: 0, y: 0, w: 8, h: 8 }, br: { x: 0, y: 0, w: 8, h: 8 },
            eo: { t: 0, b: 0, l: 0, r: 0 },
            scale: 3, scaleSnap: "floor", centerFromWall: true,
            wall: { t: 8, b: 8, l: 8, r: 8 },
            content: { px: 30, py: 32, ps: 198, pl: 240, pt: 24, pr: 64, pb: 48, minH: 198 },
            arrow: { scale: 3, x: 0, y: 0 },
            ctc: [
                { file: "ctc-1.png", x: 0, y: 0, w: 9, h: 14 },
                { file: "ctc-2.png", x: 0, y: 0, w: 9, h: 14 },
                { file: "ctc-3.png", x: 0, y: 0, w: 9, h: 14 },
                { file: "ctc-4.png", x: 0, y: 0, w: 9, h: 14 },
                { file: "ctc-5.png", x: 0, y: 0, w: 9, h: 14 }
            ]
        }
    },
    fontFamily: "KHCom",
    fontStack: "monospace",
    fontSize: 48,
    lineHeight: 38,
    bodyColor: "#52230a",
    usernameColor: "#52230a",
    textShadow: "1px 1px 0 #c6953e",
    drawMode: "box",
    windowBorder: 0,
    userRows: null,
    mapApostrophe: false,
    inlineName: true,
    continueArrow: true,
    arrowInterval: 130,
    ctcCorner: true,
    portrait: true,
    flipPortraitOnRight: true,
    squarePortrait: false,
    portraitScale: 3,
    tuner: ["userPortrait"]
};
