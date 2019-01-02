import React from 'react';
import GuestDropDownMenu from './GuestDropDownMenu.jsx';

const DownArrow = () => (
  <svg className='guest-arrow' viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
    <path d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z" fillRule="evenodd"></path>
  </svg>
);

const UpArrow = () => (
  <svg className='guest-arrow' viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
    <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
  </svg>
);


class Guests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

  }

  onClickHandler(e) {
    e.preventDefault();
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  // toggleShow(e) {
  //   e.preventDefault();
  //   const {show} = this.state;
  //   this.setState( {show: !show} );
  // }

  render() {
    return (
      <div className='guests'>

      <label className='label-entry'>
        <span className='label'>Guests</span>
      </label>

      <div className=''>
        <button className='guest-button' onClick={this.onClickHandler.bind(this)} aria-expanded={this.state.isOpen}>
          <div className='LRbuffer8'>
            <div className='guest3'>
              <div className='guest-table'>
                <span className='guest-button-label'>[temp] 1 guest</span>
              </div>
            </div>
            <input type='hidden' id='number_of_guests' value='1'></input>
            <input type='hidden' id='number_of_adults' value='0'></input>
            <input type='hidden' id='number_of_children' value='0'></input>
            <input type='hidden' id='number_of_infants' value='0'></input>
            <div style={{'display': 'table-cell', 'verticalAlign': 'middle'}}> 
              {this.state.isOpen ? (
                <DownArrow />
                ) :
                <UpArrow />
              }

            </div>
            
            <div>
              {this.state.isOpen ? (
                <GuestDropDownMenu />
              ) : null}

            </div>

          </div>
        </button>
      </div>
      {/* <div>{this.state.isOpen && <GuestDropDownMenu />}</div> */}
    </div>
    )
  };
};


export default Guests;

{/* <button type='button' aria-expanded='false'>
<div className='guest-button'>
  <div className='guest-label'>[temp]2 guests, 1 infant</div>
</div>
<svg id='guest-drop-down-button' viewBox='0 0 18 18' role='presentation' aria-hidden='true' focusable='false'>^</svg>
</button> */}