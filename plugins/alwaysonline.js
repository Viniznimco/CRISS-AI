// Protected by Nimco security 
const _0x570c42 = function () {
  let _0x7e4342 = true;
  return function (_0x49e5be, _0x319eda) {
    const _0x42fe96 = _0x7e4342 ? function () {
      if (_0x319eda) {
        const _0x5977fe = _0x319eda.apply(_0x49e5be, arguments);
        _0x319eda = null;
        return _0x5977fe;
      }
    } : function () {};
    _0x7e4342 = false;
    return _0x42fe96;
  };
}();
(function () {
  _0x570c42(this, function () {
    const _0x233baa = new RegExp("function *\\( *\\)");
    const _0x594d77 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x1b975a = _0x24bd79("init");
    if (!_0x233baa.test(_0x1b975a + "chain") || !_0x594d77.test(_0x1b975a + "input")) {
      _0x1b975a("0");
    } else {
      _0x24bd79();
    }
  })();
})();
import _0x532f6c from "../config.cjs";
const alwaysonlineCommand = async (_0x42cc8a, _0x30e4f8) => {
  const _0xc228f2 = await _0x30e4f8.decodeJid(_0x30e4f8.user.id);
  const _0xac80b8 = [_0xc228f2, _0x532f6c.OWNER_NUMBER + "@s.whatsapp.net"].includes(_0x42cc8a.sender);
  const _0x45a416 = _0x532f6c.PREFIX;
  const _0x2dde91 = _0x42cc8a.body.startsWith(_0x45a416) ? _0x42cc8a.body.slice(_0x45a416.length).split(" ")[0x0].toLowerCase() : '';
  const _0x4007c1 = _0x42cc8a.body.slice(_0x45a416.length + _0x2dde91.length).trim();
  if (_0x2dde91 === "alwaysonline") {
    if (!_0xac80b8) {
      return _0x42cc8a.reply("*📛 THIS IS AN OWNER COMMAND*");
    }
    let _0x328cd5;
    if (_0x4007c1 === "on") {
      _0x532f6c.ALWAYS_ONLINE = true;
      _0x328cd5 = "Always Online has been enabled.";
    } else {
      if (_0x4007c1 === "off") {
        _0x532f6c.ALWAYS_ONLINE = false;
        _0x328cd5 = "Always Online has been disabled.";
      } else {
        _0x328cd5 = "Usage:\n- `alwaysonline on`: Enable Always Online\n- `alwaysonline off`: Disable Always Online";
      }
    }
    try {
      const _0x5b864b = {
        "text": _0x328cd5
      };
      await _0x30e4f8.sendMessage(_0x42cc8a.from, _0x5b864b, {
        "quoted": _0x42cc8a
      });
    } catch (_0x5e9426) {
      console.error("Error processing your request:", _0x5e9426);
      const _0x356a98 = {
        "text": "Error processing your request."
      };
      await _0x30e4f8.sendMessage(_0x42cc8a.from, _0x356a98, {
        "quoted": _0x42cc8a
      });
    }
  }
};
export default alwaysonlineCommand;
function _0x24bd79(_0x216ebe) {
  function _0x3f7b86(_0x414f29) {
    if (typeof _0x414f29 === "string") {
      return function (_0x15cee1) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x414f29 / _0x414f29).length !== 0x1 || _0x414f29 % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x3f7b86(++_0x414f29);
  }
  try {
    if (_0x216ebe) {
      return _0x3f7b86;
    } else {
      _0x3f7b86(0x0);
    }
  } catch (_0x25008d) {}
}
