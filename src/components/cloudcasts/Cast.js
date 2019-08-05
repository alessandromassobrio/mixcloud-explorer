import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import mixcloudContext from '../../context/mixcloud/mixcloudContext';

const Cast = ({ match }) => {
    const apiContext = useContext(mixcloudContext);

    const { getCast, loading, cast } = apiContext;

    useEffect(() => {
        getCast(match.params.username, match.params.slug);
        // eslint-disable-next-line
    }, []);

    const { 
        slug,
        name,
        url,
        play_count,
        description,
        user: { username, pictures: { thumbnail } = { large: 'no match' } } = { username: 'no match' } 
    } = cast;

    if (loading) {
       return <Spinner />
    }

    return (
        <Fragment>
            <Link to='/' className="btn btn-light mt-3" style={{padding:'0 15px'}}>
                &laquo; Search
            </Link>
            <div className='row mt-0.5'>
                <div className='col xl12 l12 m12 s12 mb-3'>
                    <h2>{name}</h2>
                    <h5 >{description}</h5>
                    <iframe 
                    className='mt-2'
                    width="100%"
                    height="120"
                    src={
                        `https://www.mixcloud.com/widget/iframe/?hide_cover=1&autoplay=1&feed=%2F${username}%2F${slug}%2F`
                        }
                    title={`${slug}`}
                    frameBorder='0'
                    >
                    </iframe>
                <div className='col xl3 l6 m3 s12 mt-3'>
                    <img src={thumbnail} alt={username} style={{width: 'auto', borderRadius: '50%'}} />
                </div>
                <div className='col xl9 l6 m9 s12 mt-3'>
                    <h6>{username}</h6>
                    <h6><a href={url} rel='noopener noreferrer' target='_blank'>{url}</a></h6>
                    <h6>Played <b>{play_count}</b> times</h6>
                </div>
                </div>   
            </div>       
        </Fragment>
    );
};

export default Cast;
