const mssql = require("mssql");
const sqlConfig = require("../Config");

class Connection {
  constructor() {
    this.connectToDb();
  }
  connectToDb = async () => {
    try {
      this.pool = await mssql.connect(sqlConfig);
    } catch (error) {}
  };
  createrequestObj = (requestObj, data) => {
    let keyNames = Object.keys(data);
    keyNames.map((name) => {
      let value = data[name];
      requestObj.input(name, value);
    });
    return requestObj;
  };
  executeRequest = async (storedProcedure, data = {}) => {
    const requestObj = await this.pool.request();
    const results = await this.createrequestObj(requestObj, data);
    return await results.execute(storedProcedure);
  };
}

module.exports = {
  exec: new Connection().executeRequest,
};
