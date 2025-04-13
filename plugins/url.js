// SECURITIZED BY CHRISTY ZENA

const _0x1fef93 = function () {
  let _0x280a1e = true;
  return function (_0x43e5dc, _0x2d6e07) {
    const _0x5022ad = _0x280a1e ? function () {
      if (_0x2d6e07) {
        const _0x2da846 = _0x2d6e07.apply(_0x43e5dc, arguments);
        _0x2d6e07 = null;
        return _0x2da846;
      }
    } : function () {};
    _0x280a1e = false;
    return _0x5022ad;
  };
}();
(function () {
  _0x1fef93(this, function () {
    const _0x25533f = new RegExp("function *\\( *\\)");
    const _0x52d23d = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x4022a7 = _0x4fd728("init");
    if (!_0x25533f.test(_0x4022a7 + "chain") || !_0x52d23d.test(_0x4022a7 + "input")) {
      _0x4022a7("0");
    } else {
      _0x4fd728();
    }
  })();
})();
import _0x294547 from "node-fetch";
import _0x4f8976 from "form-data";
import { fileTypeFromBuffer } from "file-type";
import "fs/promises";
async function uploadMedia(_0xf50461) {
  try {
    const {
      ext: _0xb493cc
    } = await fileTypeFromBuffer(_0xf50461);
    const _0x4b58f4 = new _0x4f8976();
    _0x4b58f4.append("fileToUpload", _0xf50461, "file." + _0xb493cc);
    _0x4b58f4.append("reqtype", "fileupload");
    const _0x1cee78 = await _0x294547("https://catbox.moe/user/api.php", {
      "method": "POST",
      "body": _0x4b58f4
    });
    if (!_0x1cee78.ok) {
      throw new Error("Upload failed with status " + _0x1cee78.status + ": " + _0x1cee78.statusText);
    }
    const _0x1b5932 = await _0x1cee78.text();
    return _0x1b5932;
  } catch (_0xb72b10) {
    console.error("Error during media upload:", _0xb72b10);
    throw new Error("Failed to upload media");
  }
}
const tourl = async (_0x2c126e, _0x70cbd6) => {
  const _0x150a73 = _0x2c126e.body.match(/^[\\/!#.]/);
  const _0x254632 = _0x150a73 ? _0x150a73[0x0] : "/";
  const _0x52b2a9 = _0x2c126e.body.startsWith(_0x254632) ? _0x2c126e.body.slice(_0x254632.length).split(" ")[0x0].toLowerCase() : '';
  const _0x302dd4 = ["url", "geturl", "upload", "u"];
  if (_0x302dd4.includes(_0x52b2a9)) {
    if (!_0x2c126e.quoted || !["imageMessage", "videoMessage", "audioMessage"].includes(_0x2c126e.quoted.mtype)) {
      return _0x2c126e.reply("Send/Reply/Quote an image, video, or audio to upload \n*" + (_0x254632 + _0x52b2a9) + "*");
    }
    try {
      const _0x4a5505 = ["*「▰▰▰▱▱▱▱▱▱▱」*", "*「▰▰▰▰▱▱▱▱▱▱」*", "*「▰▰▰▰▰▱▱▱▱▱」*", "*「▰▰▰▰▰▰▱▱▱▱」*", "*「▰▰▰▰▰▰▰▱▱▱」*", "*「▰▰▰▰▰▰▰▰▱▱」*", "*「▰▰▰▰▰▰▰▰▰▱」*", "*「▰▰▰▰▰▰▰▰▰▰」*"];
      const _0xdcb409 = _0x4a5505.length;
      let _0x26bcbb = 0x0;
      const _0x5b1015 = {
        "text": _0x4a5505[_0x26bcbb]
      };
      const {
        key: _0x352c5b
      } = await _0x70cbd6.sendMessage(_0x2c126e.from, _0x5b1015, {
        "quoted": _0x2c126e
      });
      const _0x40a374 = setInterval(() => {
        _0x26bcbb = (_0x26bcbb + 0x1) % _0xdcb409;
        const _0x2680a9 = {
          "text": _0x4a5505[_0x26bcbb]
        };
        _0x70cbd6.sendMessage(_0x2c126e.from, _0x2680a9, {
          "quoted": _0x2c126e,
          "messageId": _0x352c5b
        });
      }, 0x1f4);
      const _0x3cfe07 = await _0x2c126e.quoted.download();
      if (!_0x3cfe07) {
        throw new Error("Failed to download media.");
      }
      const _0x3953bc = _0x3cfe07.length / 1048576;
      if (_0x3953bc > 0xc8) {
        clearInterval(_0x40a374);
        return _0x2c126e.reply("File size exceeds the limit of 200MB.");
      }
      const _0x22ef1f = await uploadMedia(_0x3cfe07);
      clearInterval(_0x40a374);
      const _0xe4b5e4 = {
        "text": "✅ Loading complete."
      };
      await _0x70cbd6.sendMessage(_0x2c126e.from, _0xe4b5e4, {
        "quoted": _0x2c126e
      });
      const _0x55330d = getMediaType(_0x2c126e.quoted.mtype);
      if (_0x55330d === "audio") {
        const _0x299bab = {
          "text": "*Hey " + _0x2c126e.pushName + " Here Is Your Audio URL*\n*Url:* " + _0x22ef1f
        };
        await _0x70cbd6.sendMessage(_0x2c126e.from, _0x299bab, {
          "quoted": _0x2c126e
        });
      } else {
        const _0x4e09bf = {
          "url": _0x22ef1f
        };
        const _0x55b46f = {
          _0x55330d: _0x4e09bf,
          "caption": "*ᴜʀʟ:* *" + _0x22ef1f + "*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHRIST ᴀɪ*"
        };
        await _0x70cbd6.sendMessage(_0x2c126e.from, _0x55b46f, {
          "quoted": _0x2c126e
        });
      }
    } catch (_0x429afe) {
      console.error("Error processing media:", _0x429afe);
      _0x2c126e.reply("Error processing media.");
    }
  }
};
const getMediaType = _0x43882b => {
  switch (_0x43882b) {
    case "imageMessage":
      return "image";
    case "videoMessage":
      return "video";
    case "audioMessage":
      return "audio";
    default:
      return null;
  }
};
export default tourl;
function _0x4fd728(_0x3fccaa) {
  function _0x379398(_0x366922) {
    if (typeof _0x366922 === "string") {
      return function (_0x4e04ef) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x366922 / _0x366922).length !== 0x1 || _0x366922 % 0x14 === 0x0) {
        (function () {
          true;
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x379398(++_0x366922);
  }
  try {
    if (_0x3fccaa) {
      return _0x379398;
    } else {
      _0x379398(0x0);
    }
  } catch (_0x3fea32) {}
}
