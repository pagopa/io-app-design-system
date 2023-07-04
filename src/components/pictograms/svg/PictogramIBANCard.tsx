import React from "react";
import { Svg, G, Mask, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const IBANCard = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 236 134" {...props}>
    <Path
      fill="#AAEEEF"
      fill-rule="evenodd"
      d="M6.752 0a4 4 0 0 0-4 4v109.372a4 4 0 0 0 4 4h174.164a29.835 29.835 0 0 1-.916-7.357c0-16.448 13.334-29.781 29.781-29.781 2.302 0 4.542.261 6.693.755V4a4 4 0 0 0-4-4H6.752Z"
      clip-rule="evenodd"
    />
    <Path
      fill="#00C5CA"
      fill-rule="evenodd"
      d="M68 17.527a1 1 0 0 1 1-1h130a1 1 0 0 1 0 2H69a1 1 0 0 1-1-1ZM68 28a1 1 0 0 1 1-1h79a1 1 0 0 1 0 2H69a1 1 0 0 1-1-1Z"
      clip-rule="evenodd"
    />
    <Path
      fill="#00C5CA"
      d="M77.08 56v-1.5h1.695V47H77.08v-1.5h5.01V47h-1.695v7.5h1.695V56h-5.01Zm9.548 0v-8.94h-2.94V45.5h7.59v1.56h-3.03V56h-1.62Zm12.637-.735v-8.52l.555.42-2.07 1.095-.435-1.41 2.805-1.5h.78v9.915h-1.635ZM97.6 56v-1.56h5.01V56H97.6Zm7.305 0-.495-1.23 3.21-3.615c.17-.18.345-.385.525-.615.19-.24.37-.485.54-.735.17-.25.305-.495.405-.735.11-.25.165-.485.165-.705 0-.32-.065-.59-.195-.81-.12-.23-.3-.405-.54-.525-.23-.12-.51-.18-.84-.18-.29 0-.575.085-.855.255-.28.17-.535.41-.765.72-.23.31-.41.67-.54 1.08l-1.245-.78a4.1 4.1 0 0 1 .765-1.485c.35-.42.765-.74 1.245-.96.49-.22 1.02-.33 1.59-.33.59 0 1.115.125 1.575.375.46.24.82.58 1.08 1.02.26.43.39.93.39 1.5 0 .29-.04.59-.12.9-.08.3-.21.615-.39.945-.17.33-.39.68-.66 1.05-.27.36-.595.745-.975 1.155l-2.385 2.595-.3-.45h5.16V56h-6.345Zm14.792.15c-.74 0-1.385-.17-1.935-.51-.54-.34-1.05-.91-1.53-1.71l1.26-.795c.25.37.495.675.735.915.25.23.505.4.765.51.26.11.535.165.825.165.35 0 .675-.085.975-.255.3-.18.54-.425.72-.735.18-.31.27-.66.27-1.05s-.07-.72-.21-.99a1.39 1.39 0 0 0-.615-.63c-.27-.15-.59-.225-.96-.225-.17 0-.35.02-.54.06-.18.03-.375.08-.585.15-.21.06-.44.14-.69.24l-.45-1.185 3.24-3.57.315.465h-4.47v-1.5h6.015l.3.6-3.435 3.81-.375-.39c.08-.04.21-.075.39-.105.19-.04.345-.06.465-.06.44 0 .85.085 1.23.255.39.16.725.39 1.005.69.29.29.515.635.675 1.035.17.39.255.81.255 1.26 0 .68-.165 1.29-.495 1.83-.32.53-.755.95-1.305 1.26-.55.31-1.165.465-1.845.465Zm13.658-.15v-8.46l.375.09-3.45 4.215-.06-.18h6.525v1.485h-7.53l-.69-1.35 5.145-6.3h1.245V56h-1.56Zm7.877.105c-.69 0-1.315-.155-1.875-.465a3.956 3.956 0 0 1-1.395-1.365l.9-1.005c.47.52.88.875 1.23 1.065.35.19.73.285 1.14.285.41 0 .78-.09 1.11-.27.33-.18.59-.425.78-.735.2-.31.3-.655.3-1.035 0-.4-.095-.755-.285-1.065-.18-.32-.425-.57-.735-.75-.31-.19-.66-.285-1.05-.285-.19 0-.37.015-.54.045-.17.02-.375.075-.615.165-.24.09-.555.23-.945.42l-.855-1.155.615-4.455h5.67V47h-4.65l.315-.285-.495 3.33-.375-.435c.1-.1.27-.195.51-.285.24-.1.505-.18.795-.24.3-.07.585-.105.855-.105.64 0 1.21.15 1.71.45.51.29.91.695 1.2 1.215.3.52.45 1.115.45 1.785 0 .69-.165 1.315-.495 1.875-.33.55-.78.99-1.35 1.32-.57.32-1.21.48-1.92.48Zm8.915-.105c-.52 0-1.005-.09-1.455-.27a3.68 3.68 0 0 1-1.155-.78c-.32-.33-.575-.72-.765-1.17-.18-.45-.27-.945-.27-1.485 0-.36.065-.78.195-1.26.14-.48.34-1.005.6-1.575.27-.57.6-1.18.99-1.83l1.365-2.31h1.575l.06.15-1.65 2.775c-.3.51-.57.995-.81 1.455-.23.46-.425.895-.585 1.305-.16.4-.28.765-.36 1.095l-.36-1.545c.25-.41.53-.755.84-1.035.31-.28.645-.49 1.005-.63.36-.15.745-.225 1.155-.225.58 0 1.11.16 1.59.48.49.31.88.725 1.17 1.245.3.52.45 1.09.45 1.71 0 .75-.155 1.42-.465 2.01-.3.58-.72 1.04-1.26 1.38-.54.34-1.16.51-1.86.51Zm0-1.5c.39 0 .735-.09 1.035-.27.31-.19.55-.45.72-.78.18-.34.27-.725.27-1.155 0-.37-.09-.715-.27-1.035-.18-.33-.42-.595-.72-.795-.3-.2-.635-.3-1.005-.3-.41 0-.775.095-1.095.285-.32.19-.57.445-.75.765-.18.32-.27.675-.27 1.065 0 .42.09.8.27 1.14.18.33.425.595.735.795.31.19.67.285 1.08.285Zm5.785 1.5 4.35-9.48.18.48h-5.31v-1.5h6.495l.21 1.035L157.672 56h-1.74Zm10.492.045c-.65 0-1.245-.135-1.785-.405-.53-.28-.955-.65-1.275-1.11a2.62 2.62 0 0 1-.48-1.53c0-.31.04-.6.12-.87.09-.28.22-.535.39-.765.18-.23.395-.44.645-.63s.54-.36.87-.51l-.09.315c-.35-.13-.65-.3-.9-.51-.25-.22-.445-.47-.585-.75a2.146 2.146 0 0 1-.195-.915c0-.53.145-1.01.435-1.44.3-.43.695-.775 1.185-1.035.5-.26 1.055-.39 1.665-.39.61 0 1.16.13 1.65.39.5.26.895.605 1.185 1.035.3.43.45.91.45 1.44 0 .33-.065.63-.195.9s-.32.515-.57.735c-.25.21-.56.39-.93.54l-.045-.255c.4.16.75.38 1.05.66.3.28.535.6.705.96.17.35.255.715.255 1.095 0 .57-.16 1.085-.48 1.545-.32.46-.75.825-1.29 1.095-.53.27-1.125.405-1.785.405Zm0-1.5c.37 0 .7-.07.99-.21.3-.14.535-.33.705-.57.17-.24.255-.515.255-.825 0-.33-.085-.62-.255-.87a1.764 1.764 0 0 0-.705-.615c-.29-.15-.62-.225-.99-.225s-.7.075-.99.225c-.29.15-.52.355-.69.615-.17.25-.255.54-.255.87 0 .3.085.57.255.81.17.24.4.435.69.585.29.14.62.21.99.21Zm0-4.755c.32 0 .605-.06.855-.18.26-.12.46-.28.6-.48.15-.21.225-.45.225-.72 0-.27-.075-.51-.225-.72a1.41 1.41 0 0 0-.6-.495 1.826 1.826 0 0 0-.855-.195c-.32 0-.61.065-.87.195-.25.12-.45.285-.6.495-.14.21-.21.45-.21.72 0 .27.07.51.21.72.15.2.35.36.6.48.26.12.55.18.87.18ZM178.4 56l-.06-.15 3.12-6.63.045 1.245c-.23.39-.5.73-.81 1.02a3.51 3.51 0 0 1-1.005.645c-.36.15-.725.225-1.095.225-.57 0-1.095-.15-1.575-.45-.48-.3-.865-.7-1.155-1.2a3.202 3.202 0 0 1-.435-1.635c0-.71.16-1.345.48-1.905a3.6 3.6 0 0 1 1.305-1.35 3.624 3.624 0 0 1 1.875-.495c.5 0 .97.09 1.41.27.44.18.825.435 1.155.765.33.32.59.695.78 1.125.19.42.285.87.285 1.35 0 .25-.025.52-.075.81-.05.28-.135.6-.255.96-.11.35-.26.755-.45 1.215-.19.45-.425.975-.705 1.575L179.99 56h-1.59Zm.54-5.145c.39 0 .74-.085 1.05-.255a1.95 1.95 0 0 0 .99-1.71c0-.39-.085-.74-.255-1.05-.17-.32-.41-.57-.72-.75-.3-.18-.645-.27-1.035-.27-.36 0-.68.09-.96.27-.28.17-.505.41-.675.72-.16.3-.24.655-.24 1.065 0 .35.08.675.24.975.17.3.395.545.675.735.28.18.59.27.93.27Zm8.846 5.295c-.8 0-1.49-.22-2.07-.66-.57-.44-1.01-1.06-1.32-1.86-.31-.81-.465-1.77-.465-2.88 0-1.11.155-2.065.465-2.865.31-.81.75-1.435 1.32-1.875.58-.44 1.27-.66 2.07-.66.8 0 1.49.22 2.07.66.58.44 1.025 1.065 1.335 1.875.31.8.465 1.755.465 2.865 0 1.11-.155 2.07-.465 2.88-.31.8-.755 1.42-1.335 1.86-.58.44-1.27.66-2.07.66Zm0-1.47c.73 0 1.295-.34 1.695-1.02.4-.69.6-1.66.6-2.91 0-1.25-.2-2.215-.6-2.895-.4-.69-.965-1.035-1.695-1.035-.73 0-1.295.345-1.695 1.035-.4.68-.6 1.645-.6 2.895s.2 2.22.6 2.91c.4.68.965 1.02 1.695 1.02Zm6.277 1.485c-.33 0-.585-.095-.765-.285-.18-.2-.27-.48-.27-.84 0-.33.095-.6.285-.81.19-.21.44-.315.75-.315.33 0 .585.1.765.3.18.19.27.465.27.825 0 .33-.095.6-.285.81-.19.21-.44.315-.75.315Zm3.413 0c-.33 0-.585-.095-.765-.285-.18-.2-.27-.48-.27-.84 0-.33.095-.6.285-.81.19-.21.44-.315.75-.315.33 0 .585.1.765.3.18.19.27.465.27.825 0 .33-.095.6-.285.81-.19.21-.44.315-.75.315Zm3.413 0c-.33 0-.585-.095-.765-.285-.18-.2-.27-.48-.27-.84 0-.33.095-.6.285-.81.19-.21.44-.315.75-.315.33 0 .585.1.765.3.18.19.27.465.27.825 0 .33-.095.6-.285.81-.19.21-.44.315-.75.315Zm-13.402 58.752c.916 3.589 2.418 6.519 4.609 9.06 5.033 5.834 11.453 8.665 19.111 8.1 10.177-.752 17.811-7.865 20.213-16.735.44-1.633.729-3.289.749-4.994.014-1.204.231-1.544.824-1.582.648-.044.851.327.811 1.691-.163 5.168-1.838 9.815-4.942 13.918-4.029 5.331-9.428 8.566-15.993 9.393-13.081 1.643-23.496-6.362-26.698-17.347-.108-.374-.261-.735-.43-1.208-.506.653-.93 1.238-1.394 1.783-.285.333-.689.428-1.042.109-.315-.286-.423-.667-.145-1.055a313.286 313.286 0 0 1 2.581-3.542.606.606 0 0 1 .532-.255c.273.019 2.52 1.599 3.781 2.426.394.259.696.606.401 1.129-.262.467-.692.541-1.293.191-.485-.282-.942-.609-1.671-1.085l-.004.003Zm45.77-11.169c.468-.65.811-1.245 1.279-1.715.217-.217.793-.353 1.004-.214.223.146.396.779.264.997a42.579 42.579 0 0 1-2.387 3.47c-.302.395-.835.316-1.242.054a200.588 200.588 0 0 1-3.374-2.231c-.383-.255-.499-.606-.238-1.014.248-.385.628-.504 1.025-.299.542.282 1.054.629 1.756 1.054-.054-.439-.044-.738-.135-1.003-2.839-8.455-8.638-13.779-17.286-15.572-11.809-2.446-23.004 4.988-26.118 15.834-.532 1.85-.902 3.708-.936 5.633-.02 1.123-.318 1.538-.936 1.453-.549-.075-.763-.432-.705-1.49.275-5.202 1.933-9.914 5.128-14.034 3.971-5.127 9.224-8.202 15.587-9.161 11.863-1.79 22.99 5.324 26.595 16.258.207.633.451 1.252.716 1.98h.003Z"
    />
    <Path
      fill="#AAEEEF"
      d="M223.929 109.518c-.071 7.917-6.332 14.486-14.505 14.469-7.99-.017-14.414-6.311-14.424-14.53-.014-8.09 6.447-14.493 14.485-14.469 8.282.027 14.42 6.753 14.447 14.534l-.003-.004Z"
    />
    <Path
      fill="#00C5CA"
      fill-rule="evenodd"
      d="M210.596 102.673a.596.596 0 0 0-1.193 0v5.965h-5.965a.596.596 0 0 0 0 1.193h5.965v5.965a.596.596 0 1 0 1.193 0v-5.965h5.964a.597.597 0 1 0 0-1.193h-5.964v-5.965Z"
      clip-rule="evenodd"
    />
    <Mask
      id="a"
      width="50"
      height="90"
      x="0"
      y="11"
      //   maskUnits="userSpaceOnUse"
      //   style="mask-type:alpha"
    >
      <Path
        fill="#00C5CA"
        fill-rule="evenodd"
        d="M.202 11.66a1 1 0 0 1 1.4-.196l44.041 33.238c1.532 1.156.714 3.596-1.205 3.596H2.752a1 1 0 0 1 0-2h41.686L.398 13.06a1 1 0 0 1-.196-1.4Z"
        clip-rule="evenodd"
      />
      <Path
        fill="#00C5CA"
        fill-rule="evenodd"
        d="M22.773 46.298h14.263v47.547H22.773V46.298Zm2 2v43.547h10.263V48.298H24.773Zm-23.021-1a1 1 0 0 1 1-1h7.131v47.547H2.752a1 1 0 1 1 0-2h5.131V48.298H2.752a1 1 0 0 1-1-1Z"
        clip-rule="evenodd"
      />
      <Path
        fill="#00C5CA"
        fill-rule="evenodd"
        d="M1.752 92.845a1 1 0 0 1 1-1h43.547a3 3 0 0 1 3 3v3.008a3 3 0 0 1-3 3H2.752a1 1 0 0 1 0-2h43.547a1 1 0 0 0 1-1v-3.008a1 1 0 0 0-1-1H2.752a1 1 0 0 1-1-1Z"
        clip-rule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#00C5CA" d="M2.752-.875h50.803v108.613H2.752V-.875Z" />
    </G>
  </Svg>
);

export default IBANCard;
