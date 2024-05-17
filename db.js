const getdata = async () => {
  return new Promise((resolve, reject) => {
    db.getData((err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const processData = async (reqData) => {
  return new Promise((resolve, reject) => {
    db.processData(reqData, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const saveData = async () => {
  return new Promise((resolve, reject) => {
    db.saveData((err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const dbTransaction = async () => {
  try {
    let data = await getdata();
    data.a = "test";
    data.b = 111;
    await processData(data);
    await saveData();
    console.log("finished");
  } catch (err) {
    console.log(err);
  }
};

db.getData((err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  data.a = "test";
  data.b = 1111;
  db.processData(data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    db.saveData((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("finished");
    });
  });
});
