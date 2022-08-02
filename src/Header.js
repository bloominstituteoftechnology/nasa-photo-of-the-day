import Dropdown from './Dropdown'

const Header = props => {

    return(
        <header className = 'header'>
        <div className = 'headerItems'>
        <p className='text text1'>Photo Of The Day: {props.title}</p> 
        <p className='text'>Date: {props.date}</p> 
        <p className='text text2'>Choose a different day</p>
        <Dropdown setDate={props.setDate}/>
        </div>
        </header>
    
    )
}


export default Header;


