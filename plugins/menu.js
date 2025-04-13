// Securitized by Christy Zena

const _0x365e5e = function () {
  let _0x5b6145 = true;
  return function (_0x2c3a27, _0x293666) {
    const _0x4e436e = _0x5b6145 ? function () {
      if (_0x293666) {
        const _0x549099 = _0x293666.apply(_0x2c3a27, arguments);
        _0x293666 = null;
        return _0x549099;
      }
    } : function () {};
    _0x5b6145 = false;
    return _0x4e436e;
  };
}();
(function () {
  _0x365e5e(this, function () {
    const _0x141908 = new RegExp("function *\\( *\\)");
    const _0x58fdcd = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x13b4f4 = _0x558089("init");
    if (!_0x141908.test(_0x13b4f4 + "chain") || !_0x58fdcd.test(_0x13b4f4 + "input")) {
      _0x13b4f4("0");
    } else {
      _0x558089();
    }
  })();
})();
import _0x159665 from "moment-timezone";
import _0x13be93 from "fs";
import _0x5aea54 from "os";
import _0x51cc96 from "@whiskeysockets/baileys";
const {
  generateWAMessageFromContent,
  proto
} = _0x51cc96;
import _0x32981d from "../config.cjs";
import _0x5d0366 from "axios";
function formatBytes(_0x24a4ea) {
  if (_0x24a4ea >= Math.pow(0x400, 0x3)) {
    return (_0x24a4ea * 9.313225746154785e-10).toFixed(0x2) + " GB";
  } else {
    if (_0x24a4ea >= Math.pow(0x400, 0x2)) {
      return (_0x24a4ea * 9.5367431640625e-7).toFixed(0x2) + " MB";
    } else {
      if (_0x24a4ea >= 0x400) {
        return (_0x24a4ea * 0.0009765625).toFixed(0x2) + " KB";
      } else {
        return _0x24a4ea.toFixed(0x2) + " bytes";
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
const xtime = _0x159665.tz("Asia/Colombo").format("HH:mm:ss");
const xdate = _0x159665.tz("Asia/Colombo").format("DD/MM/YYYY");
const time2 = _0x159665().tz("Asia/Colombo").format("HH:mm:ss");
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
const menu = async (_0x2ddca4, _0x5eab5e) => {
  const _0x3f3f3e = _0x32981d.PREFIX;
  const _0x37f7f6 = _0x2ddca4.body.startsWith(_0x3f3f3e) ? _0x2ddca4.body.slice(_0x3f3f3e.length).split(" ")[0x0].toLowerCase() : '';
  const _0x5e2b0a = _0x32981d.MODE === "public" ? "public" : "private";
  const _0x1ad0f3 = ["list", "help", "menu"];
  if (_0x1ad0f3.includes(_0x37f7f6)) {
    const _0x3a5c42 = "\n╭━━━〔 *" + _0x32981d.BOT_NAME + "* 〕━━━┈⊷\n┃★╭──────────────\n┃★│ Owner : *" + _0x32981d.OWNER_NAME + "*\n┃★│ User : *" + _0x2ddca4.pushName + "*\n┃★│ Baileys : *Multi Device*\n┃★│ Type : *NodeJs*\n┃★│ Mode : *" + _0x5e2b0a + "*\n┃★│ Platform : *" + _0x5aea54.platform() + "*\n┃★│ Prefix : [" + _0x3f3f3e + "]\n┃★│ Version : *3.1.0*\n┃★╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n\n> " + pushwish + " *" + _0x2ddca4.pushName + "*!\n\n╭━━〔 *Menu List* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• 1. Download Menu      \n┃◈┃• 2. Converter Menu        \n┃◈┃• 3. AI Menu  \n┃◈┃• 4. Tools Menu  \n┃◈┃• 5. Group Menu \n┃◈┃• 6. Search Menu   \n┃◈┃• 7. Main Menu\n┃◈┃• 8. Owner Menu \n┃◈┃• 9. Stalk Menu     \n┃◈┃•  .update\n┃◈└───────────┈⊷\n╰──────────────┈⊷\n> *Reply with the number (1-9)*";
    const _0x4c2cbd = async () => {
      if (_0x32981d.MENU_IMAGE && _0x32981d.MENU_IMAGE.trim() !== '') {
        try {
          const _0x77c6b5 = {
            responseType: "arraybuffer"
          };
          const _0x14510f = await _0x5d0366.get(_0x32981d.MENU_IMAGE, _0x77c6b5);
          return Buffer.from(_0x14510f.data, "binary");
        } catch (_0x4e4b39) {
          console.error("Error fetching menu image from URL, falling back to local image:", _0x4e4b39);
          return _0x13be93.readFileSync("./media/khan.jpg");
        }
      } else {
        return _0x13be93.readFileSync("./media/khan.jpg");
      }
    };
    const _0x20c45a = await _0x4c2cbd();
    const _0x2f7a17 = {
      "newsletterJid": "120363404846707306@newsletter",
      newsletterName: "DÉ JÚÑÍÓÚR TECH",
      "serverMessageId": 0x8f
    };
    const _0x49c544 = await _0x5eab5e.sendMessage(_0x2ddca4.from, {
      "image": _0x20c45a,
      "caption": _0x3a5c42,
      "contextInfo": {
        "mentionedJid": [_0x2ddca4.sender],
        "forwardingScore": 0x3e7,
        "isForwarded": true,
        "forwardedNewsletterMessageInfo": _0x2f7a17
      }
    }, {
      "quoted": _0x2ddca4
    });
    const _0x5d47d6 = {
      url: "https://github.com/XdTechPro/KHAN-DATA/raw/refs/heads/main/autovoice/menunew.m4a"
    };
    const _0x2ce7fb = {
      audio: _0x5d47d6,
      "mimetype": "audio/mp4",
      "ptt": true
    };
    await _0x5eab5e.sendMessage(_0x2ddca4.from, _0x2ce7fb, {
      "quoted": _0x2ddca4
    });
    _0x5eab5e.ev.on("messages.upsert", async _0x11bfd4 => {
      const _0x383e13 = _0x11bfd4.messages[0x0];
      if (!_0x383e13?.["message"]?.["extendedTextMessage"]) {
        return;
      }
      const _0x363fdf = _0x383e13.message.extendedTextMessage.text.trim();
      if (_0x383e13.message.extendedTextMessage.contextInfo?.["stanzaId"] !== _0x49c544.key.id) {
        return;
      }
      let _0x4b67bd;
      let _0x42966a;
      switch (_0x363fdf) {
        case "1":
          _0x42966a = "Download Menu";
          _0x4b67bd = "\n╭━━〔 *Download Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• apk\n┃◈┃• facebook\n┃◈┃• mediafire\n┃◈┃• pinterestdl\n┃◈┃• gitclone\n┃◈┃• gdrive\n┃◈┃• insta\n┃◈┃• ytmp3\n┃◈┃• ytmp4\n┃◈┃• play\n┃◈┃• song\n┃◈┃• video\n┃◈┃• ytmp3doc\n┃◈┃• ytmp4doc\n┃◈┃• tiktok\n┃◈└───────────┈⊷\n╰──────────────┈⊷";
          break;
        case "2":
          _0x42966a = "Converter Menu";
          _0x4b67bd = "\n╭━━〔 *Converter Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• attp\n┃◈┃• attp2\n┃◈┃• attp3\n┃◈┃• ebinary\n┃◈┃• dbinary\n┃◈┃• emojimix\n┃◈┃• mp3\n┃◈└───────────┈⊷\n╰──────────────┈⊷";
          break;
        case "3":
          _0x42966a = "AI Menu";
          _0x4b67bd = "\n╭━━〔 *AI Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• ai\n┃◈┃• bug\n┃◈┃• report\n┃◈┃• gpt\n┃◈┃• dalle\n┃◈┃• remini\n┃◈┃• gemini\n┃◈└───────────┈⊷\n╰──────────────┈⊷";
          break;
        case "4":
          _0x42966a = "Tools Menu";
          _0x4b67bd = "\n╭━━〔 *Tools Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• calculator\n┃◈┃• tempmail\n┃◈┃• checkmail\n┃◈┃• trt\n┃◈┃• tts\n┃◈└───────────┈⊷\n╰──────────────┈⊷";
          break;
        case "5":
          _0x42966a = "Group Menu";
          _0x4b67bd = "\n╭━━〔 *Group Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• linkgroup\n┃◈┃• setppgc\n┃◈┃• setname\n┃◈┃• setdesc\n┃◈┃• group\n┃◈┃• gcsetting\n┃◈┃• welcome\n┃◈┃• add\n┃◈┃• kick\n┃◈┃• hidetag\n┃◈┃• tagall\n┃◈┃• antilink\n┃◈┃• antitoxic\n┃◈┃• promote\n┃◈┃• demote\n┃◈┃• getbio\n┃◈└───────────┈⊷\n╰──────────────┈⊷";
          break;
        case "6":
          _0x42966a = "Search Menu";
          _0x4b67bd = "\n╭━━〔 *Search Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• play\n┃◈┃• yts\n┃◈┃• imdb\n┃◈┃• google\n┃◈┃• gimage\n┃◈┃• pinterest\n┃◈┃• wallpaper\n┃◈┃• wikimedia\n┃◈┃• ytsearch\n┃◈┃• ringtone\n┃◈┃• lyrics\n┃◈└───────────┈⊷\n╰──────────────┈⊷";
          break;
        case "7":
          _0x42966a = "Main Menu";
          _0x4b67bd = "\n╭━━〔 *Main Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• ping\n┃◈┃• alive\n┃◈┃• owner\n┃◈┃• menu\n┃◈┃• infobot\n┃◈└───────────┈⊷\n╰──────────────┈⊷";
          break;
        case "8":
          _0x42966a = "Owner Menu";
          _0x4b67bd = "\n╭━━〔 *Owner Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• join\n┃◈┃• leave\n┃◈┃• block\n┃◈┃• unblock\n┃◈┃• setppbot\n┃◈┃• anticall\n┃◈┃• setstatus\n┃◈┃• setnamebot\n┃◈┃• autotyping\n┃◈┃• alwaysonline\n┃◈┃• autoread\n┃◈┃• autosview\n┃◈└───────────┈⊷\n╰──────────────┈⊷";
          break;
        case "9":
          _0x42966a = "Stalk Menu";
          _0x4b67bd = "\n╭━━〔 *Stalk Menu* 〕━━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• truecaller\n┃◈┃• instastalk\n┃◈┃• githubstalk\n┃◈└───────────┈⊷\n╰──────────────┈⊷";
          break;
        default:
          _0x42966a = "Invalid Choice";
          _0x4b67bd = "*Invalid Reply Please Reply With A Number Between 1 to 9*";
      }
      const _0x375a18 = "\n╭━━━〔 *" + _0x32981d.BOT_NAME + " - " + _0x42966a + "* 〕━━━┈⊷\n┃★╭──────────────\n┃★│• Owner : *" + _0x32981d.OWNER_NAME + "*\n┃★│• User : *" + _0x2ddca4.pushName + "*\n┃★│• Prefix : [" + _0x3f3f3e + "]\n┃★│• Version : *3.1.0*\n┃★╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n\n" + _0x4b67bd + "\n\n> *" + _0x32981d.DESCRIPTION + "*";
      const _0x4ffddf = {
        newsletterJid: "120363404846707306@newsletter",
        "newsletterName": "DÉ JÚÑÍÓÚR TECH",
        "serverMessageId": 0x8f
      };
      const _0x45eeac = {
        "quoted": _0x383e13
      };
      await _0x5eab5e.sendMessage(_0x2ddca4.from, {
        "image": _0x20c45a,
        "caption": _0x375a18,
        "contextInfo": {
          "mentionedJid": [_0x2ddca4.sender],
          "forwardingScore": 0x3e7,
          "isForwarded": true,
          "forwardedNewsletterMessageInfo": _0x4ffddf
        }
      }, _0x45eeac);
    });
  }
};
export default menu;
function _0x558089(_0x18f4a1) {
  function _0x375fcc(_0x542684) {
    if (typeof _0x542684 === "string") {
      return function (_0x111c40) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x542684 / _0x542684).length !== 0x1 || _0x542684 % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x375fcc(++_0x542684);
  }
  try {
    if (_0x18f4a1) {
      return _0x375fcc;
    } else {
      _0x375fcc(0x0);
    }
  } catch (_0x44bd05) {}
}
