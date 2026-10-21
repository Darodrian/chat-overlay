var THEME_NPOTN = {
        key: "npotn",
        label: "Naruto: Path of the Ninja",
        atlas: null,
        data: null,
        ccBox: true,
        ccScale: 3,
        boxStyles: {
            default: {}
        },
        defaultBoxStyle: "default",
        boxParts: {
            default: {
                dir: "assets/themes/npotn/box/",
                tl: { x: 0, y: 0, w: 8, h: 8 }, t: { x: 0, y: 0, w: 8, h: 8 }, tr: { x: 0, y: 0, w: 16, h: 16 },
                l: { x: 0, y: 0, w: 8, h: 8 }, c: { x: 0, y: 0, w: 8, h: 8 }, r: { x: 0, y: 0, w: 16, h: 8 },
                bl: { x: 0, y: 0, w: 8, h: 8 }, b: { x: 0, y: 0, w: 8, h: 8 }, br: { x: 0, y: 0, w: 16, h: 16 },
                eo: { t: 0, b: 0, l: 0, r: 0 },
                ov: 5, scale: 3, centerFromWall: true,
                wall: { t: 8, b: 8, l: 8, r: 16 },
                content: { px: 30, py: 32, ps: 120, pl: 162, pt: 24, pr: 64, pb: 40, minH: 136 },
                overhang: { t: 7, b: 7 },
                co: { tl: { dx: 0, dy: 0 }, tr: { dx: 0, dy: -8 }, bl: { dx: 0, dy: 0 }, br: { dx: 0, dy: 10 } },
                arrow: { scale: 3, x: 4, y: 4, blink: true, blinkMs: 400 },
                ctc: [
                    { file: "ctc.png", x: 0, y: 0, w: 12, h: 8 }
                ]
            }
        },
        fontFamily: "Zpix",
        fontStack: "monospace",
        fontSize: 24,
        lineHeight: 32,
        bodyColor: "#000000",
        usernameColor: "#b05800",
        textShadow: "none",
        drawMode: "box",
        windowBorder: 0,
        userRows: null,
        mapApostrophe: false,
        inlineName: true,
        continueArrow: true,
        arrowInterval: 130,
        portrait: true,
        portraitFiles: true,
        squarePortrait: true,
        portraitW: 40,
        portraitH: 40,
        portraitScale: 3,
        portraitBase: "assets/themes/npotn/portraits/",
        portraitNames: [
            "anbu-female", "anbu-male", "anko", "asuma", "choji", "dosu",
            "ebisu", "enma", "gaara-1", "gaara-2", "gama", "gamabunta",
            "gamakichi", "gamatatsu", "gato", "genma", "guy", "haku-1",
            "haku-2", "haku-3", "hayate", "hinata", "ibiki", "inari",
            "ino", "iruka", "itachi", "jiraiya", "jirobo-1", "jirobo-2",
            "kabuto", "kakashi-1", "kakashi-2", "kamatari", "kankuro",
            "katsuyu", "kiba", "kidomaru-1", "kidomaru-2", "kimimaro-1",
            "kimimaro-2", "kin", "kisame", "konohamaru", "manda", "naruto-1",
            "naruto-2", "naruto-3", "neji", "nungame", "orochimaru", "pakkun",
            "rocklee", "sakon-ukon-1", "sakon-ukon-2", "sakura-1", "sakura-2",
            "sarutobi-1", "sarutobi-2", "sarutobi-3", "sasuke-1", "sasuke-2",
            "shikamaru", "shino", "shukaku", "tayuya-1", "tayuya-2", "tazuna",
            "temari", "tenten", "teuchi", "tonton", "tsunade", "zabuza", "zaku"
        ],
        tuner: ["userPortrait"]
    };
