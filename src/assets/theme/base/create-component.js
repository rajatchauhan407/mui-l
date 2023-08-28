export function CreateComponents (components) {
  return {
    MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            textTransform: 'none'
          },
          variants: [
            {
              props: { size: 'small' },
              style: {
                fontSize: '12px',
                padding: '6px 12px',
              },
            },
            {
              props: { size: 'medium' },
              style: {
                fontSize: '16px',
                padding: '10px 20px',
              },
            },
            {
              props: { size: 'large' },
              style: {
                fontSize: '20px',
                padding: '14px 28px',
              },
            },
          ],
          textSizeSmall: {
            padding: '7px 12px'
          },
          textSizeMedium: {
            padding: '9px 16px'
          },
          textSizeLarge: {
            padding: '12px 16px'
          }
        }
      }
  }
}