// import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';


type Props = {
  children: JSX.Element | JSX.Element[];
};

const Main = ({ children }: Props) => (
  <HelmetProvider>
    <div>
      {children}
    </div>
  </HelmetProvider>
);

export default Main;
