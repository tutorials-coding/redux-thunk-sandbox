const mockUsers = [
  {
    id: 1,
    name: 'user1 name',
    username: 'user1',
    email: 'user1@name.name',
    address: {
      street: 'user1 address',
      suite: 'user1 address suite',
      city: 'user1 city',
      zipcode: 'user1 zipcode',
    },
  },
  {
    id: 2,
    name: 'user2 name',
    username: 'user2',
    email: 'user2@name.name',
    address: {
      street: 'user2 address',
      suite: 'user2 address suite',
      city: 'user2 city',
      zipcode: 'user2 zipcode',
    },
  },
]

export const getUser = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers.find((user) => user.id === userId))
    }, 500)
  })
}
