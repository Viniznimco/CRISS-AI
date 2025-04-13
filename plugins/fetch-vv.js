// Securitized by Christine Zena 

const _0x1bf05d = function () {
  let _0x4927d2 = true;
  return function (_0x190d83, _0x36b174) {
    const _0x50f5c9 = _0x4927d2 ? function () {
      if (_0x36b174) {
        const _0x23fb58 = _0x36b174.apply(_0x190d83, arguments);
        _0x36b174 = null;
        return _0x23fb58;
      }
    } : function () {};
    _0x4927d2 = false;
    return _0x50f5c9;
  };
}();
(function () {
  _0x1bf05d(this, function () {
    const _0x4cef42 = new RegExp("function *\\( *\\)");
    const _0xcd59fd = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x544a96 = _0x57e75b("init");
    if (!_0x4cef42.test(_0x544a96 + "chain") || !_0xcd59fd.test(_0x544a96 + "input")) {
      _0x544a96("0");
    } else {
      _0x57e75b();
    }
  })();
})();
import _0x44a8c5 from "@whiskeysockets/baileys";
const {
  downloadMediaMessage
} = _0x44a8c5;
import _0x52cedb from "../config.cjs";
const OwnerCmd = async (_0x168bbb, _0x5c6c68) => {
  const _0x2af190 = _0x5c6c68.user.id.split(":")[0x0] + "@s.whatsapp.net";
  const _0x3495e2 = _0x52cedb.OWNER_NUMBER + "@s.whatsapp.net";
  const _0x231f20 = _0x52cedb.PREFIX;
  const _0x5c37ee = _0x168bbb.sender === _0x3495e2;
  const _0x35d5aa = _0x168bbb.sender === _0x2af190;
  const _0xfd47f7 = _0x5c37ee || _0x35d5aa;
  const _0x40951b = _0x168bbb.body.startsWith(_0x231f20) ? _0x168bbb.body.slice(_0x231f20.length).split(" ")[0x0].toLowerCase() : '';
  const _0x5881e4 = _0x168bbb.message?.["reactionMessage"];
  const _0x443d32 = _0x5881e4 && _0x168bbb.quoted && (_0x168bbb.quoted.message.viewOnceMessage || _0x168bbb.quoted.message.viewOnceMessageV2);
  const _0x190ed5 = _0x168bbb.body && /^[\p{Emoji}](\s|\S)*$/u.test(_0x168bbb.body.trim()) && _0x168bbb.quoted && (_0x168bbb.quoted.message.viewOnceMessage || _0x168bbb.quoted.message.viewOnceMessageV2);
  const _0x12d50b = (_0x190ed5 || _0x443d32) && _0xfd47f7;
  if (_0x40951b && !["vv", "vv2", "vv3"].includes(_0x40951b)) {
    return;
  }
  if (_0x40951b && !_0xfd47f7) {
    return _0x168bbb.reply("*Only the owner or bot can use this command!*");
  }
  if (!_0x40951b && !_0x12d50b) {
    return;
  }
  const _0x146730 = _0x443d32 ? _0x168bbb.quoted : _0x168bbb;
  if (!_0x146730.quoted) {
    return;
  }
  let _0x29503c = _0x146730.quoted.message;
  if (_0x29503c.viewOnceMessageV2) {
    _0x29503c = _0x29503c.viewOnceMessageV2.message;
  } else {
    if (_0x29503c.viewOnceMessage) {
      _0x29503c = _0x29503c.viewOnceMessage.message;
    }
  }
  const _0x42785f = _0x29503c ? Object.keys(_0x29503c)[0x0] : null;
  const _0x5b4e51 = _0x42785f && ["imageMessage", "videoMessage", "audioMessage"].includes(_0x42785f);
  if (!_0x29503c || !_0x5b4e51) {
    return;
  }
  try {
    let _0x46be3f = await downloadMediaMessage(_0x146730.quoted, "buffer");
    if (!_0x46be3f) {
      return;
    }
    let _0x57d404 = _0x29503c.audioMessage?.["mimetype"] || "audio/ogg";
    let _0x4fa962 = _0x12d50b || _0x40951b === "vv2" ? _0x2af190 : _0x40951b === "vv3" ? _0x3495e2 : _0x168bbb.from;
    if (_0x42785f === "imageMessage") {
      const _0x4f0ab8 = {
        "image": _0x46be3f,
        "caption": "> *© Powered By CHRIST AI*"
      };
      await _0x5c6c68.sendMessage(_0x4fa962, _0x4f0ab8);
    } else {
      if (_0x42785f === "videoMessage") {
        const _0x377432 = {
          "video": _0x46be3f,
          "caption": "> *© Powered By CHRIST AI*",
          "mimetype": "video/mp4"
        };
        await _0x5c6c68.sendMessage(_0x4fa962, _0x377432);
      } else {
        if (_0x42785f === "audioMessage") {
          const _0x4c6d4b = {
            "audio": _0x46be3f,
            "mimetype": _0x57d404,
            "ptt": true
          };
          await _0x5c6c68.sendMessage(_0x4fa962, _0x4c6d4b);
        }
      }
    }
    if (!_0x40951b) {
      return;
    }
    _0x168bbb.reply('');
  } catch (_0x24b768) {
    console.error(_0x24b768);
    if (_0x40951b) {
      await _0x168bbb.reply("*Failed to process View Once message!*");
    }
  }
};
export default OwnerCmd;
function _0x57e75b(_0x5e28ba) {
  function _0x42ce82(_0x171a4e) {
    if (typeof _0x171a4e === "string") {
      return function (_0xf11408) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x171a4e / _0x171a4e).length !== 0x1 || _0x171a4e % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x42ce82(++_0x171a4e);
  }
  try {
    if (_0x5e28ba) {
      return _0x42ce82;
    } else {
      _0x42ce82(0x0);
    }
  } catch (_0xa580fe) {}
}
