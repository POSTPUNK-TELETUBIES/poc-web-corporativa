import { SvgIcon, SvgIconProps } from "@mui/material";

export const ConcaveWave = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
    >
      <path
        d="M-2.83,27.80 S 97.17,76.55 102.83,80.30 197.16,97.18 262.04,99.05 397.16,78.43 500.85,14.68 L500.28,168.43 L-3.40,164.68 Z"
        style={{stroke: 'none', fill: '#FFF'}}
      />
    </svg>
  </SvgIcon>
);
