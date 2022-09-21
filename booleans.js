function info(data) {
  if (typeof data === "string") {
    console.log(`let data = '${data}';\n`);
    console.log(`\tdata => ${data}`);
  } else if (Array.isArray(data)) {
    console.log(`let data = [${data}];\n`);
    console.log(`\tdata => ${data}`);
  } else if (typeof data === "object") {
    if (data === null) {
      console.log(`let data = null;\n`);
      console.log(`\tdata => ${data}`);
    } else if (
      data &&
      Object.keys(data).length === 0 &&
      Object.getPrototypeOf(data) === Object.prototype
    ) {
      console.log(`let data = {};\n`);
      console.log(`\tdata => {}`);
    } else {
      console.log(`let data = ${JSON.stringify(data)};\n`);
      console.log(`\tdata => ${JSON.stringify(data)}`);
    }
  } else {
    console.log(`let data = ${data};\n`);
  }
  console.log(`\ttypeof data => ${typeof data}`);
  console.log(`\t!data => ${!data}`);
  console.log(`\ttypeof !data => ${typeof !data}`);
  console.log(`\t!!data => ${!!data}`);
  console.log(`\ttypeof !!data => ${typeof !!data}`);
  console.log(`\t!!!data => ${!!!data}`);
  console.log(`\ttypeof !!!data => ${typeof !!!data}`);
  console.log();
}

info(true);
info(false);
info(1);
info(1.1);
info(0);
info(0.0);
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
info((val = 2));
info((val = false));

// console.log("EXPRESSIONS...");
