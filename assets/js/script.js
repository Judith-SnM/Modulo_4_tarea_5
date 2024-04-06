const obtenerDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const response = await fetch(url);
        const data = await response.json();

        data.forEach((album, index) => {
            if (index < 20) {
                console.log(album.title);
            }
        });

        enviarMensaje();
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

const enviarMensaje = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000);
    });
};

const mostrarMensaje = async () => {
    3
    try {
        const mensaje = await enviarMensaje();
        console.log(mensaje);
    } catch (error) {
        console.error('Error al mostrar el mensaje:', error);
    }
};

obtenerDatos();
mostrarMensaje();
