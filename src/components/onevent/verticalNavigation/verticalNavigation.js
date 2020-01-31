import React, { Component } from 'react';
import style from './verticalNavigation.css';
import Cookies from 'js-cookie';

class VerticalNavigation extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {

        function sectionSelected(selectedNumber){
            // Clean up the classes
            for(var i=1;i<=5;i++){
                document.getElementById("Section"+i).classList.remove(style.color_fade);
                document.getElementById("Section"+i).classList.remove(style.bigger_font);
                document.getElementById("Section"+i).classList.remove(style.color_strong);
            }

            // make the color of the previous selections a little FADE
            for(var i=1;i<selectedNumber;i++){
                document.getElementById("Section"+i).classList.add(style.color_fade);
            }

            // make the color of the selected section STRONGER and BIGGER
            document.getElementById("Section"+selectedNumber).classList.add(style.color_strong);
            document.getElementById("Section"+selectedNumber).classList.add(style.bigger_font);

            // add bigger font on this selection
            for(var i=selectedNumber+1;i<=5;i++){
                document.getElementById("Section"+i).classList.add(style.color_normal);
            }
        }

        function isScrolledIntoView(elem)
        {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        // auto update on scroll
        $(window).scroll(function() {    
            if(isScrolledIntoView($('#Challenges_Section')))
            {
                sectionSelected(1);
            } 
            if(isScrolledIntoView($('#Events_Section')))
            {
                sectionSelected(2);
            } 
            if(isScrolledIntoView($('#Schedule_Section')))
            {
                sectionSelected(3);
            } 
            if(isScrolledIntoView($('#Instagram_Section')))
            {
                sectionSelected(4);
            } 
            if(isScrolledIntoView($('#Location_Section')))
            {
                sectionSelected(5);
            }    
        });


        return (
            <div className={style.vertical_navigation_div}>
                <div className={style.diagonal_text}>
                    <a 
                        id="Section1" 
                        className={style.a_modified} 
                        href="/event#Challenges_Section" 
                        onClick={() => sectionSelected(1)}>Challenges</a><br />
                </div>

                <div className={style.diagonal_text}>
                    <a 
                        id="Section2" 
                        className={style.a_modified} 
                        href="/event#Events_Section" 
                        onClick={() => sectionSelected(2)}>Mini events</a>
                </div>
                <div className={style.diagonal_text}>
                    <a 
                        id="Section3" 
                        className={style.a_modified} 
                        href="/event#Schedule_Section" 
                        onClick={() => sectionSelected(3)}>Schedule</a>
                </div>
                <div className={style.diagonal_text}>
                    <a 
                        id="Section4" 
                        className={style.a_modified} 
                        href="/event#Instagram_Section" 
                        onClick={() => sectionSelected(4)}>Instagram</a>
                </div>
                <div className={style.diagonal_text}>
                    <a 
                        id="Section5" 
                        className={style.a_modified} 
                        href="/event#Location_Section" 
                        onClick={() => sectionSelected(5)}>Location</a>
                </div>
            </div>
    );
  }
}


export default VerticalNavigation;