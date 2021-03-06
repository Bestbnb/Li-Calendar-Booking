import React from 'react';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';

const Booking = (props) => (
  <div id='bookingModule' className='booking'>
    <div className='booking booking-margin' style={{marginTop:'32px', marginBottom:'24px', position:'fixed', top:'75px'}}>
      <div className='booking-padding'>
        <div style={{marginTop: '16px', marginBottom: '24px'}}>
          <div className='description'>
          $127 per night
          </div>
          <div className='reviews'>[temp]*****</div>
          <div style={{marginBottom: '8px', marginTop: '8px'}}>
            <div className='divider'></div>
          </div>
          
          <form>
            <div>
              <Dates state={props.state}/>
              <Guests state={props.state} updateAdults={props.updateAdults} updateChildren={props.updateChildren} updateInfants={props.updateInfants}/>
            </div>
              
            <div style={{marginBottom: '8px'}}>
              <div style={{display: 'table', width: '100%', borderSpacing: '0px'}}>
                <div style={{display: 'table-cell', width: '100%', verticalAlign: 'middle'}}>
                  <span>
                    $75 per night
                  </span>

                  <div className='questionButton'>
                    <div style={{position: 'relative', display: 'block'}}>
                      <button className='question-button-styling' style={{padding: '0px', margin: '0px'}} onClick={props.onClickHandlerCost}>
                        <svg viewBox='0 0 24 24' role='img' focusable='false' style={{height: '15px', width: '15px', display: 'block', fill: 'rgb(72, 72, 72)'}}>
                          <path d='m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z' fillRule='evenodd'></path>
                        </svg>
                      </button>
                    </div>
                  {props.state.isCostOpen ? (
                    <div className='q-modal'>
                      <div className='q-modal-styling'>
                        <div style={{textAlign:'left'}}>
                          <div style={{width:'auto', padding:'24px'}}>
                            <div style={{marginRight:'20px'}}>
                              <div className='modal-text'>
                                <div>Base Price Breakdown</div>
                                <div>_______________________________</div>
                                <div>02/04/2019	                $74</div>
                                <div>_______________________________</div>
                                <div>Base Price Breakdown</div>
                                <div>_______________________________</div>
                                <div>02/05/2019                  $74</div>
                                <div>_______________________________</div>
                                <div>Extra Guest Fee	            $23</div>
                                <div>_______________________________</div>
                                <div>Total Base Price           $171</div>
                                <div>_______________________________</div>
                                <div>Average nightly rate is rounded.</div>
                                <div>Includes extra guest fees.</div>
                              </div>  
                            </div>  
                          </div>
                        </div>
                        <svg role="presentation" focusable="false" className="modal-arrow" >
                          <path className='modal-arrow-fill' d="M0,10 20,10 10,0z"></path>
                          <path className='modal-arrow-stroke' d="M0,10 10,0 20,10"></path>
                        </svg>
                      </div>
                    </div>
                  ) : ''}
                  </div>
                </div>

                <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                  <span>
                    $150
                  </span>
                </div>
              </div>

              <div style={{marginBottom: '8px', marginTop: '8px'}}>
                <div className='divider'></div>
              </div>

              <div style={{display: 'table', width: '100%', borderSpacing: '0px'}}>
                <div style={{display: 'table-cell', width: '100%', verticalAlign: 'middle'}}>
                  <span>
                    Cleaning Fee
                  </span>

                  <div className='questionButton'>
                    <div style={{position: 'relative', display: 'block'}}>
                      <button className='question-button-styling'  style={{padding: '0px', margin: '0px'}} onClick={props.onClickHandlerCleaning}>
                        <svg viewBox='0 0 24 24' role='img' focusable='false' style={{height: '15px', width: '15px', display: 'block', fill: 'rgb(72, 72, 72)'}}>
                          <path d='m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z' fillRule='evenodd'></path>
                        </svg>
                      </button>
                    </div>

                    {props.state.isCleaningOpen ? (
                    <div className='q-modal'>
                      <div className='q-modal-styling'>
                        <div style={{textAlign:'left'}}>
                          <div style={{width:'auto', padding:'24px'}}>
                            <div style={{marginRight:'20px'}}>
                              <div className='modal-text' style={{width:'304px'}}>
                                <div>One-time fee charged by host to cover the cost of cleaning their space.</div>
                              </div>  
                            </div>  
                          </div>
                        </div>
                        <svg role="presentation" focusable="false" className="modal-arrow" >
                          <path className='modal-arrow-fill' d="M0,10 20,10 10,0z"></path>
                          <path className='modal-arrow-stroke' d="M0,10 10,0 20,10"></path>
                        </svg>
                      </div>
                    </div>
                  ) : ''}
                  </div>
                </div>

                <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                  <span>
                    $17
                  </span>
                </div>
              </div>

              <div style={{marginBottom: '8px', marginTop: '8px'}}>
                <div className='divider'></div>
              </div>

              <div style={{display: 'table', width: '100%', borderSpacing: '0px'}}>
                <div style={{display: 'table-cell', width: '100%', verticalAlign: 'middle'}}>
                  <span>
                    Service Fee
                  </span>

                  <div className='questionButton'>
                    <div style={{position: 'relative', display: 'block'}}>
                      <button className='question-button-styling'  style={{padding: '0px', margin: '0px'}} onClick={props.onClickHandlerService}>
                        <svg viewBox='0 0 24 24' role='img' focusable='false' style={{height: '15px', width: '15px', display: 'block', fill: 'rgb(72, 72, 72)'}}>
                          <path d='m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z' fillRule='evenodd'></path>
                        </svg>
                      </button>
                    </div>

                    {props.state.isServiceOpen ? (
                    <div className='q-modal'>
                      <div className='q-modal-styling'>
                        <div style={{textAlign:'left'}}>
                          <div style={{width:'auto', padding:'24px'}}>
                            <div style={{marginRight:'20px'}}>
                              <div className='modal-text' style={{width:'304px'}}>
                                <div>This helps us run our platform and offer services like 24/7 support on your trip.</div>
                              </div>  
                            </div>  
                          </div>
                        </div>
                        <svg role="presentation" focusable="false" className="modal-arrow" >
                          <path className='modal-arrow-fill' d="M0,10 20,10 10,0z"></path>
                          <path className='modal-arrow-stroke' d="M0,10 10,0 20,10"></path>
                        </svg>
                      </div>
                    </div>
                  ) : ''}
                  </div>
                </div>

                <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                  <span>
                    $24
                  </span>
                </div>
              </div>

              <div style={{marginBottom: '8px', marginTop: '8px'}}>
                <div className='divider'></div>
              </div>

              <div style={{display: 'table', width: '100%', borderSpacing: '0px'}}>
                <div style={{display: 'table-cell', width: '100%', verticalAlign: 'middle'}}>
                  <span className='total-label'>
                    Total
                  </span>
                </div>

                <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                  <span className='total-label'>
                    $191
                  </span>
                </div>
              </div>

            </div>

            <div style={{marginTop: '24px'}}>
              <button type='submit' className='submit-button'>
                <span>
                  <div className='button-text'>Book</div>
                </span>
              </button>
            </div>

            <div style={{marginTop: '8px'}}>
              <div style={{textAlign: 'center'}}>
                <span className='booking-desc'>You won’t be charged yet</span>
              </div>
            </div>

            <div style={{marginBottom: '24px', marginTop: '24px'}}>
              <div className='divider'></div>
            </div>

            <div style={{minHeight:'46px'}}>
              <div className='diamond-icon' style={{backgroundImage:'url("https://a0.muscache.com/airbnb/static/page3/icon-uc-diamond-86ef3d6403e5b6747d1e3a97ed840b6d.gif")'}}>
                <div style={{display: 'table-cell', width: '100%', verticalAlign: 'middle'}}>
                  <span>
                    This is a rare find!
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div> 
      </div> 
    </div> 
  </div>  
);

export default Booking;

