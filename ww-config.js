export default {
  editor: {
    label: {
      en: "Shadcn Kit",
    },
    icon: "fontawesome/solid/cube",
  },
  properties: {
    componentType: {
      label: { en: "Component Type" },
      type: "TextSelect",
      options: {
        options: [
          { value: "button", label: { en: "Button" } },
          { value: "input", label: { en: "Input" } },
          { value: "badge", label: { en: "Badge" } },
          { value: "switch", label: { en: "Switch" } },
        ],
      },
      defaultValue: "button",
    },
    // Button Props
    label: {
      label: { en: "Label" },
      type: "Text",
      defaultValue: "Click me",
      bindable: true,
      /* wwEditor:start */
      hidden: (content) => content.componentType !== 'button',
      /* wwEditor:end */
    },
    variant: {
      label: { en: "Variant" },
      type: "TextSelect",
      options: {
        options: [
          { value: "default", label: { en: "Default" } },
          { value: "secondary", label: { en: "Secondary" } },
          { value: "destructive", label: { en: "Destructive" } },
          { value: "outline", label: { en: "Outline" } },
          { value: "ghost", label: { en: "Ghost" } },
          { value: "link", label: { en: "Link" } },
        ],
      },
      defaultValue: "default",
      /* wwEditor:start */
      hidden: (content) => content.componentType !== 'button' && content.componentType !== 'badge',
      /* wwEditor:end */
    },
    size: {
      label: { en: "Size" },
      type: "TextSelect",
      options: {
        options: [
          { value: "default", label: { en: "Default" } },
          { value: "sm", label: { en: "Small" } },
          { value: "lg", label: { en: "Large" } },
          { value: "icon", label: { en: "Icon" } },
        ],
      },
      defaultValue: "default",
      /* wwEditor:start */
      hidden: (content) => content.componentType !== 'button',
      /* wwEditor:end */
    },
    // Input Props
    placeholder: {
      label: { en: "Placeholder" },
      type: "Text",
      defaultValue: "Type here...",
      bindable: true,
      /* wwEditor:start */
      hidden: (content) => content.componentType !== 'input',
      /* wwEditor:end */
    },
    value: {
      label: { en: "Value" },
      type: "Text",
      defaultValue: "",
      bindable: true,
      /* wwEditor:start */
      hidden: (content) => content.componentType !== 'input',
      /* wwEditor:end */
    },
    // Badge Props
    badgeText: {
      label: { en: "Badge Text" },
      type: "Text",
      defaultValue: "New",
      bindable: true,
      /* wwEditor:start */
      hidden: (content) => content.componentType !== 'badge',
      /* wwEditor:end */
    },
  },
};
