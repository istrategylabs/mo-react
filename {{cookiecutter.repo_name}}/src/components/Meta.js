import React from 'react';
import Helmet from 'react-helmet';

const Meta = (props) => {
  return <Helmet>
    {props.title ? <title>{props.title}</title> : null}
    {props.description ? <meta property="og:description" content={props.description} /> : null}
    {props.description ? <meta name="description" content={props.description} /> : null}
    {props.site_name ? <meta name="twitter:site" content={meta.twitter_profile} /> : null}
    {props.creator ? <meta name="twitter:creator" content={meta.creator} /> : null}
    {props.img ? <meta property="og:image" content={meta.image} /> : null}
    {props.url ? <meta property="og:url" content={meta} /> : null}
    {props.type ? <meta property="og:type" content={meta.type} /> : null}
    {props.twitter_profile ? <meta property="og:type" content={meta.type} /> : null}

  </Helmet>
}

export default Meta;
