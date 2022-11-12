export default {
  name: 'category',
  title: 'Categoria de Menus',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome da Categoria',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Imagem',
      type: 'image',
    },
  ],
}
