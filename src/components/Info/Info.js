import React from 'react';

import './info.css'
import Buttons from '../Buttons/Buttons';
import ImageComponent from '../ImageComponent/ImageComponent';
import MagComponent from '../ImageComponent/ImageComponent';

const Info = () => {
    return (
        <div>
      <div className="ContainerStudent">
        <div>
          <ImageComponent src={MagComponent} />
        </div>
        <div>
          <h2>Hacktiv8 Meetup</h2>
          <h3>Location Jakarta,Indonesia</h3>
          <h3>Member  1,078</h3>
          <h3>Organize AdhyWiranata</h3>
          <Buttons primary="primary" text="Join Us!"></Buttons>
                <Buttons text="Subscribe"></Buttons>
        </div>
      </div>
    </div>
        
    )
}

export default Info ;