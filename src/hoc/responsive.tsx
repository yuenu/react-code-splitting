import MediaQuery from "react-responsive";

const MOBILE_QUERY = "(max-width: 767px)";

export const isMobile = () =>
  window.matchMedia ? window.matchMedia(MOBILE_QUERY).matches : false;

type ScreenProps = {
  Mobile: React.ElementType;
  Desktop: React.ElementType;
};

const Screen =
  ({ Mobile, Desktop }: ScreenProps) =>
  ({ ...rest }) =>
    (
      <MediaQuery query={MOBILE_QUERY}>
        {(matches) => (matches ? <Mobile {...rest} /> : <Desktop {...rest} />)}
      </MediaQuery>
    );

export default Screen;
