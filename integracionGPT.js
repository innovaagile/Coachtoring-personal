const apiUrl = "https://chatgpt.com/g/g-67797d5018ac81918cbfb053cdccb1e3-coachtoring-gpt";

async function obtenerRespuestaGPT(mensajeUsuario) {
    const headers = {
        "Content-Type": "application/json"
    };

    const body = {
        input: mensajeUsuario // Cambia esto si tu API espera otros campos
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        const data = await response.json();
        console.log("Respuesta de GPT:", data.output); // Cambia 'output' si tu API usa otro campo para la respuesta
        return data.output; // Cambia 'output' si tu API usa otro campo
    } catch (error) {
        console.error("Error al conectar con GPT:", error);
    }
}

// Vincula el botón y el campo de texto
document.getElementById("enviarMensaje").addEventListener("click", async () => {
    const mensajeUsuario = document.getElementById("mensajeUsuario").value;
    const respuesta = await obtenerRespuestaGPT(mensajeUsuario);
    document.getElementById("respuestaGPT").textContent = respuesta;
});
