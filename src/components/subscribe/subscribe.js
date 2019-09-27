import React, { Component } from 'react';
import SubscribeStyles from './subscribe.css';

class Subscribe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subscriberEmail: ''
    };
  }

  newSubscriberHandler(event) {
    /*** Updating the possible subscriber ***/
    this.setState(state => {
      subscriberEmail = event.target.value
    })
  }

  newSubscriberSubmitted() {
    /*** Add the subscriber's email to the database + "Welcome to our Awesome News Feed" automatic message ***/
  }

    render() {
  
      return (
        <div className={SubscribeStyles.Subscribe_Div+' col-xl-12 col-xs-12'}>
          
          <div className={SubscribeStyles.Subscribe_Section}>
            <div className={"container"}>
              <h1 className={SubscribeStyles.h1}>Welcome to Reboothack 2020!</h1>
              <hr className={SubscribeStyles.hr}/>
              {/* <p>Last year was amazing, and we are looking forward to meet new excited participants and see some awesome ideas!</p> */}

              <div className={SubscribeStyles.Section+' col-xl-6'}>
                  <p className={SubscribeStyles.Question}>When? </p>
                  <p className={SubscribeStyles.Answer}>February</p>
              </div>
              <div className={SubscribeStyles.Section+' col-xl-6'}>
                  <p className={SubscribeStyles.Question}>Where? </p>
                  <p className={SubscribeStyles.Answer}>Reykjavík</p>
              </div>

              <div className={SubscribeStyles.Section+' col-xl-12'}>
                <p>More relative information are coming up really soon, so stay tunned!</p>
              </div>

              <div className={SubscribeStyles.Section+' col-xl-12'}>
                <p>We advice you to <a className={SubscribeStyles.Blue_a} data-toggle="modal" data-target="#SubscribeModal">Subscribe</a> to be informed about the latest news!</p>
              </div>
              
            </div>
          </div>

          <div 
            id="SubscribeModal" 
            className={"modal fade"} 
            tabIndex="-1" 
            role="dialog" 
            aria-labelledby="SubscribeModalLabel" 
            aria-hidden="true">

            <div 
              className={"modal-dialog"} 
              role="document">

              <div className={ SubscribeStyles.Subscribe_Modal+" modal-content"}>
                <div className={"modal-header"}>
                  <h5 
                    className={"modal-title"} 
                    id="SubscribeModalLabel">Hurray! Welcome to our AWESOME news feed!</h5>
                    
                    <button 
                      type="button"
                      className={"close"} 
                      data-dismiss="modal" 
                      aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className={"modal-body"}>
                    You are going to get notified about the latest updates as soon as possible!
                    <label>Your email:</label>
                    <input 
                      id="TheAwesomeEmailAdress" 
                      type="text" 
                      placeholder='yourEmail@domain.com'
                      onChange= {this.newSubscriberHandler}></input>
                      {this.state.subscriberEmail!='' ? <p>You're an awesome person, {this.state.subscriberEmail}</p> : null}
                  
                    <button 
                      type="submit" 
                      className={"btn btn-primary"}
                      onClick={
                        () => {
                          this.newSubscriberSubmitted();
                        }
                      }
                      >Subscribe</button>

                  </div>
                  <div className={"modal-footer"}>
                    <button 
                      type="button" 
                      className={"btn btn-secondary"} 
                      data-dismiss="modal">Close</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Subscribe;