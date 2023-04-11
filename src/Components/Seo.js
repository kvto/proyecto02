import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
const Seo = ({tittle, description}) => {
    return ( 
        <Helmet>
            <tittle>{tittle}</tittle>
            <meta name="description">{description}</meta>
        </Helmet>
     );
}

Seo.propTypes = {
    tittle: PropTypes.string,
    description: PropTypes.string,
}
 
export default Seo;