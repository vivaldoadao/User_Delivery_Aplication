export default {
  name: 'restaurant',
  title: 'Restaurantes',
  type: 'document',
  fields: [
   {
    name: 'name',
    type: 'string',
    title: 'Nome do Restaurante',
    validation: (Rule) => Rule.required(),

   }
   ,
   {
    name: 'short_description',
    type: 'string',
    title: 'Descrição',
    validation: (Rule) => Rule.max(200),
    
   },
   {
    name: 'image',
    type: 'image',
    title: 'Imagem do Restaurante',
    
    
   },
   {
    name: 'lat',
    type: 'number',
    title: 'Latitude do Restaurante',
    
    
   },
   {
    name: 'long',
    type: 'number',
    title: 'Longitude do Restaurante',
    
    
   },
   {
    name: 'address',
    type: 'string',
    title: 'Endereço do Restaurante',
    validation: (Rule) => Rule.required(

    ),
    
   },
   {
    name: 'rating',
    type: 'number',
    title: 'Introduza um  rating de 1 à 5 estrelas',
    validation: (Rule) => Rule.required(
      
    ).min(1).max(5).error("Por favor introduza números entre 1 e 5"),
    
   },
   {
    name: 'type',
    title: 'Categoria',
    validation: (Rule) => Rule.required(),
    type: "reference",
    to: [{type : "category"}],

    
   },
   {
    name: 'dishes',
    type: 'array',
    title: 'Pratos',
    of:[{type: "reference", to: [{type : "dish"}]}],
    
    
   }
  ],


}
