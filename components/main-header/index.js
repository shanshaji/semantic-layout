import React, { Component } from 'react'
import {
    Container,
    Divider,
    Dropdown,
    Header,
    Image,
    Menu,
  } from 'semantic-ui-react';
  import {Link} from 'react-router-dom';

class MainHeader extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as={Link} name='homepage' to='/' header>
                    <Image size='small' src='https://www.rubykraft.com/assets/logo-be937eb914dfe98b514c900d1fc6e56214158065e595207e2483dd116595f389.png' style={{ marginRight: '1.5em' }} />
                    POS
                    </Menu.Item>
                    <Menu.Item as={ Link } name='theatres' to='/theatres' >Home</Menu.Item>

                    <Dropdown item simple text='Quick Actions'>
                    <Dropdown.Menu>
                        <Dropdown.Item as={ Link } name='screens' to='/screens/new'>Add Screens</Dropdown.Item>
                        <Dropdown.Item as={ Link } name='seat-types' to='/seat-types/new'>Add Seat Types</Dropdown.Item>
                        <Dropdown.Item as={ Link } name='seats' to='/seats/new'>Add Seats</Dropdown.Item>
                        <Dropdown.Item as={ Link } name='seats' to='/seats/editseatLayout'>Edit Seat Layout</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>Header Item</Dropdown.Header>
                        <Dropdown.Item>
                        <i className='dropdown icon' />
                        <span className='text'>Submenu</span>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item as={ Link } name='screens' to='/screens' >Screens</Menu.Item>
                    <Menu.Item as={ Link } name='seat-types' to='/seat-types' >Seat Types</Menu.Item> 
                </Container>
            </Menu>

        )
    }
}
export default MainHeader