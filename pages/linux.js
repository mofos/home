import React, { Component } from 'react'
import hook1 from '../hooks/hook1'

export class linux extends Component {



    render() {
        hook1('../linux/jor1k.js');
        hook1('../linux/script.js');
        hook1('https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js');
        return (
            <div>
                 <div className="row1" style="margin-top:10px">
                <div className="col-sm-6">
                    <label>
                    Restart with new binary image:
                    <img src="" width="20px" height="20px" title="Restart with new binary image" />
                    <input type="file" id="files" style="visibility:hidden;width:1px; height:1px;" name="files[]" onchange='OnNewImage(this.files)' />
                    </label>
                </div>
            </div>
                
            </div>
        )
    }
}

export default linux
