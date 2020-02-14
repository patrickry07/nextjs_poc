import React from "react";

const Cat = data => {
  console.log(data);
  console.log(data.url);
  return (
    <>
      <iframe src={data.url}></iframe>
      <div>your Cat image is located at {data.url} </div>
    </>
  );
};
export default Cat;
