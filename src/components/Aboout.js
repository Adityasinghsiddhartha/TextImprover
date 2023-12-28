import React, { useState } from 'react'

export default function Aboout(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })
    let myStyle = {
        color: props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'rgba(36 74 104)':'white'
    }
    // const [btntext, setBtnText] = useState("Enable Light Mode")
    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
               
    //         })
    //         setBtnText("Enble Dark Mode")
    //     } else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }
 
    return (
        <>
            <div className='container border border-4' style={myStyle}>
                <h2>About Us</h2>
                <div id="accordion" style={myStyle}>
                    <div className="card border border-3" style={myStyle}>
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" style={myStyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                   <strong> Analyze your Text</strong> 
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                               TextImprover gives you a way to analyze your text quickly and efficiently. Be it word count, character count or....
                            </div>
                        </div>
                    </div>
                    <div className="card border border-3" style={myStyle}>
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" style={myStyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                   <strong>Free to use</strong> 
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                TextImprover is a free character counter tool that provides instant character count and count statistics for a given text. TextImprover reports the number of words and character. Thus it is suitable for writing text with word/ character limits.
                            </div>
                        </div>
                    </div>
                    <div className="card border border-3" style={myStyle}>
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" style={myStyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  <strong>Browser Compatible</strong> 
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                This word counter software works in any web browsers such as Chrome, Firefox, Internet explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document etc.
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}
