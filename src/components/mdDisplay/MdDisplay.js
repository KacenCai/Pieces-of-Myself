import React from 'react'
// import PropTypes from 'prop-types'

import ReactMarkdown from 'react-markdown';

const MdDisplay = props => {

  //https://stackoverflow.com/questions/71039926/how-to-import-md-file-when-i-use-create-react-app-with-javascript
  const inputMdText = props.inputMdText;

  let [readable, setReadable] = React.useState({ md: "" });

  // https://stackoverflow.com/a/71552116/20787775
  React.useEffect(() => {
    fetch(inputMdText)
      .then((res) => res.text())
      .then((md) => {
        setReadable({ md });
      });
  }, [inputMdText]);



  return (
    <div>
      <ReactMarkdown children={readable.md} />
    </div>
  )
}

// MdDisplay.propTypes = {}

export default MdDisplay