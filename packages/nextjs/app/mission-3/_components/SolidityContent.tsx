import React from "react";
import CodeSnippet from "./CodeSnippet";

const SolidityContent: React.FC = () => {
  return (
    <>
      {/* Part 1 */}
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          In this mission you will be creating a token that will be used to establish a lunar economy. In this mission
          you will learn how to use the ERC-20 standard and create an extended subgraph to index the token's data.
        </p>
      </div>
      <div className="flex justify-center top">
        <h3 className="text-2xl pt-4 text-center max-w-2xl">Environment Setup</h3>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Before you begin, make sure you are in the proper branch.</p>
      </div>
      <CodeSnippet code="git checkout mission-3-moon" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Then be sure to install the dependencies.</p>
      </div>
      <CodeSnippet code="yarn install" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Start your local blockchain.</p>
      </div>
      <CodeSnippet code="yarn chain" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Then start your frontend, in a new terminal.</p>
      </div>
      <CodeSnippet code="yarn start" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Now that our environment is setup, let's begin the mission.</p>
      </div>
      <div className="flex justify-center top">
        <h3 className="text-2xl pt-4 text-center max-w-2xl">Mission Steps:</h3>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">The starting smart contract code for this mission is as follows:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
          <pre>
            <code className="language-solidity">{``}</code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Explain the ERC-20 standard and how it works under the hood.</p>
      </div>
      <h1 className="flex justify-center text-2xl font-bold"> 📝 Task 1: TBD</h1>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl mb-4">To complete this task, follow these steps:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <ul className="list-disc list-inside mb-4">
          <li>TBD</li>
        </ul>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <ul>
          <li>
            <a target="_blank" href="https://docs.openzeppelin.com/contracts/2.x/access-control">
              {" "}
              👉🏼 Look at this page if you get lost... OpenZeppelin (Access Control) 🔎
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Deploy your changes...</p>
      </div>
      <CodeSnippet code="yarn deploy --reset" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">✅ Success will look like this: 👇🏼</p>
      </div>

      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
          <pre>
            <code className="language-solidity">
              {`deployed at 0x0165878A594ca255338adfa4d48449f69242Eb8F with 378023 gas`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          Once you deploy your changes navigate to the "Debug Contracts" tab and call the{" "}
          <span className="highlight-code">establishComms</span> function to test the functionality. You will need to
          attempt to call the function multiple times until the secret matches your attempt. When testing on your local
          network you can use the Faucet button to simulate a new block. You will know you are successful when the
          <span className="highlight-code">isCommsEstablished</span> variable is set to true.
        </p>
      </div>
    </>
  );
};

export default SolidityContent;