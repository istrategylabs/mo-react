import React from 'react';
import Helmet from 'react-helmet';

const Meta = (props) => {
  return <Helmet>
    {props.title ? <title>{props.title}</title> : null}
    {props.description ? <meta property="og:description" content={props.description} /> : null}
    {props.description ? <meta name="description" content={props.description} /> : null}
    {props.site_name ? <meta name="twitter:site" content={props.site_name} /> : null}
    {props.creator ? <meta name="twitter:creator" content={props.creator} /> : null}
    {props.img ? <meta property="og:image" content={props.image} /> : null}
    {props.url ? <meta property="og:url" content={props.url} /> : null}
    {props.type ? <meta property="og:type" content={props.type} /> : null}
    {props.twitter_profile ? <meta property="og:type" content={props.twitter_profile} /> : null}
  </Helmet>
}

export default Meta;
