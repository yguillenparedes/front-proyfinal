const getState = ({ getStore, getActions, setStore }) => {
	const USUARIO_ID = "USUARIO_ID";
	const SERVICIO_ID = "SERVICIO_ID";
	const SERVICIO_IDUSER = "SERVICIO_ID_USER";
	const SERVICIO_CATEGORIA = "SERVICIO_CATEGORIA";
	const urlUsuarios = "http://127.0.0.1:5000/usuarios";
	const urlCategorias = "http://127.0.0.1:5000/categoria";
	const urlMunicipio = "http://127.0.0.1:5000/municipios";
	const urlServicios = "http://127.0.0.1:5000/servicios/";
	const urlServiciosUsr = "http://127.0.0.1:5000/servicioUsr/";
	const urlServiciosCategoria = "http://127.0.0.1:5000/servicioCat/";
	const urlLogin = "http://127.0.0.1:5000/login";
	const urlContact = `${urlUsuarios}${USUARIO_ID}`;
	const urlServiciosID = `${urlServicios}${SERVICIO_ID}`;
	const urlServiciosIDUser = `${urlServiciosUsr}${SERVICIO_ID}`;
	const urlServiciosCategoriaId = `${urlServiciosCategoria}${SERVICIO_CATEGORIA}`;
	return {
		store: {
			usuarios: [],
			municipios: [],
			categorias: [],
			servicios: [],
			serviciosId: [],
			serviciosIdUser: [],
			serviciosCategoria: [],
			currentUser:
				localStorage.getItem("currentUser") === "undefined"
					? null
					: JSON.parse(localStorage.getItem("currentUser"))
		},
		actions: {
			getUsuarios: () => {
				fetch(urlUsuarios)
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({ usuarios: data.usuarios });
					});
			},

			fetchNewUsuario: async (newUsuario, exito, callbackError) => {
				const actions = getActions();
				await fetch(urlUsuarios, {
					method: "POST",
					body: JSON.stringify(newUsuario),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(function(response) {
					if (response.status === 200) {
						actions.getUsuarios();
						exito();
					}

					if (response.status === 400) {
						callbackError();
					}
				});
			},

			fetchEditUsuario: async (newEditusuario, currentUsuarioid, exito, callbackError) => {
				await fetch(urlContact.replace(USUARIO_ID, currentUsuarioid), {
					method: "PUT",
					body: JSON.stringify(newEditusuario),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(function(response) {
					if (response.status === 200) {
						getActions().getUsuarios();
						exito();
					}

					if (response.status === 400) {
						callbackError();
					}
				});
			},

			getMunicipios: () => {
				fetch(urlMunicipio)
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({ municipios: data.municipios });
					});
			},

			getCategoria: () => {
				fetch(urlCategorias)
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({ categorias: data.Categorías });
					});
			},

			setCurrentUser: user => {
				setStore({ currentUser: user });
			},

			getCurrentUser: async newLogin => {
				const actions = getActions();
				await fetch(urlLogin, {
					method: "POST",
					body: JSON.stringify(newLogin),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(respuesta => respuesta.json())
					.then(data => {
						let user = data.Usuario;

						if (Object.entries(user).length !== 0) {
							actions.setCurrentUser(user);
							localStorage.setItem("currentUser", JSON.stringify(user));
							window.location.replace("/");
						}
					});
			},

			getServicios: () => {
				fetch(urlServicios)
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({ servicios: data.servicios });
					});
			},

			getServiciosID: currentServicioid => {
				fetch(urlServiciosID.replace(SERVICIO_ID, currentServicioid))
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({ serviciosId: data.servicio });
					});
			},

			getServiciosIDUser: currentServicioidUser => {
				fetch(urlServiciosIDUser.replace(SERVICIO_ID, currentServicioidUser))
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({ serviciosIdUser: data.Servicios === undefined ? [] : data.Servicios });
					});
			},

			getServiciosIDCategoria: currentServicioidCategoria => {
				fetch(urlServiciosCategoriaId.replace(SERVICIO_CATEGORIA, currentServicioidCategoria))
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({ serviciosCategoria: data.Servicios === undefined ? [] : data.Servicios });
					});
			},

			fetchNewServicio: async (newServicio, exito, callbackError) => {
				const actions = getActions();
				await fetch(urlServicios, {
					method: "POST",
					body: JSON.stringify(newServicio),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(function(response) {
					if (response.status === 200) {
						actions.getServicios();
						exito();
					}

					if (response.status === 400) {
						callbackError();
					}
				});
			},

			fetchNewServicioUsr: async (newServicioUsr, exito, callbackError) => {
				const actions = getActions();
				await fetch(urlServiciosUsr, {
					method: "POST",
					body: JSON.stringify(newServicioUsr),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(function(response) {
					if (response.status === 200) {
						actions.getServiciosIDUser();
						exito();
					}

					if (response.status === 400) {
						callbackError();
					}
				});
			},

			fetchEditServiciosUser: async (newEditServicioUser, currentServicioidUser, exito, callbackError) => {
				const actions = getActions();
				await fetch(urlServiciosID.replace(SERVICIO_ID, currentServicioidUser), {
					method: "PUT",
					body: JSON.stringify(newEditServicioUser),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(function(response) {
					if (response.status === 200) {
						getActions().getServiciosIDUser();
						exito();
					}

					if (response.status === 400) {
						callbackError();
					}
				});
			},

			fetchDeleteServicio: (index, id) => {
				const url = urlServiciosID.replace(SERVICIO_ID, id);

				fetch(url, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => {
					getActions().removeServicio(index);
				});
			},

			fetchDeleteServicioid: (index, id) => {
				const url = urlServiciosIDUser.replace(SERVICIO_IDUSER, id);

				fetch(url, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => {
					getActions().removeContact(index);
				});
			},

			removeServicio: servicioIndex => {
				getStore().serviciosIdUser.splice(servicioIndex, 1);
				setStore({ serviciosIdUser: getStore().serviciosIdUser });
			},

			removeServicioId: servicioIndex => {
				getStore().serviciosIdUser.splice(servicioIndex, 1);
				setStore({ serviciosIdUser: getStore().serviciosIdUser });
			}
		}
	};
};

export default getState;
