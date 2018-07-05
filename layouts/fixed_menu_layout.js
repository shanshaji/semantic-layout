import React, { Component } from 'react'
import {Container} from 'semantic-ui-react';
import { CSSTransitionGroup } from 'react-transition-group';

import MainHeader from '../components/main-header/index';
import MainFooter from '../components/main-footer/index';

class FixedMenuLayout extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
        var topOffset = 58;
        let height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            let currentHeight = {minHeight: height+"px"};
            this.setState({wrapperHeight: currentHeight})
        }
    }

    
    render(){
        const {children, ...rest} = this.props;
        return(
            <div className="Site">
                <MainHeader/>
                
                <Container text className="Site-content">
                    <div key={children.props.location.pathname}>
                        <CSSTransitionGroup
                            transitionName="animation"
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionEnter={false}
                            transitionLeave={false}
                        >
                            {children}
                        </CSSTransitionGroup>
                    </div>
               
                </Container>
                <MainFooter/>
            </div>
        )
    }
}

export default FixedMenuLayout