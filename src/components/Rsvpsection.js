import React from 'react'

function Rsvpsection() {
    return (
        <>
            {/* RSVP section */}
            <div className="w3-container w3-padding-64 w3-pale-red w3-center w3-wide" id="rsvp">
                <h1>HOPE YOU CAN MAKE IT!</h1>
                <p className="w3-large">Kindly Respond By January, 2017</p>
                <p className="w3-xlarge">
                    <button onclick="document.getElementById('id01').style.display='block'" className="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style={{ padding: '8px 60px' }}>RSVP</button>
                </p>
            </div>
        </>
    )
}

export default Rsvpsection
