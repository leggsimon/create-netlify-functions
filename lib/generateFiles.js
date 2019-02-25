const generateReadme = basename => {
	return `# ${basename}

Welcome to your new Netlify functions project. The directory structure here is

\`\`\`
├── README.md
├── babel.config.js
├── lambdas
│   ├── hello - world.js
│   └── spec
│       └── hello - world.spec.js
├── netlify.toml
└── package.json
\`\`\`

Your lambdas are created by each \`.js\` file in the \`lambdas\` directory. The file name determines the endpoint that netlify gives your function. So this one would be available at \`https://<something>.netlify.com/.netlify/functions/hello-world\`. (Don’t worry, \`.spec.js\` and \`.test.js\` files are ignored automatically.

## Commands

\`\`\`sh
npm test # runs your tests
npm run dev # transpiles your lambdas and serves them on localhost:9000 incl. retranspiling on save
npm run build # runs a production build of your lambdas for deployment, the netlify.toml tells them to run this
\`\`\`

See the Netlify functions documentation at https://www.netlify.com/docs/functions/
`;
};

const generatePackageJson = basename => {
	return {
		name: basename || 'my-netlify-lambda',
		description: '',
		scripts: {
			build: 'netlify-lambda build lambdas',
			dev: 'netlify-lambda serve lambdas',
			test: 'jest',
		},
		devDependencies: {
			'@babel/core': '^7.2.2',
			'@babel/preset-env': '^7.3.1',
			jest: '^24.1.0',
			'netlify-lambda': '^1.3.3',
		},
	};
};

module.exports = {
	generatePackageJson,
	generateReadme,
};
