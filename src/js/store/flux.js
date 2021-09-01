const getState = ({ getStore, getActions, setStore }) => {
	const urlUsuarios = "http://127.0.0.1:5000/usuarios";
	const urlCategorias = "http://127.0.0.1:5000/categoria";
	const urlMunicipio = "http://127.0.0.1:5000/municipios";

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
