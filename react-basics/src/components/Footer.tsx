type FooterProps = {
    year?: number;
    companyName?: string;
};

// A component can also be a function returning a JSX
function Footer({ year, companyName }: FooterProps) {
    // const { year, companyName } = props; // object destructuring

    return (
        // .text-center
        <div className='text-center'>
            &copy; {year} - All rights reserved by {companyName}.
        </div>
    );
}

Footer.defaultProps = {
    companyName: 'ACME Enterprises',
    year: new Date().getFullYear(),
};

export default Footer;
// import Footer from './components/Footer'
