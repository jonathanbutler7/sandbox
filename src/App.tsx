import React from "react";
import { Text, ThemeProvider, useHoverLabel } from "@weave/design-system";
import { theme } from "@weave/theme";

function App() {
  const { HoverLabel, labelProps, triggerProps } = useHoverLabel({
    placement: "top",
  });

  return (
    <ThemeProvider includeEmotionTheme>
      <Text
        weight="bold"
        {...triggerProps}
        style={{ display: "inline-block", color: theme.colors.primary80 }}
      >
        Hover to see label
      </Text>
      <HoverLabel {...labelProps}>I am a hover label</HoverLabel>
    </ThemeProvider>
  );
}

export default App;
