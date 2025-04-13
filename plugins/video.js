// SECURITIZED CHRISTY ZENA
const _0x4dd5a4 = function () {
  let _0x11b207 = true;
  return function (_0x124ee3, _0x2cddde) {
    const _0x299c76 = _0x11b207 ? function () {
      if (_0x2cddde) {
        const _0x3bcb4f = _0x2cddde.apply(_0x124ee3, arguments);
        _0x2cddde = null;
        return _0x3bcb4f;
      }
    } : function () {};
    _0x11b207 = false;
    return _0x299c76;
  };
}();
(function () {
  _0x4dd5a4(this, function () {
    const _0x1762e7 = new RegExp("function *\\( *\\)");
    const _0x2ab497 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x1c25c2 = _0x3e21d8("init");
    if (!_0x1762e7.test(_0x1c25c2 + "chain") || !_0x2ab497.test(_0x1c25c2 + "input")) {
      _0x1c25c2("0");
    } else {
      _0x3e21d8();
    }
  })();
})();
import _0x27f31d from "axios";
import _0x2ac80d from "yt-search";
import _0x55c8ed from "../config.cjs";
const song = async (_0xc938ea, _0x3c2631) => {
  const _0x56e4d3 = _0x55c8ed.PREFIX;
  const _0x1d432c = _0xc938ea.body.startsWith(_0x56e4d3) ? _0xc938ea.body.slice(_0x56e4d3.length).split(" ")[0x0].toLowerCase() : '';
  const _0x20c5f2 = _0xc938ea.body.slice(_0x56e4d3.length + _0x1d432c.length).trim().split(" ");
  if (_0x1d432c === "video") {
    if (_0x20c5f2.length === 0x0 || !_0x20c5f2.join(" ")) {
      return _0xc938ea.reply("*Please provide a song name or keywords to search for.*");
    }
    const _0x309374 = _0x20c5f2.join(" ");
    _0xc938ea.reply("*CHRIST-AI 🎬 Searching for the video...*");
    try {
      const _0x20b478 = await _0x2ac80d(_0x309374);
      if (!_0x20b478.videos || _0x20b478.videos.length === 0x0) {
        return _0xc938ea.reply("❌ No results found for \"" + _0x309374 + "\".");
      }
      const _0x44066c = _0x20b478.videos[0x0];
      const _0x41127b = _0x44066c.url;
      const _0x986e01 = "https://apis.davidcyriltech.my.id/download/ytmp4?url=" + _0x41127b;
      const _0x52b75c = await _0x27f31d.get(_0x986e01);
      if (!_0x52b75c.data.success) {
        return _0xc938ea.reply("❌ Failed to fetch video for \"" + _0x309374 + "\".");
      }
      const {
        title: _0x3bcfab,
        download_url: _0x2a8c0b
      } = _0x52b75c.data.result;
      const _0xf1f06c = {
        "url": _0x2a8c0b
      };
      const _0x26e0cd = {
        video: _0xf1f06c,
        mimetype: "video/mp4",
        "caption": "*" + _0x3bcfab + "*\n\n*POWERED BY CHRIST AI*"
      };
      await _0x3c2631.sendMessage(_0xc938ea.from, _0x26e0cd, {
        "quoted": _0xc938ea
      });
    } catch (_0x3cc80c) {
      console.error(_0x3cc80c);
      _0xc938ea.reply("❌ An error occurred while processing your request.");
    }
  }
};
export default song;
function _0x3e21d8(_0x5a2cac) {
  function _0x4413a9(_0x335d9f) {
    if (typeof _0x335d9f === "string") {
      return function (_0x22d646) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x335d9f / _0x335d9f).length !== 0x1 || _0x335d9f % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x4413a9(++_0x335d9f);
  }
  try {
    if (_0x5a2cac) {
      return _0x4413a9;
    } else {
      _0x4413a9(0x0);
    }
  } catch (_0x361d2e) {}
}
