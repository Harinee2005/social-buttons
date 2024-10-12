const Button = props => {
  const {content, classBg} = props
  return <button className={`${classBg} button`}>{content}</button>
}

const element = (
  <div className='background'>
    <h1 className='heading'>Social Buttons</h1>
    <div className='btn-container'>
      <Button content='Like' classBg='yellow' />
      <Button content='Comment' classBg='white' />
      <Button content='Share' classBg='blue' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
