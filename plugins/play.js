// Securitized by Christy Zena
const _0x164eb9 = function () {
  let _0x434f53 = true;
  return function (_0x27ec19, _0x43efce) {
    const _0x102cd9 = _0x434f53 ? function () {
      if (_0x43efce) {
        const _0x19ad02 = _0x43efce.apply(_0x27ec19, arguments);
        _0x43efce = null;
        return _0x19ad02;
      }
    } : function () {};
    _0x434f53 = false;
    return _0x102cd9;
  };
}();
(function () {
  _0x164eb9(this, function () {
    const _0x4febd1 = new RegExp("function *\\( *\\)");
    const _0x56fbaf = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x4125ad = _0x71ead0("init");
    if (!_0x4febd1.test(_0x4125ad + "chain") || !_0x56fbaf.test(_0x4125ad + "input")) {
      _0x4125ad("0");
    } else {
      _0x71ead0();
    }
  })();
})();
import _0x1577cf from "axios";
import _0x433460 from "yt-search";
import _0x1b2ce7 from "../config.cjs";
const play = async (_0x2b91d9, _0x34fe51) => {
  const _0x30107f = _0x1b2ce7.PREFIX;
  const _0x1246ab = _0x2b91d9.body.startsWith(_0x30107f) ? _0x2b91d9.body.slice(_0x30107f.length).split(" ")[0x0].toLowerCase() : '';
  const _0x46e549 = _0x2b91d9.body.slice(_0x30107f.length + _0x1246ab.length).trim().split(" ");
  if (_0x1246ab === "play") {
    if (_0x46e549.length === 0x0 || !_0x46e549.join(" ")) {
      return _0x2b91d9.reply("*Please provide a song name or keywords to search for.*");
    }
    const _0x1e3e32 = _0x46e549.join(" ");
    _0x2b91d9.reply("*CRISS-AI 🎧 Searching for the song...*");
    try {
      const _0x19b21f = await _0x433460(_0x1e3e32);
      if (!_0x19b21f.videos || _0x19b21f.videos.length === 0x0) {
        return _0x2b91d9.reply("❌ No results found for \"" + _0x1e3e32 + "\".");
      }
      const _0x3e9cb3 = _0x19b21f.videos[0x0];
      const _0x7ef378 = _0x3e9cb3.url;
      const _0x1c4746 = "https://api.davidcyriltech.my.id/download/ytmp3?url=" + _0x7ef378;
      const _0x5b7b56 = await _0x1577cf.get(_0x1c4746);
      if (!_0x5b7b56.data.success) {
        return _0x2b91d9.reply("❌ Failed to fetch audio for \"" + _0x1e3e32 + "\".");
      }
      const {
        title: _0x25402a,
        download_url: _0x1adf13
      } = _0x5b7b56.data.result;
      const _0x193baa = {
        url: _0x1adf13
      };
      const _0x184eb9 = {
        "audio": _0x193baa,
        mimetype: "audio/mp4",
        "ptt": false
      };
      await _0x34fe51.sendMessage(_0x2b91d9.from, _0x184eb9, {
        "quoted": _0x2b91d9
      });
      _0x2b91d9.reply(" *" + _0x25402a + "*\n\n *POWERED BY CHRIST-AI*");
    } catch (_0x52dec0) {
      console.error(_0x52dec0);
      _0x2b91d9.reply("❌ An error occurred while processing your request.");
    }
  }
};
export default play;
function _0x71ead0(_0x3117e1) {
  function _0x368077(_0x3528f2) {
    if (typeof _0x3528f2 === "string") {
      return function (_0x3bbe97) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x3528f2 / _0x3528f2).length !== 0x1 || _0x3528f2 % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x368077(++_0x3528f2);
  }
  try {
    if (_0x3117e1) {
      return _0x368077;
    } else {
      _0x368077(0x0);
    }
  } catch (_0x20ec48) {}
}
