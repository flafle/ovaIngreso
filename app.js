

const socios = [
    {nombre: 'Juan ', apellido: "Perez", dni: '12345678', abonado: "Mes aún no abonado"},
    {nombre: 'Ana', apellido:"García", dni: '87654321', abonado:"Mes aún no abonado"},
    {nombre: 'Luis', apellido: "Fernández", dni: '11111111' ,abonado:"Mes abonado"}
];


//Validar dni:

document.getElementById('validar').addEventListener('click', () => {
    const dniIngresado = document.getElementById('dni').value;
    if (dniIngresado.length !== 8) {
        swal.fire("Dni incorrecto");
    } else {
        const socioEncontrado = socios.find(socio => socio.dni === dniIngresado);
        if (socioEncontrado) {
           swal.fire(`DNI válido para ${socioEncontrado.nombre}: ${socioEncontrado.abonado}`);
        } else {
            swal.fire('DNI no encontrado');
        }
    }
});

//TENGO QUE ARREGLAR LOS ALERTS(hecho)
// Y VALIDAR MAS LOS DATOS DE USUARIOS.
//Hacerlo responsive
//probar en vercel
