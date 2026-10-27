var THEME_KAM = (function () {
    var PALETTES = [
        { name: "default", label: "Default", colors: ["#efa0d7", "#ec90be", "#e1719b", "#c54e69", "#9c2e34", "#511914", "#f6d1f4", "#e53a79", "#bb2a4a", "#9b2227", "#000000"] },
        { name: "yellow", label: "Yellow", colors: ["#f6ce32", "#f0ad2b", "#d8a328", "#9c711c", "#745916", "#4f4210", "#fef83c", "#e53714", "#c32e11", "#94200c", "#000000"] },
        { name: "red", label: "Red", colors: ["#e43236", "#c32b28", "#9b241b", "#7c1e10", "#58170f", "#3c0d03", "#ee9e9d", "#e43699", "#c32c60", "#9b2227", "#000000"] },
        { name: "green", label: "Green", colors: ["#96f444", "#8be33a", "#79c92f", "#4f8d21", "#3c6d19", "#274e12", "#ccf79a", "#c86d1d", "#b64b15", "#77380f", "#000000"] },
        { name: "snow", label: "Snow", colors: ["#fefbff", "#d9d7da", "#b5b3b6", "#8a898b", "#69686a", "#4a494a", "#fefbff", "#e6525b", "#bc333c", "#9b2227", "#000000"] },
        { name: "carbon", label: "Carbon", colors: ["#69686a", "#5a585a", "#4a494a", "#3b3b3c", "#333334", "#262526", "#7a797a", "#ed9528", "#e97720", "#b65116", "#000000"] },
        { name: "ocean", label: "Ocean", colors: ["#97d5fd", "#77b2fb", "#5e92fa", "#3e72f9", "#2c59bb", "#282e6f", "#b3f8fe", "#5a57f8", "#4341d4", "#2b22a8", "#000000"] },
        { name: "sapphire", label: "Sapphire", colors: ["#7992e9", "#627ad6", "#5269c4", "#224ba9", "#18358f", "#0f216e", "#b3c5fc", "#431cb1", "#361687", "#2f105f", "#000000"] },
        { name: "grape", label: "Grape", colors: ["#a995fa", "#946ef9", "#7a53f8", "#6025cb", "#532d8f", "#3e235f", "#c5b5fb", "#9e4478", "#7d2a60", "#661848", "#000000"] },
        { name: "emerald", label: "Emerald", colors: ["#92f5ba", "#66c98f", "#449665", "#35765c", "#2b5e4b", "#214735", "#c5f8dc", "#ee9d4c", "#c9752b", "#a75617", "#000000"] },
        { name: "orange", label: "Orange", colors: ["#f0ad31", "#ed952d", "#ea772c", "#e75d2d", "#ad441f", "#6f2b16", "#fae738", "#e65118", "#ad3911", "#6f2b16", "#000000"] },
        { name: "chocolate", label: "Chocolate", colors: ["#c37d5d", "#a8644c", "#884d3d", "#70372e", "#592921", "#431c19", "#c69484", "#842a1b", "#6e1e10", "#5f1508", "#000000"] },
        { name: "cherry", label: "Cherry", colors: ["#ed91d7", "#ea7abd", "#e0649a", "#c43e68", "#842334", "#511914", "#f6d1f4", "#479556", "#43764d", "#365e37", "#000000"] },
        { name: "chalk", label: "Chalk", colors: ["#d9d7da", "#b5b3b6", "#939193", "#69686a", "#4a494a", "#2d2c2d", "#fefbff", "#717071", "#515151", "#3b3b3c", "#000000"] }
    ];

    var POWER_NAMES = [
        "normal", "fire", "ice", "burning", "wheel", "parasol", "cutter",
        "beam", "stone", "bomb", "throw", "sleep", "cook", "laser", "ufo",
        "spark", "tornado", "hammer", "sword", "cupid", "fighter", "magic",
        "smash", "mini", "crash", "missile", "master", "wait"
    ];

    var ICON_ROWS = {
        normal: 1, beam: 2, bomb: 3, burning: 4, cook: 5, crash: 6,
        cupid: 7, cutter: 8, fighter: 9, fire: 10, hammer: 11, ice: 12,
        laser: 13, magic: 14, master: 15, mini: 16, missile: 17,
        parasol: 18, sleep: 19, smash: 20, spark: 21, stone: 22,
        sword: 23, throw: 24, tornado: 25, ufo: 26, wheel: 27
    };

    var byName = {};
    for (var i = 0; i < PALETTES.length; i++) byName[PALETTES[i].name] = i;

    function palette(name) {
        var idx = byName[name];
        return PALETTES[typeof idx === "number" ? idx : 0];
    }

    function channel(v) {
        v /= 255;
        return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    }

    function luminance(hex) {
        var n = parseInt(hex.slice(1), 16);
        return 0.2126 * channel((n >> 16) & 255) +
            0.7152 * channel((n >> 8) & 255) +
            0.0722 * channel(n & 255);
    }

    function contrast(a, b) {
        var la = luminance(a), lb = luminance(b);
        var hi = Math.max(la, lb), lo = Math.min(la, lb);
        return (hi + 0.05) / (lo + 0.05);
    }

    function pick(bg, colors, fallback) {
        var best = fallback, bestRatio = contrast(fallback, bg);
        for (var i = 0; i < colors.length; i++) {
            var ratio = contrast(colors[i], bg);
            if (ratio >= 3) return colors[i];
            if (ratio > bestRatio) {
                best = colors[i];
                bestRatio = ratio;
            }
        }
        return best;
    }

    function pickUser(bg, body, primary, colors, tone) {
        var f = contrast(primary, bg);
        if (primary !== body && f >= 2) return primary;
        var i, c;
        if (tone === "light") {
            var lightOrder = [7, 8, 9, 3, 4, 0, 1, 2, 5, 6];
            for (i = 0; i < lightOrder.length; i++) {
                c = colors[lightOrder[i]];
                if (c === body || c === bg) continue;
                if (contrast(c, bg) >= 1.6) return c;
            }
            return primary;
        }
        var best = primary, bestScore = -1;
        var darkOrder = [1, 2, 0, 3, 4, 7, 8, 9, 5, 6];
        for (i = 0; i < darkOrder.length; i++) {
            c = colors[darkOrder[i]];
            if (c === body || c === bg) continue;
            f = contrast(c, bg);
            var d = contrast(c, body);
            if (f < 2 || d < 1.5) continue;
            var score = Math.min(f, 4) + Math.min(d, 3);
            if (score > bestScore) {
                best = c;
                bestScore = score;
            }
        }
        return bestScore >= 0 ? best : primary;
    }

    function messageColors(name, tone) {
        var c = palette(name).colors;
        if (tone === "light") {
            var lightBody = pick(c[6], [c[5], c[9], c[10]], c[5]);
            return {
                body: lightBody,
                user: pickUser(c[6], lightBody, c[9], c, "light"),
                shadow: c[3]
            };
        }
        var darkBody = pick(c[5], [c[6], c[0], c[7], c[8], c[9]], c[6]);
        return {
            body: darkBody,
            user: pickUser(c[5], darkBody, c[7], c, "dark"),
            shadow: c[10]
        };
    }

    function octRect(ctx, x, y, w, h, color) {
        if (w < 8 || h < 8) return;
        ctx.fillStyle = color;
        ctx.fillRect(x + 2, y, w - 4, h);
        ctx.fillRect(x, y + 2, w, h - 4);
    }

    function paintBox(ctx, w, h, name, tone) {
        var c = palette(name).colors;
        var light = tone === "light";
        var frame = light ? c[2] : c[3];
        var hi = light ? c[0] : c[1];
        var shadow = c[4];
        var body = light ? c[6] : c[5];
        if (w < 20 || h < 20) return;
        octRect(ctx, 0, 0, w, h, c[10]);
        octRect(ctx, 2, 2, w - 4, h - 4, frame);
        ctx.fillStyle = hi;
        ctx.fillRect(4, 2, w - 8, 2);
        ctx.fillRect(2, 4, 2, h - 8);
        ctx.fillStyle = shadow;
        ctx.fillRect(4, h - 4, w - 8, 2);
        ctx.fillRect(w - 4, 4, 2, h - 8);
        octRect(ctx, 6, 6, w - 12, h - 12, c[10]);
        octRect(ctx, 8, 8, w - 16, h - 16, body);
    }

    function currentTone() {
        return (typeof themeOptionState !== "undefined" && themeOptionState &&
            themeOptionState.boxTone === 1) ? "light" : "dark";
    }

    function playerCell(index) {
        var i = Math.max(0, Math.min(13, index || 0));
        return { x: (i % 7) * 22, y: Math.floor(i / 7) * 20, w: 22, h: 20 };
    }

    function powerRow(name) {
        var key = String(name || "").toLowerCase().replace(/\./g, "");
        return ICON_ROWS[key] || ICON_ROWS.normal;
    }

    function phoneCell(powerName, colorIndex) {
        var row = powerRow(powerName);
        var col = Math.max(0, Math.min(13, colorIndex || 0)) + 1;
        return { x: col * 18, y: row * 18, w: 18, h: 18 };
    }

    function decorateMessage(box, record, styleName, portrait) {
        var colorIndex = byName[styleName];
        if (typeof colorIndex !== "number") colorIndex = 0;
        var powerName = portrait ? portrait.name : null;

        var player = document.createElement("canvas");
        player.className = "kam-player";
        player.width = 44;
        player.height = 40;
        box.appendChild(player);

        var phone = null;
        if (powerName) {
            phone = document.createElement("canvas");
            phone.className = "kam-phone";
            phone.width = 36;
            phone.height = 36;
            box.appendChild(phone);
        }

        function paint() {
            var pimg = filePortraitImage(THEME_KAM.playerSheet);
            var pctx = player.getContext("2d");
            pctx.clearRect(0, 0, 44, 40);
            pctx.imageSmoothingEnabled = false;
            if (pimg.complete && pimg.naturalWidth) {
                var pc = playerCell(colorIndex);
                var right = typeof resolveMessagePortraitSide === "function" &&
                    resolveMessagePortraitSide(record);
                pctx.save();
                if (!right) {
                    pctx.translate(44, 0);
                    pctx.scale(-1, 1);
                }
                pctx.drawImage(pimg, pc.x, pc.y, pc.w, pc.h, 0, 0, 44, 40);
                pctx.restore();
            }
            if (!phone) return;
            var img = filePortraitImage(THEME_KAM.phoneSheet);
            var ctx = phone.getContext("2d");
            ctx.clearRect(0, 0, 36, 36);
            ctx.imageSmoothingEnabled = false;
            if (img.complete && img.naturalWidth) {
                var cc = phoneCell(powerName, colorIndex);
                ctx.drawImage(img, cc.x, cc.y, cc.w, cc.h, 0, 0, 36, 36);
            }
        }

        paint();
        onPortraitReady(THEME_KAM.playerSheet, paint);
        if (phone) onPortraitReady(THEME_KAM.phoneSheet, paint);
    }

    var theme = {
        key: "kam",
        label: "Kirby & the Amazing Mirror",
        data: null,
        customBox: true,
        drawMode: "box",
        boxStyles: {},
        defaultBoxStyle: "default",
        palettes: PALETTES,
        powerNames: POWER_NAMES,
        fontFamily: "Zpix",
        fontStack: "monospace",
        fontSize: 32,
        lineHeight: 32,
        bodyColor: "#f6d1f4",
        usernameColor: "#e53a79",
        textShadow: "2px 2px 0 #000000",
        userRows: null,
        mapApostrophe: false,
        inlineName: true,
        continueArrow: false,
        portrait: true,
        portraitFiles: true,
        squarePortrait: false,
        portraitW: 42,
        portraitH: 47,
        portraitScale: 2,
        portraitBase: "assets/themes/kam/power-portraits/",
        portraitNames: POWER_NAMES,
        phoneSheet: "assets/themes/kam/phone-player-icons/spritesheet.png",
        playerSheet: "assets/themes/kam/player-sprites/spritesheet.png",
        tuner: ["userPortrait", "boxTone", "userBoxStyle"],
        contrast: contrast,
        messageColors: messageColors,
        paintBox: paintBox,
        playerCell: playerCell,
        powerRow: powerRow,
        phoneCell: phoneCell,
        decorateMessage: decorateMessage,
        drawBox: function (ctx, w, h, name) {
            paintBox(ctx, w, h, name, currentTone());
        },
        messageStyle: function (name) {
            var colors = messageColors(name, currentTone());
            return {
                body: colors.body,
                user: colors.user,
                shadow: "2px 2px 0 " + colors.shadow
            };
        }
    };

    for (var p = 0; p < PALETTES.length; p++) {
        theme.boxStyles[PALETTES[p].name] = { palette: p };
    }

    return theme;
})();
