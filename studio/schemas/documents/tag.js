export default {
  name: 'tag',
  title: 'Portfolio Tag',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'isSkill',
      type: 'boolean',
      title: 'Is this a skill?', 
      description : 'Is this tag applicable to showcase in your skills and experience section?'
    }
  ]
}