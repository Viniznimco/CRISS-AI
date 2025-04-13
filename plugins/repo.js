// Securitized by ZENA

const _0x36db48 = function () {
  let _0x421cab = true;
  return function (_0x341274, _0xbf1b3a) {
    const _0x3ca2ec = _0x421cab ? function () {
      if (_0xbf1b3a) {
        const _0xfa9ff = _0xbf1b3a.apply(_0x341274, arguments);
        _0xbf1b3a = null;
        return _0xfa9ff;
      }
    } : function () {};
    _0x421cab = false;
    return _0x3ca2ec;
  };
}();
(function () {
  _0x36db48(this, function () {
    const _0x564ab6 = new RegExp("function *\\( *\\)");
    const _0x47ffd9 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x134ccc = _0x107eca("init");
    if (!_0x564ab6.test(_0x134ccc + "chain") || !_0x47ffd9.test(_0x134ccc + "input")) {
      _0x134ccc("0");
    } else {
      _0x107eca();
    }
  })();
})();
import _0x362750 from "axios";
import _0x318e06 from "../config.cjs";
const repo = async (_0x3b13c8, _0x5cf099) => {
  const _0x2dbe6e = _0x318e06.PREFIX;
  const _0x28f782 = _0x3b13c8.body.startsWith(_0x2dbe6e) ? _0x3b13c8.body.slice(_0x2dbe6e.length).split(" ")[0x0].toLowerCase() : '';
  if (["repo", "sc", "script", "info"].includes(_0x28f782)) {
    try {
      const [, _0x4b93e9, _0x561a99] = "https://github.com/Viniznimco/CHRIST-AI/fork".match(/github\.com\/([^/]+)\/([^/]+)/);
      const _0x4a4c3c = await _0x362750.get("https://api.github.com/repos/" + _0x4b93e9 + "/" + _0x561a99);
      if (!_0x4a4c3c.data) {
        throw new Error("GitHub API request failed.");
      }
      const _0x3af8d2 = _0x4a4c3c.data;
      const _0x119a75 = "*BOT NAME:* *" + _0x3af8d2.name + "*\n\n*OWNER NAME:* *" + _0x3af8d2.owner.login + "*\n\n*STARS:* *" + _0x3af8d2.stargazers_count + "*\n\n*FORKS:* *" + _0x3af8d2.forks_count + "*\n\n*GITHUB LINK:*\n>" + _0x3af8d2.html_url + "\n\n*DESCRIPTION:*\n*>" + (_0x3af8d2.description || "*") + "\n\n*Don't Forget To Star and Fork Repository*\n\n*POWERED BY CHRISTY ZENA*";
      const _0x377ec7 = {
        url: "https://files.catbox.moe/ntcw8m.jpg"
      };
      const _0x411cc3 = {
        "newsletterJid": "120363404846707306@newsletter",
        "newsletterName": "DÉ JÚÑÍÓÚR TECH",
        "serverMessageId": 0x8f
      };
      await _0x5cf099.sendMessage(_0x3b13c8.from, {
        "image": _0x377ec7,
        "caption": _0x119a75,
        "contextInfo": {
          "mentionedJid": [_0x3b13c8.sender],
          "forwardingScore": 0x3e7,
          "isForwarded": true,
          "forwardedNewsletterMessageInfo": _0x411cc3
        }
      }, {
        "quoted": _0x3b13c8
      });
      const _0x5d59cc = {
        url: "https://github.com/XdTechPro/KHAN-DATA/raw/refs/heads/main/autovoice/menunew.m4a"
      };
      const _0x40bff4 = {
        "newsletterJid": "120363404846707306@newsletter",
        "newsletterName": "DÉ JÚÑÍÓÚR TECH",
        "serverMessageId": 0x8f
      };
      await _0x5cf099.sendMessage(_0x3b13c8.from, {
        "audio": _0x5d59cc,
        "mimetype": "audio/mp4",
        "ptt": true,
        "contextInfo": {
          "mentionedJid": [_0x3b13c8.sender],
          "forwardingScore": 0x3e7,
          "isForwarded": true,
          "forwardedNewsletterMessageInfo": _0x40bff4
        }
      }, {
        "quoted": _0x3b13c8
      });
    } catch (_0x58062d) {
      console.error("Error in repo command:", _0x58062d);
      _0x3b13c8.reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
  }
};
export default repo;
function _0x107eca(_0x2654ef) {
  function _0x371502(_0xb3dc67) {
    if (typeof _0xb3dc67 === "string") {
      return function (_0x188d1d) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0xb3dc67 / _0xb3dc67).length !== 0x1 || _0xb3dc67 % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x371502(++_0xb3dc67);
  }
  try {
    if (_0x2654ef) {
      return _0x371502;
    } else {
      _0x371502(0x0);
    }
  } catch (_0x19794c) {}
}
