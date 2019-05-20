import Header from './Header'
import Footer from './Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Layout = ({children}) => (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
)

export default Layout