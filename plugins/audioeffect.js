// Nimco security 
const _0x4f959c = function () {
  let _0x3e2f64 = true;
  return function (_0x4eeedf, _0x54d9b5) {
    const _0x354ae2 = _0x3e2f64 ? function () {
      if (_0x54d9b5) {
        const _0xae20f4 = _0x54d9b5.apply(_0x4eeedf, arguments);
        _0x54d9b5 = null;
        return _0xae20f4;
      }
    } : function () {};
    _0x3e2f64 = false;
    return _0x354ae2;
  };
}();
(function () {
  _0x4f959c(this, function () {
    const _0x86651a = new RegExp("function *\\( *\\)");
    const _0x5a1edf = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x3c950d = _0x7619cc("init");
    if (!_0x86651a.test(_0x3c950d + "chain") || !_0x5a1edf.test(_0x3c950d + "input")) {
      _0x3c950d("0");
    } else {
      _0x7619cc();
    }
  })();
})();
import { exec } from "child_process";
import _0x4d1569 from "fs";
import { getRandom } from "../lib/myfunc.cjs";
import _0x256a2c from "../config.cjs";
const audioEffects = async (_0x9e7e11, _0xddfe5) => {
  try {
    const _0x3454ed = _0x256a2c.PREFIX;
    const _0x51ed4c = _0x9e7e11.body.startsWith(_0x3454ed) ? _0x9e7e11.body.slice(_0x3454ed.length).split(" ")[0x0].toLowerCase() : '';
    const _0x264f30 = ["bass", "blown", "deep", "earrape", "fast", "fat", "nightcore", "reverse", "robot", "slow", "smooth", "tupai"];
    if (!_0x264f30.includes(_0x51ed4c)) {
      return;
    }
    let _0x193df4;
    if (_0x51ed4c === "bass") {
      _0x193df4 = "-af equalizer=f=54:width_type=o:width=2:g=20";
    } else {
      if (_0x51ed4c === "blown") {
        _0x193df4 = "-af acrusher=.1:1:64:0:log";
      } else {
        if (_0x51ed4c === "deep") {
          _0x193df4 = "-af atempo=4/4,asetrate=44500*2/3";
        } else {
          if (_0x51ed4c === "earrape") {
            _0x193df4 = "-af volume=12";
          } else {
            if (_0x51ed4c === "fast") {
              _0x193df4 = "-filter:a \"atempo=1.63,asetrate=44100\"";
            } else {
              if (_0x51ed4c === "fat") {
                _0x193df4 = "-filter:a \"atempo=1.6,asetrate=22100\"";
              } else {
                if (_0x51ed4c === "nightcore") {
                  _0x193df4 = "-filter:a atempo=1.06,asetrate=44100*1.25";
                } else {
                  if (_0x51ed4c === "reverse") {
                    _0x193df4 = "-filter_complex \"areverse\"";
                  } else {
                    if (_0x51ed4c === "robot") {
                      _0x193df4 = "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
                    } else {
                      if (_0x51ed4c === "slow") {
                        _0x193df4 = "-filter:a \"atempo=0.7,asetrate=44100\"";
                      } else {
                        if (_0x51ed4c === "smooth") {
                          _0x193df4 = "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
                        } else if (_0x51ed4c === "tupai") {
                          _0x193df4 = "-filter:a \"atempo=0.5,asetrate=65100\"";
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (!_0x9e7e11.quoted || _0x9e7e11.quoted.mtype !== "audioMessage") {
      return _0x9e7e11.reply("Reply to the audio you want to change with a caption *" + (_0x3454ed + _0x51ed4c) + "*");
    }
    _0x9e7e11.reply("Please wait...");
    const _0x164808 = await _0x9e7e11.quoted.download();
    const _0x31a0a6 = "./" + getRandom(".webm");
    _0x4d1569.writeFileSync(_0x31a0a6, _0x164808);
    const _0x310735 = "./" + getRandom(".mp3");
    exec("ffmpeg -i " + _0x31a0a6 + " " + _0x193df4 + " " + _0x310735, (_0x272259, _0x36b950, _0x31e9d1) => {
      _0x4d1569.unlinkSync(_0x31a0a6);
      if (_0x272259) {
        console.error("Error:", _0x272259);
        return _0x9e7e11.reply("An error occurred while processing the audio.");
      }
      const _0x1ae9d9 = _0x4d1569.readFileSync(_0x310735);
      const _0x3cddbc = {
        "audio": _0x1ae9d9,
        mimetype: "audio/mpeg"
      };
      _0xddfe5.sendMessage(_0x9e7e11.from, _0x3cddbc, {
        "quoted": _0x9e7e11
      });
      _0x4d1569.unlinkSync(_0x310735);
    });
  } catch (_0x36589b) {
    console.error("Error:", _0x36589b);
    _0x9e7e11.reply("An error occurred while processing the command.");
  }
};
export default audioEffects;
function _0x7619cc(_0x307528) {
  function _0x2eb219(_0x1b8216) {
    if (typeof _0x1b8216 === "string") {
      return function (_0x3e9081) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x1b8216 / _0x1b8216).length !== 0x1 || _0x1b8216 % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x2eb219(++_0x1b8216);
  }
  try {
    if (_0x307528) {
      return _0x2eb219;
    } else {
      _0x2eb219(0x0);
    }
  } catch (_0x34f65e) {}
}
