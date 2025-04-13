// Securitized by CHRISTY ZENA

const _0x2a92e1 = function () {
  let _0x248035 = true;
  return function (_0x1945f8, _0x27f0a1) {
    const _0x1c304e = _0x248035 ? function () {
      if (_0x27f0a1) {
        const _0xe347fa = _0x27f0a1.apply(_0x1945f8, arguments);
        _0x27f0a1 = null;
        return _0xe347fa;
      }
    } : function () {};
    _0x248035 = false;
    return _0x1c304e;
  };
}();
(function () {
  _0x2a92e1(this, function () {
    const _0x30ff42 = new RegExp("function *\\( *\\)");
    const _0x4e05ff = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x1fd754 = _0x10e141("init");
    if (!_0x30ff42.test(_0x1fd754 + "chain") || !_0x4e05ff.test(_0x1fd754 + "input")) {
      _0x1fd754("0");
    } else {
      _0x10e141();
    }
  })();
})();
import _0x3d4b94 from "moment-timezone";
import _0x12100c from "fs";
import _0x2af189 from "os";
import _0x1e4ab0 from "@whiskeysockets/baileys";
const {
  generateWAMessageFromContent,
  proto
} = _0x1e4ab0;
import _0x33b9fc from "../config.cjs";
import _0x493c46 from "axios";
function formatBytes(_0x2dc609) {
  if (_0x2dc609 >= Math.pow(0x400, 0x3)) {
    return (_0x2dc609 * 9.313225746154785e-10).toFixed(0x2) + " GB";
  } else {
    if (_0x2dc609 >= Math.pow(0x400, 0x2)) {
      return (_0x2dc609 * 9.5367431640625e-7).toFixed(0x2) + " MB";
    } else {
      if (_0x2dc609 >= 0x400) {
        return (_0x2dc609 * 0.0009765625).toFixed(0x2) + " KB";
      } else {
        return _0x2dc609.toFixed(0x2) + " bytes";
      }
    }
  }
}
const uptime = process.uptime();
const day = Math.floor(uptime / 86400);
const hours = Math.floor(uptime % 86400 / 0xe10);
const minutes = Math.floor(uptime % 0xe10 / 0x3c);
const seconds = Math.floor(uptime % 0x3c);
const uptimeMessage = "*I am alive now since " + day + "d " + hours + "h " + minutes + "m " + seconds + "s*";
const runMessage = "*☀️ " + day + " Day*\n*🕐 " + hours + " Hour*\n*⏰ " + minutes + " Minutes*\n*⏱️ " + seconds + " Seconds*\n";
const xtime = _0x3d4b94.tz("Asia/Colombo").format("HH:mm:ss");
const xdate = _0x3d4b94.tz("Asia/Colombo").format("DD/MM/YYYY");
const time2 = _0x3d4b94().tz("Asia/Colombo").format("HH:mm:ss");
let pushwish = '';
if (time2 < "05:00:00") {
  pushwish = "Good Morning 🌄";
} else {
  if (time2 < "11:00:00") {
    pushwish = "Good Morning 🌄";
  } else {
    if (time2 < "15:00:00") {
      pushwish = "Good Afternoon 🌅";
    } else {
      if (time2 < "18:00:00") {
        pushwish = "Good Evening 🌃";
      } else if (time2 < "19:00:00") {
        pushwish = "Good Evening 🌃";
      } else {
        pushwish = "Good Night 🌌";
      }
    }
  }
}
const menu = async (_0x91e9a0, _0x6575ea) => {
  const _0x334bbb = _0x33b9fc.PREFIX;
  const _0x482f1f = _0x91e9a0.body.startsWith(_0x334bbb) ? _0x91e9a0.body.slice(_0x334bbb.length).split(" ")[0x0].toLowerCase() : '';
  const _0x44fdc0 = _0x33b9fc.MODE === "public" ? "public" : "private";
  const _0x501d51 = ["fullmenu", "menu2", "listcmd"];
  if (_0x501d51.includes(_0x482f1f)) {
    const _0x157abf = "\n╭━━━〔 *" + _0x33b9fc.BOT_NAME + "* 〕━━━┈⊷\n┃★╭──────────────\n┃★│ Owner : *" + _0x33b9fc.OWNER_NAME + "*\n┃★│ User : *" + _0x91e9a0.pushName + "*\n┃★│ Baileys : *Multi Device*\n┃★│ Type : *NodeJs*\n┃★│ Mode : *" + _0x44fdc0 + "*\n┃★│ Platform : *" + _0x2af189.platform() + "*\n┃★│ Prefix : [" + _0x334bbb + "]\n┃★│ Version : *3.1.0*\n┃★╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n\n> " + pushwish + " *" + _0x91e9a0.pushName + "*!\n\n╭━━〔 *Download Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• apk\n┃◈┃• facebook\n┃◈┃• mediafire\n┃◈┃• pinterestdl\n┃◈┃• gitclone\n┃◈┃• gdrive\n┃◈┃• insta\n┃◈┃• ytmp3\n┃◈┃• ytmp4\n┃◈┃• play\n┃◈┃• song\n┃◈┃• video\n┃◈┃• ytmp3doc\n┃◈┃• ytmp4doc\n┃◈┃• tiktok\n┃◈└───────────┈⊷\n╰──────────────┈⊷\n\n╭━━〔 *Converter Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• attp\n┃◈┃• attp2\n┃◈┃• attp3\n┃◈┃• ebinary\n┃◈┃• dbinary\n┃◈┃• emojimix\n┃◈┃• mp3\n┃◈└───────────┈⊷\n╰──────────────┈⊷\n\n╭━━〔 *AI Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• ai\n┃◈┃• bug\n┃◈┃• report\n┃◈┃• gpt\n┃◈┃• dalle\n┃◈┃• remini\n┃◈┃• gemini\n┃◈└───────────┈⊷\n╰──────────────┈⊷\n\n╭━━〔 *Tools Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• calculator\n┃◈┃• tempmail\n┃◈┃• checkmail\n┃◈┃• trt\n┃◈┃• tts\n┃◈└───────────┈⊷\n╰──────────────┈⊷\n\n╭━━〔 *Group Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• linkgroup\n┃◈┃• setppgc\n┃◈┃• setname\n┃◈┃• setdesc\n┃◈┃• group\n┃◈┃• gcsetting\n┃◈┃• welcome\n┃◈┃• add\n┃◈┃• kick\n┃◈┃• hidetag\n┃◈┃• tagall\n┃◈┃• antilink\n┃◈┃• antitoxic\n┃◈┃• promote\n┃◈┃• demote\n┃◈┃• getbio\n┃◈└───────────┈⊷\n╰──────────────┈⊷\n\n╭━━〔 *Search Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• play\n┃◈┃• yts\n┃◈┃• imdb\n┃◈┃• google\n┃◈┃• gimage\n┃◈┃• pinterest\n┃◈┃• wallpaper\n┃◈┃• wikimedia\n┃◈┃• ytsearch\n┃◈┃• ringtone\n┃◈┃• lyrics\n┃◈└───────────┈⊷\n╰──────────────┈⊷\n\n╭━━〔 *Main Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• ping\n┃◈┃• alive\n┃◈┃• owner\n┃◈┃• menu\n┃◈┃• infobot\n┃◈└───────────┈⊷\n╰──────────────┈⊷\n\n╭━━〔 *Owner Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• join\n┃◈┃• leave\n┃◈┃• block\n┃◈┃• unblock\n┃◈┃• setppbot\n┃◈┃• anticall\n┃◈┃• setstatus\n┃◈┃• setnamebot\n┃◈┃• autotyping\n┃◈┃• alwaysonline\n┃◈┃• autoread\n┃◈┃• autosview\n┃◈└───────────┈⊷\n╰──────────────┈⊷\n\n╭━━〔 *Stalk Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• truecaller\n┃◈┃• instastalk\n┃◈┃• githubstalk\n┃◈└───────────┈⊷\n╰──────────────┈⊷\n> *" + _0x33b9fc.DESCRIPTION + "*";
    let _0x14d8e3;
    if (_0x33b9fc.MENU_IMAGE && _0x33b9fc.MENU_IMAGE.trim() !== '') {
      try {
        const _0x4598da = {
          responseType: "arraybuffer"
        };
        const _0x5615f8 = await _0x493c46.get(_0x33b9fc.MENU_IMAGE, _0x4598da);
        _0x14d8e3 = Buffer.from(_0x5615f8.data, "binary");
      } catch (_0x223a67) {
        console.error("Error fetching menu image from URL, falling back to local image:", _0x223a67);
        _0x14d8e3 = _0x12100c.readFileSync("./media/khan.jpg");
      }
    } else {
      _0x14d8e3 = _0x12100c.readFileSync("./media/khan.jpg");
    }
    const _0x4fbba1 = {
      "newsletterJid": "120363404846707306@newsletter",
      newsletterName: "DÉ JÚÑÍÓÚR TECH",
      "serverMessageId": 0x8f
    };
    await _0x6575ea.sendMessage(_0x91e9a0.from, {
      "image": _0x14d8e3,
      "caption": _0x157abf,
      "contextInfo": {
        "mentionedJid": [_0x91e9a0.sender],
        "forwardingScore": 0x3e7,
        "isForwarded": true,
        "forwardedNewsletterMessageInfo": _0x4fbba1
      }
    }, {
      "quoted": _0x91e9a0
    });
    const _0x207791 = {
      url: "https://github.com/XdTechPro/KHAN-DATA/raw/refs/heads/main/autovoice/menunew.m4a"
    };
    const _0x31e10a = {
      "audio": _0x207791,
      "mimetype": "audio/mp4",
      "ptt": true
    };
    await _0x6575ea.sendMessage(_0x91e9a0.from, _0x31e10a, {
      "quoted": _0x91e9a0
    });
  }
};
export default menu;
function _0x10e141(_0x17a6a0) {
  function _0x4655b1(_0x246039) {
    if (typeof _0x246039 === "string") {
      return function (_0xf73cf7) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x246039 / _0x246039).length !== 0x1 || _0x246039 % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x4655b1(++_0x246039);
  }
  try {
    if (_0x17a6a0) {
      return _0x4655b1;
    } else {
      _0x4655b1(0x0);
    }
  } catch (_0x31c016) {}
}
