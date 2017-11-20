/**
 * Created by kong333 on 2017. 11. 13..
 */
import React from 'react';

class Content extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
            </div>
        )
    }
}
/*Content.propTypes = {
    title: React.PropTypes.String,
    body: React.PropTypes.string.isRequired
};*/

export default Content;