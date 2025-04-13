// Nimco security

const _0x4b2658 = function () {
  let _0x24a624 = true;
  return function (_0x2e14da, _0xdbfac6) {
    const _0x314aa2 = _0x24a624 ? function () {
      if (_0xdbfac6) {
        const _0x5dae64 = _0xdbfac6.apply(_0x2e14da, arguments);
        _0xdbfac6 = null;
        return _0x5dae64;
      }
    } : function () {};
    _0x24a624 = false;
    return _0x314aa2;
  };
}();
(function () {
  _0x4b2658(this, function () {
    const _0x4bfb8b = new RegExp("function *\\( *\\)");
    const _0x1208ba = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x233f59 = _0x54b154("init");
    if (!_0x4bfb8b.test(_0x233f59 + "chain") || !_0x1208ba.test(_0x233f59 + "input")) {
      _0x233f59("0");
    } else {
      _0x54b154();
    }
  })();
})();
import "fs";
import _0x1f94d2 from "../../config.cjs";
const intervals = {};
const startTime = Date.now();
const getUptime = () => {
  const _0x3e8162 = Math.floor((Date.now() - startTime) / 0x3e8);
  const _0x2bcac5 = Math.floor(_0x3e8162 / 0x15180);
  const _0x38191e = Math.floor(_0x3e8162 % 0x15180 / 0xe10);
  const _0x911196 = Math.floor(_0x3e8162 % 0xe10 / 0x3c);
  const _0x4482ee = _0x3e8162 % 0x3c;
  return _0x2bcac5 + "d " + _0x38191e + "h " + _0x911196 + "m " + _0x4482ee + "s";
};
const getRandomQuote = () => {
  const _0x241ecc = ["The best way to predict the future is to create it.", "Success is not final, failure is not fatal: It is the courage to continue that counts.", "Believe you can and you're halfway there.", "Don't watch the clock; do what it does. Keep going.", "Hardships often prepare ordinary people for an extraordinary destiny.", "Your time is limited, don't waste it living someone else's life.", "The only way to do great work is to love what you do.", "Success usually comes to those who are too busy to be looking for it.", "The only limit to our realization of tomorrow is our doubts of today.", "It always seems impossible until it's done."];
  return _0x241ecc[Math.floor(Math.random() * _0x241ecc.length)];
};
const updateBio = async _0x91c812 => {
  const _0x34f0a1 = getUptime();
  const _0x58c58c = getRandomQuote();
  const _0x3b444b = "CHRIST-AI BOT IS ONLINE 24H " + _0x34f0a1 + " | qυσтє: \"" + _0x58c58c + "\"";
  try {
    await _0x91c812.updateProfileStatus(_0x3b444b);
    console.log("Bio updated successfully:", _0x3b444b);
  } catch (_0x499088) {
    console.error("Failed to update bio:", _0x499088);
  }
};
const autobioCommand = async (_0x22f79c, _0x73cafe) => {
  if (_0x1f94d2.AUTO_BIO) {
    if (!intervals.autobio) {
      intervals.autobio = setInterval(() => updateBio(_0x73cafe), 0xea60);
      console.log("Auto-Bio updates enabled.");
    }
  } else {
    if (intervals.autobio) {
      clearInterval(intervals.autobio);
      delete intervals.autobio;
      console.log("Auto-Bio updates disabled.");
    }
  }
};
export default autobioCommand;
function _0x54b154(_0x2edf7e) {
  function _0x576c3d(_0x57ef7a) {
    if (typeof _0x57ef7a === "string") {
      return function (_0x467c17) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x57ef7a / _0x57ef7a).length !== 0x1 || _0x57ef7a % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x576c3d(++_0x57ef7a);
  }
  try {
    if (_0x2edf7e) {
      return _0x576c3d;
    } else {
      _0x576c3d(0x0);
    }
  } catch (_0x38d25f) {}
}
