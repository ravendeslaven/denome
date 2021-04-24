const e = React.createElement

return e(
    'button',
    { onClick : () => this.setState({ liked: true })},
    'Like'
)