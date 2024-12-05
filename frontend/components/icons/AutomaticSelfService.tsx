import React from "react";
import { COLORS, Colors } from "styles/var/colors";
import { ICON_SIZES, IconSizes } from "styles/var/icon_sizes";

interface IAutomaticSelfServiceProps {
  size?: IconSizes;
  color?: Colors;
}

const AutomaticSelfService = ({
  size = "medium",
  color = "ui-fleet-black-75",
}: IAutomaticSelfServiceProps) => {
  return (
    <svg
      width={ICON_SIZES[size]}
      height={ICON_SIZES[size]}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.89811 2.40002C6.44011 2.40052 5.04192 2.97992 4.01092 4.01092C2.97948 5.04237 2.40002 6.4413 2.40002 7.89998C2.40002 8.45227 1.95231 8.89998 1.40002 8.89998C0.84774 8.89998 0.400024 8.45227 0.400024 7.89998C0.400024 5.91087 1.1902 4.00323 2.59671 2.59671C4.00323 1.1902 5.91087 0.400024 7.89998 0.400024H7.90374V0.400032C9.94996 0.407729 11.9151 1.19512 13.4 2.5999L13.4 1.4C13.4 0.847715 13.8478 0.400011 14.4001 0.400024C14.9523 0.400038 15.4 0.847765 15.4 1.40005L15.3999 5.01114C15.3999 5.56341 14.9522 6.01111 14.3999 6.01111L10.7889 6.01111C10.2367 6.01111 9.78894 5.5634 9.78894 5.01111C9.78894 4.45883 10.2367 4.01111 10.7889 4.01111H11.981C10.8713 2.98224 9.4144 2.4062 7.89811 2.40002ZM1.39997 9.78889L5.01106 9.7887C5.56334 9.78867 6.01108 10.2364 6.01111 10.7886C6.01114 11.3409 5.56345 11.7887 5.01117 11.7887L3.81877 11.7888C4.56096 12.4769 5.45849 12.9626 6.42532 13.2106C6.96028 13.3478 7.2827 13.8927 7.14546 14.4277C7.00821 14.9627 6.46329 15.2851 5.92833 15.1478C4.6159 14.8112 3.39922 14.1454 2.40002 13.2002V14.3998C2.40002 14.9521 1.95231 15.3998 1.40002 15.3998C0.84774 15.3998 0.400024 14.9521 0.400024 14.3998V10.7889C0.400024 10.2366 0.847706 9.78892 1.39997 9.78889ZM11.4072 10.3145C11.4072 9.92002 11.727 9.60022 12.1215 9.60022C12.516 9.60022 12.8358 9.92002 12.8358 10.3145C12.8358 10.709 12.516 11.0288 12.1215 11.0288C11.727 11.0288 11.4072 10.709 11.4072 10.3145ZM14.8358 10.3145C14.8358 10.8753 14.6657 11.3964 14.3743 11.829C14.4689 11.9058 14.5599 11.9879 14.6469 12.0748C15.3166 12.7446 15.6929 13.653 15.6929 14.6002C15.6929 15.1525 15.2452 15.6002 14.6929 15.6002C14.1406 15.6002 13.6929 15.1525 13.6929 14.6002C13.6929 14.1835 13.5273 13.7838 13.2326 13.4891C12.9379 13.1944 12.5382 13.0288 12.1215 13.0288C11.7047 13.0288 11.305 13.1944 11.0103 13.4891C10.7156 13.7838 10.55 14.1835 10.55 14.6002C10.55 15.1525 10.1023 15.6002 9.55005 15.6002C8.99776 15.6002 8.55005 15.1525 8.55005 14.6002C8.55005 13.653 8.92632 12.7446 9.5961 12.0748C9.68307 11.9879 9.77406 11.9058 9.86864 11.829C9.57726 11.3964 9.40719 10.8753 9.40719 10.3145C9.40719 8.81545 10.6224 7.60022 12.1215 7.60022C13.6205 7.60022 14.8358 8.81545 14.8358 10.3145Z"
        fill={COLORS[color]}
      />
    </svg>
  );
};

export default AutomaticSelfService;