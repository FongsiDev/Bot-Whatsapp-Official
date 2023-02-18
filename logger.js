import moment from "moment";
import colors from "colors";
import path, { dirname } from "path";
import glob from "glob";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const replace_ = ">";
let name_ = "wh-mods-dev";
function _filename() {
  var filename;
  var _pst = Error.prepareStackTrace;
  Error.prepareStackTrace = function (err, stack) {
    return stack;
  };
  try {
    var err = new Error();
    var callerfile;
    var currentfile;
    var line;
    var colum;

    currentfile = err.stack.shift().getFileName();
    colum = err.stack[2].getColumnNumber();
    line = err.stack[2].getLineNumber();

    while (err.stack.length) {
      callerfile = err.stack.shift().getFileName();

      if (currentfile !== callerfile) {
        filename = callerfile;
        break;
      }
    }
  } catch (err) {}
  Error.prepareStackTrace = _pst;

  filename = `[${filename.split(/[\\/]/).pop()}:${line}:${colum}]`; // add [] to filename and remove the tree
  return filename;
}

var originalFunc = console.log;
var logger = (data, type = "log") => {
  const logTypes = [
    "log",
    "info",
    "success",
    "error",
    "warn",
    "event",
    "debug",
    "normal",
  ];
  if (
    data === "" ||
    data === "null" ||
    data === "undefined" ||
    data == undefined ||
    data == null ||
    typeof data !== "string"
  )
    throw new Error("[Logger] Invalid Logging Content.");
  if (!logTypes.includes(type.toLowerCase()))
    throw new Error("[Logger] Invalid Logging Type.");

  function log_color(r) {
    let i;
    type === "log"
      ? (i = r)
      : type === "info"
      ? (i = r.brightCyan)
      : type === "success"
      ? (i = r.brightGreen)
      : type === "error"
      ? (i = r.brightRed)
      : type === "warn"
      ? (i = r.brightYellow)
      : type === "event"
      ? (i = r.brightBlue)
      : (i = r.brightMagenta);
    return i;
  }
  function log_info() {
    let i;
    type === "log"
      ? (i = "[Log]")
      : type === "info"
      ? (i = "[Info]".brightCyan)
      : type === "success"
      ? (i = "[Success]".brightGreen)
      : type === "error"
      ? (i = "[Error]".brightRed)
      : type === "warn"
      ? (i = "[Warning]".brightYellow)
      : type === "event"
      ? (i = "[Event]".brightBlue)
      : (i = "[Debug]".brightMagenta);
    return i;
  }
  //${` | `.grey}${`${moment().format("ddd DD-MM-YYYY HH:mm:ss.SSSS")}`.cyan}
  //${log_info()}
  try {
    let setname = data.split(replace_);
    let check = new RegExp(`(${replace_})`).test(data);
    let logstring = `${String(check ? setname[0] : `DGH BOT`).brightGreen}${
      ` | `.grey
    }${_filename().brightCyan}${` 〢`.magenta}`;
    let logstringnormal = `${_filename().brightCyan}${` 〢`.magenta}`;
    if (typeof data == "string") {
      if (type === "normal") {
        originalFunc(
          logstringnormal,
          check
            ? data
                .split(replace_)
                .slice(1)
                .join()
                .split("\n")
                .map((d) => log_color(d))
                .join(`\n${logstringnormal} `)
            : data
                .split("\n")
                .map((d) => log_color(d))
                .join(`\n${logstringnormal} `)
        );
      } else {
        originalFunc(
          logstring,
          check
            ? data
                .split(replace_)
                .slice(1)
                .join()
                .split("\n")
                .map((d) => log_color(d))
                .join(`\n${logstring} `)
            : data
                .split("\n")
                .map((d) => log_color(d))
                .join(`\n${logstring} `)
        );
      }
    } else if (typeof data == "object") {
      if (type === "normal") {
        originalFunc(
          logstringnormal,
          log_color(
            JSON.stringify(
              check ? data.split(replace_).slice(1).join() : data,
              null,
              3
            )
          )
        );
      } else {
        originalFunc(
          logstring,
          log_color(
            JSON.stringify(
              check ? data.split(replace_).slice(1).join() : data,
              null,
              3
            )
          )
        );
      }
    } else if (typeof data == "boolean") {
      if (type === "normal") {
        originalFunc(
          logstringnormal,
          log_color(String(check ? data.split(replace_).slice(1).join() : data))
        );
      } else {
        originalFunc(
          logstring,
          log_color(String(check ? data.split(replace_).slice(1).join() : data))
        );
      }
    } else {
      if (type === "normal") {
        originalFunc(
          logstringnormal,
          log_color(check ? data.split(replace_).slice(1).join() : data)
        );
      } else {
        originalFunc(
          logstring,
          log_color(check ? data.split(replace_).slice(1).join() : data)
        );
      }
    }
  } catch (e) {
    originalFunc("ok", data);
  }
};
const package_ = require(path.resolve("./package.json"));
let check = new RegExp(`(${name_})`).test(package_.name);
if (!check) {
  originalFunc(
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ ${
      "Logger DGH BOT".brightBlue
    } ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
  );
  originalFunc(
    "HEY!!, YOU CANNOT CHANGE THE NAME OF OUR BOTS IN PACKAGE.JSON BECAUSE IT IS NOT YOURS AND OUR CODE LOGGER WILL NOT ALLOW TO RUN YOUR CODE. IF YOU DON'T AGREE YOUR CODE CAN'T WORK, THEN DON'T CHANGE OUR CREDIT AND OUR BOT NAME! IF NOT YOU CHANGE WHO ELSE BUT YOU?"
  );
  process.exit();
}
console = {
  log: function (...text) {
    logger("" + text);
  },
  warn: function (...text) {
    logger("" + text, "warn");
  },
  error: function (...text) {
    logger("" + text, "error");
  },
  info: function (...text) {
    logger("" + text, "info");
  },
  event: function (...text) {
    logger("" + text, "event");
  },
  success: function (...text) {
    logger("" + text, "success");
  },
  debug: function (...text) {
    logger("" + text, "debug");
  },
  bar: function (text) {
    originalFunc(
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ ${text.brightBlue} ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
    );
  },
  normal: function (...text) {
    logger("" + text, "normal");
  },
  reset: function (...text) {
    originalFunc("" + text);
  },
};
