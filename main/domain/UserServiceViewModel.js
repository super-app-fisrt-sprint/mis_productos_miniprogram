const UserServiceRepository = require("../data/attributes/UserService/repository/UserserviceRepository");

const UserService = require("../data/attributes/UserService/entities/RequestUserService");
const ServiceCategory = require("../data/attributes/UserService/entities/ResponseServiceCategory");



async function ApiconsultaSerClienteNew(datainfoUser,deviceSpect) {
  const CategoryService = new ServiceCategory();
  const userServiceRepository = new UserServiceRepository();
  
  try {
    //obtenemos info login del storage

    const res = await userServiceRepository.getUserServiceRemote(datainfoUser,deviceSpect);

    if (
      res &&
      res.data &&
      res.data.error == 0 &&
      res.data.response &&
      res.data.response.servicioActual &&
      !res.data.response.mensajeRespuesta.includes("Error") &&
      !res.data.response.mensajeRespuesta.includes("La cuenta No Existe")
    ) {
      const servicioActual = res.data.response.servicioActual;
      const categoria1 = servicioActual.filter(item => item.categoria === "1");
      const categoria2 = servicioActual.filter(item => item.categoria === "2");
      const categoria3 = servicioActual.filter(item => item.categoria === "3");
      if (
        categoria1 &&
        categoria1 !== null &&
        categoria1 !== undefined &&
        categoria1.length > 0
      ) {
        CategoryService.updateParams({ categoriaTelefonia: categoria1 });
      }
      if (
        categoria2 &&
        categoria2 !== null &&
        categoria2 !== undefined &&
        categoria2.length > 1
      ) {
        const categoria2primerValor = servicioActual.find(
          item => item.categoria === "2"
        );
        const primerValorCategoria2 = categoria2primerValor
          ? categoria2primerValor.descripcion
          : null;

        CategoryService.updateParams({
          categoriaInternet: primerValorCategoria2
        });
      }
      if (
        categoria3 &&
        categoria3 !== null &&
        categoria3 !== undefined &&
        categoria3.length > 0
      ) {
        CategoryService.updateParams({ categoriaTelevision: categoria3 });

        return CategoryService;
      }
    }
  } catch (error) {
    // Bloque de código que se ejecuta si se produce un error
    console.log("Se produjo un error:", error);
  }
}

function newUserService(data) {
  return new UserService(data);
}

module.exports.ApiconsultaSerClienteNew = ApiconsultaSerClienteNew;
