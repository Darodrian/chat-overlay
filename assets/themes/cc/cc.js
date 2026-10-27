var THEME_CC = {
        key: "cc",
        label: "Chrono Cross",
        atlas: null,
        data: null,
        boxStyles: {
            style1: {}, style2: {}, style3: {}, style4: {},
            style5: {}, style6: {}, style7: {}, style8: {},
            style9: {}, style10: {}, style11: {}, style12: {},
            style13: {}, style14: {}, style15: {}, style16: {}
        },
        boxParts: {
            style1: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w01/",
                    tl: { x: 64, y: 76, w: 96, h: 84 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 76, w: 96, h: 84 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 64, y: 0, w: 96, h: 84 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 96, h: 84 },
                    eo: { t: -44, b: 44, l: -32, r: 32 },
                    scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 12, b: 12, l: 12, r: 12 },
                    content: { px: 20, py: 20, ps: 100, pl: 128, pt: 20, pr: 32, pb: 28 },
                    arrow: { scale: 0.75, x: 4, y: 4, blink: true, blinkMs: 400 },
                    ctc: [
                        { file: "ctc.png", x: 10, y: 10, w: 48, h: 48 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w01/",
                    tl: { x: 16, y: 19, w: 24, h: 21 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 19, w: 24, h: 21 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 16, y: 0, w: 24, h: 21 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 24, h: 21 },
                    eo: { t: -11, b: 11, l: -8, r: 8 },
                    scale: 4, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 3, b: 3, l: 3, r: 3 },
                    content: { px: 20, py: 20, ps: 100, pl: 128, pt: 20, pr: 32, pb: 28 },
                    arrow: { scale: 3, x: 4, y: 4, blink: true, blinkMs: 400 },
                    ctc: [
                        { file: "ctc.png", x: 2.5, y: 2.5, w: 12, h: 12 }
                    ]
                }
            },
            style2: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w02/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 80, b: 80, l: 80, r: 80 },
                    content: { px: 66, py: 64, ps: 106, pl: 178, pt: 64, pr: 67, pb: 80 },
                    trim: { t: 4, b: 4 },
                    arrow: { scale: 0.75, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w02/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 20, b: 20, l: 20, r: 20 },
                    content: { px: 66, py: 64, ps: 106, pl: 178, pt: 64, pr: 67, pb: 80 },
                    trim: { t: 4, b: 4 },
                    arrow: { scale: 3, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style3: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w03/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 18, b: -18, l: 18, r: -18 },
                    ov: 18, bleed: 12, scale: 0.5, scaleSnap: "floor",
                    wall: { t: 64, b: 64, l: 64, r: 64 },
                    content: { px: 42, py: 42, ps: 98, pl: 146, pt: 36, pr: 42, pb: 48 },
                    co: { tl: { dx: -14, dy: -14 }, tr: { dx: 14, dy: -14 }, bl: { dx: -14, dy: 14 }, br: { dx: 14, dy: 14 } },
                    arrow: { scale: 0.75, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w03/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 4.5, b: -4.5, l: 4.5, r: -4.5 },
                    ov: 4.5, bleed: 3, scale: 2, scaleSnap: "floor",
                    wall: { t: 16, b: 16, l: 16, r: 16 },
                    content: { px: 42, py: 42, ps: 98, pl: 146, pt: 36, pr: 42, pb: 48 },
                    co: { tl: { dx: -3.5, dy: -3.5 }, tr: { dx: 3.5, dy: -3.5 }, bl: { dx: -3.5, dy: 3.5 }, br: { dx: 3.5, dy: 3.5 } },
                    arrow: { scale: 3, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style4: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w04/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 92, b: 92, l: 92, r: 92 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 73, pr: 72, pb: 80 },
                    trim: { t: 10, b: 14 },
                    arrow: { scale: 0.75, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w04/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 23, b: 23, l: 23, r: 23 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 73, pr: 72, pb: 80 },
                    trim: { t: 12, b: 15 },
                    arrow: { scale: 3, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style5: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w05/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 80, b: 80, l: 80, r: 80 },
                    content: { px: 70, py: 70, ps: 100, pl: 176, pt: 64, pr: 64, pb: 76 },
                    trim: { t: 18, b: 12 },
                    arrow: { scale: 0.75, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w05/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 20, b: 20, l: 20, r: 20 },
                    content: { px: 70, py: 70, ps: 100, pl: 176, pt: 64, pr: 64, pb: 76 },
                    trim: { t: 14, b: 12 },
                    arrow: { scale: 3, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style6: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w06/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 80, b: 80, l: 80, r: 80 },
                    content: { px: 68, py: 68, ps: 100, pl: 174, pt: 64, pr: 64, pb: 76 },
                    trim: { t: 34, b: 34 },
                    arrow: { scale: 1, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w06/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 20, b: 20, l: 20, r: 20 },
                    content: { px: 68, py: 68, ps: 100, pl: 174, pt: 64, pr: 64, pb: 76 },
                    trim: { t: 36, b: 36 },
                    arrow: { scale: 4, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style7: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w07/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 80, b: 80, l: 80, r: 80 },
                    content: { px: 68, py: 68, ps: 100, pl: 174, pt: 64, pr: 64, pb: 76 },
                    trim: { t: 9, b: 12 },
                    arrow: { scale: 0.75, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w07/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 18, b: 18, l: 18, r: 18 },
                    content: { px: 68, py: 68, ps: 100, pl: 174, pt: 64, pr: 64, pb: 76 },
                    trim: { t: 9, b: 12 },
                    arrow: { scale: 3, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style8: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w08/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 80, b: 80, l: 80, r: 80 },
                    content: { px: 74, py: 72, ps: 100, pl: 182, pt: 70, pr: 64, pb: 80 },
                    trim: { t: 28, b: 28 },
                    arrow: { scale: 1, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w08/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 20, b: 20, l: 20, r: 20 },
                    content: { px: 74, py: 72, ps: 100, pl: 182, pt: 70, pr: 64, pb: 80 },
                    trim: { t: 27, b: 33 },
                    arrow: { scale: 4, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style9: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w09/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.5, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 92, b: 92, l: 92, r: 92 },
                    content: { px: 50, py: 50, ps: 106, pl: 160, pt: 50, pr: 50, pb: 62 },
                    trim: { t: 0, b: 24 },
                    arrow: { scale: 1, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w09/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 2, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 21, b: 21, l: 21, r: 21 },
                    content: { px: 50, py: 50, ps: 106, pl: 160, pt: 50, pr: 50, pb: 62 },
                    trim: { t: 0, b: 24 },
                    arrow: { scale: 4, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style10: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w10/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 92, b: 92, l: 92, r: 92 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 70, pr: 76, pb: 86 },
                    trim: { t: 48, b: 48 },
                    arrow: { scale: 0.75, x: 0, y: 0 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w10/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 23, b: 23, l: 23, r: 23 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 70, pr: 76, pb: 86 },
                    trim: { t: 48, b: 48 },
                    arrow: { scale: 3, x: 0, y: 0 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style11: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w11/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 96, b: 96, l: 96, r: 96 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 78, pr: 78, pb: 86 },
                    trim: { t: 32, b: 27 },
                    arrow: { scale: 0.75, x: 0, y: 0 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w11/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 24, b: 24, l: 24, r: 24 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 78, pr: 78, pb: 86 },
                    trim: { t: 30, b: 27 },
                    arrow: { scale: 3, x: 0, y: 0 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style12: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w12/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 96, b: 96, l: 96, r: 96 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 76, pr: 76, pb: 84 },
                    trim: { t: 36, b: 33 },
                    arrow: { scale: 1, x: 0, y: 0, blink: true, blinkMs: 400 },
                    ctc: [
                        { file: "ctc.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w12/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 24, b: 24, l: 24, r: 24 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 76, pr: 76, pb: 84 },
                    trim: { t: 36, b: 33 },
                    arrow: { scale: 4, x: 0, y: 0, blink: true, blinkMs: 400 },
                    ctc: [
                        { file: "ctc.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style13: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w13/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 96, b: 96, l: 96, r: 96 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 76, pr: 76, pb: 85 },
                    trim: { t: 42, b: 42 },
                    arrow: { scale: 1, x: 0, y: 0 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w13/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 24, b: 24, l: 24, r: 24 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 76, pr: 76, pb: 85 },
                    trim: { t: 42, b: 42 },
                    arrow: { scale: 4, x: 0, y: 0 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style14: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w14/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 96, b: 96, l: 96, r: 96 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 76, pr: 76, pb: 86 },
                    trim: { t: 39, b: 40 },
                    arrow: { scale: 0.75, x: 0, y: 0 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w14/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 24, b: 24, l: 24, r: 24 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 76, pr: 76, pb: 86 },
                    trim: { t: 39, b: 39 },
                    arrow: { scale: 3, x: 0, y: 0 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style15: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w15/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 96, b: 96, l: 96, r: 96 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 76, pr: 76, pb: 86 },
                    trim: { t: 51, b: 51 },
                    arrow: { scale: 1, x: 0, y: 0 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w15/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 24, b: 24, l: 24, r: 24 },
                    content: { px: 76, py: 76, ps: 100, pl: 182, pt: 76, pr: 76, pb: 86 },
                    trim: { t: 51, b: 51 },
                    arrow: { scale: 4, x: 0, y: 0 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            },
            style16: {
                "2021": {
                    dir: "assets/themes/cc/box/2021/w16/",
                    tl: { x: 0, y: 0, w: 160, h: 160 }, t: { x: 0, y: 0, w: 64, h: 64 }, tr: { x: 0, y: 0, w: 160, h: 160 },
                    l: { x: 0, y: 0, w: 64, h: 64 }, c: { x: 0, y: 0, w: 128, h: 128 }, r: { x: 0, y: 0, w: 64, h: 64 },
                    bl: { x: 0, y: 0, w: 160, h: 160 }, b: { x: 0, y: 0, w: 64, h: 64 }, br: { x: 0, y: 0, w: 160, h: 160 },
                    eo: { t: 32, b: -32, l: 32, r: -32 },
                    scale: 0.75, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 90, b: 94, l: 76, r: 76 },
                    content: { px: 61, py: 72, ps: 100, pl: 168, pt: 72, pr: 62, pb: 86 },
                    trim: { t: 48, b: 63 },
                    arrow: { scale: 0.75, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 64, h: 64 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 64, h: 64 }
                    ]
                },
                "1999": {
                    dir: "assets/themes/cc/box/1999/w16/",
                    tl: { x: 0, y: 0, w: 40, h: 40 }, t: { x: 0, y: 0, w: 16, h: 16 }, tr: { x: 0, y: 0, w: 40, h: 40 },
                    l: { x: 0, y: 0, w: 16, h: 16 }, c: { x: 0, y: 0, w: 32, h: 32 }, r: { x: 0, y: 0, w: 16, h: 16 },
                    bl: { x: 0, y: 0, w: 40, h: 40 }, b: { x: 0, y: 0, w: 16, h: 16 }, br: { x: 0, y: 0, w: 40, h: 40 },
                    eo: { t: 8, b: -8, l: 8, r: -8 },
                    scale: 3, scaleSnap: "floor", centerFromWall: true,
                    wall: { t: 22.5, b: 23.5, l: 19, r: 19 },
                    content: { px: 61, py: 72, ps: 100, pl: 168, pt: 72, pr: 62, pb: 86 },
                    trim: { t: 48, b: 63 },
                    arrow: { scale: 3, x: 4, y: 4 },
                    ctc: [
                        { file: "ctc-1.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-2.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-3.png", x: 0, y: 0, w: 16, h: 16 },
                        { file: "ctc-4.png", x: 0, y: 0, w: 16, h: 16 }
                    ]
                }
            }
        },
        defaultBoxStyle: "style1",
        defaultBoxSet: "1999",
        ccBox: true,
        ccScale: 1,
        fontFamily: "ChronoCross",
        fontStack: "'Zpix', monospace",
        fontSize: 44,
        lineHeight: 32,
        bodyColor: "#ffffff",
        usernameColor: "#f4f1ea",
        textShadow: "2px 2px 0 #000",
        drawMode: "box",
        windowBorder: 0,
        userRows: null,
        mapApostrophe: false,
        continueArrow: true,
        arrowInterval: 130,
        portrait: true,
        portraitFiles: true,
        squarePortrait: true,
        smoothPortrait: true,
        portraitW: 96,
        portraitH: 96,
        portraitScale: 2,
        portraitBase: "assets/themes/cc/portrait/1999/",
        portraitSets: {
            "1999": "assets/themes/cc/portrait/1999/",
            "2021": "assets/themes/cc/portrait/2021/"
        },
        defaultPortraitSet: "1999",
        portraitNames: [
            "belthasar", "black-dragon", "chief-direa", "dario", "dark-serge",
            "doc", "draggy", "dragon-god", "dwarf-chieftain", "earth-dragon",
            "fargo", "fire-dragon", "funguy", "garai", "glenn", "gogh-poor",
            "gogh-rich", "greco", "green-dragon", "grobyc", "guile", "harle",
            "hells-cook", "irenes", "janice", "karsh", "kid", "korcha", "leah",
            "leena", "lisa", "luccia", "lynx-serge", "lynx", "macha", "marcy",
            "marge", "mel", "miguel", "miki", "mojo", "neofio", "nikki",
            "norris", "orcha", "orlha", "pierre", "pip1", "pip2", "pip3",
            "pip4", "pip5", "pip6", "poshul", "radius", "razzly", "riddel",
            "rosetta", "sage-of-marbule", "serge", "skelly", "sky-dragon",
            "sneff", "sprigg", "starky", "steena", "tia", "turnip", "una",
            "van", "viper", "water-dragon", "wazuki", "young-dario",
            "young-glenn", "young-karsh", "young-kid", "zappa", "zippa", "zoah"
        ],
        tuner: ["boxStyle", "portraitSet", "userPortrait"]
    };
