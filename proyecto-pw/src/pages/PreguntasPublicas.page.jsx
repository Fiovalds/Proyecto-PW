import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/js/src/modal.js"
import NavbarPPu from "../components/PPU/NavbarPPu.component"
import TablaPreguntasPu from "../components/PPU/TablaPreguntasPu.component"
import './css/PreguntasPublicas.css'

const preguntas = [{paciente:"Nuevo Paciente",
pregunta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo quos rem atque commodi quis fugiat, natus culpa reprehenderit",
respuestas:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis mauris sit amet mauris ultrices consectetur. Nam eleifend tempor felis eget feugiat. Nullam id venenatis risus, in aliquet dui. In a sem eu eros tincidunt scelerisque id vitae urna. Nulla in velit vitae sem blandit euismod. Nam bibendum quis mauris vitae eleifend. Nullam feugiat dolor ut laoreet posuere. Fusce tortor nisl, ullamcorper eget egestas quis, lacinia quis mauris. Morbi posuere dolor ut risus ornare cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum posuere eget sapien ac pellentesque. Sed placerat imperdiet eros, nec porta."
,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis mauris sit amet mauris ultrices consectetur. Nam eleifend tempor felis eget feugiat. Nullam id venenatis risus, in aliquet dui. In a sem eu eros tincidunt scelerisque id vitae urna. Nulla in velit vitae sem blandit euismod. Nam bibendum quis mauris vitae eleifend. Nullam feugiat dolor ut laoreet posuere. Fusce tortor nisl, ullamcorper eget egestas quis, lacinia quis mauris. Morbi posuere dolor ut risus ornare cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum posuere eget sapien ac pellentesque. Sed placerat imperdiet eros, nec porta."]},{paciente:"Nuevo Paciente",
pregunta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo quos rem atque commodi quis fugiat, natus culpa reprehenderit",
respuestas:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis mauris sit amet mauris ultrices consectetur. Nam eleifend tempor felis eget feugiat. Nullam id venenatis risus, in aliquet dui. In a sem eu eros tincidunt scelerisque id vitae urna. Nulla in velit vitae sem blandit euismod. Nam bibendum quis mauris vitae eleifend. Nullam feugiat dolor ut laoreet posuere. Fusce tortor nisl, ullamcorper eget egestas quis, lacinia quis mauris. Morbi posuere dolor ut risus ornare cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum posuere eget sapien ac pellentesque. Sed placerat imperdiet eros, nec porta."
,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis mauris sit amet mauris ultrices consectetur. Nam eleifend tempor felis eget feugiat. Nullam id venenatis risus, in aliquet dui. In a sem eu eros tincidunt scelerisque id vitae urna. Nulla in velit vitae sem blandit euismod. Nam bibendum quis mauris vitae eleifend. Nullam feugiat dolor ut laoreet posuere. Fusce tortor nisl, ullamcorper eget egestas quis, lacinia quis mauris. Morbi posuere dolor ut risus ornare cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum posuere eget sapien ac pellentesque. Sed placerat imperdiet eros, nec porta."]},{paciente:"Nuevo Paciente",
pregunta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo quos rem atque commodi quis fugiat, natus culpa reprehenderit",
respuestas:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis mauris sit amet mauris ultrices consectetur. Nam eleifend tempor felis eget feugiat. Nullam id venenatis risus, in aliquet dui. In a sem eu eros tincidunt scelerisque id vitae urna. Nulla in velit vitae sem blandit euismod. Nam bibendum quis mauris vitae eleifend. Nullam feugiat dolor ut laoreet posuere. Fusce tortor nisl, ullamcorper eget egestas quis, lacinia quis mauris. Morbi posuere dolor ut risus ornare cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum posuere eget sapien ac pellentesque. Sed placerat imperdiet eros, nec porta."
,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis mauris sit amet mauris ultrices consectetur. Nam eleifend tempor felis eget feugiat. Nullam id venenatis risus, in aliquet dui. In a sem eu eros tincidunt scelerisque id vitae urna. Nulla in velit vitae sem blandit euismod. Nam bibendum quis mauris vitae eleifend. Nullam feugiat dolor ut laoreet posuere. Fusce tortor nisl, ullamcorper eget egestas quis, lacinia quis mauris. Morbi posuere dolor ut risus ornare cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum posuere eget sapien ac pellentesque. Sed placerat imperdiet eros, nec porta."]}]
const PreguntasPublicas = () => {
    return <>
        <NavbarPPu />
        <div className="rectangulosCuerpo">
            <div className="fs-3 m-4 fw-bold">
                Preguntas P??blicas
            </div>
            <TablaPreguntasPu preguntas = {preguntas}/>
        </div>
    </>

}
export default PreguntasPublicas