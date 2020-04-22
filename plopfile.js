module.exports = (plop) => {
  plop.setGenerator("app", {
    description: "Create the basic structure of the app",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your app name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/app/App.js",
        templateFile: "plop-templates/src/app/App.js.hbs",
      },
      {
        type: "add",
        path: "src/app/App.test.js",
        templateFile: "plop-templates/src/app/App.test.js.hbs",
      },
      {
        type: "add",
        path: "src/app/index.js",
        templateFile: "plop-templates/src/app/index.js.hbs",
      },
      {
        type: "add",
        path: "src/index.js",
        templateFile: "plop-templates/src/index.js.hbs",
      },
      {
        type: "add",
        path: "public/index.html",
        templateFile: "plop-templates/public/index.html.hbs",
      },
      {
        type: "add",
        path: "README.md",
        templateFile: "plop-templates/README.md.hbs",
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
        templateFile:
          "plop-templates/src/components/Component/Component.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile:
          "plop-templates/src/components/Component/Component.test.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/src/components/Component/index.js.hbs",
      },
      {
        type: "add",
        path: "src/components/index.js",
        templateFile: "plop-templates/src/components/index.js.hbs",
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
        templateFile: "plop-templates/src/pages/Page/Page.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "plop-templates/src/pages/Page/Page.test.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/src/pages/Page/index.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/index.js",
        templateFile: "plop-templates/src/pages/index.js.hbs",
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
        path: "src/services/{{pascalCase name}}.js",
        templateFile: "plop-templates/src/services/Service/Service.js.hbs",
      },
      {
        type: "add",
        path: "src/services/index.js",
        templateFile: "plop-templates/src/services/index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/services/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/services/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
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
        path: "src/hooks/{{pascalCase name}}.js",
        templateFile: "plop-templates/src/hooks/Hook/Hook.js.hbs",
      },
      {
        type: "add",
        path: "src/hooks/index.js",
        templateFile: "plop-templates/src/hooks/index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/hooks/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/hooks/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });
};
