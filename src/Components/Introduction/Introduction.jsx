import './introduction.scss';


export default function Introduction() {
    return (
        <div className='introduction' id='introduction'> 
            <div className='wrapper'>
                <div className="left">
                    <h3>My name is: </h3>
                    <h1>James Kirkwood</h1>
                    <h3>I am a full stack web developer</h3>
                </div>
                <div className="right">
                    <img src='Assets/topbar-logo.png' alt='' />
                </div>
            </div>
        </div>
    )
};
