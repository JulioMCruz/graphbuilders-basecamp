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
            <code className="language-solidity">{`contract Moon is Ownable{

    address public burner = 0x0000000000000000000000000000000000000000;

    constructor() Ownable(burner) {}

    receive() external payable {}
}
`}</code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          Next, we will be updating the smart contract to inherit the ERC-20 standard. The ERC-20 standard is the most
          popular standard for creating a token on Ethereum. It defines a set of functions that a token contract must
          implement.
        </p>
      </div>
      <h1 className="flex justify-center text-2xl font-bold">
        {" "}
        📝 Task 1: Add the ERC-20 Standard to the Moon Contract
      </h1>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl mb-4">To complete this task, follow these steps:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <ul className="list-disc list-inside mb-4">
          <li>Import the ERC-20 contract from OpenZeppelin.</li>
          <li>Inherit the ERC-20 contract from OpenZeppelin.</li>
          <li>Initialize the ERC-20 contract with the name and symbol.</li>
          <li>Mint the initial supply to your wallet.</li>
        </ul>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <ul>
          <li>
            <a target="_blank" href="https://docs.openzeppelin.com/contracts/4.x/erc20">
              {" "}
              👉🏼 Look at this page if you get lost... OpenZeppelin (ERC-20) 🔎
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
              {`deployed at 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 with 747494 gas`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          Now that your contract is deployed, let's create an extended subgraph.
        </p>
      </div>
    </>
  );
};

export default SolidityContent;
