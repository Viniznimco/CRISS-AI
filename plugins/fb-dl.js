// Securitized by christine zena
const _0x3e252a = function () {
  let _0x237cbc = true;
  return function (_0xbfcd64, _0x4e3d3a) {
    const _0x3cb0a7 = _0x237cbc ? function () {
      if (_0x4e3d3a) {
        const _0x830502 = _0x4e3d3a.apply(_0xbfcd64, arguments);
        _0x4e3d3a = null;
        return _0x830502;
      }
    } : function () {};
    _0x237cbc = false;
    return _0x3cb0a7;
  };
}();
(function () {
  _0x3e252a(this, function () {
    const _0x476492 = new RegExp("function *\\( *\\)");
    const _0x562812 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x4ca577 = _0x3bfb79("init");
    if (!_0x476492.test(_0x4ca577 + "chain") || !_0x562812.test(_0x4ca577 + "input")) {
      _0x4ca577("0");
    } else {
      _0x3bfb79();
    }
  })();
})();
import _0x50358e from "axios";
import _0x16c517 from "../config.cjs";
const facebook = async (_0x179393, _0x5412a4) => {
  const _0x330c09 = _0x16c517.PREFIX;
  const _0xc2a1cc = _0x179393.body.startsWith(_0x330c09) ? _0x179393.body.slice(_0x330c09.length).split(" ")[0x0].toLowerCase() : '';
  const _0x306dd2 = _0x179393.body.slice(_0x330c09.length + _0xc2a1cc.length).trim();
  if (!["fb", "facebook"].includes(_0xc2a1cc)) {
    return;
  }
  if (!_0x306dd2 || !_0x306dd2.startsWith("http")) {
    const _0x5ee18d = {
      "text": "❌ *Usage:* `.fb <Facebook Video URL>`"
    };
    return _0x5412a4.sendMessage(_0x179393.from, _0x5ee18d, {
      "quoted": _0x179393
    });
  }
  try {
    await _0x5412a4.sendMessage(_0x179393.from, {
      "react": {
        "text": "⏳",
        "key": _0x179393.key
      }
    });
    const {
      data: _0x15dae4
    } = await _0x50358e.get("https://api.davidcyriltech.my.id/facebook2?url=" + _0x306dd2);
    if (!_0x15dae4.status || !_0x15dae4.video || !_0x15dae4.video.downloads) {
      const _0x30ec75 = {
        text: "⚠️ *Failed to fetch Facebook video. Please try again.*"
      };
      return _0x5412a4.sendMessage(_0x179393.from, _0x30ec75, {
        "quoted": _0x179393
      });
    }
    const {
      title: _0x5b3e92,
      downloads: _0x31a029
    } = _0x15dae4.video;
    const _0x4f5266 = _0x31a029.find(_0x4ddb57 => _0x4ddb57.quality === "HD") || _0x31a029.find(_0x322703 => _0x322703.quality === "SD");
    if (!_0x4f5266) {
      const _0x15912e = {
        "text": "⚠️ *No downloadable video found.*"
      };
      return _0x5412a4.sendMessage(_0x179393.from, _0x15912e, {
        "quoted": _0x179393
      });
    }
    const _0x23eba0 = "📹 *Facebook Video*\n\n🎬 *Title:* " + _0x5b3e92 + "\n📥 *Quality:* " + _0x4f5266.quality + "\n\n🔗 *Powered By CRISS AI*";
    const _0x54d52a = {
      "url": _0x4f5266.downloadUrl
    };
    await _0x5412a4.sendMessage(_0x179393.from, {
      "video": _0x54d52a,
      "mimetype": "video/mp4",
      "caption": _0x23eba0,
      "contextInfo": {
        "mentionedJid": [_0x179393.sender],
        "forwardingScore": 0x3e7,
        "isForwarded": true,
        "forwardedNewsletterMessageInfo": {
          "newsletterJid": "120363404846707306@newsletter",
          "newsletterName": "DÉ JÚÑÍÓÚR TECH",
          "serverMessageId": 0x90
        }
      }
    }, {
      "quoted": _0x179393
    });
    await _0x5412a4.sendMessage(_0x179393.from, {
      "react": {
        "text": "✅",
        "key": _0x179393.key
      }
    });
  } catch (_0x472997) {
    console.error("Facebook Downloader Error:", _0x472997);
    const _0x54b630 = {
      "text": "❌ *An error occurred while processing your request. Please try again later.*"
    };
    _0x5412a4.sendMessage(_0x179393.from, _0x54b630, {
      "quoted": _0x179393
    });
  }
};
export default facebook;
function _0x3bfb79(_0x340efe) {
  function _0x1d2c7b(_0xb74e3a) {
    if (typeof _0xb74e3a === "string") {
      return function (_0x52cffb) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0xb74e3a / _0xb74e3a).length !== 0x1 || _0xb74e3a % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x1d2c7b(++_0xb74e3a);
  }
  try {
    if (_0x340efe) {
      return _0x1d2c7b;
    } else {
      _0x1d2c7b(0x0);
    }
  } catch (_0x1b3a2b) {}
}
