const DataLoginRepository = require("../data/attributes/DataLogin/repository/DataLoginRepository");
const InfoLoginUser = require("../data/attributes/DataLogin/entities/DataLogin");

function CreateDataLoginInfoStorage(jsonString) {
  const jsonData = JSON.parse(jsonString);
  const infoLoginUser = new InfoLoginUser(
    jsonData.NumberAccount,
    jsonData.sessionId,
    jsonData.email,
    jsonData.DocumentType,
    jsonData.DocumentNumber,
    jsonData.nombre,
    jsonData.apellido,
    jsonData.UserProfileID,
    jsonData.lineNumber
  );
  //cargar datos en el storage
  const dataLoginRepository = new DataLoginRepository();
  let response = dataLoginRepository.CreateDataUserLoginInStorageLocal(infoLoginUser);
  // let response2 =  dataLoginRepository.GetDataUserLoginInStorageLocal();
  return response;
}

function GetDataLoginInfoStorage(){
  const dataLoginRepository = new DataLoginRepository();
  let response = dataLoginRepository.GetDataUserLoginInStorageLocal();
  // let response2 =  dataLoginRepository.GetDataUserLoginInStorageLocal();
  return response;
}

module.exports.CreateDataLoginInfoStorage = CreateDataLoginInfoStorage;
module.exports.GetDataLoginInfoStorage = GetDataLoginInfoStorage;
