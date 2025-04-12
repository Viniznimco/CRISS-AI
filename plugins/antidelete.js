// Nimco security 

const _0x299de0 = function () {
  let _0x3a2b03 = true;
  return function (_0x4fc5cf, _0x4c8387) {
    const _0x31108f = _0x3a2b03 ? function () {
      if (_0x4c8387) {
        const _0x205385 = _0x4c8387.apply(_0x4fc5cf, arguments);
        _0x4c8387 = null;
        return _0x205385;
      }
    } : function () {};
    _0x3a2b03 = false;
    return _0x31108f;
  };
}();
(function () {
  _0x299de0(this, function () {
    const _0x12eecd = new RegExp("function *\\( *\\)");
    const _0x331697 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x2847a2 = _0x4f2fc1("init");
    if (!_0x12eecd.test(_0x2847a2 + "chain") || !_0x331697.test(_0x2847a2 + "input")) {
      _0x2847a2("0");
    } else {
      _0x4f2fc1();
    }
  })();
})();
import _0x1e37f7 from "@whiskeysockets/baileys";
const {
  proto,
  downloadContentFromMessage
} = _0x1e37f7;
import _0x50886d from "../../config.cjs";
class AntiDeleteSystem {
  constructor() {
    this.enabled = _0x50886d.ANTI_DELETE;
    this.messageCache = new Map();
    this.cacheExpiry = 300000;
    this.cleanupInterval = setInterval(() => this.cleanExpiredMessages(), this.cacheExpiry);
  }
  ["cleanExpiredMessages"]() {
    const _0x202672 = Date.now();
    for (const [_0x19dd49, _0x282f6e] of this.messageCache.entries()) {
      if (_0x202672 - _0x282f6e.timestamp > this.cacheExpiry) {
        this.messageCache["delete"](_0x19dd49);
      }
    }
  }
  ["formatTime"](_0x341201) {
    const _0x4a18c0 = {
      "timeZone": "Asia/Karachi",
      "year": "numeric",
      month: "short",
      "day": "numeric",
      hour: "2-digit",
      "minute": "2-digit",
      second: "2-digit",
      "hour12": true
    };
    return new Date(_0x341201).toLocaleString("en-PK", _0x4a18c0) + " (PKT)";
  }
  ["destroy"]() {
    clearInterval(this.cleanupInterval);
  }
}
const antiDelete = new AntiDeleteSystem();
const AntiDelete = async (_0x2a4a85, _0x37cc0f) => {
  const _0x10ca1d = _0x50886d.PREFIX;
  const _0x14945a = _0x50886d.DELETED_MESSAGES_CHAT_ID + "@s.whatsapp.net";
  const _0x43aaef = _0x2a4a85.body?.["slice"](_0x10ca1d.length)["trim"]()["split"](" ") || [];
  const _0x21808f = _0x43aaef[0x0]?.["toLowerCase"]();
  const _0x2da5b2 = _0x43aaef[0x1]?.["toLowerCase"]();
  const _0x146a7e = async _0xbeee7 => {
    const _0x3244a2 = {
      "name": "Unknown Chat",
      "isGroup": false
    };
    if (!_0xbeee7) {
      return _0x3244a2;
    }
    if (_0xbeee7.includes("@g.us")) {
      try {
        const _0x458bf5 = await _0x37cc0f.groupMetadata(_0xbeee7);
        const _0x5ee834 = {
          "name": _0x458bf5?.["subject"] || "Unknown Group",
          "isGroup": true
        };
        return _0x5ee834;
      } catch {
        const _0x56a1d4 = {
          "name": "Unknown Group",
          isGroup: true
        };
        return _0x56a1d4;
      }
    }
    const _0x2e0bb8 = {
      "name": "Private Chat",
      "isGroup": false
    };
    return _0x2e0bb8;
  };
  if (_0x21808f === "antidelete") {
    if (_0x2a4a85.sender !== _0x14945a) {
      await _0x2a4a85.reply("🚫 *You are not authorized to use this command!*");
      return;
    }
    try {
      const _0x305ed1 = _0x50886d.DELETE_PATH === "same" ? "Same Chat" : "Same Chat";
      const _0x53807b = {
        on: "🛡️ *ANTI-DELETE ENABLED* 🛡️\n\n🔹 Protection: *ACTIVE*\n🔹 Scope: *All Chats*\n🔹 Cache: *5 minutes*\n🔹 Mode: *" + _0x305ed1 + "*\n\n✅ Deleted messages will be recovered!",
        "off": "⚠️ *ANTI-DELETE DISABLED* ⚠️\n\n🔸 Protection: *OFF*\n🔸 Cache cleared\n🔸 Deleted messages will not be recovered.",
        "help": "⚙️ *ANTI-DELETE SETTINGS* ⚙️\n\n🔹 *" + _0x10ca1d + "antidelete on* - Enable\n🔸 *" + _0x10ca1d + "antidelete off* - Disable\n\nCurrent Status: " + (antiDelete.enabled ? "✅ ACTIVE" : "❌ INACTIVE") + "\nCurrent Mode: " + _0x305ed1
      };
      if (_0x2da5b2 === "on") {
        antiDelete.enabled = true;
        await _0x2a4a85.reply(_0x53807b.on);
      } else {
        if (_0x2da5b2 === "off") {
          antiDelete.enabled = false;
          antiDelete.messageCache.clear();
          await _0x2a4a85.reply("⚠️ *ANTI-DELETE DISABLED* ⚠️\n\n🔸 Protection: *OFF*\n🔸 Cache cleared\n🔸 Deleted messages will not be recovered.");
        } else {
          await _0x2a4a85.reply(_0x53807b.help);
        }
      }
      await _0x2a4a85.React("✅");
      return;
    } catch (_0x3d414c) {
      console.error("AntiDelete Command Error:", _0x3d414c);
      await _0x2a4a85.React("❌");
    }
  }
  _0x37cc0f.ev.on("messages.upsert", async ({
    messages: _0x1a6670
  }) => {
    if (!antiDelete.enabled || !_0x1a6670?.["length"]) {
      return;
    }
    for (const _0x4bb205 of _0x1a6670) {
      if (_0x4bb205.key.fromMe || !_0x4bb205.message || _0x4bb205.key.remoteJid === "status@broadcast") {
        continue;
      }
      try {
        const _0x31f114 = _0x4bb205.message.conversation || _0x4bb205.message.extendedTextMessage?.["text"] || _0x4bb205.message.imageMessage?.["caption"] || _0x4bb205.message.videoMessage?.["caption"] || _0x4bb205.message.documentMessage?.["caption"];
        let _0x149846;
        let _0x1b845a;
        let _0x233e54;
        const _0x273fd4 = ["image", "video", "audio", "sticker", "document"];
        for (const _0x4ce76f of _0x273fd4) {
          if (_0x4bb205.message[_0x4ce76f + "Message"]) {
            const _0x28e08a = _0x4bb205.message[_0x4ce76f + "Message"];
            try {
              const _0x2d6160 = await downloadContentFromMessage(_0x28e08a, _0x4ce76f);
              let _0x2faed7 = Buffer.from([]);
              for await (const _0x2b6b32 of _0x2d6160) {
                _0x2faed7 = Buffer.concat([_0x2faed7, _0x2b6b32]);
              }
              _0x149846 = _0x2faed7;
              _0x1b845a = _0x4ce76f;
              _0x233e54 = _0x28e08a.mimetype;
              break;
            } catch (_0x1fc19b) {
              console.error("Error downloading " + _0x4ce76f + " media:", _0x1fc19b);
            }
          }
        }
        if (_0x4bb205.message.audioMessage?.["ptt"]) {
          try {
            const _0x4ed6b0 = await downloadContentFromMessage(_0x4bb205.message.audioMessage, "audio");
            let _0x4f6a2b = Buffer.from([]);
            for await (const _0x177219 of _0x4ed6b0) {
              _0x4f6a2b = Buffer.concat([_0x4f6a2b, _0x177219]);
            }
            _0x149846 = _0x4f6a2b;
            _0x1b845a = "voice";
            _0x233e54 = _0x4bb205.message.audioMessage.mimetype;
          } catch (_0x2b8fc9) {
            console.error("Error downloading voice message:", _0x2b8fc9);
          }
        }
        if (_0x31f114 || _0x149846) {
          antiDelete.messageCache.set(_0x4bb205.key.id, {
            "content": _0x31f114,
            "media": _0x149846,
            "type": _0x1b845a,
            "mimetype": _0x233e54,
            "sender": _0x4bb205.key.participant || _0x4bb205.key.remoteJid,
            "senderFormatted": "@" + (_0x4bb205.key.participant || _0x4bb205.key.remoteJid ? (_0x4bb205.key.participant || _0x4bb205.key.remoteJid).replace(/@s\.whatsapp\.net|@g\.us/g, '') : "Unknown"),
            "timestamp": Date.now(),
            "chatJid": _0x4bb205.key.remoteJid
          });
        }
      } catch (_0x2c33be) {
        console.error("Error caching message:", _0x2c33be);
      }
    }
  });
  _0x37cc0f.ev.on("messages.update", async _0x2f20a5 => {
    if (!antiDelete.enabled || !_0x2f20a5?.["length"]) {
      return;
    }
    for (const _0x9bc63c of _0x2f20a5) {
      try {
        const {
          key: _0x547e95,
          update: _0x2a2962
        } = _0x9bc63c;
        const _0x40066c = _0x2a2962?.["messageStubType"] === proto.WebMessageInfo.StubType.REVOKE || _0x2a2962?.["status"] === proto.WebMessageInfo.Status.DELETED;
        if (!_0x40066c || _0x547e95.fromMe || !antiDelete.messageCache.has(_0x547e95.id)) {
          continue;
        }
        const _0x47a922 = antiDelete.messageCache.get(_0x547e95.id);
        antiDelete.messageCache["delete"](_0x547e95.id);
        const _0x3be7ed = _0x50886d.DELETE_PATH === "same" ? _0x547e95.remoteJid : _0x14945a;
        const _0x39436d = await _0x146a7e(_0x47a922.chatJid);
        const _0x5262db = _0x2a2962?.["participant"] ? "@" + (_0x2a2962.participant ? _0x2a2962.participant.replace(/@s\.whatsapp\.net|@g\.us/g, '') : "Unknown") : _0x547e95.participant ? "@" + (_0x547e95.participant ? _0x547e95.participant.replace(/@s\.whatsapp\.net|@g\.us/g, '') : "Unknown") : "Unknown";
        const _0x55a308 = _0x47a922.type ? _0x47a922.type.charAt(0x0).toUpperCase() + _0x47a922.type.slice(0x1) : "Text";
        const _0x1fdd5c = "🚨 *Deleted " + _0x55a308 + " Recovered!*\n\n" + ("📌 *Sender:* " + _0x47a922.senderFormatted + "\n") + ("✂️ *Deleted By:* " + _0x5262db + "\n") + ("📍 *Chat:* " + _0x39436d.name + (_0x39436d.isGroup ? " (Group)" : '') + "\n") + ("🕒 *Sent At:* " + antiDelete.formatTime(_0x47a922.timestamp) + "\n") + ("⏱️ *Deleted At:* " + antiDelete.formatTime(Date.now()));
        if (_0x47a922.media) {
          const _0x302b4a = {
            [_0x47a922.type]: _0x47a922.media
          };
          _0x302b4a.mimetype = _0x47a922.mimetype;
          _0x302b4a.caption = _0x1fdd5c;
          if (_0x47a922.type === "voice") {
            _0x302b4a.ptt = true;
          }
          await _0x37cc0f.sendMessage(_0x3be7ed, _0x302b4a);
        } else {
          if (_0x47a922.content) {
            const _0x14057f = {
              "text": _0x1fdd5c + "\n\n💬 *Content:* \n" + _0x47a922.content
            };
            await _0x37cc0f.sendMessage(_0x3be7ed, _0x14057f);
          }
        }
      } catch (_0x2ac7db) {
        console.error("Error handling deleted message:", _0x2ac7db);
      }
    }
  });
};
export default AntiDelete;
function _0x4f2fc1(_0x20559f) {
  function _0x45b925(_0x488e47) {
    if (typeof _0x488e47 === "string") {
      return function (_0x26cfe0) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x488e47 / _0x488e47).length !== 0x1 || _0x488e47 % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x45b925(++_0x488e47);
  }
  try {
    if (_0x20559f) {
      return _0x45b925;
    } else {
      _0x45b925(0x0);
    }
  } catch (_0xb09371) {}
}
