if (!existsSync("./customer-master-key.txt")) {
  try {
    writeFileSync("customer-master-key.txt", randomBytes(96));
  } catch (err) {
    throw new Error(
      `Unable to write Customer Master Key to file due to the following error: ${err}`
    );
  }
}
