import Medico from "./Medico.component"

const ListaMedicos = [
{nombre:"Fabrizio Figari",especialidad:"Endocrinología"},{nombre:"Dalila Figari",especialidad:"Pediatría"},{nombre:"Dalila Figari",especialidad:"Pediatría"},
{nombre:"Fiorella Valdivia",especialidad:"Pediatría"},{nombre:"Lia Sandoval",especialidad:"Obstetricia"},{nombre:"Dalila Figari",especialidad:"Pediatría"},
{nombre:"Fiorella Valdivia",especialidad:"Pediatría"},{nombre:"Lia Sandoval",especialidad:"Obstetricia"},{nombre:"Dalila Figari",especialidad:"Pediatría"}]
const CuadroMedicos = _ => {
    const armarFilasMedicos = (medicos) =>{
        const listaFilasMedicos = []
        let medicos3 = []
        ListaMedicos.forEach((medico,index) => {
            if (index % 3 === 0 && index > 0 ) {
                listaFilasMedicos.push(
                    <div class="row ms-4">
                        {medicos3}
                    </div>
                )
                medicos3 = []
            }
            const columna = <Medico medico={medico}/>
            medicos3.push(columna)
        });
        if (medicos3.length !== 0) {
            listaFilasMedicos.push(
                <div class="row ms-4">
                    {medicos3}
                </div>
            )
        }
        return listaFilasMedicos
    } 
    return <>
        <div class="col-lg-9">
            <div id="rectanguloDoctores" class="rectangulosCuerpo">
                <div id="divTablaMedicos">
                {
                    armarFilasMedicos(ListaMedicos)
                }
                </div>
            </div>
        </div>
    </>
}
export default CuadroMedicos