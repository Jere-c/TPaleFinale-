import Publicacion from "../models/publicacion.model.js"

export const getPublicaciones = async (req,res) => {
    const publicaciones = await Publicacion.findAll()
    res.json(publicaciones)
}
export const createPublicacion = async (req,res) => {
    const {title, description, image, userid} = req.body
    const newPublicacion = new Publicacion({
        title,
        description,
        image,
        userid
    })
    const savedPublicacion = await newPublicacion.save()
    res.json(savedPublicacion)
}

export const getPublicacion = async (req,res) => {
    const publicacion = await Publicacion.findOne({ where: { id: req.params.id } })
    if (!publicacion) return res.status(404).json({message: 'publicacion not found'})
    res.json(publicacion)
}

export const deletePublicacion = async (req,res) => {
    
    const publicacion = await Publicacion.destroy({where: {id: req.params.id}})
    if(!publicacion) return res.status(404).json({message: 'publicacion not found'})
    return res.sendStatus(204)
}

export const updatePublicacion = async (req,res) => {

    const publicacion = await Publicacion.findOne({ where: { id: req.params.id } })
        if(!publicacion) return res.status(404).json({message: 'Publicacion not found'})

    if(publicacion){
    const {title, description, image} = req.body
    Publicacion.upimage({title, description, image},{ where: { id: req.params.id } })}
    res.send({message: 'actualizado con exito'})
    
}

