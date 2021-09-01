const getState = ({ getStore, getActions, setStore }) => {
	const USUARIO_ID = "USUARIO_ID";
	const urlUsuarios = "http://127.0.0.1:5000/usuarios";
	const urlCategorias = "http://127.0.0.1:5000/categoria";
	const urlMunicipio = "http://127.0.0.1:5000/municipios";
	const urlContact = `${urlUsuarios}${USUARIO_ID}`;

	return {
		store: {
			usuarios: [],
			municipios: [],
			categorias: []
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
				const actions = getActions();
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
			}
		}
	};
};

export default getState;
