export default {
  name: 'dish',
  title: 'Pratos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome do Prato',
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
      name: 'price',
      title: 'Preço do Prato em Kz',
      type: 'number',
      
    },
    {
      name: 'image',
      title: 'Imagem do Prato',
      type: 'image',
      
    },
  ],

}
