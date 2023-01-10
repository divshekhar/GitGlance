import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import "./Modal.css";

interface Props {
  url: string;
}

export default function Modal(props: Props) {
  // content state
  const [content, setContent] = useState("");
  const [fetching, setFetching] = useState(false);

  // get url from props
  let url = props.url;

  // replace github.com with raw.githubusercontent.com
  url = url.replace("github.com", "raw.githubusercontent.com");

  // remove /blob/ from url
  url = url.replace("/blob/", "/");

  // get content from the url
  useEffect(() => {
    const fetchContent = async () => {
      setFetching(true);
      const response = await fetch(url);
      setContent(await response.text());
      setFetching(false);
    };

    fetchContent();
  }, []);

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>GitGlance</p>
        <p>Url: {props.url}</p>
        <p>Raw Url: {url}</p>
        {fetching && <p>Fetching Content...</p>}
        {!fetching && <CopyBlock text={content} showLineNumbers={true} theme={dracula} wrapLines />}
      </div>
    </div>
  );
}
