/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.node.json", // ts-jest config goes here
        // Add any other ts-jest options here if needed
      },
    ],
  },
};
