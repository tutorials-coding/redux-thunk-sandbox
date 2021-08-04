import Alert from 'react-bootstrap/Alert'

export const Notifications = () => {
  const notifications = []
  return (
    <div>
      {notifications.map((n) => (
        <Alert key={n.id} variant={n.type}>
          <Alert.Heading>{n.title}</Alert.Heading>
          <p>{n.text}</p>
        </Alert>
      ))}
    </div>
  )
}
