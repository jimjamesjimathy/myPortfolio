import { useState, useEffect } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';

import { 
    featuredPortfolio,
    webPortfolio,
    contentPortfolio, 
    mobilePortfolio} from '../../data';


import './portfolio.scss';

export default function Portfolio() {
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);
    const list = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web'
        },
        {
            id: 'mobile',
            title: 'Mobile'
        },
        {
            id: 'photos',
            title: 'Photos'
        }
    ];


    useEffect(() => {
       switch(selected) {
           case 'featured':
               setData(featuredPortfolio);
               break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'photos':
                setData(contentPortfolio)
                break;
            default:
                setData(featuredPortfolio);
       }
    }, [selected])



    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <div className='listWrap'>
                <ul>
                    {list.map((item) => (
                        <PortfolioList
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                            key={item.id}
                        />
                    ))}
                </ul>
            </div>

            <div className='container'>
                {
                data.map(newData => (
                    <div key={newData.id} className='item'>
                        <img src={newData.img} alt='text'/>
                        <h3>{newData.title}</h3>
                    </div>))
                }
            </div>
        </div>
    )
}
