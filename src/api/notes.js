const mockNotes = [
  {
    id: 1,
    userId: 1,
    content: 'note 1 content',
  },
  {
    id: 2,
    userId: 1,
    content: 'note 2 content',
  },
  {
    id: 3,
    userId: 1,
    content: 'note 3 content',
  },
  {
    id: 4,
    userId: 2,
    content: 'note 4 content',
  },
  {
    id: 5,
    userId: 2,
    content: 'note 5 content',
  },
  {
    id: 6,
    userId: 2,
    content: 'note 6 content',
  },
]

export const getUserNotes = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNotes.filter((note) => note.userId === userId))
    }, 500)
  })
}
