module.exports = (plop) => {
  plop.setGenerator("app", {
    description: "Create the App component",
    prompts: [],
    actions: [
      {
        type: "add",
        path: "src/app/App.js",
        templateFile: "plop-templates/app/App.js",
      },
      {
        type: "add",
        path: "src/app/App.test.js",
        templateFile: "plop-templates/app/App.test.js",
      },
      {
        type: "add",
        path: "src/app/index.js",
        templateFile: "plop-templates/app/index.js",
      },
    ],
  });

  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/components/Component/Component.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile:
          "plop-templates/components/Component/Component.test.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/components/Component/index.js.hbs",
      },
      {
        type: "add",
        path: "src/components/index.js",
        templateFile: "plop-templates/components/index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });

  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/pages/Page/Page.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "plop-templates/pages/Page/Page.test.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/pages/Page/index.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/index.js",
        templateFile: "plop-templates/pages/index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/pages/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/pages/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });

  plop.setGenerator("service", {
    description: "Create a service",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your service name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/services/{{camelCase name}}.js",
        templateFile: "plop-templates/services/Service/Service.js.hbs",
      },
      {
        type: "add",
        path: "src/services/index.js",
        templateFile: "plop-templates/services/index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/services/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`,
      },
      {
        type: "append",
        path: "src/services/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`,
      },
    ],
  });

  plop.setGenerator("hook", {
    description: "Create a custom react hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your hook name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}.js",
        templateFile: "plop-templates/hooks/Hook/Hook.js.hbs",
      },
      {
        type: "add",
        path: "src/hooks/index.js",
        templateFile: "plop-templates/hooks/index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/hooks/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`,
      },
      {
        type: "append",
        path: "src/hooks/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`,
      },
    ],
  });
};
