import React from "react";

export default function About(props) {

//    const [myStyle, setMyStyle] = useState( {
//     color : 'black',
//    backgroundColor: 'white'
// }
// )

  let myStyle ={
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    border: "2px solid white"
  }

   
  return (
    <div className="container" style = {{color: props.mode === 'dark' ? 'white' : '#042743'}}>
     <h1 className = "my-321">About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={myStyle}
            >
             <strong>Manipulate your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style ={myStyle}>
             Text-Manipulator gives you a way to manipulate your text quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style ={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong> Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style ={myStyle}>
              Text-Manipulator is a free character counter tool that provides instant character count and word count stats for a given text. Text-Manipulator reports the number of words and characters. Thus it is suitable for writing text with word/character limit. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style ={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong> Browser Compaitable</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              Text-Manipulator works in any web browsers. It suits to count characters in facebook, blog, books, excel, pdf document, essays,etc.
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
