// Coded by ZENA

const _0x173c6c = function () {
  let _0x427476 = true;
  return function (_0x1ace56, _0x310d80) {
    const _0x2828fb = _0x427476 ? function () {
      if (_0x310d80) {
        const _0x4916d2 = _0x310d80.apply(_0x1ace56, arguments);
        _0x310d80 = null;
        return _0x4916d2;
      }
    } : function () {};
    _0x427476 = false;
    return _0x2828fb;
  };
}();
(function () {
  _0x173c6c(this, function () {
    const _0x3b2110 = new RegExp("function *\\( *\\)");
    const _0x4a21b2 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x244dbb = _0x1c45c6("init");
    if (!_0x3b2110.test(_0x244dbb + "chain") || !_0x4a21b2.test(_0x244dbb + "input")) {
      _0x244dbb("0");
    } else {
      _0x1c45c6();
    }
  })();
})();
import _0x408acb from "fs";
import _0x166004 from "../config.cjs";
const alive = async (_0xfc00c, _0x561290) => {
  const _0x477ea4 = process.uptime();
  const _0x1232e2 = Math.floor(_0x477ea4 / 86400);
  const _0x332646 = Math.floor(_0x477ea4 % 86400 / 0xe10);
  const _0x10c941 = Math.floor(_0x477ea4 % 0xe10 / 0x3c);
  const _0x1f1fa6 = Math.floor(_0x477ea4 % 0x3c);
  const _0x561904 = _0x1232e2 + "d " + _0x332646 + "h " + _0x10c941 + "m " + _0x1f1fa6 + "s";
  const _0x3ebbf = _0x166004.PREFIX;
  const _0x5ce2c6 = _0xfc00c.body.startsWith(_0x3ebbf) ? _0xfc00c.body.slice(_0x3ebbf.length).split(" ")[0x0].toLowerCase() : '';
  if (!["alive", "uptime", "runtime"].includes(_0x5ce2c6)) {
    return;
  }
  const _0x406ac6 = "*🤖 CHRIST-AI IS ONLINE*\n*⏳ Uptime: " + _0x561904 + "*";
  await _0x561290.sendMessage(_0xfc00c.from, {
    "image": _0x408acb.readFileSync("./media/khan.jpg"),
    "caption": _0x406ac6,
    "contextInfo": {
      "mentionedJid": [_0xfc00c.sender],
      "forwardingScore": 0x3e7,
      "isForwarded": true,
      "forwardedNewsletterMessageInfo": {
        "newsletterJid": "120363404846707306@newsletter",
        "newsletterName": "DÉ JÚÑÍÓÚR TECH",
        "serverMessageId": 0x8f
      }
    }
  }, {
    "quoted": _0xfc00c
  });
};
export default alive;
function _0x1c45c6(_0x3b209f) {
  function _0x516f7a(_0x1253c9) {
    if (typeof _0x1253c9 === "string") {
      return function (_0x4e73fc) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x1253c9 / _0x1253c9).length !== 0x1 || _0x1253c9 % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x516f7a(++_0x1253c9);
  }
  try {
    if (_0x3b209f) {
      return _0x516f7a;
    } else {
      _0x516f7a(0x0);
    }
  } catch (_0x141d38) {}
}
