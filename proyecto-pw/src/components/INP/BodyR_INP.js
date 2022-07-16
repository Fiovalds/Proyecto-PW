import "../../css/INP/InicioPaciente.css"
import Articulo_INP from "./Articulo_INP"

const BodyR_INP = () =>{

    const data = [
        {
            id:"1",
            src_image: "https://w0.peakpx.com/wallpaper/526/255/HD-wallpaper-fabulous-nature-landscape-forest-clouds-lake-mountains.jpg",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"5"
            
        },
        {
            id:"2",
            src_image: "https://w0.peakpx.com/wallpaper/776/850/HD-wallpaper-wonderful-castle-in-mountain-lake-landscape-forest-mountains-clouds-castle-lake.jpg    ",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"2"
        },
        {
            id:"3",
            src_image: "https://w0.peakpx.com/wallpaper/825/223/HD-wallpaper-wonderful-nature-landscape-forest-rocks-mountains-clouds-lake.jpg",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"3"
        },
        {
            id:"4",
            src_image: "https://w0.peakpx.com/wallpaper/126/126/HD-wallpaper-fantastic-nature-landscape-r-forest-sun-grass-mountains-r-clouds-lake-valley.jpg",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"4"
        },
        {
            id:"5",
            src_image: "https://w0.peakpx.com/wallpaper/531/651/HD-wallpaper-wonderful-lake-landscape-forest-rocks-mountains-clouds-lake.jpg",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"1"
        },
        {
            id:"6",
            src_image: "https://w0.peakpx.com/wallpaper/776/850/HD-wallpaper-wonderful-castle-in-mountain-lake-landscape-forest-mountains-clouds-castle-lake.jpg    ",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"5"
        },{
            id:"7",
            src_image: "https://w0.peakpx.com/wallpaper/126/126/HD-wallpaper-fantastic-nature-landscape-r-forest-sun-grass-mountains-r-clouds-lake-valley.jpg",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"3"
        }
    ]

    const articulos = data.map(item => {return(
        <Articulo_INP 
            key = {item.id}
            item = {item}
        />
    )})

    return(
        <div className="col-sm">
            <div className="container card mt-4 aislarcontenido borde">
                <div id="columnas" className="container mt-2">
                    <div>
                        <div className="row mt-3">
                              {articulos}
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default BodyR_INP