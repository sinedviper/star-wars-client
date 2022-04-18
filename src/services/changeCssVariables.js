export const changeCssVariables = (theme) => {
  const root = document.querySelector(":root");

  const cssVariable = ["header", "bgimage"];

  cssVariable.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  });
};
