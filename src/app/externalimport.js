import React, { Component } from 'react';

class ExternalImport extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
                <script src="https://static.cargo.site/scripts/loader.js" data-name="cycle"></script>
            </div>
        );
    }
}

export default ExternalImport;