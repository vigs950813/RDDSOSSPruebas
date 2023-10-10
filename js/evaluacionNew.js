const quizData = [
    {
        question: "1.- La capa de intérprete de mandatos (instrucciones) o Shell es aquella que se encarga de: Forma de una interfaz de programación o API y donde el sistema operativo puede disponer de una máquina virtual.",
        a: "Verdadero",
        b: "Falso",
        correct: "b",
    },

    {
        question: "2.- La capa de gestión de recursos kernel o núcleo que es la que se encarga de: Dialogar en forma interactiva con el usuario, donde el Shell recibe las instrucciones u órdenes del usuario, los interpreta y si son instrucciones entendibles las ejecuta.",
        a: "Falso",
        b: "Verdadero",
        correct: "a",
    },

    {
        question: "3.- ¿Cuáles son los modos de operación de un sistema operativo?.",
        a: "Usuario sin protección, protegido y real",
        b: "Ejecución, manejador de archivos y gestión de memoria",
        correct: "a",
    },

    {
        question: "4.- La capa de servicio o llamadas al sistema ofrece a los programas ss la que se encarga de gestionar los recursos de hardware en el sistema.",
        a: "Verdadero",
        b: "Falso",
        correct: "b",
    },

    {
        question: "5.- Los recursos que son manejados por el sistema operativo son: Físicos (Procesador, memoria principal y los periféricos) y Lógicos (Archivos y puertos de comunicación).",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },

    {
        question: "6.- El sistema operativo debe de garantizar la protección de la información y confidencialización del usuario para que nadie interfiera con el trabajo de este.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },

    {
        question: "7.- Cuales son las funciones de los contadores en el sistema operativo.",
        a: "Política de prioridades, identificación de módulos, reconocimiento de interrupción",
        b: "Incremento de valor en tabla de procesos, detección de pulsos, manejo de instrucciones.",
        correct: "a",
    },

    {
        question: "8.- La memoria permite medir la cantidad de recursos que durante su ejecución utiliza cada programa (monitoreo de aplicaciones).",
        a: "Falso",
        b: "Verdadero",
        correct: "a",
    },

    {
        question: "9.- El sistema operativo ofrece a los programas un conjunto de servicios o conocidos como llamadas al sistema y manipulación de archivos.",
        a: "Falso",
        b: "Verdadero",
        correct: "a",
    },

    {
        question: "10.- El procesador se encarga de realizar la ejecución de un programa, en donde su función principal es la de crear, ejecutar y destruir procesos.",
        a: "Verdadero",
        b: "Falso",
        correct: "b",
    },

    {
        question: "11.- Los métodos que utiliza el sistema operativo para administrar las operaciones de E/S son.",
        a: "Interrupciones y polling",
        b: "Detección de módulos E/s, redirecciones y control de flujo",
        correct: "a",
    },

    {
        question: "12.- Los sistemas operativos monousuarios son aquellos que están conformados por máquina como conjunto procesadores que comparten el acceso a una memoria principal común.",
        a: "Verdadero",
        b: "Falso",
        correct: "b",
    },

    {
        question: "13.- Los sistemas operativos embebidos son útiles en aplicaciones de mediana a gran escala con una mayor cantidad de tareas a planificar.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },


    {
        question: "14.- Todos los sistemas operativos de tiempo real son embebidos.",
        a: "Verdadero",
        b: "Falso",
        correct: "b",
    },

    {
        question: "15.- Un sistema operativo de tiempo real es un programa que presenta: Planifica la ejecución de tareas teniendo en cuenta restricciones de tiempo y administra los recursos del sistema.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },


    {
        question: "16.- Las peticiones se procesan de forma estructurada en las siguientes capas: Manejadores de interrupción y manejadores de dispositivos o drivers.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },

    {
        question: "17.- Los archivos ofrecen un nivel de abstracción mayor que el de las órdenes de E/S, permitiendo operaciones tales como creación, borrado, renombrado, apertura, escritura y lectura de archivos.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },

    {
        question: "18.- Los archivos ofrecen un nivel de abstracción mayor que el de las órdenes de E/S, permitiendo operaciones tales como creación, borrado, renombrado, apertura, escritura y lectura de archivos.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },

    {
        question: "19.- Detección y tratamiento de errores se encarga de tratar todas las condiciones de error que detecte el hardware: Errores en las operaciones de E/S y Errores de paridad en los accesos a memoria o en los buses.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },


    {
        question: "20.- Las cuatro funciones del kernel pueden derivarse de sus componentes.",
        a: "Gestión de procesos, memoria, E/S y sistema de archivos.",
        b: "Administración, comunicación, controlar y acceder a dispositivos de E/S",
        correct: "a",
    },   
];

const sizeQuiz = quizData.length
const textAnws = []
const textAnws2 = []

var numAks = 0;
var preguntasCorrectas = 0;
const labelRespondidas = document.getElementById("idRespondidas")
const labelPorcentaje = document.getElementById("idPorcentaje")

cargarQuiz()

function cargarQuiz(){
    chargeCues()
    for(var y = 0; y<(sizeQuiz/2); y++){    
        //Divisor
        var div = document.createElement('div')
        div.className = 'w-100 d-none d-md-block'
        div.id = 'divisor'+y
        //Contenedor de columna
        var divCol = document.createElement('div')
        divCol.className = 'row align-items-start' 
        divCol.id = 'col'+y  
        //Contenedor de columna
        var divCol = document.createElement('div')
        divCol.className = 'row align-items-start' 
        divCol.id = 'col'+y  

        for(var x = 0; x<1; x++){
            //Columna1
            var divColOne = document.createElement('div')
            divColOne.className = 'col'
            divColOne.id = 'divColOne'+y  
            //Columna2 
            var divColTwo = document.createElement('div')
            divColTwo.className = 'col' 
            divColTwo.id = 'divColTwo'+y 
    
            //Quiz Container1
            var divQuizCont = document.createElement('div')
            divQuizCont.className = 'quiz-container' 
            divQuizCont.id = 'divQuizCont'+y
            //Quiz Header1
            var divQuizHeader = document.createElement('div')
            divQuizHeader.className = 'quiz-header' 
            divQuizHeader.id = 'divQuizHeader'+y
            //H2 col1
            var h2_1 = document.createElement('h2')
            h2_1.id = 'h2_1'+y
            h2_1.innerHTML = textAnws[y]
            //UL 1
            var ul_1 = document.createElement('ul')
            ul_1.id = 'ul_1_'+y
            //INPUT 1_1
            var btn_1_1 = document.createElement('button')
            btn_1_1.id = 'btn_1_1_'+y
            btn_1_1.value = 'btn_1_2_'+y
            btn_1_1.innerHTML = "Verdadero"
            btn_1_1.className = "ans-button"
            //INPUT 1_2
            var btn_1_2 = document.createElement('button')
            btn_1_2.id = 'btn_1_2_'+y
            btn_1_2.value = 'btn_1_1_'+y
            btn_1_2.innerHTML = "Falso"
            btn_1_2.className = "ans-button2"
            
            //Quiz Container2
            var divQuizCont2 = document.createElement('div')
            divQuizCont2.className = 'quiz-container' 
            divQuizCont2.id = 'divQuizCont2'+y
            //Quiz Header2
            var divQuizHeader2 = document.createElement('div')
            divQuizHeader2.className = 'quiz-header' 
            divQuizHeader2.id = 'divQuizHeader2'+y
            //H2 col2
            var h2 = document.createElement('h2')
            h2.id = 'h2'+y
            h2.innerHTML = textAnws2[y]
            //UL 2
            var ul_2 = document.createElement('ul')
            ul_2.id = 'ul_2_'+y
            //INPUT 2_1
            var btn_2_1 = document.createElement('button')
            btn_2_1.id = 'btn_2_1_'+y
            btn_2_1.value = 'btn_2_2_'+y
            btn_2_1.innerHTML = "Verdadero"
            btn_2_1.className = "ans-button"
            //INPUT 2_2
            var btn_2_2 = document.createElement('button')
            btn_2_2.id = 'btn_2_2_'+y
            btn_2_2.value = 'btn_2_1_'+y
            btn_2_2.innerHTML = "Falso"
            btn_2_2.className = "ans-button2"
        }
        document.getElementById('div-main').appendChild(divCol)
            
        divCol.appendChild(divColOne)  
        divColOne.appendChild(divQuizCont)
        divQuizCont.appendChild(divQuizHeader)
        divQuizHeader.appendChild(h2_1)
        divQuizHeader.appendChild(ul_1)
        ul_1.appendChild(btn_1_1)
        ul_1.appendChild(btn_1_2)

        divCol.appendChild(divColTwo)
        divColTwo.appendChild(divQuizCont2)
        divQuizCont2.appendChild(divQuizHeader2)
        divQuizHeader2.appendChild(h2)
        divQuizHeader2.appendChild(ul_2)
        ul_2.appendChild(btn_2_1)
        ul_2.appendChild(btn_2_2)  

        document.getElementById('div-main').appendChild(div)
    }
}

//Metódo para cargar el array de las preguntas
function chargeCues(){
    for(var x=0; x<sizeQuiz;x++){
        if(x==0 || x%2==0){
            textAnws.push(quizData[x].question)
        }else if(x==1 || x%2!=0){
            textAnws2.push(quizData[x].question)
        }
    }
}

//Escucha para los btns verdadero
const btns = document.querySelectorAll('.ans-button');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (e) {
        checkAns(btns[i].value)
        btns[i].disabled = true
        numAks = numAks+1
        checkQuiz(quizData[i].correct, "a")
        labelRespondidas.innerHTML = "Preguntas respondidas: "+ numAks
        labelPorcentaje.innerHTML = "Porcentaje: " + checkPorcentaje()
    });
}
//Escucha para los btns falso
const btns2 = document.querySelectorAll('.ans-button2');
for (let i = 0; i < btns.length; i++) {
    btns2[i].addEventListener('click', function (e) {
        checkAns2(btns2[i].value)
        btns[i].disabled = true
        numAks = numAks+1
        labelRespondidas.innerHTML = "Preguntas respondidas: "+ numAks
        checkQuiz(quizData[i].correct, "b")
        labelPorcentaje.innerHTML = "Porcentaje: " + checkPorcentaje()
    });
}

function checkAns(bt2){
    var buttonValue = document.getElementById(bt2);
    buttonValue.style.background='#000000';
    buttonValue.disabled = true
}

function checkAns2(bt1){
    var buttonValue = document.getElementById(bt1);
    buttonValue.style.background='#000000';
    buttonValue.disabled = true
}

function checkQuiz(pregunta, respuesta){
    if(pregunta == respuesta){
        preguntasCorrectas = preguntasCorrectas + 1
    }
   
}

function checkPorcentaje(){
    return porc= (preguntasCorrectas * 100) / 20
}
