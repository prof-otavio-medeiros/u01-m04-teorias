function info(data) {
  if (typeof data === "string") {
    console.log(`let data = '${data}';\n`);
  } else if (Array.isArray(data)) {
    console.log(`let data = [${data}];\n`);
  } else if (typeof data === "object") {
    if (data === null) {
      console.log(`let data = null;\n`);
    } else if (
      data &&
      Object.keys(data).length === 0 &&
      Object.getPrototypeOf(data) === Object.prototype
    ) {
      console.log(`let data = {};\n`);
    } else {
      console.log(`let data = ${JSON.stringify(data)};\n`);
    }
  } else {
    console.log(`let data = ${data};\n`);
  }
  console.log(`\ttypeof data         => ${typeof data}`);
  console.log(`\t!data               => ${!data}`);
  console.log(`\ttypeof !data        => ${typeof !data}`);
  console.log(`\t!!data              => ${!!data}`);
  console.log(`\tdata ? true : false => ${data ? true : false}`);
  console.log(`\t!!!data             => ${!!!data}`);
  console.log();
}

info(true);
info(false);
info(1);
info(1.1);
info(0); // the only number interpreted as false
info(0.0); // the only number interpreted as false
info(3.1415926);
info(-3.1415926);
info("TRUE");
info("FALSE");
info(" "); // not empty 'string'
info(""); // empty 'string'
info([]); // empty 'array'
info([1]);
info([1, 2]);
info({}); // empty 'object'
info({ value1: 1 });
info({ value1: { value2: 2 } });
info(null);
info(NaN);
info(undefined);
info(Infinity);
info((val = 2)); // assignment returns assigned value
info((val = false)); // assignment returns assigned value

// console.log("EXPRESSIONS...");
