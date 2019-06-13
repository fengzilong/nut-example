import React from 'react'

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <h4>React Example</h4>
        <button
          style={{
            color: 'blue',
            outline: 'none',
            border: 'none',
            borderRadius: '40px',
            padding: '0 32px',
            height: '32px',
            whiteSpace: 'nowrap',
            wordBreak: 'break-all',
            color: '#fff',
            cursor: 'pointer',
            backgroundImage: 'linear-gradient(-90deg, #FF0000 0%, #FF3164 100%)',
          }}
          onClick={ this.handleClick.bind( this ) }
        >Hello</button>
      </div>
    )
  }

  handleClick() {
    alert( 'World!' )
  }
}
