var React = require('react/addons');


var ImagesComponent = React.createClass({

    render : function() {

        let abc = ['a','b'];

        return (
            <div>

            {abc[0]}
            <p> fart</p>

            <ul>
            {
              abc.map( (valuee) => {
                return ( <li> {valuee} </li> );
              })
            }
            </ul>


            </div>
        )
    }
});

module.exports = ImagesComponent;
