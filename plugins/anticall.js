// protected by Nimco security 
const _0x5ac719 = function () {
  let _0x28fd05 = true;
  return function (_0x358e06, _0x485ddc) {
    const _0x444d1b = _0x28fd05 ? function () {
      if (_0x485ddc) {
        const _0x5a15ed = _0x485ddc.apply(_0x358e06, arguments);
        _0x485ddc = null;
        return _0x5a15ed;
      }
    } : function () {};
    _0x28fd05 = false;
    return _0x444d1b;
  };
}();
(function () {
  _0x5ac719(this, function () {
    const _0x3884be = new RegExp("function *\\( *\\)");
    const _0x4c3455 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x358296 = _0x22612f("init");
    if (!_0x3884be.test(_0x358296 + "chain") || !_0x4c3455.test(_0x358296 + "input")) {
      _0x358296("0");
    } else {
      _0x22612f();
    }
  })();
})();
import _0xa0aad5 from "../config.cjs";
const anticallcommand = async (_0x1e22d4, _0x1851eb) => {
  const _0x15acfb = await _0x1851eb.decodeJid(_0x1851eb.user.id);
  const _0x4d894d = [_0x15acfb, _0xa0aad5.OWNER_NUMBER + "@s.whatsapp.net"].includes(_0x1e22d4.sender);
  const _0x36200e = _0xa0aad5.PREFIX;
  const _0x117c52 = _0x1e22d4.body.startsWith(_0x36200e) ? _0x1e22d4.body.slice(_0x36200e.length).split(" ")[0x0].toLowerCase() : '';
  const _0x109fff = _0x1e22d4.body.slice(_0x36200e.length + _0x117c52.length).trim();
  if (_0x117c52 === "anticall") {
    if (!_0x4d894d) {
      return _0x1e22d4.reply("*📛 THIS IS AN OWNER COMMAND*");
    }
    let _0x60be46;
    if (_0x109fff === "on") {
      _0xa0aad5.REJECT_CALL = true;
      _0x60be46 = "Anti-Call has been enabled.";
    } else if (_0x109fff === "off") {
      _0xa0aad5.REJECT_CALL = false;
      _0x60be46 = "Anti-Call has been disabled.";
    } else {
      _0x60be46 = "Usage:\n- `anticall on`: Enable Anti-Call\n- `anticall off`: Disable Anti-Call";
    }
    try {
      const _0x142585 = {
        "text": _0x60be46
      };
      await _0x1851eb.sendMessage(_0x1e22d4.from, _0x142585, {
        "quoted": _0x1e22d4
      });
    } catch (_0x306943) {
      console.error("Error processing your request:", _0x306943);
      const _0x4a7b1c = {
        "text": "Error processing your request."
      };
      await _0x1851eb.sendMessage(_0x1e22d4.from, _0x4a7b1c, {
        "quoted": _0x1e22d4
      });
    }
  }
};
export default anticallcommand;
function _0x22612f(_0x1a3fa3) {
  function _0x5afcf1(_0x44e323) {
    if (typeof _0x44e323 === "string") {
      return function (_0x598486) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x44e323 / _0x44e323).length !== 0x1 || _0x44e323 % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x5afcf1(++_0x44e323);
  }
  try {
    if (_0x1a3fa3) {
      return _0x5afcf1;
    } else {
      _0x5afcf1(0x0);
    }
  } catch (_0x359cb6) {}
}
