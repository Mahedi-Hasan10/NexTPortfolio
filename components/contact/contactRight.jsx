import React from "react";

const CodeDisplay = () => {
  const code = `
1  const button = document.querySelector('#sendBtn');
2  const message = {
3  name: "",
4  email: "",
5  message: "",
6  date: "Thu Dec 07 2023"
7  }
8  button.addEventListener('click', () => {
9  // Replace form.send(message); with your intended functionality
10 // For demonstration, let's console log the message
11 console.log(message);
12 });
  `;

  return (
    <div className="flex text-[#607B96] items-center ">
      <pre className=" p-4 text-md">{code}</pre>
    </div>
  );
};

export default CodeDisplay;
