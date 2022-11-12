export default {
    name: 'featured',
    title: 'Categorias de Menus em Destaque',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Categoria em destaque',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'short_description',
        title: 'Descrição',
        type: 'string',
        validation: (Rule) => Rule.max(200),
      },
      {
        name: 'restaurants',
        title: 'Restaurante',
        type: 'array',
        of: [{type: "reference" , to:[{type:"restaurant"}]}]
        
      },
     
    ],
  
  }